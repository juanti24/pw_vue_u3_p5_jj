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
  // const actualizar = async (id) => {
  //   axios
  //     .put(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`)
  //     .then((r) => r.data);
  // };
  // const eliminar = async (id) => {
  //   axios
  //     .delete(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`)
  //     .then((r) => r.data);
  // };
  
  // const consultarTodos = async () => {
  //     return axios
  //       .get(`http://localhost:8080/API/v1.0/Matricula/estudiantes`)
  //       .then((r) => r.data);
  //   };
  
  export const consultarPorIdFachada = async (id) => {
    return await consultarPorId(id);
  };
  
  export const insertarFachada = async (body) => {
    return await insertar(body);
  };
  // export const actualizarFachada = async (id) => {
  //   return await consultarPorId(id);
  // };
  // export const eliminarFachada = async (id) => {
  //   return await consultarPorId(id);
  // };
  // export const consultarTodosFachada = async () => {
  //     return await consultarTodos();
  //   };