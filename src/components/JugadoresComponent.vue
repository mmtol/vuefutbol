<template>
    <div>
        <h1>Jugadores</h1>
        <table class="table table-form">
            <thead>
                <tr>
                    <th>ID Jugador</th>
                    <th>Nombre</th>
                    <th>Posición</th>
                    <th>Imagen</th>
                    <th>Fecha Nacimiento</th>
                    <th>País</th>
                    <th>ID Equipo</th>
                </tr>
            </thead>
            <tbody v-for="jugador of jugadores" :key="jugador">
                <tr>
                    <td>{{jugador.idJugador}}</td>
                    <td>{{jugador.nombre}}</td>
                    <td>{{jugador.posicion}}</td>
                    <td><img :src="jugador.imagen"/></td>
                    <td>{{jugador.fechaNacimiento}}</td>
                    <td>{{jugador.pais}}</td>
                    <td>{{jugador.idEquipo}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import ServiceFutbol from '@/services/serviceFutbol';
    const service = new ServiceFutbol();

    export default 
    {
        data()
        {
            return{
                jugadores:[],
                nombre:""
            }
        },
        mounted()
        {
            this.nombre = this.$route.params.nombre;
            service.findJugadoresNombre(this.nombre).then(result =>
            {
              this.jugadores = result;  
            })

        },
        watch:
        {
            '$route.params.nombre' (nextVal, oldVal) 
            { 
                if (nextVal != oldVal) 
                { 
                    this.nombre = this.$route.params.nombre;
                } 
            } 
        }
    }
</script>

<style>
    @import './../assets/css/estilos.css'
</style>