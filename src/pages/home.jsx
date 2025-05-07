import { NavLink } from "react-router";
import './home.css'

function Home() {

  return (
    <>
    <div className="flex flex-col justify-between items-center h-screen bg-black">
      <h1 className="text-white text-2xl mt-4">Home</h1>
      <div className="flex-grow flex items-center justify-center">
        <NavLink className="text-lg text-blue-300 hover:text-blue-200" to="/counter">Counter</NavLink>
      </div>
    </div>
    </>
  )
}

export default Home
