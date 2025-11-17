import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import JugadoresComponent from "./components/JugadoresComponent.vue"
import DatosEquipoComponent from "./components/DatosEquipoComponent.vue"

const rutas =
[
    {
        path:"/",
        component:HomeComponent
    },
    {
        path:"/jugadores/:nombre",
        component:JugadoresComponent
    },
    {
        path:"/dastosequipo/:idEquipo",
        component:DatosEquipoComponent
    }
]

const router = createRouter(
    {
        history:createWebHistory(),
        routes:rutas
    }
)

export default router;