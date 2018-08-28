import React from 'react';

const gifSection = (props) => {
    return (

        <div>
            <img src={props.img} alt={props.alt} />
        </div>
    )
}

export default gifSection;