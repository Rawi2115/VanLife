import React from "react"
import {useOutletContext} from "react-router-dom"
export default function HostVanPricing() {
    const van = useOutletContext()
    return (
        <section>
            <h3 style={{fontWeight:"bold"}}>$60<span style={{fontWeight:"400",fontSize:"16px"}}>/day</span></h3>
        </section>
    )
}