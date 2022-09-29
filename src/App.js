import React, { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header/Header';

const {hasMetamask, requestAccount} = require('./provider/Web3')

function App() {

  const [walletAddress, setWalletAddress] = useState('')
  
  useEffect(() => {
    const getAccount = async () => {
      const address = await requestAccount()
      console.log(address)
      setWalletAddress(address)
    }
    getAccount()
  }, [])

  return (
    <div>
      <Header wallet={walletAddress}/>
    </div>
  );
}

export default App;
