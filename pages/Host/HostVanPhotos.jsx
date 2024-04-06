import React from "react"
import {useOutletContext} from "react-router-dom"
export default function HostVanPhotos() {
    const van = useOutletContext()
    
    return (
        <img style={{maxWidth:"65px"}} src={van.imageUrl} alt={van.name} />
    )
}