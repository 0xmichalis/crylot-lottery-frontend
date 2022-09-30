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

    let account;
    try {
        const address = await ethereum.request({method:"eth_requestAccounts"})
        account =  address[0]
    } catch (error) {
        console.log(error)
        return false
    }
    return account
}

export const checkIfWalletIsConnected = async () => {
    if(!hasMetamask()) return
  
    const { ethereum } = window;
  
    let account;

    try {
        const accounts = await ethereum.request({ method: 'eth_accounts' });
  
        if (accounts.length !== 0) {
            console.log("Address: ", accounts[0]);
            account = accounts[0];
        }

    } catch (error) {
        console.log(error)
        return false
    }

    return account
}