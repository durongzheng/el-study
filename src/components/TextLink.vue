<template>
  <div class="TextLink">
    <h1>{{ msg }}</h1>
    <el-row style="margin-top: 20px">
      <el-col>
        <div>
          <el-link>默认链接</el-link>
          <el-link type="primary">主要链接</el-link>
          <el-link type="success">成功链接</el-link>
          <el-link type="warning">警告链接</el-link>
          <el-link type="danger">危险链接</el-link>
          <el-link type="info">信息链接</el-link>
        </div>
      </el-col>
    </el-row>
    <el-row style="margin-top: 20px">
      <el-col>
        <div>
          <el-link disabled>默认链接</el-link>
          <el-link type="primary" disabled>主要链接</el-link>
          <el-link type="success" disabled>成功链接</el-link>
          <el-link type="warning" disabled>警告链接</el-link>
          <el-link type="danger" disabled>危险链接</el-link>
          <el-link type="info" disabled>信息链接</el-link>
        </div>
      </el-col>
    </el-row>
    <el-row style="margin-top: 20px">
      <el-col>
        <div>
          <el-link :underline="false">无下划线</el-link>
          <el-link>有下划线</el-link>
        </div>
      </el-col>
    </el-row>
    <el-row style="margin-top: 20px">
      <el-col>
        <div>
          <el-link icon="el-icon-edit">编辑</el-link>
          <el-link>查看<i class="el-icon-view el-icon--right"></i> </el-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'TextLink',
  data () {
    return {
      msg: 'Element-UI 文字链接'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
