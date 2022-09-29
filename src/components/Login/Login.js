import React from 'react'
import './Login.css'

const Login = ({action}) => {

    return(
        <header>
            <button className='Login' onClick={action}>Login with Metamask</button>
        </header>
    )
}

export default Login;