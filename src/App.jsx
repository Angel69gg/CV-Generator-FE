import { Routes, Route } from 'react-router-dom'
import Inicio from './Pages/Inicio'
import { Navbar } from "./components/Navbar";
import { Formulario } from "./components/Formulario";
import { Imagen } from "./components/Imagen"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="*" element={<Inicio />} />
        <Route path="/curriculum" element={<Formulario />} />
      </Routes>
    </div>
  );
}

export default App;
