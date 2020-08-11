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
          <span> {{(pair.my_token1 / pair.my_token0).toFixed(4)}} </span>
        </el-col>
        <el-col :span="6" class="detail-col detail-label">
          <span> {{pair.token1_symbol + ':' + pair.token0_symbol}} </span>
        </el-col>
        <el-col :span="6" class="detail-col detail-last-col">
          <span> {{(pair.my_token0 / pair.my_token1).toFixed(4)}} </span>
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
          <span> {{(pair.invest_token1 / pair.invest_token0).toFixed(4)}} </span>
        </el-col>
        <el-col :span="6" class="detail-col detail-label">
          <span> {{'投入' + pair.token1_symbol + ':' + pair.token0_symbol}} </span>
        </el-col>
        <el-col :span="6" class="detail-col detail-last-col">
          <span> {{(pair.invest_token0 / pair.invest_token1).toFixed(4)}} </span>
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
      <el-row class="history-head">
        <el-col :span="24">
          <span> {{'最后一次操作日期:  ' + pair.lastDate}} </span>
        </el-col>
        <el-col :span="24" style="font-size:10px; font-weight:normal">
          <span> {{'(距今:  ' + ((Date.now() - Date.parse(pair.lastDate)) / ((1000 * 60 * 60 * 24))).toFixed(0) + '天)' }} </span>
        </el-col>
      </el-row>
      <el-card class="card-box" v-for="action in pair.actions" :key="action.date">
        <div class="card-text card-item" v-if="'date' in action">
          {{'日期: ' + action.date}}
        </div>
        <div class="card-text card-item" v-if="action.type===1"> {{'操作:  投入'}} </div>
        <div class="card-text card-item" v-else> {{'操作:  撤出'}} </div>
        <div class="card-text card-item" v-if="'value' in action">
          {{'价值: ' + action.value.toFixed(2)}}
        </div>
        <div class="card-text card-item" v-if="'date' in action">
          {{pair.token0_symbol + '数量: ' + action.token0.toFixed(2)}}
        </div>
        <div class="card-text card-item" v-if="'date' in action">
          {{pair.token1_symbol + '数量: ' + action.token1.toFixed(2)}}
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
  .history-head {
    margin-top: 20px;
    border-style: solid;
    border-width: 1px;
    border-color: gainsboro;
    font-size: 12px;
    font-weight: bold;
    line-height: 20px;
  }
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
    background-color: #FFE5F1;
    font-size: 8px;
    font-weight: bold;
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
