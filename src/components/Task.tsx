import { DeleteIcon } from '@chakra-ui/icons';
import { Box, IconButton, Textarea } from '@chakra-ui/react';
import { ITask } from '../utils/types';

interface TaskProps {
  index: number;
  task: ITask;
}
const Task = ({ index, task }: TaskProps) => {
  return (
    <Box
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
      />
      <Textarea
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
      />
    </Box>
  );
};
export default Task;
