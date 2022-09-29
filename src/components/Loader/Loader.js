import React from 'react'
import './Loader.css'
import EthLoader from '../../assets/EthLoader.gif'

const Loader = ({width}) => {

    const styles = {
        width
    }
    
    return(
        <div className='Loader'>
            <img src={EthLoader}
            alt="Ethereum Loader"
            style={styles}/>
        </div>
    )
}

export default Loader;