import React, { useEffect, useState } from 'react'
import { getContract, contractBalance, contractMaxBet, contractMinBet, contractTotalBets, contractUserBets } from '../../../controllers/contract';
import InfoContract from '../InfoContract/InfoContract';
import './InfoContainer.css'
import Loader from '../../Loader/Loader'

const InfoContainer = ({wallet}) => {
    
    const [loading, setLoading] = useState(true)

    const [balance, setBalance] = useState(0)
    const [minBet, setMinBet] = useState(0)
    const [maxBet, setMaxBet] = useState(0)
    const [totalBets, setTotalBets] = useState(0)
    const [userBets, setUserBets] = useState(0)
    const [userFunds, setUserFunds] = useState(0)

    useEffect(()=>{
        const getInfo = async () => {
            try {
                const {contract, signer} = await getContract()

                const balance = await contractBalance(contract)
                setBalance(balance)

                const minBet = await contractMinBet(contract)
                setMinBet(minBet)

                const maxBet = await contractMaxBet(contract)
                setMaxBet(maxBet)

                const totalBets = await contractTotalBets(contract)
                setTotalBets(totalBets)

                const userBets = await contractUserBets(contract, signer)
                setUserBets(userBets)

                const userFunds = await contractUserBets(contract, signer)
                setUserFunds(userFunds)

            } catch (error) {
                console.log(error)
            }finally{
                setLoading(false)
            }
        }
        getInfo()
    }, [wallet])

    if(loading){
        return(
            <Loader width={"15%"}/>
        )
    }

    return(
        <article className='animate__animated animate__fadeInDown'>
            <section className='Container'>
                <InfoContract title="Contract liquidity" value={balance} loading={loading}/>
                <InfoContract title="User funds" value={userFunds} loading={loading}/>
                <hr/>
                <InfoContract title="Total bets" value={totalBets} loading={loading} noSymbol={true}/>
                <InfoContract title="User bets" value={userBets} loading={loading} noSymbol={true}/>
                <hr/>
                <InfoContract title="Min bet" value={minBet} loading={loading}/>
                <InfoContract title="Max bet" value={maxBet} loading={loading}/>
            </section>
        </article>
    )
}

export default InfoContainer;