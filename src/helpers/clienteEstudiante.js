import axios from "axios";
const consultarPorId = async (id) => {
    const datos = axios
      .get(`http://localhost:8080/API/v1.0/Matricula/estudiantes/completo/${id}`)
      .then((r) => r.data);
    return datos;
  };
  
  const insertar = async (body) => {
    axios
      .post(`http://localhost:8080/API/v1.0/Matricula/estudiantes`, body)
      .then((r) => r.data);
  };


const actualizar = async (id, body)=>{
  const data = axios.put(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`, body)
  .then((r) => r.data);
  console.log(data);
}

const eliminar = async (id) =>{
  const data = axios.delete(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`)
  .then((r) => r.data);
  console.log(data);
}

  
  export const consultarPorIdFachada = async (id) => {
    return await consultarPorId(id);
  };
  
  export const insertarFachada = async (body) => {
    return await insertar(body);
  };

  export const actualizarFachada = async (id, body) => {
    return await actualizar(id, body);
  }
  
  export const eliminarFachada = async (id) => {
    return await eliminar(id);
  }