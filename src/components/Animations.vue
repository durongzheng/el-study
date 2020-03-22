<template>
  <div class="Animations">
    <h1>{{ msg }}</h1>
  <div class="container">
      <div class="item">

      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Animations',
  data () {
    return {
      msg: 'CSS 动画演示'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
    width: 400px;
    height: 400px;
    margin: 20px 0 0 100px;
    border:solid 0.5px red;
    background: #000000d7;
}
.item{
    width: 50px;
    height: 50px;
    background: yellow;
    position: relative;
    animation: mymove 5s infinite;
}
@keyframes mymove {
    0%   {top:0px; left:0px; background:red;}
    25%  {top:0px; left:350px; background:blue;}
    50%  {top:350px; left:350px; background:yellow;}
    75%  {top:350px; left:0px; background:green;}
    100% {top:0px; left:0px; background:red;}
}
</style>
