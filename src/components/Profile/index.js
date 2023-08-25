import React, { useContext } from 'react';
import './index.scss'
import TypedText from "../TypedText";
import SocialLinks from "../SocialLinks";
import Info from "../Info";
// import Skills from "../Skills";
import {ThemeContext} from "../../context/ThemeContext";
import {useAnimation} from "../../use/animation";
import me from '../../assets/me.png';

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
            </div>
            <div className="profile__contact">
                {/* Falta hoja de vida */}
                <a href="" target="_blank" rel="noreferrer">
                        <span>
                            Download CV
                        </span>
                </a>
                <a href="mailto:juanpak12@gmail.com">
                        <span>
                            Contact Me
                        </span>
                </a>
            </div>
        </div>
    );
};

export default Profile;
