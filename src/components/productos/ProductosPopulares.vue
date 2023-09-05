<template>
    <div class="cell grid-x grid-margin-x">
        <div 
            class="cell small-6 medium-4 large-3"
            v-for="p in 12" 
            :key="p">
                <v-card-producto />
            image=" "
            name=" "
            :price="0"
        </div>
    </div>
</template>

<script>
import VCardProducto from '../base/VCardProducto.vue';

    export default {
        name: 'ProductosPopulares',
        components: {
            VCardProducto
        }
    }
</script>

<style lang="scss" scoped>

</style>