<template>
     <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">MENÚ</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="dropdown-item" to="/">Home</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Equipos
          </a>
          <ul class="dropdown-menu">
            <li v-for="equipo of equipos" :key="equipo">
                <router-link class="dropdown-item" :to="'/datosequipo/'+equipo.idEquipo">{{equipo.nombre}}</router-link>
            </li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Introduce nombre de jugador" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
    </div>
</template>

<script>
    import ServiceFutbol from "./../services/serviceFutbol";
    const service = new ServiceFutbol();

    export default 
    {
        data()
        {
            return{
                equipos:[]
            }
        },
        mounted()
        {
            service.getEquipos().then(result =>
            {
                this.equipos = result;
            })
        }
    }
</script>

<style>
    @import './../assets/css/estilos.css'
</style>