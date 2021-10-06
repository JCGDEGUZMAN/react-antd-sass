import React from 'react';
import './index.scss';

import TcLogo from '../../assets/images/tclogo.png';
import HeartCloud from '../../assets/images/cloudheart.png';
import CutCloud from '../../assets/images/cutcloud.png';
import TcText from '../../assets/images/tctext.png';

const HomePage = () => {

    return(
        <div className='home-page'>
            <div className='first-layer'>
                <img className='cut-cloud' src={CutCloud} alt='cut cloud'/>
                <img className='tc-logo' src={TcLogo} alt='tclogo'/>
                <img className='heart-cloud' src={HeartCloud} alt='heart cloud'/>
            </div>
            <div className='second-layer'>
                <img className='tc-text' src={TcText} alt='tc text'/>
            </div>
        </div>
    );
}

export default HomePage;