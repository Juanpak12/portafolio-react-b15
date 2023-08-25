import React from 'react';
import { NavLink } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';
import './index.scss';


const Menu = () => {
    return (
        <ul className="menu">
            <Menu.Item
                name={"person"}
                link="/#about"
            >
                Home
            </Menu.Item>
            <Menu.Item
                name={"android-list"}
                link="/resume#resume"
            >
                Resume
            </Menu.Item>
            <Menu.Item
                name={'paintbrush'}
                link="/works#works"
            >
                Works
            </Menu.Item>
            <Menu.Item
                name={'at'}
                link="/contact#contact"
            >
                Contact
            </Menu.Item>
        </ul>
    );
};

Menu.Item = ({link = '#', children, name }) => {
    // Construct the path to the PNG icon based on the name
    const iconPath = require(`../../assets/icons/${name}.png`);

    return (
        <li>
            <NavHashLink
                smooth
                to={link}
                activeClassName={'active'}
                exact
            >
                <img 
                    className={`iconmenu`}
                    src={iconPath}
                    alt={`Icon: ${name}`}
                    style={{ width: '30px', height: '30px' }} // Aplica el estilo de tamaño aquí
                />
                {children}
            </NavHashLink>
        </li>
    );
};

export default Menu;