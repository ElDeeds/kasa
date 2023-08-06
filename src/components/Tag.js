import React from 'react';
import logementsData from '../logements.json';

function Tag({ logementId }) {
  const logement = logementsData.find(item => item.id === logementId);

  return (
    <div className="tags">
      {logement.tags.map((tag, tagIndex) => (
        <span className='tag' key={tagIndex}>{tag}</span>
      ))}
    </div>
  );
}

export default Tag;
