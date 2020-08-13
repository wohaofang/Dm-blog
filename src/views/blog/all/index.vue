<template>
  <div class="blog">
    <container>
        <Nav :local="'撒旦法'"></Nav>
    </container>
  </div>
</template>

<script>
import Nav from '@/components/nav/index.vue'
import container from '@/components/container/index.vue'
export default {
    components:{
        Nav,
        container
    },
}
</script>

<style>

</style>