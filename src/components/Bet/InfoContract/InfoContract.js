import React from 'react'
import './InfoContract.css'

const InfoContract = ({title, value}) => {
    return(
        <div className='ContractInfo'>
            <p className='Info__title'>{title}:</p>
            <p className='Info__value'>Ξ {value}</p>
        </div>
    )
}

export default InfoContract;