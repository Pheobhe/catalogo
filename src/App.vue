<template>
  <main-header />
  <router-view/>
</template>

<script>
import MainHeader from '@/components/includes/MainHeader.vue'
  export default{
    name: 'App',
    components:{
      MainHeader
    }
  }

</script>

<style lang="scss">
  *{
    padding: 0;
    margin: 0;
  }
</style>
