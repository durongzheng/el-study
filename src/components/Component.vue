<template>
  <div class="Component">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Component',
  data () {
    return {
      msg: 'Element-UI 组件'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
