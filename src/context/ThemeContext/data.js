import ngrx from "../../assets/ngrx.png";
import react from '../../assets/react.png';
import node from '../../assets/node.png';
import js from '../../assets/js.png';
import angular from '../../assets/angular.png';
import vue from '../../assets/vue.jpeg';

export const THEMES = {
    'react' : {
        backgroundImage: react,
        linearGradient: createLinearGradient('#61dafb', '#222222'),
        primaryColor: '#4d89eb',
        color: '#222222'
    },
    'angular': {
        backgroundImage: angular,
        linearGradient:  createLinearGradient('#0043A9', '#B42B2C'),
        primaryColor: '#B52C2D',
        color: '#0043A9'
    },
    'vue': {
        backgroundImage: vue,
        linearGradient: createLinearGradient('#49D191', '#33475F'),
        primaryColor: '#33475F',
        color: '#49D191'
    },
    'node': {
        backgroundImage: node,
        linearGradient: createLinearGradient('#80BD01', '#333333'),
        primaryColor: '#333333',
        color: '#80BD01'
    },
    'javascript': {
        backgroundImage: js,
        linearGradient: createLinearGradient('#F7E018', '#000000'),
        primaryColor: '#625a00',
        color: '#000000'
    },
    'rxjs': {
        backgroundImage: ngrx,
        linearGradient: createLinearGradient('#622b43', '#242A31'),
        primaryColor: '#622b43',
        color: '#242A31'
    },
    'ngrx': {
        backgroundImage: ngrx,
        linearGradient: createLinearGradient('#622b43', '#242A31'),
        primaryColor: '#622b43',
        color: '#242A31'
    }
}

function createLinearGradient(color1, color2) {
    return `linear-gradient(to bottom right, ${color1} 0%, ${color2} 100%)`;
}
