import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/PlayerInfo/Header/Header';
import Player from './Components/PlayerInfo/Player';
import Total from './Components/PlayerInfo/TotalBudget/Total'

function App() {
  const [players, setPlayers] = useState([]);
  const [playerCart, setPlayerCart] = useState([]);



  useEffect(() => {
    fetch("https://api.mocki.io/v1/344f7018")
    .then((response) =>response.json())
    .then(data => setPlayers(data));
  },[])


  const handleAddPlayer = (player) => {
    const newCart = [...playerCart, player];
    setPlayerCart(newCart);
  }



  return (
    <div className="App">

  <Header></Header>
  <h1>IPL Player Auction</h1>
  <br/>
  <h1>Total Player : {players.length}</h1>
  <h2> Player Added : {playerCart.length}</h2>
  <Total total={playerCart}></Total>
  
  
  <ul>
    {
        players.map(player => <Player player={player} handleAddPlayer={handleAddPlayer} key={player.suite}></Player>)
    }
  </ul>
        <header className="App-header">
          
        </header>
    </div>
  );
}

export default App;
