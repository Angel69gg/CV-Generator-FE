import {
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    FormGroup,
    Checkbox,
    Divider,
    Button,
    Modal
} from '@mui/material';

import { useTranslation } from 'react-i18next'
import { useState } from 'react';
import { Imagen } from './Imagen'
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';

import { addCV } from '../services/cv';


export const Formulario = () => {
    const [t, i18n] = useTranslation("global")
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const [id, setId] = useState()

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


    const handleClose = () => {
        setOpen(!open)
    }

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const handleCheck = (event) => {
        setData({ ...data, [event.target.name]: event.target.checked })
    }
    const handleRadio = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)
        
        try {
            const response = await addCV(data)
            console.log(response)
            if(response.status === 200){
                setId(response.data.data._id)
                handleClose()
                toast.success('Se agrego con exito al sistema', {
                    position: "bottom-left",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }

        } catch (error) {
            setLoading(false)
            console.log(error)
            toast.error('Problema al actualizar', {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    }

    return (
        <div className='border border-black m-10'>
            <form onSubmit={handleSubmit}>
                <h2 className='text-xl text-center p-2'>{t("titulos.datosPerfil")} </h2>

                <div className='flex flex-col m-5'>
                    <div className='flex flex-row justify-around '>
                        <TextField required onChange={handleChange} name="datosPerfilnombre" label={t("datosPerfil.nombre")} variant="outlined" />
                        <TextField required onChange={handleChange} name="datosPerfilapellido" label={t("datosPerfil.apellido")} variant="outlined" />
                        <TextField required onChange={handleChange} name="datosPerfiledad" label={t("datosPerfil.edad")} variant="outlined" />
                        <TextField required onChange={handleChange} name="datosPerfildescripcion" label={t("datosPerfil.descripcion")} variant="outlined" />
                        <TextField required onChange={handleChange} name="datosPerfilfechaNacimiento" variant="outlined" type="date" helperText={t("datosPerfil.fechaNacimiento")} />
                    </div>
                    <div className='flex flex-row justify-center'>
                        <FormControl>
                            <FormLabel>{t("datosPerfil.genero")}</FormLabel>
                            <RadioGroup
                                row
                                name="datosPerfilgenero"
                                onChange={handleRadio}
                            >
                                <FormControlLabel value="Femenino" control={<Radio />} label={t("genero.femenino")} />
                                <FormControlLabel value="Masculino" control={<Radio />} label={t("genero.masculino")} />
                                <FormControlLabel value="Otros" control={<Radio />} label={t("genero.otros")} />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
                <Divider className='m-5' />


                <h2 className='text-xl text-center'>{t("titulos.contacto")}</h2>
                <div className='flex flex-row justify-around m-5'>
                    <div className='w-full mx-5'>
                        <TextField name='contactoemail' onChange={handleChange} label={t("contacto.email")} variant="outlined" fullWidth type="email" />
                    </div>
                    <div className='w-full mx-5'>
                        <TextField name='contactotelefono' onChange={handleChange} label={t("contacto.telefono")} variant="outlined" fullWidth />
                    </div>
                    <div className='w-full mx-5'>
                        <TextField name='contactolinkedin' onChange={handleChange} label={t("contacto.linkedin")} variant="outlined" fullWidth />
                    </div>
                </div>
                <Divider className='m-5' />

                <h2 className='text-xl text-center'>{t("titulos.experiencia")}</h2>
                <div className='flex flex-row justify-around'>
                    <TextField name='experienciaempresa' onChange={handleChange} label={t("experiencia.empresa")} variant="outlined" />
                    <TextField name='experienciacargo' onChange={handleChange} label={t("experiencia.cargo")} variant="outlined" />
                    <TextField name='experienciafechaInicio' onChange={handleChange} variant="outlined" type="date" helperText={t("experiencia.fechaInicio")} />
                    <TextField name='experienciafechaFin' onChange={handleChange} variant="outlined" type="date" helperText={t("experiencia.fechaFin")} />
                    <TextField name='experienciadescripcion' onChange={handleChange} label={t("experiencia.descripcion")} variant="outlined" />
                </div>

                <Divider className='m-5' />
                <h2 className='text-xl text-center'>{t("titulos.educacion")}</h2>
                <div className='flex flex-row justify-around'>
                    <TextField name="educaciontitulo" onChange={handleChange} label={t("educacion.titulo")} variant="outlined" />
                    <TextField name="educacioninstitucion" onChange={handleChange} label={t("educacion.institucion")} variant="outlined" />
                    <TextField name="educacionfechaInicio" onChange={handleChange} label="" variant="outlined" type="date" helperText={t("educacion.fechaInicio")} />
                    <TextField name="educacionfechaFin" onChange={handleChange} label="" variant="outlined" type="date" helperText={t("educacion.fechaFin")} />
                    <TextField name="educaciondescripcion" onChange={handleChange} label={t("educacion.descripcion")} variant="outlined" />
                </div>

                <Divider className='m-5' />

                <h2 className='text-xl text-center'>{t("titulos.idiomas")}</h2>
                <div className='flex flex-row justify-around'>
                    <FormGroup row>
                        <FormControlLabel
                            control={<Checkbox onChange={handleCheck} name="idiomasingles" />}
                            label={t("idiomas.ingles")}
                        />
                        <FormControlLabel
                            control={<Checkbox onChange={handleCheck} name="idiomasfrances" />}
                            label={t("idiomas.frances")}
                        />
                        <FormControlLabel
                            control={<Checkbox onChange={handleCheck} name="idiomasaleman" />}
                            label={t("idiomas.aleman")}
                        />
                        <FormControlLabel
                            control={<Checkbox onChange={handleCheck} name="idiomasespanol" />}
                            label={t("idiomas.espanol")}
                        />
                    </FormGroup>

                </div>
                {/*                 <h2 className='text-xl'>{t("titulos.habilidades")}</h2>
 */}

                <Divider className='m-5' />

                <h2 className='text-xl text-center'>{t("titulos.proyectos")}</h2>
                <div className='flex flex-row justify-around'>
                    <TextField name="proyectosnombre" onChange={handleChange} label={t("proyectos.nombre")} variant="outlined" />
                    <TextField name="proyectosdescripcion" onChange={handleChange} label={t("proyectos.descripcion")} variant="outlined" />
                    <TextField name="proyectosfechaInicio" onChange={handleChange} label="" variant="outlined" type="date" helperText={t("proyectos.fechaInicio")} />
                    <TextField name="proyectosfechaFin" onChange={handleChange} label="" variant="outlined" type="date" helperText={t("proyectos.fechaFin")} />
                </div>


                <Divider className='m-5' />

                <h2 className='text-xl text-center'>{t("titulos.redes")}</h2>
                <div className='flex flex-row justify-around'>
                    <div className='w-full mx-5 my-2'>
                        <TextField name="redesnombre" onChange={handleChange} fullWidth label={t("redes.nombre")} variant="outlined" />
                    </div>
                    <div className='w-full mx-5 my-2'>
                        <TextField name="redesurl" onChange={handleChange} fullWidth label={t("redes.url")} variant="outlined" />
                    </div>
                </div>
                <div className=' m-5'>
                    <Button
                        fullWidth
                        variant="contained"
                        color="success"
                        type='submit'
                    >
                        {t("guardar")}
                    </Button>
                </div>
            </form >

            <Modal
                open={open}
            >
                <div style={style} className="bg-white rounded-3xl">
                    <Imagen id={id} />
                </div>
            </Modal>
            <ToastContainer />
        </div >
    )
}