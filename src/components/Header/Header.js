import React from 'react'
import './Header.css'

const Header = ({wallet}) => {

    const extractMiddle = (str) => {
        const first = str.substr(0, 2);
        const second = str.substr(str.length - 5, str.length - 1)
        return first + "..." + second
    }

    return(
        <header>
            <p className='address'>{extractMiddle(wallet)}</p>
        </header>
    )
}

export default Header;