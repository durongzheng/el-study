<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div style="margin-top: 20px">
      <h2>基础组件</h2>
      <ul>
        <li>
          <el-link @click="handleButtons">Button组件</el-link>
        </li>
        <li>
          <el-link @click="handleTextLinks">文字链接</el-link>
        </li>
      </ul>
    </div>
    <div style="margin-top: 40px">
      <h2>表单组件</h2>
      <ul>
        <li>
          <el-link @click="handleRadios">单选框</el-link>
        </li>
        <li>
          <el-link @click="handleCheckboxes">多选框</el-link>
        </li>
        <li>
          <el-link @click="handleInputs">输入框</el-link>
        </li>
        <li>
          <el-link @click="handleInputNumbers">计数器</el-link>
        </li>
        <li>
          <el-link @click="handleSelects">选择器</el-link>
        </li>
        <li>
          <el-link @click="handleCascader">级联选择器</el-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Element 组件学习'
    }
  },
  methods: {
    handleButtons () {
      this.msg = 'Buttons'
      this.$router.push('/Buttons')
    },
    handleTextLinks () {
      this.msg = '文字链接'
      this.$router.push('/TextLink')
    },
    handleRadios () {
      this.msg = '单选框'
      this.$router.push('/Radios')
    },
    handleCheckboxes () {
      this.msg = '多选框'
      this.$router.push('/Checkboxes')
    },
    handleInputs () {
      this.msg = '输入框'
      this.$router.push('/Inputs')
    },
    handleInputNumbers () {
      this.msg = '计数器'
      this.$router.push('/InputNumbers')
    },
    handleSelects () {
      this.msg = '选择器'
      this.$router.push('/Selects')
    },
    handleCascader () {
      this.msg = '计数器'
      this.$router.push('/Cascader')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  float: left;
  margin: 0 10px 0 10px;
}
</style>
