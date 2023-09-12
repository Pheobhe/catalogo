<template>
  <div class="grid-container">
        <div class="grid-x grid-margin-x">
            <div class="cell small-12 medium-2 large-3">
               <the-lista-categorias />
            </div>
            <div class="cell small-12 medium-10 large-9">
                <p>aca van los colores </p>
                    aca va el contenido
            </div>
        </div>
  </div>
</template>

<script>
import TheListaCategorias from '@/components/categorias/TheListaCategorias.vue'

    export default {
     name: 'CategoriasPage',
     components: {
        TheListaCategorias
          
     }
    }
</script>

<style lang="scss" scoped>

</style>