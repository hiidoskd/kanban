import { useDrop } from 'react-dnd';
import { ColumnType, ItemType } from '../utils/enums';
import { DraggableItem, ITask } from '../utils/types';

function useColumnDrop(
  column: ColumnType,
  handleDrop: (fromColumn: ColumnType, taskId: ITask['id']) => void
) {
  const [{ isOver }, dropRef] = useDrop<DraggableItem, void, { isOver: boolean }>({
    accept: ItemType.TASK,
    drop: (dragItem) => {
      if (!dragItem || dragItem.from === column) {
        return;
      }
      handleDrop(dragItem.from, dragItem.id);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return {
    isOver,
    dropRef,
  };
}

export default useColumnDrop;
