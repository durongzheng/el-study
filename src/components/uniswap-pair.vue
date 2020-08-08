<template>
  <div class="UniswapPair">
    <div v-if="account">
      <el-page-header @back="goBack" :content="pair.token0_symbol + '-' + pair.token1_symbol + ' 详情'">
      </el-page-header>
      <el-card class="card-box">
        <div slot="header" class="clearfix card-header">
          <span>
            概要
          </span>
          <span style="float: right; padding: 3px 0">
            {{ account.address.substring(0,6) + ' ... ' + account.address.substring(36) }}
          </span>
        </div>
        <div class="card-main-text" v-if="'value' in pair">
          {{'人民币总值: ¥' + (parseFloat(pair.value)*7).toLocaleString()}}
        </div>
        <div class="card-text card-item" v-if="'value' in pair">
          {{'美元总值: $' + parseFloat(pair.value).toLocaleString()}}
        </div>
        <div class="card-text card-item" v-if="'investment' in pair">
          {{'美元投入: $' + parseFloat(pair.investment).toLocaleString()}}
        </div>
        <div class="card-text card-item" v-if="'ratio' in pair">
          {{'收益率: ' + pair.ratio}}
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UniswapPair',
  created () {
    this.getRouterData()
  },
  data () {
    return {
      account: {},
      pair: {}
    }
  },
  methods: {
    getRouterData () {
      this.account = this.$route.params.account
      this.pair = this.$route.params.pair
    },
    goBack () {
      this.$router.push('/UniswapAccounts')
    }
  }
}
</script>

<style>
  .card-text {
    font-size: 12px;
    text-align: left;
  }
  .card-main-text {
    font-size: 20px;
    color: #ff007a;
    margin-bottom: 15px;
  }

  .card-item {
    margin-bottom: 10px;
  }

  .card-header {
    font-size: 12px;
    text-align: left;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .card-box {
    width: 100%;
    text-align: center;
    margin-left: 0;
    margin-top: 10px;
  }
</style>
