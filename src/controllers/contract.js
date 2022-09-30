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

export const contractBalance = async () => {
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

export const contractMinBet = async () => {
    try {
        const contract = getContract()
        const MinBet = await contract.getMinBet()

        const formattedMinBet = ethers.utils.formatEther(MinBet)

        console.log('Contract min bet -> ', formattedMinBet)

        return formattedMinBet
    } catch (error) {
        console.log(error)
    }
}

export const contractMaxBet = async () => {
    try {
        const contract = getContract()
        const MaxBet = await contract.getMaxBet()

        const formattedMaxBet = ethers.utils.formatEther(MaxBet)

        console.log('Contract max bet -> ', formattedMaxBet)

        return formattedMaxBet
    } catch (error) {
        console.log(error)
    }
}

export const contractTotalBets = async () => {
    try {
        const contract = getContract()
        const TotalBets = await contract.getTotalBets()

        const formattedTotalBets = Number(ethers.utils.formatEther(TotalBets))

        console.log('Contract total bets -> ', formattedTotalBets)

        return formattedTotalBets
    } catch (error) {
        console.log(error)
    }
}

export const contractUserBets = async () => {
    try {
        const contract = getContract()

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const userAddress = await signer.getAddress()
        const UserBets = await contract.getUserBets(userAddress)

        const formattedUserBets = Number(ethers.utils.formatEther(UserBets))

        console.log('Contract user bets -> ', formattedUserBets)

        return formattedUserBets
    } catch (error) {
        console.log(error)
    }
}


export const contractLastBet = async () => {
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