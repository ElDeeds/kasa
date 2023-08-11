import React, { useState } from 'react';
import arrow from '../assets/arrowCollapse.png';
import '../sass/components/_collapse.scss'

function Collapse({ title, content }) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const isContentSplit = content.includes('\n'); 

    return (
        {/* Titre, arrow et ouverture du collapse */},
        <div className={`collapseCard ${isCollapsed ? '' : 'open'}`}>
            <p className='collapseCardTitle' onClick={toggleCollapse}>
                {title} <img src={arrow} alt='Fléche ouverture collapse' className={`arrowCollapse ${isCollapsed ? '' : 'open'}`} />
            </p>
            {/* Contenu du collapse + à la ligne par Item */}
            <div className={`collapseCardContent ${isCollapsed ? '' : 'open'} ${isContentSplit ? 'splitContent' : ''}`}>
                {isContentSplit ? (
                    content.split('\n').map((item, index) => (
                        <p key={index} className="splitContentItem">{item}</p>
                    ))
                ) : (
                    <p>{content}</p>
                )}
            </div>
        </div>
    );
}

export default Collapse;
