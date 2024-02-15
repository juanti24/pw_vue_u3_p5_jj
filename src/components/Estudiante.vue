<template>
  <div class="container">
      <div class="formInsertar">
          <h1>Consulta por Estudiantes</h1>
          <input v-model="id" type="number" />
          <button @click="consultarPorId">Consultar</button>

      </div>
  </div>

  <div class="container">



      <div class="formInsertar">
          <h1>Inserción de Estudiantes</h1>

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
         

          <button @click="insertar">Insertar</button>
      </div>




  </div>
</template>

<script>
import { consultarPorIdFachada, insertarFachada } from "../helpers/clienteEstudiante"


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

      }
  },
  methods: {
      async consultarPorId() {
          const data = await consultarPorIdFachada(this.id);
          const { nombre, apellido } = data
          console.log(data);
          this.nombre = data.nombre;
        this.apellido = data.apellido;
        this.genero = data.genero;
        this.fechaNacimiento = data.fechaNacimiento;
        this.carrera=data.carrera,
        this.cedula=data.cedula,
        this.rangoEconomico=data.rangoEconomico,
        this.facultad=data.facultad,
        this.gratuidad=data.gratuidad




      },

      async insertar() {
          console.log("Insertando....");
          const datos = {

              "nombre": this.nombre,
              "apellido": this.apellido,
              "genero": this.genero,
              "fechaNacimiento": this.fechaNacimiento,
              "carrera": this.carrera,
              "cedula": this.cedula,
              "rangoEconomico": this.rangoEconomico,
              "facultad": this.facultad,
              "carrera": this.telefono,
              "gratuidad": this.gratuidad





          }

          await insertarFachada(datos);

          console.log("Insertado!")
      }
  },
}   
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
  background-color:#9ce98c;
}
</style>