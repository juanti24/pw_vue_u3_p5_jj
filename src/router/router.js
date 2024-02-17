//Configuraciones de las rutas de mi PW

import { createRouter, createWebHashHistory } from 'vue-router'


// a cada pagina le vamos asignar una ruta

const routes = [
    {
        path: '/actualizar',
        component: () => import ('@/pages/EstudianteActualizar')
    },

    {
        path: '/consultar/:id',
        component: () => import ('@/pages/EstudianteConsultar')
    },

    {
        path: '/guardar',
        component: () => import ('@/pages/EstudianteGuardar')
    },

    {
        path: '/eliminar',
        component: () => import ('@/pages/EstudianteActualizar')
    },

    {
        path: '/:pathMatch(.*)*',
        component: () => import ('@/pages/NoFoundPage')
    },


]

const router = createRouter({history: createWebHashHistory(), routes})

export default router