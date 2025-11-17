<template>
    <div v-if="datosEquipo.equipo && datosEquipo.jugadores">
        <h1>Datos equipo</h1>
        <div>
            <div>
                <h2>Equipo</h2>
                <h3>{{datosEquipo.equipo.nombre}}</h3>
                <img :src="datosEquipo.equipo.imagen"/>
                <p>Champions: {{datosEquipo.equipo.champions}}</p>
                <p>Finalista: {{datosEquipo.equipo.finalista}}</p>
            </div>
            <div>
                <h2>Jugadores</h2>
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
                    <tbody v-for="jugador of datosEquipo.jugadores" :key="jugador">
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
        </div>
    </div>
</template>

<script>
    import ServiceFutbol from '@/services/serviceFutbol'
    const service = new ServiceFutbol();

    export default 
    {
        data()
        {
            return{
                datosEquipo:{},
                idEquipo:0
            }
        },
        mounted()
        {
            this.idEquipo = this.$route.params.idEquipo;
            service.getDatosEquipo(this.idEquipo).then(result =>
            {
                this.datosEquipo = result;
            })
        },
        watch:
        {
            '$route.params.idEquipo' (nextVal, oldVal) 
            { 
                if (nextVal != oldVal) 
                { 
                    this.idEquipo = this.$route.params.idEquipo;
                    service.getDatosEquipo(this.idEquipo).then(result =>
                    {
                        this.datosEquipo = result;
                    })
                } 
            } 
        }
    }
</script>

<style>
    @import './../assets/css/estilos.css'
</style>