
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarPrin from './components/NavbarPrin';
import Home from './views/Home';
import Pokemones from './views/Pokemones';
import DetallePokemon from './views/DetallePokemon';
import NotFound from './views/NotFound';

function App() {
  return (
    <>

        <BrowserRouter>
            <NavbarPrin />
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/pokemones" element={<Pokemones/>}/>
              <Route path="/pokemones/:name" element={<DetallePokemon/>}/>
              <Route path="*" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>


    </>
  );
}

export default App;
