import React, { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import Login from './components/Login/Login';

import {requestAccount, checkIfWalletIsConnected} from './controllers/web3'
import {contractBalance, contractLastBet} from './controllers/contract'
import InfoContainer from './components/Bet/InfoContainer/InfoContainer';
import BetContainer from './components/Bet/BetContainer/BetContainer';

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
      await contractLastBet(walletAddress)
      
      setLoading(false)
    }
    
    check()
  }, [])

  if(loading){
    return(
      <main>
        <Loader width={"40%"} />
      </main>
    )
  }

  return (
    <>
      {
        walletAddress ? <Header wallet={walletAddress}/>
        : <Login action={login}/>
      }
      <main>
        <InfoContainer wallet={walletAddress}/>
        <BetContainer wallet={walletAddress}/>
      </main>
    </>
  );
}

export default App;
