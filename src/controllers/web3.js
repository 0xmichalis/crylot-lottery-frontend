import Swal from 'sweetalert2'

export const hasMetamask = () => {
    if(!window.ethereum){
        Swal.fire({
            icon:'warning',
            title: `Metamask not installed`,
            html: `Please install metamask before you start playing.`,
            confirmButtonText: "I will",
            confirmButtonColor:"var(--primary)",
            cancelButtonColor:"var(--red)",
        })
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
  
        if(accounts.length !== 0) account = accounts[0]

    } catch (error) {
        console.log(error)
        return false
    }

    return account
}
