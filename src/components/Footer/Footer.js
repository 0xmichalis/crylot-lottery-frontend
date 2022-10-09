import React from 'react'
import './Footer.css'

const Footer = () => {

    const links = [
        {title:'Contract', icon: 'github', url:'https://github.com/AlexT8/crylot-lottery-contracts'},
        {title:'FrontEnd', icon: 'github', url:'https://github.com/AlexT8/crylot-lottery-frontend'},
        {title:'Twitter', icon: 'twitter', url:'https://twitter.com/Alexxtaboada'}
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