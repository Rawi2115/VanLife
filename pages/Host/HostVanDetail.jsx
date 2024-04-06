import React, { useState } from "react"
import {useParams,Link,Outlet, NavLink} from "react-router-dom"
export default function HostVanDetail() {
    const params = useParams()
    const [van,setVan] = useState(null)
    React.useEffect(()=>{
        async function fetchById(){
            const res = await fetch(`/api/host/vans/${params.id}`)
            const data = await res.json()
            setVan(data.vans)
        }
        fetchById()
    },[params.id])

    const activeStyle = {
        color:"black",
        fontWeight:"bold",
        textDecoration:"underline"
    }

    if(!van){
        return <h2>Loading...</h2>
    }
    
    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={van.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${van.type}`}
                        >
                            {van.type}
                        </i>
                        <h3>{van.name}</h3>
                        <h4>${van.price}/day</h4>
                    </div>
                </div>
                <nav className="host-van-detail-nav">
                    <NavLink to="." end style={({isActive})=> isActive ? activeStyle : null} >DashBoard</NavLink>
                    <NavLink to="./pricing" end style={({isActive})=> isActive ? activeStyle : null} >Pricing</NavLink>
                    <NavLink to="./photos" end style={({isActive})=> isActive ? activeStyle : null} >Photos</NavLink>
                </nav>
                <Outlet context={van} />
            </div>
        </section>
    )
}