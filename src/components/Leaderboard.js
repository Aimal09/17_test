import React, { useEffect, useState } from 'react'
import Player from './Player';

const Leaderboard = () => {

    const [users, setUsers] = useState([]);

    const getUserData = async () => {
        const response = await fetch('https://webcdn.17app.co/campaign/pretest/data.json');
        const data = await response.json();
        setUsers(data);
        //setBoard(data)
    }
 
    useEffect(() => {
        getUserData();
    }, []);


    return (
        <>
            <div id="leaderboard">
                <ul id="players">
                    {
                        users.map((data,i) => {
                            Object.assign(data,{'id':'item'+parseInt(i+1)});
                            return (
                                <Player 
                                key={i}
                                id={data.id}
                                rank = {i}
                                imgsrc = {data.picture}
                                name = {data.displayName}
                                score = {data.score}
                                />
                            )
                        })
                    }
                </ul>
            </div>
            
        </>
    )
}

export default Leaderboard