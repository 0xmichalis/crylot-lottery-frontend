import React, { useContext } from 'react'
import { WalletContext } from '../../context/WalletContext'
import './Header.css'

const Header = () => {

    const walletContext = useContext(WalletContext)

    const extractMiddle = (str) => {
        const first = str.substr(0, 2);
        const second = str.substr(str.length - 5, str.length - 1)
        return first + "..." + second
    }

    if(!walletContext.wallet){
        return null
    }
    
    return(
        <header>
            <p className='address animate__animated animate__fadeInUp'>{extractMiddle(walletContext.wallet)}</p>
        </header>
    )
}

export default Header;