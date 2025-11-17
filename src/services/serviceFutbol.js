import axios from "axios";
import Global from "./../Global";

export default class ServiceFutbol
{
    getEquipos()
    {
        return new Promise(function(resolve)
        {
            var url = Global.api;
            var endPoint = "api/Equipos";
            axios.get(url+endPoint).then(response =>
            {
                resolve(response.data);
            })
        })
    }

    findJugadoresNombre(nombre)
    {
        return new Promise(function(resolve)
        {
            var url = Global.api;
            var endPoint = "api/Jugadores/BuscarJugadores/"+nombre;
            axios.get(url+endPoint).then(response =>
            {
                resolve(response.data);
            })
        })
    }

    findEquipo(idEquipo)
    {
        return new Promise(function(resolve)
        {
            var url = Global.api;
            var endPoint = "api/Equipos/"+idEquipo;
            axios.get(url+endPoint).then(response =>
            {
                resolve(response.data);
            })
        })
    }

    findJugadoresEquipo(idEquipo)
    {
        return new Promise(function(resolve)
        {
            var url = Global.api;
            var endPoint = "api/Jugadores/JugadoresEquipos/"+idEquipo;
            axios.get(url+endPoint).then(response =>
            {
                resolve(response.data);
            })
        })
    }

    getDatosEquipo(idEquipo) 
    {
        return new Promise((resolve) => 
        { 
            Promise.all(
                [
                this.findEquipo(idEquipo),
                this.findJugadoresEquipo(idEquipo)
            ]).then(([equipo, jugadores]) => 
                {
                const datosEquipo = 
                {
                    equipo: equipo,
                    jugadores: jugadores
                };
                resolve(datosEquipo);
            });
        });
}

}