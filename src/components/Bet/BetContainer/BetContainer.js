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
    const [errors, setErrors] = useState({})

    useEffect(()=>{
    }, [wallet])

    if(loading){
        return(
            <Loader width={"10%"}/>
        )
    }

    const bet = async (e) => {
        e.preventDefault()
        const { amount, number } = e.target
        setErrors({})
        if(categorie === -1 || !amount.value || !number.value){
            if(!amount.value) setErrors((prev)=>({...prev, _amount:"Insert a valid amount"}))
            if(!number.value) setErrors((prev)=>({...prev, _number:"Insert a valid number"}))
            if(categorie === -1) setErrors((prev)=>({...prev, _type:"Insert a valid type"}))
            return
        }

    }

    return(
        <article className='animate__animated animate__jackInTheBox'>
            <section className='Container Bet'>
                <p className='bet__title'>Make a bet!</p>
                <Categories
                categorieSelected={categorie}
                selectCategorie={setCategorie}
                />

                <form onSubmit={bet}>
                    <Input
                    type={categorie}
                    label="Number"
                    inputMessage="Insert a number between 0 ..."
                    name="number"
                    error={errors._number}/>
                    <Input
                    inputMessage="Insert the amount to bet"
                    label={"Amount to bet"}
                    name="amount"
                    error={errors._amount}/>

                    <button>Bet!</button>

                    <p className='error type_error'>
                        {
                            errors._type &&
                            "Please select a valid type"
                        }
                    </p>
                </form>

            </section>
        </article>
    )
}

export default BetContainer;