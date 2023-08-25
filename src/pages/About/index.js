import React from 'react';
import './index.scss';
import LOGO from '../../assets/LOGO.png';
import NameLogo from '../../assets/JuanPablo.png';
import WorkLogo from '../../assets/Dev.png';

const Home = () => {
    return (
        <div className="page" id="home">
            <img className='logo-page' src={LOGO} alt="Logo" />
            <img className='namelogo-page' src={NameLogo} alt="Logo" />
            <img className='worklogo-page' src={WorkLogo} alt="Logo" />
        </div>
    );
};

export default Home;
