import './App.css';
import initialCards from './cards-data';
import Player from './Player';
import CardList from './CardList';
import { useState } from 'react';
import ExecutePassButton from './ExecutePassButton';
import StyleLayout from './StyleLayout';

function App() {


  return (
    <div className="App">
    
      <section>
        {/* if the player names are numbers, that will make our life easier later because we can reuse numbers as arrays. Note that this will make our app brittle! */}
        <Player />
        <Player />
        <Player />
        <CardList />
      </section>
      <section>
        {
          selectedCard && <ExecutePassButton passCard={passCard} from={from} to={to} selectedCard={selectedCard} />
        }
      </section>
    </div>
  );
}

export default App;
