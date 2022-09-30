import React, { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import Login from './components/Login/Login';

const {requestAccount, checkIfWalletIsConnected} = require('./controllers/Web3')

function App() {

  const [loading, setLoading] = useState(true)
  const [walletAddress, setWalletAddress] = useState('')
  
  const login = async () => {
    const address = await requestAccount()
    setWalletAddress(address)
  }

  const checkWallet = async () => {
    const address = await checkIfWalletIsConnected()
    setWalletAddress(address)
  }

  useEffect(()=>{
    const check = async () => {
      await Promise.allSettled([
        checkWallet(),
        new Promise(resolve=>setTimeout(resolve, 2000))
      ])
      setLoading(false)
    }
    
    check()
  })

  if(loading){
    return(
      <Loader width={"40%"} />
    )
  }

  return (
    <div>
      {
        walletAddress ? <Header wallet={walletAddress}/>
        : <Login action={login}/>
      }
    </div>
  );
}

export default App;
