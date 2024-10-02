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

export const isBaseSepoliaNetwork = () => {
    if(!hasMetamask()) return

    const { ethereum } = window;

    return ethereum.networkVersion === '84532'
}

export const changeNetwork = async (action) => {
    if(!hasMetamask()) return

    const { ethereum } = window;

    try {
        const {isConfirmed} = await Swal.fire({
            icon:'info',
            title:'Change to Base Sepolia',
            html:'The lottery is running on Base Sepolia Testnet <br/> Would you like to change Network?',
            confirmButtonText:'Change network',
            confirmButtonColor:'var(--primary)',
            showCancelButton:true,
            reverseButtons:true
        })

        if(!isConfirmed) return

        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x14A34' }]
        });
        action(true)
    } catch (error) {
        console.log(error)
    }
}

export const addNetwork = async () => {
    if(!hasMetamask()) return

    const { ethereum } = window;

    const {isConfirmed} = await Swal.fire({
        icon:'info',
        title:'Add Base Sepolia',
        html:'The lottery is running on Base Sepolia Testnet <br/> Would you like to add Base Sepolia?',
        confirmButtonText:'Change network',
        confirmButtonColor:'var(--primary)',
        showCancelButton:true,
        reverseButtons:true
    })
    if(!isConfirmed) return
    await ethereum.request({
        method: "wallet_addEthereumChain",
        params: [{
            chainId: "0x14A34",
            rpcUrls: ["https://sepolia.base.org"],
            chainName: "Base Sepolia",
            nativeCurrency: {
                name: "ETH",
                symbol: "ETH",
                decimals: 18
            },
            blockExplorerUrls: ["https://sepolia.basescan.org/"]
        }]
    });
}

export const listenIfLogout = (action) => {
    if(!hasMetamask()) return

    const { ethereum } = window;

    ethereum.on('accountsChanged', (account) => {
        // If user has locked/logout from MetaMask, this resets the accounts array to empty
        action(account[0])
    });
}