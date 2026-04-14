import { useState } from 'react'
import './App.css'
import { Icon } from "@iconify/react";
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import TodoAddItem from './components/TodoAddItem';

const defaultTodos = [
  {id: 1, actividad: 'Aprender React', isComplete: false, fechaCreacion: new Date()},
  {id: 2, actividad: 'Ir a las clases de Senati', isComplete: false, fechaCreacion: new Date()},
  {id: 3, actividad: 'Hacer ejercicio', isComplete: false, fechaCreacion: new Date()}
]

function App() {
  return (
    <>
      <h1>Todo Lista <Icon icon="mdi:heart" color="red"  /> </h1>

      <TodoCounter total={10} complete={5} />
      <TodoSearch />
      <TodoList >
        {defaultTodos.map(item => {
          return <TodoItem key={item.id} isComplete={item.isComplete} actividad={item.actividad} fechaCreacion={item.fechaCreacion} />
        })}
      </TodoList>
      <TodoAddItem />
    </>
  )
}


export default App
