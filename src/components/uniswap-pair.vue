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
          {{'人民币价值: ¥' + (parseFloat(pair.value)*7).toFixed(2).toLocaleString()}}
        </div>
        <div class="card-text card-item" v-if="'value' in pair">
          {{'美元价值: $' + parseFloat(pair.value).toFixed(2).toLocaleString()}}
        </div>
        <div class="card-text card-item" v-if="'investment' in pair">
          {{'美元投入: $' + parseFloat(pair.investment).toFixed(2).toLocaleString()}}
        </div>
        <div class="card-text card-item" v-if="'ratio' in pair">
          {{'收益率: ' + pair.ratio}}
        </div>
      </el-card>
      <el-row class="detail-row detail-first-row">
        <el-col :span="6" class="detail-col detail-label">
          <span> {{'当前价值($)'}} </span>
        </el-col>
        <el-col :span="6" class="detail-col">
          <span> {{pair.value.toFixed(2)}} </span>
        </el-col>
        <el-col :span="6" class="detail-col detail-label">
          <span> {{'持币价值($)'}} </span>
        </el-col>
        <el-col :span="6" class="detail-col detail-last-col">
          <span> {{(pair.price_profit+pair.investment).toFixed(2)}} </span>
        </el-col>
      </el-row>
      <el-row class="detail-row">
        <el-col :span="6" class="detail-col detail-label">
          <span> {{'我的' + pair.token0_symbol}} </span>
        </el-col>
        <el-col :span="6" class="detail-col">
          <span> {{pair.my_token0.toFixed(2)}} </span>
        </el-col>
        <el-col :span="6" class="detail-col detail-label">
          <span> {{'我的' + pair.token1_symbol}} </span>
        </el-col>
        <el-col :span="6" class="detail-col detail-last-col">
          <span> {{pair.my_token1.toFixed(2)}} </span>
        </el-col>
      </el-row>
      <el-row class="detail-row">
        <el-col :span="6" class="detail-col detail-label">
          <span> {{pair.token0_symbol + ':' + pair.token1_symbol}} </span>
        </el-col>
        <el-col :span="6" class="detail-col">
          <span> {{(pair.my_token1 / pair.my_token0).toFixed(2)}} </span>
        </el-col>
        <el-col :span="6" class="detail-col detail-label">
          <span> {{pair.token1_symbol + ':' + pair.token0_symbol}} </span>
        </el-col>
        <el-col :span="6" class="detail-col">
          <span> {{(pair.my_token0 / pair.my_token1).toFixed(2)}} </span>
        </el-col>
      </el-row>
      <el-row class="detail-row">
        <el-col :span="6" class="detail-col detail-label">
          <span> {{'投入的' + pair.token0_symbol}} </span>
        </el-col>
        <el-col :span="6" class="detail-col">
          <span> {{pair.invest_token0.toFixed(2)}} </span>
        </el-col>
        <el-col :span="6" class="detail-col detail-label">
          <span> {{'投入的' + pair.token1_symbol}} </span>
        </el-col>
        <el-col :span="6" class="detail-col detail-last-col">
          <span> {{pair.invest_token1.toFixed(2)}} </span>
        </el-col>
      </el-row>
      <el-row class="detail-row">
        <el-col :span="6" class="detail-col detail-label">
          <span> {{'投入' + pair.token0_symbol + ':' + pair.token1_symbol}} </span>
        </el-col>
        <el-col :span="6" class="detail-col">
          <span> {{(pair.invest_token1 / pair.invest_token0).toFixed(2)}} </span>
        </el-col>
        <el-col :span="6" class="detail-col detail-label">
          <span> {{'投入' + pair.token1_symbol + ':' + pair.token0_symbol}} </span>
        </el-col>
        <el-col :span="6" class="detail-col detail-last-col">
          <span> {{(pair.invest_token0 / pair.invest_token1).toFixed(2)}} </span>
        </el-col>
      </el-row>
      <el-row class="detail-row">
        <el-col :span="6" class="detail-col detail-label">
          <span> {{'总收益率'}} </span>
        </el-col>
        <el-col :span="6" class="detail-col">
          <span> {{pair.ratio}} </span>
        </el-col>
        <el-col :span="6" class="detail-col detail-label">
          <span> {{'总收益'}} </span>
        </el-col>
        <el-col :span="6" class="detail-col detail-last-col">
          <span> {{pair.profit.toFixed(2)}} </span>
        </el-col>
      </el-row>
      <el-row class="detail-row">
        <el-col :span="6" class="detail-col detail-label">
          <span> {{'流动池收益率'}} </span>
        </el-col>
        <el-col :span="6" class="detail-col">
          <span> {{pair.pool_ratio}} </span>
        </el-col>
        <el-col :span="6" class="detail-col detail-label">
          <span> {{'流动池收益'}} </span>
        </el-col>
        <el-col :span="6" class="detail-col detail-last-col">
          <span> {{pair.pool_profit.toFixed(2)}} </span>
        </el-col>
      </el-row>
      <el-row class="detail-row">
        <el-col :span="6" class="detail-col detail-label">
          <span> {{'价格波动率'}} </span>
        </el-col>
        <el-col :span="6" class="detail-col">
          <span> {{pair.price_ratio}} </span>
        </el-col>
        <el-col :span="6" class="detail-col detail-label">
          <span> {{'价格波动收益'}} </span>
        </el-col>
        <el-col :span="6" class="detail-col detail-last-col">
          <span> {{pair.price_profit.toFixed(2)}} </span>
        </el-col>
      </el-row>
      <el-row class="detail-row detail-last-row">
        <el-col :span="6" class="detail-col detail-label">
          <span> {{'Uniswap收益率'}} </span>
        </el-col>
        <el-col :span="6" class="detail-col">
          <span> {{pair.uniswap_ratio}} </span>
        </el-col>
        <el-col :span="6" class="detail-col detail-label">
          <span> {{'Uniswap收益'}} </span>
        </el-col>
        <el-col :span="6" class="detail-col detail-last-col">
          <span> {{pair.uniswap_profit.toFixed(2)}} </span>
        </el-col>
      </el-row>
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
  .detail-row {
    line-height: 20px;
  }
  .detail-first-row {
    margin-top: 20px
  }
  .detail-last-row {
    border-style: none none solid none;
    border-width: 1px;
    border-color: gainsboro;
  }
  .detail-col {
    border-style: solid none none solid;
    border-width: 1px;
    border-color: gainsboro;
    font-size: 12px;
  }
  .detail-last-col {
    border-style: solid solid none solid;
  }
  .detail-label {
    background-color:lightcyan;
    font-size: 8px;
  }

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
