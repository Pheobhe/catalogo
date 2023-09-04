<template>
    <div class="banner">
        <img 
        class="banner__img"
        src="../../assets/fondo.png" alt="">
        <h1 class="banner__title">Bienvenidos a mi tienda de practicas</h1>
<div class="banner__copy">
            <p class="nabber__copy__text">
                En esta es una pequeña app web podre ver el catalogo de productos y practicar con vue router,
                ciclo de vidad e un componente y cargar datos desde un servidor.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Banner'
    }
</script>

<style lang="scss" scoped>
    .banner{
        border: 1px solid;
        text-align:center;
        &__img{
            width: 100%;
            height: 200px;
            // cuando el tamaño de la pantalla quiero que cambie de acuerdo al dispo
           @include desde($medium){
                height: 300px;
           };
           @include desde($large){
            height: 550px;
            };
            @include desde($extra-large){
                height: 600px;
            };
           //@include hasta(720px){
           // height: 200px;
           //}
        }
    }
</style>