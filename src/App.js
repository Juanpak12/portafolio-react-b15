import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import BgBubbles from "./components/BgBubbles";
import Profile from "./components/Profile";
import Menu from "./components/Menu";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import BackToTop from "./components/BackToTop";
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Importar de esta manera

const routes = [
    { path: '/', element: <About /> },
    { path: '/resume', element: <Resume /> },
    { path: '/works', element: <Works /> }, // Corregir la ruta de Works
    { path: '/contact', element: <Contact /> }, // Corregir la ruta de Contact
];

function App() {
    return (
        <>
            <BackToTop />
            <div className="page-wrap">
                <BgBubbles />
                <Router>
                    <div className="container">
                        <Menu/>
                        <Profile/>
                        <AnimatedRoutes />
                    </div>
                </Router>
            </div>
        </>
    );
}

const AnimatedRoutes = () => (
    <Routes>
        {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={
                <CSSTransition
                    classNames="fade" // Clase CSS para las transiciones
                    timeout={500} // Duración de la transición en milisegundos
                >
                    {element}
                </CSSTransition>
            } />
        ))}
    </Routes>
);

export default App;