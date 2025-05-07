import { NavLink } from "react-router";
import { useState } from 'react'
import './counter.css'

function Counter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <>
      <NavLink to="/">Return to Home</NavLink>
      <h1>Counter</h1>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
      <p>Result: {count}</p>
      <button onClick={resetCount}>Reset</button>
    </>
  )
}

export default Counter
