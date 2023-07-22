import { Textarea, TextareaProps } from '@chakra-ui/react';
import React from 'react';
import ReactTextareaAutosize from 'react-textarea-autosize';

export const TextareaAutosize = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    return <Textarea as={ReactTextareaAutosize} minH="unset" ref={ref} {...props} />;
  }
);
