import React, { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import Login from './components/Login/Login';

import {requestAccount, checkIfWalletIsConnected, isGoerliNetwork, changeNetwork} from './controllers/web3'
import InfoContainer from './components/Bet/InfoContainer/InfoContainer';
import BetContainer from './components/Bet/BetContainer/BetContainer';

function App() {

  const [loading, setLoading] = useState(true)
  const [walletAddress, setWalletAddress] = useState('')
  const [contract, setContractValues] = useState({})
  const [validNetwork, setValidNetwork] = useState(false)
  
  const login = async () => {
    const address = await requestAccount()
    setWalletAddress(address)
  }

  const checkWallet = async () => {
    const address = await checkIfWalletIsConnected()
    setWalletAddress(address)
  }

  const validateNetwork = async () => {
    const isInGoerli = isGoerliNetwork()
    setValidNetwork(isInGoerli)
    if(!isInGoerli) await changeNetwork(setValidNetwork)
    return isInGoerli
  }

  useEffect(()=>{
    const check = async () => {
      console.log("valid net: ", validNetwork)
      if(!validNetwork){
        const allow = await validateNetwork()
        if(!allow) return
      }

      await Promise.allSettled([
        checkWallet(),
        new Promise(resolve=>setTimeout(resolve, 2000))
      ])
      
      setLoading(false)
    }
    
    check()
  }, [validNetwork])

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
        <InfoContainer wallet={walletAddress} network={validNetwork} setContractValues={setContractValues}/>
        <BetContainer wallet={walletAddress} contract={contract}/>
      </main>
    </>
  );
}

export default App;
