import React from "react";

function Player(prop){
    return(
        <>
        <li className='player' id={prop.id}>
            <div className='rank'>{prop.rank}</div>
            <div className='photo'>
                <img src={prop.imgsrc}/>
            </div>
            <div className='name'>{prop.name}</div>
            <div className='score'>{prop.score}</div>
        </li>
        </>
    )
}

export default Player