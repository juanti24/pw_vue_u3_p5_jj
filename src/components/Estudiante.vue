<template>
  <h1>Componente Estudiante</h1>
  <input type="text" name="" id="" v-model="id" />
  <button @click="insertar">Consultar</button>

  <input type="text" name="" id="" v-model="nombre"/>
  
  <input v-model=apellido type="text">
  <button @click="consultarPorId">Insertar</button>

</template>

<script>
import { consultarEstudianteFachada, insertarFachada } from "../helpers/clienteEstudiante.js";

export default {
  data() {
    return {
      id: null,
      nombre: null,
      apellido:null,
    };
  },

  methods: {
    async consultarPorId() {
      const data = await consultarEstudianteFachada(this.id);
      this.nombre= data.nombre;

      console.log("desde componente:");
      console.log(data);
    },
    
    async insertar(){
    const estudiante ={
    nombre: "Juan",
    apellido: this.apellido,
    genero: "M",
    fechaNacimiento: "1997-11-16T00:00:00",
    cedula: "1723920979",
    rangoEconomico: "Medio",
    facultad: "Artes",
    carrera: "Musica",
    gratuidad: true,
  
};

      await insertarFachada();
    }
  },
};
</script>

<style>
</style>