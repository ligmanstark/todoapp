import React from 'react';
import { TODO } from '../types/TODO';

interface TodoItemProps extends TODO {
  handleRemoveTodo: (id: TODO['id']) => void;
  handleToggleTodo: (id: TODO['id']) => void;
}

function TodoItem(props: TodoItemProps) {
  const { id, title, complated, handleRemoveTodo, handleToggleTodo } = props;
  return (
    <li id={id}>
      <input
        type="checkbox"
        checked={complated}
        onChange={() => handleToggleTodo(id)}
      />
      <span>{title}</span>
      <button type="button" onClick={() => handleRemoveTodo(id)}>
        X
      </button>
    </li>
  );
}

export { TodoItem };
