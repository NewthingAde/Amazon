import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'; 
import { auth } from './firebase'; 

function Login() {
        const history = useHistory();
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        
         // Firebase Signin
        const signin = e=> {
            e.preventDefault();
            auth.signInWithEmailAndPassword(email, password).then(auth =>{
                history.push('/')
            })
            .catch(error => alert(error.message))
        }

         // Firebase registration

        const register = e=> {
            e.preventDefault();
            auth.createUserWithEmailAndPassword(email, password).then((auth) => {
                //it sucessfully create a new user with email and password
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
        } 

    return (
        <div className="login">
            <Link to="/">
            <img className="login__image"
                src={process.env.PUBLIC_URL + 'images/amazon.png'}/>
            </Link>
            <div className="logincontainer">
                <h1>Sign-In</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange= {e => setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password"  value={password} onChange= {e => setPassword(e.target.value)}/>
                <button type='submit' onClick={signin} className="login_signin">Sign In</button> 
            </form>
            <p>
                By signing you agree to AMAZON'S CLONE PAGE condition of use & sales.
                please see our Privacy Notice, our Cookies Notice and our Interest-based Ads Notice.
            </p>
            <button type='submit' onClick={register} className=" ">Create your Amazon Clone Account</button> 
            </div>
        </div>
    )}

export default Login
