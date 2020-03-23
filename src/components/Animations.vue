<template>
  <div class="Animations">
    <h1>{{ msg }}</h1>
    <el-row>
      <el-col :span="11">
        <div class="container">
            <div class="item"></div>
        </div>
      </el-col>
      <el-col :span="11" :offset="2">
        <div class="container">
          <div class="item2"></div>
        </div>
      </el-col>
    </el-row>
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
    width: 200px;
    height: 200px;
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
.item2{
    width: 50px;
    height: 50px;
    background: yellow;
    position: relative;
    animation: mymove2 2s infinite;
}
@keyframes mymove {
    0%   {top:0px; left:0px; background:red;}
    25%  {top:0px; left:150px; background:blue;}
    50%  {top:150px; left:150px; background:yellow;}
    75%  {top:150px; left:0px; background:green;}
    100% {top:0px; left:0px; background:red;}
}
@keyframes mymove2 {
    0%   {top:0px; left:0px; background:red;}
    25%  {top:0px; left:150px; background:blue; border-radius: 50%;}
    50%  {top:150px; left:150px; background:yellow; border-radius: 0;}
    75%  {top:150px; left:0px; background:green; border-radius: 50%;}
    100% {top:0px; left:0px; background:red;}
}
</style>
