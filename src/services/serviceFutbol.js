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
            var endPoint = "api/Jugadores/JugadoresEquipo/"+idEquipo;
            axios.get(url+endPoint).then(response =>
            {
                resolve(response.data);
            })
        })
    }

    getDatosEquipo()
    {

    }
}