import React from 'react'
import './Hands.scss'


const Hands = () => {
    return (
        <div className="hands-image" 
            style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL + '/img/background-hands.png'})`,
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'bottom left',
            backgroundAttachment: 'fixed',
            backgroundSize: 'auto 80px',
        }}></div>
    )
}

export default Hands
