import '../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Patientenliste from './Patienteliste'
import Pokemon from './Pokemon'
import Kontakt from './contact'
import Header from '../components/Header'
import Home from './Home'
import Pokedex from './Pokedex';


function App() {
  return (

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patienten" element={<Patientenliste />}>Unsere Patieren</Route>
        <Route path="/pokedex/:id" element={<Pokedex />} />
        <Route path="/pokemon" element={<Pokemon />}>About us</Route>
        <Route path="/contact" element={<Kontakt />}>Kontakt</Route>
      </Routes>

    </Router>

  );
}

export default App;
