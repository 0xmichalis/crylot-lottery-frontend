import React, { useEffect, useState } from 'react'
import { contractBalance, contractMaxBet, contractMinBet, contractTotalBets, contractUserBets } from '../../../controllers/contract';
import InfoContract from '../InfoContract/InfoContract';
import './BetContainer.css'

const BetContainer = () => {
    
    const [balance, setBalance] = useState(0)
    const [minBet, setMinBet] = useState(0)
    const [maxBet, setMaxBet] = useState(0)
    const [totalBets, setTotalBets] = useState(0)
    const [userBets, setUserBets] = useState(0)

    useEffect(()=>{
        const getInfo = async () => {
            try {
                const balance = await contractBalance()
                setBalance(balance)

                const minBet = await contractMinBet()
                setMinBet(minBet)

                const maxBet = await contractMaxBet()
                setMaxBet(maxBet)

                const totalBets = await contractTotalBets()
                setTotalBets(totalBets)

                const userBets = await contractUserBets()
                setUserBets(userBets)
            } catch (error) {
                console.log(error)
            }
        }
        getInfo()
    }, [])

    return(
        <article className='BetContainer'>
            <InfoContract title="Contract balance" value={balance}/>
            <InfoContract title="Total bets" value={totalBets} noSymbol={true}/>
            <InfoContract title="User bets" value={userBets} noSymbol={true}/>
            <InfoContract title="Min bet" value={minBet}/>
            <InfoContract title="Max bet" value={maxBet}/>
        </article>
    )
}

export default BetContainer;