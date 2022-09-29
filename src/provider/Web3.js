export const hasMetamask = () => {
    if(!window.ethereum){
        alert("Metamask not installed")
        return false
    }
    return true
}

export const requestAccount = async () => {
    const address = await window.ethereum.request({method:"eth_requestAccounts"})
    return address[0]
}