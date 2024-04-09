import React from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function Vans() {
    const [searchParams,setSearchParams] = useSearchParams()
    const [vans, setVans] = React.useState([])
    
    const typeFilter = searchParams.get("type")

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    const displayedVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans

    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={`${van.id}`}>
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter">
                <button className={`van-filter-simple ${typeFilter == "simple" ? "selected":""}`}
                 onClick={()=> handleFilterChange("type", "simple")}>Simple</button>
                <button className={`van-filter-luxury ${typeFilter == "luxury" ? "selected":""}`}
                 onClick={()=> handleFilterChange("type", "luxury")}>Luxury</button>
                <button className={`van-filter-rugged ${typeFilter == "rugged" ? "selected":""}`}
                 onClick={()=> handleFilterChange("type", "rugged")}>Rugged</button>
                {typeFilter && <button className="van-filter-clear" onClick={()=> handleFilterChange("type", null)}>Clear Filter</button>}
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}