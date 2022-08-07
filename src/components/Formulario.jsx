import React from 'react';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel'
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox'
import { useTranslation } from 'react-i18next'

export const Formulario = () => {
    const [t, i18n] = useTranslation("global")
    return (
        <form>
            <h2 className='text-xl'>{t("titulos.datosPerfil")} </h2>
            <TextField id="outlined-basic" label={t("datosPerfil.nombre")} variant="outlined" />
            <TextField id="outlined-basic" label={t("datosPerfil.apellido")}  variant="outlined" />
            <TextField id="outlined-basic" label={t("datosPerfil.edad")}  variant="outlined" />
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
            <TextField id="outlined-basic" label={t("datosPerfil.descripcion")}  variant="outlined" />
            <TextField id="outlined-basic" label=""  variant="outlined" type="date" helperText={t("datosPerfil.fechaNacimiento")} />
            <h2 className='text-xl'>{t("titulos.contacto")}</h2>
            <TextField id="outlined-basic" label={t("contacto.email")} variant="outlined" type="email" />
            <TextField id="outlined-basic" label={t("contacto.telefono")} variant="outlined" />
            <TextField id="outlined-basic" label={t("contacto.linkedin")} variant="outlined" />
            <h2 className='text-xl'>{t("titulos.experiencia")}</h2>
            <TextField id="outlined-basic" label={t("experiencia.empresa")} variant="outlined" />
            <TextField id="outlined-basic" label={t("experiencia.cargo")} variant="outlined" />
            <TextField id="outlined-basic" label="" variant="outlined" type="date" helperText={t("experiencia.fechaInicio")} />
            <TextField id="outlined-basic" label="" variant="outlined" type="date" helperText={t("experiencia.fechaFin")}/>
            <TextField id="outlined-basic" label={t("experiencia.descripcion")} variant="outlined" />
            <h2 className='text-xl'>{t("titulos.educacion")}</h2>
            <TextField id="outlined-basic" label={t("educacion.titulo")} variant="outlined" />
            <TextField id="outlined-basic" label={t("educacion.institucion")} variant="outlined" />
            <TextField id="outlined-basic" label="" variant="outlined" type="date" helperText={t("educacion.fechaInicio")} />
            <TextField id="outlined-basic" label="" variant="outlined" type="date" helperText={t("educacion.fechaFin")} />
            <TextField id="outlined-basic" label={t("educacion.descripcion")} variant="outlined" />
            <h2 className='text-xl'>{t("titulos.idiomas")}</h2>
            <FormGroup>
                <FormControlLabel control={<Checkbox/>} label={t("idiomas.ingles")}/>
                <FormControlLabel control={<Checkbox/>} label={t("idiomas.espanol")} />
                <FormControlLabel control={<Checkbox/>} label={t("idiomas.aleman")}/>
                <FormControlLabel control={<Checkbox/>} label={t("idiomas.frances")} />
            </FormGroup>
            <h2 className='text-xl'>{t("titulos.habilidades")}</h2>

            <h2 className='text-xl'>{t("titulos.proyectos")}</h2>
            <TextField id="outlined-basic" label={t("proyectos.nombre")} variant="outlined" />
            <TextField id="outlined-basic" label={t("proyectos.descripcion")}variant="outlined" />
            <TextField id="outlined-basic" label="" variant="outlined" type="date" helperText={t("proyectos.fechaInicio")} />
            <TextField id="outlined-basic" label="" variant="outlined" type="date" helperText={t("proyectos.fechaFin")} />
            <h2 className='text-xl'>{t("titulos.redes")}</h2>
            <TextField id="outlined-basic" label={t("redes.nombre")} variant="outlined" />
            <TextField id="outlined-basic" label={t("redes.url")} variant="outlined" />
        </form>
    )
}


