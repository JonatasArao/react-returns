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
    <div className="flex flex-col justify-between items-center h-screen bg-black">
      <h1 className="text-white text-2xl mt-4">Counter</h1>
      <NavLink className="text-lg text-blue-300 hover:text-blue-200" to="/">Return to Home</NavLink>
      <div className="flex flex-col flex-grow items-center justify-center">
        <p className="text-white text-5xl my-5">{count}</p>
        <div className="flex text-white space-x-2">
          <button className="text-xl rounded-xl bg-red-700 p-2 w-12 h-12 flex items-center justify-center active:bg-red-600" onClick={decreaseCount}>-</button>
          <button className="text-xl rounded-xl bg-blue-800 p-2 w-12 h-12 flex items-center justify-center active:bg-blue-600" onClick={increaseCount}>+</button>
        </div>
        <button className="text-white rounded-xl mt-4 p-2 w-24 h-12 bg-gray-700 flex items-center justify-center active:bg-gray-600" onClick={resetCount}>Reset</button>
      </div>
    </div>
    </>
  )
}

export default Counter
