import React, { useState } from 'react';
import arrow from '../assets/arrowCollapse.png';
import '../sass/components/_collapse.scss'

function Collapse({ title, content }) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`collapseCard ${isCollapsed ? '' : 'open'}`}>
            <p className='collapseCardTitle' onClick={toggleCollapse}>
                {title} <img src={arrow} alt='Fléche ouverture collapse' className={`arrowCollapse ${isCollapsed ? '' : 'open'}`} />
            </p>
            {/*Contenu du collapse + a la ligne par Item*/}
            <div className={`collapseCardContent ${isCollapsed ? '' : 'open'}`}>
                {content.split('\n').map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
        </div>
    );
}

export default Collapse;
