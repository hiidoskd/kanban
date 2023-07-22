import { v4 as uuidv4 } from 'uuid';
import { ColumnType } from '../utils/enums';
import { ITask } from '../utils/types';
import { useLocalStorage } from 'usehooks-ts';

function useTaskCollection() {
  return useLocalStorage<{
    [key in ColumnType]: ITask[];
  }>('tasks', {
    Todo: [
      {
        id: uuidv4(),
        column: ColumnType.TO_DO,
        title: 'Task 1',
        color: 'blue.300',
      },
    ],
    'In progress': [
      {
        id: uuidv4(),
        column: ColumnType.IN_PROGRESS,
        title: 'Task 1',
        color: 'yellow.300',
      },
    ],
    Blocked: [
      {
        id: uuidv4(),
        column: ColumnType.BLOCKED,
        title: 'Task 1',
        color: 'red.300',
      },
    ],
    Completed: [
      {
        id: uuidv4(),
        column: ColumnType.COMPLETED,
        title: 'Task 1',
        color: 'green.300',
      },
    ],
  });
}

export default useTaskCollection;
