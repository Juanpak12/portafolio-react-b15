import React, { useContext } from 'react';
import './index.scss'
import TypedText from "../TypedText";
import SocialLinks from "../SocialLinks";
import Info from "../Info";
// import Skills from "../Skills";
import {ThemeContext} from "../../context/ThemeContext";
import {useAnimation} from "../../use/animation";
import Skills from '../Skills2/Skills';
import me from '../../assets/me.png';
import cv from '../../assets/CV/CV.pdf'

{/* import NameProfile from '../../assets/JuanPablo.png'; */}

const Profile = () => {
    const { backgroundImage, type } = useContext(ThemeContext);
    const { animation } = useAnimation();
    return (
        <div className="profile">
            <div className="profile__banner">
                <div className={`profile__photo ${animation}`} style={{backgroundImage: `url(${backgroundImage})`}} />
                <img
                    src={me}
                    alt={type}
                />
            </div>
            <div className="profile__content">
                {/*<img className='nameprofile' src={NameProfile} alt="Logo" /> */}
                <TypedText
                  dataText={
                      [
                        'Hello, my name is',
                        'Juan Pablo Peña',
                        'Developer',
                        'Frontend Development',                        
                      ]
                  }
                />
                <SocialLinks/>
                <Info icon="location">
                    Bogotá DC
                </Info>
                <Skills/>
            </div>
            <div className="profile__contact">
                {/* Falta hoja de vida */}
                <a href="https://drive.google.com/file/d/18Ls9LCnG-X8SofVLt_W8oOGgGR5frqgs/view?usp=sharing" target="_blank" rel="noreferrer">
                        <span id='spanProfile'>
                            Download CV
                        </span>
                </a>
                <a href="mailto:juanpak12@gmail.com" >
                        <span id='spanProfile'>
                            Contact Me
                        </span>
                </a>
            </div>
        </div>
    );
};

export default Profile;
