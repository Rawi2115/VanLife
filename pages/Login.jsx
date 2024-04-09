import React from "react";
import {useNavigate} from "react-router-dom"

export default function Login(){
    const [loginFormData,setLoginFormData] = React.useState({email:"",password:""})

    function handleSubmit(e){
        e.preventDefault()
        console.log(loginFormData)
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
            <h1>Sign in to your account</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input onChange={handleChange} placeholder="Email Address" type="email" value={loginFormData.email} name="email" id="email" />
                <input onChange={handleChange} placeholder="Password" type="password" value={loginFormData.password} name="password" id="password" />
                <button>Log in</button>
            </form>
        </div>
    )
}