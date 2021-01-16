import React from 'react';
import '../styles/LimitBanner.scss'


const LimitBanner = (props) => {
    return (
        <div className="limit-banner">
            <h1>{props.text}</h1>
        </div>
    )
}

export default LimitBanner;