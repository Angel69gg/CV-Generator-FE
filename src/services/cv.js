import axios from 'axios';
import download from "downloadjs"

export const addCV = async (data) => {
    const response = await axios.post('/api/add', {
        datosPerfil: {
            nombre: data.datosPerfilnombre,
            apellido: data.datosPerfilapellido,
            edad: Number(data.datosPerfiledad),
            genero: data.datosPerfilgenero,
            descripcion: data.datosPerfildescripcion,
            fechaNacimiento: data.datosPerfilfechaNacimiento
        },
        contacto: {
            email: data.contactoemail,
            telefono: data.contactotelefono,
            linkedin: data.contactolinkedin,
        },
        experiencia: {
            empresa: data.experienciaempresa,
            cargo: data.experienciacargo,
            fechaInicio: data.experienciafechaInicio,
            fechaFin: data.experienciafechaFin,
            descripcion: data.experienciadescripcion,
        },
        educacion: {
            titulo: data.educaciontitulo,
            institucion: data.educacioninstitucion,
            fechaInicio: data.educacionfechaInicio,
            fechaFin: data.educacionfechaFin,
            descripcion: data.educaciondescripcion,
        },
        idiomas: {
            idioma: "Sin informacion",
            nivel: "Sin informacion",
        },
        habilidades: {
            habilidad: "Sin informacion",
            nivel: "Sin informacion",
        },
        fortalezas: {
            fortaleza: "Sin informacion",
        },
        debilidades: {
            debilidad: "Sin informacion",
        },
        proyectos: {
            proyecto: "Sin informacion",
            descripcion: data.proyectosdescripcion,
            fechaInicio: data.proyectosfechaInicio,
            fechaFin: data.proyectosfechaFin,
            url: "Sin informacion",
        },
        redes: {
            red: data.redesnombre,
            url: data.redesurl,
        },
    });
    return response;
}

export const addCVImg = async (id, data) => {
    const formData = new FormData();
    formData.append('avatar', data);


    const response = await axios.post(`/api/addImg/${id}`, formData);
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

export const generarPDF = async (id) => {
    const response = await axios.get(`/api/generar_pdf/${id}`);
    //Obtenemos el archivo
   if (response.status === 200) {
    const pdf = `data:application/pdf;base64,${response.data.file}`;
    download(pdf, `${id}.pdf`, "application/pdf");
  } 


    return response;
}