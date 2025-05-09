import { NavLink } from "react-router";
import { useState } from 'react'
import Button from 'ui/button'

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
    <div className="flex flex-col justify-between items-center h-screen bg-stone-900">
      <h1 className="text-white text-2xl mt-4">Counter</h1>
      <NavLink className="text-lg text-blue-300 hover:text-blue-200" to="/">Return to Home</NavLink>
      <div className="flex flex-col flex-grow items-center justify-center">
        <p className="text-white text-5xl my-5">{count}</p>
        <div className="flex text-white space-x-2">
            <Button className="bg-red-700 active:bg-red-600 ring-red-400" onClick={decreaseCount}>-</Button>
            <Button className="bg-blue-800 active:bg-blue-600 ring-blue-400" onClick={increaseCount}>+</Button>
          </div>
          <Button className="bg-gray-700 active:bg-gray-600 ring-gray-400 text-white mt-4" onClick={resetCount}>Reset</Button>
        </div>
    </div>
    </>
  )
}

export default Counter
