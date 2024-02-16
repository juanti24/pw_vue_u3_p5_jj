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