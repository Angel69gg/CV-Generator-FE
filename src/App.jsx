import { Routes, Route } from 'react-router-dom'
import Inicio from './Pages/Inicio'
import Login from './Pages/Login'
import { Navbar } from "./components/Navbar";
import { Formulario } from "./components/Formulario";
import { Imagen } from "./components/Imagen"

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Login/>} />
        <Route path="/curriculum" element={<Formulario />} />
        <Route path="/inicio" element={<Inicio/>} />
      </Routes>
    </div>
  );
}

export default App;
