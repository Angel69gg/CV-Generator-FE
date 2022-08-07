import axios from 'axios';

export const addCV = async (data) => {
    const data = {
        datosPerfil: {
            nombre: data.nombre,
            apellido: data.apellido,
            edad: data.edad,
            genero: data.genero,
            descripcion: data.descripcionPerfil,
            fechaNacimiento: data.fechaNacimiento,
        },
        contacto:{
            email: data.email,
            telefono: data.telefono,
            linkedin: data.linkedin,
        },
        experiencia:{
            empresa: data.empresa,
            cargo: data.cargo,
            fechaInicio: data.fechaInicioExperiencia,
            fechaFin: data.fechaFinExperiencia,
            descripcion: data.descripcionPerfil,
        },
        educacion:{
            titulo: data.titulo,
            institucion: data.institucion,
            fechaInicio: data.fechaInicioEscolaridad,
            fechaFin: data.fechaFinEscolaridad,
            descripcion: data.descripcionescolaridad,
        },
        idiomas:{
            idioma: data.idioma,
            nivel: data.nivelIdioma,
        },
        habilidades:{
            habilidad: data.habilidad,
            nivel: data.nivelHabilidad,
        },
        fortalezas:{
            fortaleza: data.fortaleza
        },
        debilidades:{
            debilidad: data.debilidad
        },
        proyectos:{
            proyecto: data.proyecto,
            descripcion: data.descripcionProyecto,
            fechaInicio: data.fechaInicioProyecto,
            fechaFin: data.fechaFinProyecto,
            url: data.urlProyecto,
        },
        redes:{
            red: data.red,
            url: data.urlRed,
        },
    }

    const response = await axios.post('/api/add', data);
    return response;
}

export const addCVImg = async (data, id) => {
    form = new FormData();
    form.append('avatar', data.file);

    const response = await axios.post(`/api/addImg/${id}`, form);
    return response;
}

export const getCV = async (id) => {
    const response = await axios.get(`/api/get/${id}`);
    return response;
}

export const updateCV = async (data, id) => {
    const response = await axios.put(`/api/update/${id}`, data);
    return response;
}

export const deleteCV = async (id) => {
    const response = await axios.delete(`/api/delete/${id}`);
    return response;
}