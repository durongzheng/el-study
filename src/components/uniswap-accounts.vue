<template>
  <div class="UniswapAccounts">
    <h1>{{ title }}</h1>

    <el-row v-for="account in accounts" :key="account.id" class="em-row">
      <AccountCard :account="account"></AccountCard>
    </el-row>

  </div>
</template>

<script>
import AccountCard from './uniswap-account'
export default {
  name: 'UniswapAccounts',
  components: { AccountCard },
  data () {
    return {
      title: 'Uniswap 流动池分析',
      accounts: []
    }
  },
  mounted () {
    this.getAccounts()
  },
  methods: {
    getAccounts () {
      var config = {
        method: 'get',
        url: '/api/user/',
        headers: { }
      }

      this.$axios(config).then((response) => {
        this.$set(this, 'accounts', response.data)
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
  h1 {
    font-weight: normal;
    font-size: 12px;
  }
  .el-row {
    margin: 10px 10px 0px 0px;
}
</style>
