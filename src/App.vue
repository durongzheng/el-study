<template>
  <el-row>
    <el-col :span="18" :offset="3">
      <el-container id="app">
        <el-header>
          <el-row>
            <el-col :span="6">
              <router-link to="/" tag="span">
                <div class="logo">
                  <img src="../static/img/easyman.png">
                </div>
              </router-link>
            </el-col>
            <el-col :span="18">
              <ul>
                <li class="navbar">
                  <el-link :underline="false" @click="uniswapAccounts">Uniswap流动池</el-link>
                </li>
                <el-divider direction="vertical"></el-divider>
                <li class="navbar">基础组件</li><el-divider direction="vertical"></el-divider>
                <li class="navbar">表单组件</li><el-divider direction="vertical"></el-divider>
                <li class="navbar">html&css效果</li>
              </ul>
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
              active-text-color="#ffd012">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>基础组件</span>
                </template>
                <el-menu-item index="1-1">Button</el-menu-item>
                <el-menu-item index="1-2">文字链接</el-menu-item>
              </el-submenu>

              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-upload"></i>
                  <span>表单组件</span>
                </template>
                <el-menu-item index="2-1">单选框</el-menu-item>
                <el-menu-item index="2-2">多选框</el-menu-item>
                <el-menu-item index="2-3">输入框</el-menu-item>
                <el-menu-item index="2-4">计数器</el-menu-item>
                <el-menu-item index="2-5">选择器</el-menu-item>
                <el-menu-item index="2-6">级联选择器</el-menu-item>
              </el-submenu>

              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-s-custom"></i>
                  <span>html&css效果</span>
                </template>
                <el-menu-item index="3-1">动画演示</el-menu-item>
              </el-submenu>

              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-pie-chart"></i>
                  <span>e-charts组件</span>
                </template>
                <el-menu-item index="4-1">直方图</el-menu-item>
              </el-submenu>

              <el-submenu index="5">
                <template slot="title">
                  <i class="el-icon-pie-chart"></i>
                  <span>Uniswap流动池分析</span>
                </template>
                <el-menu-item index="5-1">账户一览</el-menu-item>
              </el-submenu>

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
    return { }
  },
  methods: {
    handleSelect (key, keyPath) {
      switch (key) {
        case '1-1':
          this.$router.push('/Buttons')
          break
        case '1-2':
          this.$router.push('/TextLink')
          break
        case '2-1':
          this.$router.push('/Radios')
          break
        case '2-2':
          this.$router.push('/Checkboxes')
          break
        case '2-3':
          this.$router.push('/Inputs')
          break
        case '2-4':
          this.$router.push('/InputNumbers')
          break
        case '2-5':
          this.$router.push('/Selects')
          break
        case '2-6':
          this.$router.push('/Cascader')
          break
        case '3-1':
          this.$router.push('/Animations')
          break
        case '4-1':
          this.$router.push('/EchartsBar')
          break
        case '5-1':
          this.$router.push('/UniswapAccounts')
          break
        default:
          this.$router.push('/')
          break
      }
    },
    uniswapAccounts () {
      this.$router.push('/UniswapAccounts')
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
  float: left;
  height: 40px;
}
.logo span{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  font-size: 24px;
  color: rgb(0, 0, 0);
}
li.navbar{
  display: inline-block;
}
.el-menu{
  text-align: left;
}
</style>
