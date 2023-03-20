import React, { useState } from 'react';

export default function ReadMore(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    
    <div >
        
      <div className='my-4 text-lg'>{isExpanded ? props.fullText : props.previewText}</div>
      <button className='py-1 px-6 font-semibold rounded-lg hover:text-white hover:bg-red-900 text-lg w-44 border-2 border-red-900' onClick={toggleExpand}>
        {isExpanded ? 'Read less' : 'Read more'}
      </button>
    </div>
  );
}


