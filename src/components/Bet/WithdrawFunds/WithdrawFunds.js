import React, {useState} from 'react'
import Loader from '../../../components/Loader/Loader'
import './WithdrawFunds.css'

const WithdrawFunds = ({userFunds, liquidity}) => {

    const [withdrawing, setWithdrawing] = useState(false)

    const withdraw = async () => {
        setWithdrawing(true)
        setTimeout(()=>{setWithdrawing(false)}, 2000)
    }

    if(withdrawing){
        return(
            <div className='withdraw__loader animate__animated animate__fadeIn'>
                <Loader width={"20%"}/>
            </div>
        )
    }
    return(
        <div className='withdraw__button animate__animated animate__fadeInUp' onClick={withdraw}>
            Withdraw funds
        </div>
    )
}

export default WithdrawFunds;