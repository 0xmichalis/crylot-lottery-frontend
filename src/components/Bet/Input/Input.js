import React, { useEffect, useState } from 'react'
import './Input.css'
import '../InfoContainer/InfoContainer.css'

const Input = ({label, type, inputMessage, error}) => {
    
    const categories = {
        0: 9,
        1: 49,
        2: 99,
    }
    
    return(
        <div className='form-controller'>
            <label>{label}</label>
            <input type="number"
            placeholder={`${inputMessage} ${categories[type] || ''}`}/>
            <p className='error'>{error}</p>
        </div>
    )
}

export default Input;