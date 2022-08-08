import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Inicio() {
  const navigate = useNavigate()
  const [t, i18n] = useTranslation("global") //se inicializa la constante de traduccion

  return (
    <div>
      <div className='bg-gray-900 border border-black m-5 p-5 rounded-lg'>
        <h1 className='text-2xl text-center text-white'>{t("inicio.titulo")}</h1>
        <div className='mt-14'>
          <p className='text-white text-center text-xl'>{t("inicio.descripcion")}</p>
        </div>
        <div className='mt-14'>
          <Button
            variant='contained'
            color='primary'
            onClick={() => { navigate('/curriculum') }}
            fullWidth
          >
            {t("inicio.generar")}          </Button>
        </div>
      </div>
    </div>
  )
}

export default Inicio
