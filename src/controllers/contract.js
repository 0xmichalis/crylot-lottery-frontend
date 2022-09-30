import {ethers} from 'ethers'
import { ADDRESS, ABI } from '../config/ContractConfig';

export const getContract = () => {
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const contract = new ethers.Contract(ADDRESS, ABI, signer);

        return contract;
    } catch (error) {
        console.log(error)
        return false
    }
}

export const contractBalance = async (address) => {
    if(!address) return

    try {
        const contract = getContract()
        const balance = await contract.getBalance()

        const formattedBalance = ethers.utils.formatEther(balance)

        console.log('Contract balance -> ', formattedBalance)

        return formattedBalance
    } catch (error) {
        console.log(error)
    }
}

export const contractLastBet = async (address) => {
    if(!address) return

    try {
        const contract = getContract()
        const [_addr, amount, number] = await contract.getLastBet()

        const lastBet = {
            address: _addr,
            amount: ethers.utils.formatEther(amount),
            number: ethers.utils.formatEther(number)
        }
        console.log('Contract last bet -> ', lastBet)

        return lastBet

    } catch (error) {
        console.log(error)
    }
}