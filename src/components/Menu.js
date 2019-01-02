import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <NavLink to="/">Main page</NavLink>&emsp;
      <NavLink to="/aboutme">About me</NavLink>&emsp;
      <NavLink to="/tipandtrick">Usefull things</NavLink>&emsp;
      <NavLink to="/calculator">Calculator</NavLink>&emsp;
    </div>
  )
}

export default Menu