<template>
  <div class="InputNumbers">
    <h1>{{ msg }}</h1>
    <h5>{{ tips }}</h5>
    <div>
        <span style="margin-right: 10px">正常:</span>
        <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
        <span style="margin: 0 10px 0 10px">禁用:</span>
        <el-input-number v-model="num" :disabled="true"></el-input-number>
    </div>
    <div style="margin-top: 20px">
        <span style="margin-right: 10px">限制步长:</span>
        <el-input-number v-model="num" :step="2"></el-input-number>
        <span style="margin: 0 10px 0 10px">严格限制步长:</span>
        <el-input-number v-model="num" :step="2" step-strictly></el-input-number>
    </div>
    <div style="margin-top: 20px">
        <span style="margin-right: 10px">精度:</span>
        <el-input-number v-model="num" :precision="2" :step="0.1" :max="10"></el-input-number>
    </div>
    <div style="margin-top: 20px">
        <span style="margin: 0 10px 0 10px">正常尺寸:</span>
        <el-input-number v-model="num1"></el-input-number>
        <span style="margin: 0 10px 0 10px">medium:</span>
        <el-input-number size="medium" v-model="num2"></el-input-number>
        <div style="margin-top: 10px"></div>
        <span style="margin: 0 10px 0 10px">small:</span>
        <el-input-number size="small" v-model="num3"></el-input-number>
        <span style="margin: 0 10px 0 10px">mini:</span>
        <el-input-number size="mini" v-model="num4"></el-input-number>
    </div>
    <div style="margin-top: 20px">
        <span style="margin: 0 10px 0 10px">控制块放右边:</span>
        <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputNumbers',
  data () {
    return {
      msg: 'Element-UI 计数器',
      tips: 'Element 计数器步长点击不正常，每次步进都处理了2次.',
      num: 1,
      num1: 1,
      num2: 1,
      num3: 1,
      num4: 1
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
