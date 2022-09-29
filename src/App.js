import React, { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import Login from './components/Login/Login';

const {requestAccount, checkIfWalletIsConnected} = require('./provider/Web3')

function App() {

  const [loading, setLoading] = useState(true)
  const [walletAddress, setWalletAddress] = useState('')
  
  const getAccount = async () => {
    const address = await requestAccount()
    setWalletAddress(address)
  }

  useEffect(()=>{
    const checkWallet = async () => {
      const address = await checkIfWalletIsConnected()
      setWalletAddress(address)
      setLoading(false)
    }
    checkWallet()
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
        : <Login action={getAccount}/>
      }
    </div>
  );
}

export default App;
