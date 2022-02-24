import {
  createContext,
  useContext,
  useState
} from 'react';

const Context = createContext();

export default function Provider({ children }) {
  const [deck, setDeck] = useState(initialCards);
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);
  

  const stateAndSetters = {
    deck, setDeck,
    playerOneHand, setPlayerOneHand,
    selectedCard, setSelectedCard,
    playerTwoHand, setPlayerTwoHand,
    playerThreeHand, setPlayerThreeHand,
    from, setFrom,
    to, setTo,
  };

  return <Context.Provider value={stateAndSetters}>
    {children}
  </Context.Provider>;
}

export function useGameContext() {
  return useContext(Context);
}