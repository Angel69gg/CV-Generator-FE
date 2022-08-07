import React from 'react'
import { Button } from '@mui/material'
import {useNavigate} from 'react-router-dom'

function Inicio() {
  const navigate = useNavigate()

  return (
    <div>
      <div className='bg-gray-900 border border-black m-5 p-5 rounded-lg'>
        <h1 className='text-2xl text-center text-white'>Bienvenido a nuestro generador de Curriculum Vitae</h1>
        <div className='mt-14'>
          <p className='text-white text-center text-xl'>Para generar un curriculum vitae da click en el siguiente boton</p>
        </div>
        <div className='mt-14'>
        <Button
            variant='contained'
            color='primary'
            onClick={() => { navigate('/curriculum') }}
            fullWidth
          >
            Generar CV
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Inicio
