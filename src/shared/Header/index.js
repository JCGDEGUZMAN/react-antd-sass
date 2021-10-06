import React from 'react';
import './index.scss';

import Logos from '../../assets/images/headerlogos.png';

const Header = () => {

    return(
        <div className='page-header'>
            <div className='logos'>
                <img src={Logos} alt='Logos'/>
            </div>
            <div className='actions'>
                <a href='/'>Full Mechanics</a>
                <a href='/' className='join-promo-btn'>Join Promo</a>
            </div>
        </div>
    );
}

export default Header;