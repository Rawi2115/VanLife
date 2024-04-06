import React from "react"
import {useOutletContext} from "react-router-dom"
export default function HostVanInfo() {
    const van = useOutletContext()

    return (
        <section>
            <p style={{fontWeight:"bold"}}>Name: <span style={{fontWeight:"400"}}>{van.name}</span></p>
            <p style={{fontWeight:"bold"}}>Category: <span style={{fontWeight:"400"}}>{van.type}</span></p>
            <p style={{fontWeight:"bold",maxWidth:"600px"}}>Description: <span style={{fontWeight:"400"}}>{van.description}</span></p>
            <p style={{fontWeight:"bold"}}>Visibility: <span style={{fontWeight:"400"}}>Public</span></p>
        </section>
    )
}