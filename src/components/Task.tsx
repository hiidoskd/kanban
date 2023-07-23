import { DeleteIcon } from '@chakra-ui/icons';
import { Box, IconButton } from '@chakra-ui/react';
import { ITask } from '../utils/types';
import { TextareaAutosize } from './TextareaAutosize';
import { useTaskDragAndDrop } from '../hooks/useTaskDragAndDrop';

interface TaskProps {
  index: number;
  task: ITask;
  onUpdate: (id: ITask['id'], updatedTask: ITask) => void;
  onDelete: (id: ITask['id']) => void;
}
const Task = ({ index, task, onUpdate: onUpdate, onDelete }: TaskProps) => {
  const { ref, isDragging } = useTaskDragAndDrop<HTMLDivElement>({ task, index });

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTitle = e.target.value;
    onUpdate(task.id, { ...task, title: newTitle });
  };

  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  return (
    <Box
      ref={ref}
      as="div"
      role="group"
      position="relative"
      rounded="lg"
      w={200}
      pl={3}
      pr={7}
      boxShadow="md"
      cursor="grab"
      bgColor={task.color}
      flexGrow={0}
      flexShrink={0}
      opacity={isDragging ? 0.5 : 1}
    >
      <IconButton
        position="absolute"
        top={0}
        right={0}
        zIndex={10}
        aria-label="delete-task"
        size="md"
        colorScheme="solid"
        color="gray.700"
        icon={<DeleteIcon />}
        onClick={handleDeleteClick}
      />
      <TextareaAutosize
        value={task.title}
        fontWeight="semibold"
        cursor="inherit"
        border="none"
        p={0}
        resize="none"
        minH={70}
        maxH={200}
        focusBorderColor="none"
        outlineOffset={0}
        color="gray.700"
        variant="unstyled"
        onChange={handleTitleChange}
      />
    </Box>
  );
};
export default Task;
