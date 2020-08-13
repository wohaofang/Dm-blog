<template>
  <div class="container">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container {
    max-width: 800px;
    padding-left: 40px;
    margin: auto;
    word-break: break-all;
}
</style>