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

        console.log(formattedBalance)

        return formattedBalance
    } catch (error) {
        console.log(error)
    }
}