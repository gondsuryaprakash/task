import React, { useState } from 'react'
import { connect } from 'react-redux'
import loggedInData from '../data/login.json'
import { loggedInAction } from '../redux/action'
import {useHistory} from 'react-router-dom'
import M from 'materialize-css'

const Login = (props) => {
    const history=useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    };

    const validateEmailPass = () => {
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
        {
           return  M.toast({html: 'Invalid Email',classes:"#c62828 red darken-3"})
        }
        loggedInData.map(el => {

            if (el.username === email && el.password === password) {
                localStorage.setItem("user",JSON.stringify({email}))
                //  dispatch(loggedInAction)
                props.loginAction(true) 
                //Redirect to DashBoard
                history.push('/')

            }
            else {
                console.log("Invalid UserName or Password");
                history.push('/login')
            }
        })
    }
    return (
        <div>
            <div>
                <h2>Login</h2>
            </div>
            <div className="container">
                <input placeholder="Email" type="text" onChange={(e) => { handleEmail(e) }}></input>
                <input placeholder="Password" type="password" onChange={(e) => { handlePassword(e) }}></input>
                <button onClick={validateEmailPass}>Submit</button>
            </div>
        </div>
    )
}
const mapStateToDispatch = (dispatch) => {
    return {
        loginAction: (payload) => { 
              dispatch(loggedInAction(payload)) 
        }
}
}
export default connect(null, mapStateToDispatch)(Login)
