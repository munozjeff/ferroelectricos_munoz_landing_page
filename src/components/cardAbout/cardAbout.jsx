import React from 'react';
import "./style.css"

function CardAbout({image,title="title",paragraph="paragraph"}) {
    return(
        <>
            <div className='card-about'>
                <img src={image} alt="" />
                <h3>{title}</h3>
                <p>{paragraph}</p>
            </div>
        </>
    )
}
export {CardAbout}