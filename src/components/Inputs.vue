<template>
  <div class="Inputs">
    <h1>{{ msg }}</h1>
    <el-row>
        <el-col :span="12">
            <div>
                <el-input v-model="input" placeholder="请输入内容"></el-input>
            </div>
            <div style="margin-top: 20px">
                <el-input
                placeholder="请输入内容"
                v-model="input"
                :disabled="true">
                </el-input>
            </div>
            <div style="margin-top: 20px">
                <el-input
                placeholder="请输入内容"
                v-model="input"
                clearable>
                </el-input>
            </div>
            <div style="margin-top: 20px">
                <el-input placeholder="请输入密码" v-model="input" show-password></el-input>
            </div>
            <div class="demo-input-suffix" style="margin-top: 20px">
                属性方式：
                <el-input
                    placeholder="属性方式-后置图标"
                    suffix-icon="el-icon-date"
                    v-model="input1"
                    style="margin-top: 10px">
                </el-input>
                <el-input
                    placeholder="属性方式-前置图标"
                    prefix-icon="el-icon-search"
                    v-model="input2"
                    style="margin-top: 10px">
                </el-input>
                </div>
                <div class="demo-input-suffix" style="margin-top: 10px">
                slot 方式：
                <el-input
                    placeholder="slot方式-后置图标"
                    v-model="input3"
                    style="margin-top: 10px">
                    <i slot="suffix" class="el-input__icon el-icon-date"></i>
                </el-input>
                <el-input
                    placeholder="slot方式-前置图标"
                    v-model="input4"
                    style="margin-top: 10px">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
            </div>
        </el-col>
        <el-col :span="11" :offset="1">
            <div>
                <el-input
                type="textarea"
                :rows="2"
                placeholder="多行输入框"
                v-model="textarea">
                </el-input>
            </div>
            <div>
                <el-input
                type="textarea"
                autosize
                placeholder="可自适应高度多行"
                v-model="textarea1"
                style="margin: 10px 0">
                </el-input>
                <div style="margin: 10px 0;"></div>
                <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="限定最小行数和最大行数的多行"
                v-model="textarea2">
                </el-input>
            </div>
            <div style="margin-top: 20px">
                <el-input placeholder="前置元素输入框" v-model="input1">
                    <template slot="prepend">Http://</template>
                </el-input>
            </div>
            <div style="margin-top: 10px;">
                <el-input placeholder="后置元素输入框" v-model="input2">
                    <template slot="append">.com</template>
                </el-input>
            </div>
            <div style="margin-top: 10px;">
                <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                    <el-select v-model="select" slot="prepend" placeholder="请选择">
                        <el-option label="餐厅名" value="1"></el-option>
                        <el-option label="订单号" value="2"></el-option>
                        <el-option label="用户电话" value="3"></el-option>
                    </el-select>
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </div>
            <div style="margin-top: 20px">
                <el-input
                    placeholder="正常尺寸"
                    suffix-icon="el-icon-date"
                    v-model="input1">
                </el-input>
            </div>
            <div style="margin-top: 10px">
                <el-input
                    size="medium"
                    placeholder="尺寸为 medium"
                    suffix-icon="el-icon-date"
                    v-model="input2">
                </el-input>
            </div>
            <div style="margin-top: 10px">
                <el-input
                    size="small"
                    placeholder="尺寸为 small"
                    suffix-icon="el-icon-date"
                    v-model="input3">
                </el-input>
            </div>
            <div style="margin-top: 10px">
                <el-input
                    size="mini"
                    placeholder="尺寸为 mini"
                    suffix-icon="el-icon-date"
                    v-model="input4">
                </el-input>
            </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Inputs',
  data () {
    return {
      msg: 'Element-UI 输入框',
      input: '',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      textarea: '',
      textarea1: '',
      textarea2: '',
      select: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .input-with-select {
    background-color: #fff;
  }
</style>
