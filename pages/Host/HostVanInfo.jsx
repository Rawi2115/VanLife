import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {
    const { currentVan } = useOutletContext()
    
    return (
        <section className="host-van-detail-info">
            <h4>Name: <span style={{fontWeight:"400"}}>{currentVan.name}</span></h4>
            <h4>Category: <span style={{fontWeight:"400"}}>{currentVan.type}</span></h4>
            <h4 style={{maxWidth:"600px"}}>Description: <span style={{fontWeight:"400"}}>{currentVan.description}</span></h4>
            <h4>Visibility: <span style={{fontWeight:"400"}}>Public</span></h4>
        </section>
    )
}