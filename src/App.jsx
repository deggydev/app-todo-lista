import { useState } from 'react';
import './App.css';
import { Icon } from "@iconify/react";
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import TodoAddItem from './components/TodoAddItem';
import TodoProgressBar from './components/TodoProgressBar';

const defaultTodos = [
  {id: 1, actividad: 'Aprender React', isComplete: true, fechaCreacion: new Date()},
  {id: 2, actividad: 'Ir a las clases de Senati', isComplete: false, fechaCreacion: new Date()},
  {id: 3, actividad: 'Hacer ejercicio', isComplete: false, fechaCreacion: new Date()},
  {id: 4, actividad: 'Ver el  curso de Arrays', isComplete: false, fechaCreacion: new Date()},
  {id: 5, actividad: 'Jugar LOL', isComplete: false, fechaCreacion: new Date()}
]

function App() {
  const [allTodos, setAllTodos] = useState(defaultTodos);
  const completedTodos = allTodos.filter(todo => todo.isComplete).length;
  const totalTodos = allTodos.length;

  const [searchValue, setSearchValue] = useState('');
  const filteredTodos = allTodos.filter(
    todo => (
      todo.actividad.toLowerCase().includes(searchValue.toLowerCase())
    )
  );

  const handleToggleComplete = (todo) => {
      todo.isComplete = !todo.isComplete;
      setAllTodos([...allTodos]);
  }

  const handleDeleteTodo = (todo) => {
      console.log(todo);
      setAllTodos(allTodos.filter(t => t.id !== todo.id));
  }

  return (
    <>
      <h1>Todo Lista <Icon icon="mdi:heart" color="red"  /> </h1>
      <TodoProgressBar total={totalTodos} complete={completedTodos} />
      <TodoCounter total={totalTodos} complete={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList >
        {filteredTodos.map(item => {
          return <TodoItem 
            key={item.id} 
            isComplete={item.isComplete} 
            actividad={item.actividad} 
            fechaCreacion={item.fechaCreacion}
            onToggleComplete={() => handleToggleComplete(item)}
            onDeleteTodo={() => handleDeleteTodo(item)}
          />
        })}
      </TodoList>
      <TodoAddItem />
    </>
  )
}


export default App
