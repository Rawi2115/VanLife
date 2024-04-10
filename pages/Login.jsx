import React from "react";
import {useNavigate,useLocation} from "react-router-dom"
import { loginUser } from "../api";
export default function Login(){
    const [loginFormData,setLoginFormData] = React.useState({email:"",password:""})
    const [status,setStatus] = React.useState("idle")
    const [error,setError] = React.useState(null)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from || "/host"

    function handleSubmit(e){
        e.preventDefault()
        setStatus("submitting")
        loginUser(loginFormData)
        .then(data =>{
            setError(null)
            localStorage.setItem("loggedin", true)
            navigate(from,{replace:true})
        }).catch(err => setError(err))
        .finally(()=> setStatus("idle"))
    }

    function handleChange(e){
        const {name,value} = e.target
        setLoginFormData(prev=>({
            ...prev,
            [name]:value
        }))
    }

    return (
        <div className="login-container">
            {location.state?.message && <h3 className="login-status"> {location.state.message} </h3> }
            <h1>Sign in to your account</h1>
            {error?.message && <h3 className="login-status">{error.message}</h3>}
            <form onSubmit={handleSubmit} className="login-form">
                <input onChange={handleChange} placeholder="Email Address" type="email" value={loginFormData.email} name="email" id="email" />
                <input onChange={handleChange} placeholder="Password" type="password" value={loginFormData.password} name="password" id="password" />
                <button disabled={status === "submitting" ? true : false}>{status === "submitting" ? "Logging in" : "Log in"}</button>
            </form>
        </div>
    )
}