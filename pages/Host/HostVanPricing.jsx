import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanPricing() {
    const { currentVan } = useOutletContext()
    return (
        <h3 className="host-van-price">${currentVan.price}<span style={{fontSize:"14px",color:"#4D4D4D"}}>/day</span></h3>
    )
}