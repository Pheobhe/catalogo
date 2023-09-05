<template>
    <div class="banner">
        <img 
        class="banner__img"
        src="../../assets/fondo.png"
        >
        <h1 class="banner__title">Bienvenidos a mi tienda de practicas</h1>
            <div class="banner__copy">
                <p class="banner__copy__text">
                    En esta es una pequeña app web podre ver el catalogo de productos y practicar con vue router,
                    ciclo de vida de un componente y cargar datos desde un servidor.
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
            // cuando el tamaño de la pantalla quiero que cambie de acuerdo al dispositivo
           @include desde($medium){
                height: 300px;
            }

           @include desde($large){
            height: 550px;
            }
            @include desde($extra-large){
                height: 600px;
            }
        }
        &__title{
            font-family: $ff-1;
            color: $color-1;
        }
        &__copy{
            padding: 1em;
            background: $color-3;
            @include desde($medium){
                margin: 2em;
            }
            
            @include desde($large){
                margin-left: 8em;
                margin-right: 8em;
            }
            
            
            &__text{
            font-size: 12px;
            font-family: $ff-3;
            color: $color-4;
         }
        }
        
    }
</style>