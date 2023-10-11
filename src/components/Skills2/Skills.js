import React from 'react';
import Marquee from 'react-fast-marquee';
import './Skills.css';
import { skillsData } from '../../data/skillsData';
import { skillsImage } from '../../utils/skillsImage';

function Skills() {
    const skillBoxStyle = {
        backgroundColor: 'white',
        boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.3)',
    };

    return (
        <div id="skills" className="skills" style={{ backgroundColor: 'white' }}>
            <div className="skillsHeader">
                <h2 >Skills</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee
                        gradient={false}
                        speed={80}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={{ color: 'black' }}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
}

export default Skills;