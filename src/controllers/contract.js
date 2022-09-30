import {ethers} from 'ethers'
import { ADDRESS, ABI } from '../config/ContractConfig';

export const getContract = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(ADDRESS, ABI, signer);

    return contract;
}

export const contractBalance = async () => {
    const contract = getContract()
    const balance = await contract.getBalance()

    const formattedBalance = ethers.utils.formatEther(balance)
    
    console.log(formattedBalance)

    return formattedBalance
}