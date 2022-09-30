import React, { useEffect, useState } from 'react'
import { getContract, contractBalance, contractMaxBet, contractMinBet, contractTotalBets, contractUserBets } from '../../../controllers/contract';
import './BetContainer.css'
import Loader from '../../Loader/Loader'

const BetContainer = ({wallet}) => {
    
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
    }, [wallet])

    if(loading){
        return(
            <Loader width={"10%"}/>
        )
    }

    return(
        <article className='animate__animated animate__jackInTheBox'>
            <section className='BetContainer'>
            </section>
        </article>
    )
}

export default BetContainer;