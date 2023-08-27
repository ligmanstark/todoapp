import React, { useState } from 'react';
import { TODO } from './types/TODO';
import { TodoList } from './components/TodoList';
import { NewTodoForm } from './components/NewTodoForm';
import * as S from './style/style';

function App() {
  const [todos, setTodos] = useState<TODO[]>([]);
  const handleCreateNewTodo = (text: string) => {
    const newTodo: TODO = {
      id: new Date().toString(),
      title: text,
      complated: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const handleRemoveTodo = (id: TODO['id']) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id: TODO['id']) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }
        return {
          ...todo,
          complated: !todo.complated,
        };
      })
    );
  };
  return (
    <S.Main className="App">
      <h1>Привет, Данил!</h1>
      <h3>Я твой личный Todo-менеджер</h3>
      <NewTodoForm handleCreateNewTodo={handleCreateNewTodo} />
      <TodoList
        list={todos}
        handleRemoveTodo={handleRemoveTodo}
        handleToggleTodo={handleToggleTodo}
      />
    </S.Main>
  );
}

export default App;
