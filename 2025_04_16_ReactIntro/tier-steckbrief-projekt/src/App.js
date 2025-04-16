import './App.css';
import Titel from './Titel';
import TierCard from './TierCard';


function App() {
  return (
    <div className="App">
      <Titel />
      <div className="tier-list">
        <TierCard name="Bello" art="Hund" krankheit="Asthma" />
        <TierCard name="Marty" art="Chinchilla" krankheit="Übergewicht" />
        <TierCard name="Gustav" art="Kegelrobbe" krankheit="gesund" />
      </div>
    </div>
  );
}

export default App;
