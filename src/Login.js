import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import logo from './img/logo.png'

function Login(){

    return(
        <div className="login">
            <Link>
                <img className="header__logo" src={logo} alt="logo" />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email"/>
                    <h5>Password</h5>
                    <input type="password"/>
                    <button type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p>By Signing-in, you agree to terms and conditions etc.</p>
                <button className="login__registerButton">Don't have an account?Sign up</button>
            </div>
        </div>
    )

}

export default Login