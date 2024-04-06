import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout(){
    const activeStyle = {
        color:"black",
        fontWeight:"bold",
        textDecoration:"underline"
    }
    return(
        <>
            <nav className="host-nav">
                <NavLink style={({isActive})=> isActive ? activeStyle : null} to="/host" end>Dashboard</NavLink>
                <NavLink style={({isActive})=> isActive ? activeStyle : null} to="/host/income">Income</NavLink>
                <NavLink style={({isActive})=> isActive ? activeStyle : null} to="/host/vans">Vans</NavLink>
                <NavLink style={({isActive})=> isActive ? activeStyle : null} to="/host/reviews">Reviews</NavLink>
            </nav>
            <Outlet />
        </>
    )
}