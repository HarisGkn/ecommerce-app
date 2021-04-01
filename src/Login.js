import React,{useState} from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import logo from './img/logo.png'
import { auth } from './firebase'

function Login(){

    const history = useHistory()
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const loginUser = event =>{
        event.preventDefault()
        auth.signInWithEmailAndPassword(userEmail,userPassword)
        .then((auth) => {
            history.push('/')
        })
        .catch(e => alert(e.message))
    }

    const signUpUser = event => {
        event.preventDefault()
        auth.createUserWithEmailAndPassword(userEmail, userPassword)
        .then(auth => {
            history.push('/');
        }).catch(e => alert(e.message))
    }

    return(
        <div className="login">
            <Link>
                <img className="header__logo" src={logo} alt="logo" />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={userEmail} onChange={event => setUserEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={userPassword} onChange={event => setUserPassword(event.target.value)} type="password"/>
                    <button onClick={loginUser} type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p>By Signing-in, you agree to terms and conditions etc.</p>
                <button onClick={signUpUser} className="login__registerButton">Don't have an account?Sign up</button>
            </div>
        </div>
    )

}

export default Login