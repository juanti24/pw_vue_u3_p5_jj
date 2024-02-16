<template>
    <h1>Página Consultar</h1>

    <div class="container">
    <div class="formInsertar">
      <h1>Consulta por Estudiantes</h1>
      <input v-model="id" type="number" />
      <button @click="consultarPorId">Consultar</button>
    </div>
  </div>



</template>

<script>
import {
  consultarPorIdFachada,
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