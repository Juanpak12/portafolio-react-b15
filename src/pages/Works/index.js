import React, { useState } from 'react';
import { projects } from './data';
import WorkItem from "./Item";
import WorksMenu from "./Menu";
import './index.scss';


const initalState = projects.filter(p => p.type === 'react');

const Works = () => {
    const [selectedProjects, setSelectedProjects] = useState(initalState);
    const [selectedType, setSelectedType] = useState('react');

    function handleMenuChange(type) {
        setSelectedProjects(projects.filter(p => p.type === type));
        setSelectedType(type);
    }


    return (
        <div className="page" id="works">
            <h2 id='titleSelection'>Dale Click 🔽 al tipo de proyecto </h2>
            <WorksMenu
                items={[
                    'HTML',
                    'CSS',
                    'API',
                    'JavaScript',
                    'React',
                ]}
                selected={selectedType}
                clicked={handleMenuChange}
            />
            <div className="row">
                {
                    selectedProjects.map(
                        item => <div className="column" key={item.sourceCodeLink}>
                            <WorkItem
                                {...item}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Works;
