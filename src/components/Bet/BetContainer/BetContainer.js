import React, { useEffect, useState } from 'react'
import { getContract, contractBalance, contractMaxBet, contractMinBet, contractTotalBets, contractUserBets } from '../../../controllers/contract';
import './BetContainer.css'
import '../InfoContainer/InfoContainer.css'
import '../../Login/Login.css'
import Loader from '../../Loader/Loader'
import Categories from '../Categories/Categories';
import Input from '../Input/Input';

const BetContainer = ({wallet}) => {
    
    const [loading, setLoading] = useState(false)

    const [categorie, setCategorie] = useState(-1)

    useEffect(()=>{
    }, [wallet])

    if(loading){
        return(
            <Loader width={"10%"}/>
        )
    }

    return(
        <article className='animate__animated animate__jackInTheBox'>
            <section className='Container Bet'>
                <p className='bet__title'>Make a bet!</p>
                <Categories
                categorieSelected={categorie}
                selectCategorie={setCategorie}
                />

                <form>
                    <Input
                    type={categorie}
                    label="Number"
                    inputMessage="Insert a number between 0 ..."
                    name="number"/>
                    <Input
                    inputMessage="Insert the amount to bet"
                    label={"Amount to bet"}
                    name="amount"/>

                    <button>Bet!</button>
                </form>

            </section>
        </article>
    )
}

export default BetContainer;