import React from "react"
import {NavLink,Link} from "react-router-dom"
import { RxAvatar } from "react-icons/rx";

export default function Header(){
    const activeStyle = {
      fontWeight: "bold",
      textDecoration:"underline",
      color:"black"
    }
    function fakeLogOut(){
      localStorage.removeItem("loggedin")
      window.location.reload(false)
    }
    return(
        <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav className="header-nav">
          <NavLink style={({isActive})=> isActive ? activeStyle : null} to="/host" end>Host</NavLink>
          <NavLink style={({isActive})=> isActive ? activeStyle : null} to="/about">About</NavLink>
          <NavLink style={({isActive})=> isActive ? activeStyle : null} to="/vans">Vans</NavLink>
          <Link className="avatar-header-icon" to="/login"><RxAvatar/></Link>
          <button style={{border:"none",backgroundColor:"inherit",fontFamily:"inherit",cursor:"pointer"}} onClick={fakeLogOut}>Log out</button>
        </nav>
        </header>
    )
}