import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useTaskCollection from './useTaskCollection';
import { ColumnType } from '../utils/enums';
import { ITask } from '../utils/types';
import { chakraRandomColor } from '../utils/helpers';

const MAX_TASKS_PER_COLUMN = 100;

function useColumnTasks(column: ColumnType) {
  const [tasks, setTasks] = useTaskCollection();

  const addEmptyTask = useCallback(() => {
    setTasks((allTasks) => {
      const columnTasks = allTasks[column];
      if (columnTasks.length > MAX_TASKS_PER_COLUMN) {
        return allTasks;
      }

      const newTask: ITask = {
        id: uuidv4(),
        title: ``,
        color: chakraRandomColor('.300'),
        column,
      };

      return {
        ...allTasks,
        [column]: [newTask, ...columnTasks],
      };
    });
  }, [column, setTasks]);

  const updateTask = useCallback(
    (id: ITask['id'], updatedTask: Omit<Partial<ITask>, 'id'>) => {
      setTasks((tasks) => {
        const columnTasks = tasks[column];
        return {
          ...tasks,
          [column]: columnTasks.map((task) =>
            task.id === id ? { ...task, ...updatedTask } : task
          ),
        };
      });
    },
    [column, setTasks]
  );

  const deleteTask = useCallback(
    (id: ITask['id']) => {
      setTasks((tasks) => {
        const columnTasks = tasks[column];
        return {
          ...tasks,
          [column]: columnTasks.filter((task) => task.id !== id),
        };
      });
    },
    [column, setTasks]
  );

  const dropTaskFrom = useCallback(
    (from: ColumnType, id: ITask['id']) => {
      setTasks((tasks) => {
        const fromColumnTasks = tasks[from];
        const toColumnTasks = tasks[column];
        const draggedTask = fromColumnTasks.find((task) => task.id === id);

        if (!draggedTask) return tasks;
        return {
          ...tasks,
          [from]: fromColumnTasks.filter((task) => task.id !== id),
          [column]: [{ ...draggedTask, column }, ...toColumnTasks],
        };
      });
    },
    [column, setTasks]
  );

  return {
    tasks: tasks[column],
    addEmptyTask,
    updateTask,
    deleteTask,
    dropTaskFrom,
  };
}

export default useColumnTasks;
