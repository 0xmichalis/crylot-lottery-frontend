import React, {useState} from 'react'
import Loader from '../../../components/Loader/Loader'
import './WithdrawFunds.css'

const WithdrawFunds = ({userFunds, liquidity}) => {

    const [withdrawing, setWithdrawing] = useState(false)

    if(withdrawing){
        return(
            <Loader />
        )
    }
    return(
        <div className='withdraw__button'>
            Withdraw funds
        </div>
    )
}

export default WithdrawFunds;