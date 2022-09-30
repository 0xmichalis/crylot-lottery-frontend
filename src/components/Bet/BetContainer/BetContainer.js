import React, { useEffect, useState } from 'react'
import { contractBalance } from '../../../controllers/contract';
import InfoContract from '../InfoContract/InfoContract';
import './BetContainer.css'

const BetContainer = () => {
    
    const [balance, setBalance] = useState(0)

    useEffect(()=>{
        const getInfo = async () => {
            try {
                const balance = await contractBalance()
                setBalance(balance)
            } catch (error) {
                console.log(error)
            }
        }
        getInfo()
    }, [])

    return(
        <article className='BetContainer'>
            <InfoContract title="Contract balance" value={balance}/>
            <InfoContract title="Total bets" />
            <InfoContract title="Min bet" />
            <InfoContract title="Max bet" />
        </article>
    )
}

export default BetContainer;