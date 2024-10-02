import React from 'react'
import { ADDRESS } from '../../config/ContractConfig'
import './Footer.css'

const Footer = () => {

    const links = [
        {title:'Contract', icon: 'github', url:'https://github.com/0xmichalis/crylot-lottery-contracts'},
        {title:'FrontEnd', icon: 'github', url:'https://github.com/0xmichalis/crylot-lottery-frontend'},
        {title:'Basescan', icon: 'ethereum', url:`https://sepolia.basescan.org/address/${ADDRESS}`}
    ]

    return(
        <footer>
            {
                links.map(link=>
                    <a className='repo' href={link.url} target="_blank" rel="noreferrer">
                        <i className={`fab fa-${link.icon}`}/>
                        <p>{link.title}</p>
                    </a>
                )
            }
        </footer>
    )
}

export default Footer;