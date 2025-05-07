import { NavLink } from "react-router";
import './home.css'

function Home() {

  return (
    <>
      <h1>Home</h1>
      <NavLink to="/counter">Counter</NavLink>
    </>
  )
}

export default Home
