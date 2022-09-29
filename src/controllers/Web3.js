export const hasMetamask = () => {
    if(!window.ethereum){
        alert("Metamask not installed")
        return false
    }
    return true
}

export const requestAccount = async () => {
    if(!hasMetamask()) return

    const { ethereum } = window;

    const address = await ethereum.request({method:"eth_requestAccounts"})
    return address[0]
}

export const checkIfWalletIsConnected = async () => {
    if(!hasMetamask()) return
  
    const { ethereum } = window;
  
    const accounts = await ethereum.request({ method: 'eth_accounts' });
  
    if (accounts.length !== 0) {
        console.log("Address: ", accounts[0]);
        return accounts[0];
    }
    return ''
}