import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import { addCVImg, generarPDF } from '../services/cv';
import {useNavigate} from 'react-router-dom';


export const Imagen = ({ id }) => {
  const [t, i18n] = useTranslation("global");
  const [file, setFile] = useState();
  const [disabled, setDisabled] = useState();
  const navigate = useNavigate();

  const handleDownload = async (e) => {
    e.preventDefault();
    try {
      const response = await generarPDF(id);
      if (response.status === 200) {
        toast.success("PDF generado con éxito");
        navigate('/');
      }
    } catch (error) {
      toast.error("Error al generar el PDF");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(file);
    const response = await addCVImg(id, file);
    if (response.status === 200) {
      console.log(response)
      setDisabled(true);
      toast.success("Subido con exito");
    }
  }


  return (
    <form className='flex flex-col m-5' onSubmit={handleSubmit}>
      {file && (
        <div className='flex flex-col m-5'>
          <img src={URL.createObjectURL(file)} alt='imagen' />
        </div>
      )}
      <TextField
        variant="outlined"
        type="file"
        helperText="link Imagen"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <div className='flex flex-row'>
        <div className='w-full mx-2'>
          <Button
            fullWidth
            variant="contained"
            color="success"
            type='submit'
            disabled={disabled}
          >Subir Avatar</Button>
        </div>

        <div className='w-full mx-2'>
          <Button
            fullWidth
            variant="contained"
            onClick={handleDownload}
          >Descargar PDF</Button>
        </div>
      </div>
    </form>
  )
}
