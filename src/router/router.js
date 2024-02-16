//Configuraciones de las rutas de mi PW

import { createRouter, createWebHashHistory } from 'vue-router'

import EstudianteActualizar from '@/pages/EstudianteActualizar'
import EstudianteConsultar from '@/pages/EstudianteConsultar'
import EstudianteEliminar from '@/pages/EstudianteEliminar'
import EstudianteGuardar from '@/pages/EstudianteGuardar'

// a cada pagina le vamos asignar una ruta

const routes = [
    {
        path: '/actualizar',
        component: EstudianteActualizar
    },

    {
        path: '/consultar',
        component: EstudianteConsultar
    },

    {
        path: '/guardar',
        component: EstudianteGuardar
    },

    {
        path: '/eliminar',
        component: EstudianteEliminar
    },




]

const router = createRouter({history: createWebHashHistory(), routes})

export default router