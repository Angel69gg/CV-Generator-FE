import { Routes, Route } from 'react-router-dom'
import Inicio  from './Pages/Inicio'
import Formulario from './components/Formulario'
function App() {

  return (
    <div>
      <Routes>
        <Route path="*" element={<Inicio />} />
        <Route path="/curriculum" element={<Formulario />} />
      </Routes>
    </div>
  )
}

export default App
