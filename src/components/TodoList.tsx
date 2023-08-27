/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { TODO } from '../types/TODO';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  list: TODO[];
  handleRemoveTodo: (id: TODO['id']) => void;
  handleToggleTodo: (id: TODO['id']) => void;
}

function TodoList(props: TodoListProps) {
  const { list, handleRemoveTodo, handleToggleTodo } = props;
  return (
    <div>
      <ul>
        {list.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            handleToggleTodo={handleToggleTodo}
            handleRemoveTodo={handleRemoveTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export { TodoList };
