<template>
  <el-row>
    <el-col :span="18" :offset="3">
      <el-container id="app">
        <el-header>
          <el-row>
            <el-col :span="8">
              <router-link to="/" tag="span">
                <div class="logo">
                  <img src="../static/img/buyerdao.png">
                  <span>BuyerDAO</span>
                </div>
              </router-link>
            </el-col>
            <el-col :span="16">
              {{ msg }}
            </el-col>
          </el-row>
        </el-header>
        <el-container>
          <el-aside width="25%">
            <el-menu
              default-active="1"
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>基础组件</span>
                </template>
                <el-menu-item index="1-1">Button</el-menu-item>
                <el-menu-item index="1-2">文字链接</el-menu-item>
              </el-submenu>
              <el-menu-item index="2" disabled>
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </el-menu-item>
            </el-menu>
          </el-aside>
          <el-main>
              <!-- 路由匹配到的组件将渲染在这里 -->
              <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'Buttons'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      switch (key) {
        case '1-1':
          this.msg = 'Buttons'
          this.$router.push('/Buttons')
          break
        case '1-2':
          this.msg = '文字链接'
          this.$router.push('/TextLink')
          break
        default:
          this.msg = 'Element UI components'
          this.$router.push('/')
          break
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.logo{
  margin: 0px auto;
  text-align: left;
  line-height: 35px;
  cursor: pointer;
}
.logo img{
  display: inline;
  float: left;
  height: 32px;
}
.logo span{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  font-size: 20px;
  font color: #000;
}
</style>
