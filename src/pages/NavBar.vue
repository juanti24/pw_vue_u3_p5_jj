<template>
  <div>
    <router-link to="/guardar">Guardar</router-link>
    <router-link to="/eliminar">Eliminar</router-link>
    <router-link to="/consultar">Consultar</router-link>
    <router-link to="/actualizar">Actualizar</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
div a{
    color: #2c3e50;
    margin: 0px 10px;
    font-weight: bold;
    border: solid 1px;
    padding: 10px 10px;
    border-radius: 5px;
}

.router-link-exact-active{
  background: rgb(114, 189, 104);
}




</style>