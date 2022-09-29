import React from 'react'
import './Login.css'

const Login = ({action}) => {

    return(
        <header className='animate__animated animate__fadeInUp'>
            <button className='Login' onClick={action}>Login with Metamask</button>
        </header>
    )
}

export default Login;