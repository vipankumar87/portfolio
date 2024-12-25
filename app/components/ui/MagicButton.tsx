import React from 'react'

const MagicButton = ({title, icon, position, handleClick, otherClasses}: {
    title: string;
    icon: React.ReactNode;
    position: string;
    handleClick?: ()=>void;
    otherClasses?: string;
}) => {
  return (
    <button className={`magic-button ${otherClasses}`}>
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
    </button>
    )
}

export default MagicButton