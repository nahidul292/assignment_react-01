import React from 'react';


const Player = (props) => {


    const {name, salary, image} = props.player;
    const imageStyle = {height: '180px'}
    const playerStyle = {border:" 5px solid black", margin:"10px" , padding:"10px"}
    const handleAddPlayer = props.handleAddPlayer;

    return (


        <div style={playerStyle}>
            <img style={imageStyle} src={image} alt=""/>
            <h4>Player: {name}</h4>
            <h4>Salary : {salary}</h4>
            <button onClick={() => handleAddPlayer(props.player.salary)}>Add Your Player</button>
        </div>
    );
};

export default Player;