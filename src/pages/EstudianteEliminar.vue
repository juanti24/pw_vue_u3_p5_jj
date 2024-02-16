<template>
    <h1>Página Eliminar</h1>
    
    <div class="container">
    <div class="formInsertar">
      <h1>Eliminar Estudiante</h1>
      <input v-model="id" type="number" />
      <button @click="eliminar">Eliminar</button>
    </div>
  </div>


</template>
<script>

import {
  consultarPorIdFachada,
  insertarFachada,
  actualizarFachada,
  eliminarFachada
} from "../helpers/clienteEstudiante";

export default {
  data() {
    return {
      id: null,
      nombre: null,
      apellido: null,
      genero: null,
      fechaNacimiento: null,
      carrera: null,
      cedula: null,
      rangoEconomico: null,
      facultad: null,
      gratuidad: null,
    };
  },
  methods: {
    async consultarPorId() {
      const data = await consultarPorIdFachada(this.id);
      const { nombre, apellido } = data;
      console.log(data);
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.genero = data.genero;
      this.fechaNacimiento = data.fechaNacimiento;
      (this.carrera = data.carrera),
        (this.cedula = data.cedula),
        (this.rangoEconomico = data.rangoEconomico),
        (this.facultad = data.facultad),
        (this.gratuidad = data.gratuidad);
    },

    async insertar() {
      console.log("Insertando....");
      const datos = {
        nombre: this.nombre,
        apellido: this.apellido,
        genero: this.genero,
        fechaNacimiento: this.fechaNacimiento,
        carrera: this.carrera,
        cedula: this.cedula,
        rangoEconomico: this.rangoEconomico,
        facultad: this.facultad,
        carrera: this.telefono,
        gratuidad: this.gratuidad,
      };

      await insertarFachada(datos);

      console.log("Insertado!");
    },

    async actualiazar() {
      const body = {
        nombre: this.nombre,
        apellido: this.apellido,
        genero: this.genero,
        fechaNacimiento: this.fechaNacimiento,
        carrera: this.carrera,
        cedula: this.cedula,
        rangoEconomico: this.rangoEconomico,
        facultad: this.facultad,
        carrera: this.telefono,
        gratuidad: this.gratuidad,
      };

      await actualizarFachada(this.id, body);
    },

    async eliminar(){
      await eliminarFachada(this.id);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.formInsertar {
  margin-top: 2rem;
  display: grid;
  padding: 1rem;
  background-color: #9ce98c;
  border-radius: 2rem;
}

label {
  text-align: left;
}

input {
  background-color: #9ce98c;
}
</style>