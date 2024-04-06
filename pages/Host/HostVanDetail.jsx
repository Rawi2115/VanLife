import React, { useState } from "react"
import {useParams} from "react-router-dom"
export default function HostVanDetail() {
    const params = useParams()
    const [van,setVan] = useState(null)
    React.useEffect(()=>{
        async function fetchById(){
            const res = await fetch(`/api/host/vans/${params.id}`)
            const data = await res.json()
            console.log(data.vans)
            setVan(data.vans)
        }
        fetchById()
    },[params.id])

    return (
        <>
            {van ? 
            <div>
                <img src={van.imageUrl} alt={`An image of a ${van.name}`} />
                <h3>{van.name}</h3>
                <p>{van.price}</p>
            </div>
            : <h1>Loading...</h1>}
        </>
    )
}