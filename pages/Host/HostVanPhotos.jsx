import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos() {
    const { currentVan } = useOutletContext()
    return (
        <img style={{maxWidth:"75px"}} src={currentVan.imageUrl} className="host-van-detail-image" />
    )
}