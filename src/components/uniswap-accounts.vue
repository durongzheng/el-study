<template>
  <div class="UniswapAccounts">
    <h1>{{ title }}</h1>

    <el-row v-for="account in accounts" :key="account.id" class="em-row">
      <el-card class="box-card">
        <div slot="header" class="clearfix card-header">
          <span>{{ account.address }}</span>
        </div>
        <div class="main-text item" v-if="'info' in account">
          {{'人民币总值: ¥' + (parseFloat(account.info.value)*7).toLocaleString()}}
        </div>
        <div class="text item" v-if="'info' in account">
          {{'美元总值: $' + parseFloat(account.info.value).toLocaleString()}}
        </div>
        <div class="text item" v-if="'info' in account">
          {{'美元投入: $' + parseFloat(account.info.investment).toLocaleString()}}
        </div>
        <div class="text item" v-if="'info' in account">
          {{'收益率: ' + account.info.ratio +'%'}}
        </div>
      </el-card>
    </el-row>

    <!-- <el-row class="em-row">
      <el-button icon="el-icon-refresh" @click="refreshAccounts">手动刷新合约数据 (注意: 不要频繁使用!)</el-button>
    </el-row> -->

  </div>
</template>

<script>
export default {
  name: 'UniswapAccounts',
  data () {
    return {
      title: 'Uniswap 流动池分析',
      accounts: []
    }
  },
  created () {
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
        var i = 0
        for (; i < this.accounts.length; i++) {
          this.getAccount(this.accounts[i])
        }
      }).catch(function (error) {
        console.log(error)
      })
    },

    getAccount (account) {
      var config = {
        method: 'get',
        url: '/api/account/' + account.address + '/',
        headers: { }
      }

      this.$axios(config).then((response) => {
        this.$set(account, 'info', response.data)
      }).catch(function (error) {
        console.log(error)
      })
    },

    refreshAccounts () {
      var config = {
        method: 'get',
        url: '/api/history/refresh/',
        headers: { }
      }

      this.$axios(config).then((response) => {
        console.log(response.data)
        this.getAccounts()
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
  font-size: 12px;
}
.em-row {
  margin: 10px 10px 0px 0px;
}

.card-header {
  font-size: 12px;
  text-align: left;
}
.text {
  font-size: 16px;
  text-align: left;
}
.main-text {
  font-size: 40px;
  color: #ff007a;
}

.item {
  margin-bottom: 10px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 80%;
  text-align: center;
  margin-left: 10%;
}
</style>
