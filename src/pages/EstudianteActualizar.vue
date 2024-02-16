<template>
  <h1>Página Actualizar</h1>

  <div class="container">
    <div class="formInsertar">
      <h1>Actualizar Estudiantes</h1>

      <label for="id">Id</label>
      <input id="id" v-model="id" type="text" />

      <label for="nombre">Nombre</label>
      <input id="nombre" v-model="nombre" type="text" />
      <label for="apellido">Apellido</label>
      <input id="apellido" v-model="apellido" type="text" />
      <label for="genero">Genero</label>
      <input id="genero" v-model="genero" type="text" />
      <label for="fecha">Fecha de Nacimiento</label>
      <input id="fecha" v-model="fechaNacimiento" type="datetime-local" />

      <label for="carrera">Carrera</label>
      <input id="carrera" v-model="carrera" type="text" />

      <label for="cedula">Cedula</label>
      <input id="cedula" v-model="cedula" type="text" />

      <label for="rangoEconomico">Rango Economico</label>
      <input id="rangoEconomico" v-model="rangoEconomico" type="text" />

      <label for="facultad">Facultad</label>
      <input id="facultad" v-model="facultad" type="text" />

      <label for="gratuidad">Gratuidad</label>
      <input id="gratuidad" v-model="gratuidad" type="text" />

      <button @click="actualiazar">Actualizar</button>
    </div>
  </div>
</template>

<script>
import {
  
  actualizarFachada,
  
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
    
    async actualiazar() {
      const body = {
        id: this.id,
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