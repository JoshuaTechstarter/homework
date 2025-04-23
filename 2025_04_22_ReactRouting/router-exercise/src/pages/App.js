import '../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Patientenliste from './Patienteliste'
import FAQ from './FAQ'
import Pokemon from './Pokemon'
import Kontakt from './contact'
import Header from '../components/Header'
import Home from './Home'


function App() {
  return (

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="patienten" element={<Patientenliste></Patientenliste>}>Unsere Patieren</Route>
        <Route path="FAQ" element={<FAQ></FAQ>}>FAQ</Route>
        <Route path="pokemon" element={<Pokemon></Pokemon>}>About us</Route>
        <Route path="contact" element={<Kontakt></Kontakt>}>Kontakt</Route>
      </Routes>

    </Router>

  );
}

export default App;
