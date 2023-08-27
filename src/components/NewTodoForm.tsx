import React, { MutableRefObject, useRef } from 'react';
import * as S from '../style/style';

interface TodoFormProps {
  handleCreateNewTodo: (text: string) => void;
}
function NewTodoForm(props: TodoFormProps) {
  const { handleCreateNewTodo } = props;
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const AddTodo = () => {
    if (inputRef) {
      if (inputRef.current.value === '') {
        alert('тут пока пусто');
      } else {
        handleCreateNewTodo(inputRef.current.value);
        inputRef.current.value = '';
      }
    }
  };
  return (
    <S.TodoDiv>
      <input type="text" placeholder="new todo" ref={inputRef} />
      <button type="button" onClick={AddTodo}>
        Add Todo
      </button>
    </S.TodoDiv>
  );
}
export { NewTodoForm };
