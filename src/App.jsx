import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './team'
import User from './user'
import Friend from './friend'

function App() {
  const [count, setCount] = useState(0)
  const handleClick=() =>{
    alert('button 2 click')
  }
  const addToFive=(num) =>{
    alert(num + 5);
  }

  return (
    <>
    <Friend></Friend>
    <User></User>
       <Team></Team>
      <h1>Vite + React</h1>
      <Counter></Counter>
      <button >click me</button>
      <button onClick={handleClick}>click me</button>
      <button onClick={() => alert('third click')}>third</button>
      <button onClick={() =>addToFive(5)}>four</button>
       
    </>
  )
}

export default App
