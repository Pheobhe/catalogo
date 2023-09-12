<template>
    <div class="cell">
        <ul class="lista">
            <li 
            v-for = "n in 10" 
            :key="n" 
            class="lista__item">
                <a 
                class="lista__item__link" 
                href="#"> 
                filtro ejemplo
                </a>
            </li>       
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'TheListaCategorias'
    }
</script>

<style lang="scss" scoped>
.lista {
    list-style: none;
    padding: 0px;
    margin: 0px;
    &__item {
        display: block;
        &__link {
            display: block;
            padding: 10px;
            text-decoration: none;
            color: $color-2;
            font-family:  $ff-2;
        }
    }
}

</style>