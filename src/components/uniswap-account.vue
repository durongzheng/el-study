<template>
  <div class="AccountCard">
    <el-card class="card-box">
      <div slot="header" class="clearfix card-header">
        <span>{{ account.address.substring(0,6) + ' ... ' + account.address.substring(36) }}</span>
      </div>
      <div class="card-main-text" v-if="'value' in info">
        {{'人民币总值: ¥' + (parseFloat(info.value)*7).toLocaleString()}}
      </div>
      <div class="card-text card-item" v-if="'value' in info">
        {{'美元总值: $' + parseFloat(info.value).toLocaleString()}}
      </div>
      <div class="card-text card-item" v-if="'investment' in info">
        {{'美元投入: $' + parseFloat(info.investment).toLocaleString()}}
      </div>
      <div class="card-text card-item" v-if="'ratio' in info">
        {{'收益率: ' + info.ratio}}
      </div>
      <div class="card-pair-item" v-if="'pairs' in info">
        <el-divider direction="vertical"></el-divider>
        <span v-for="pair in info.pairs" :key="pair.pair_id" class="card-pair-text">
          <a @click="routeTo(pair)" class="card-pair-link">
            {{ pair.token0_symbol + '-' + pair.token1_symbol}}
          </a>
          <el-divider direction="vertical"></el-divider>
        </span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'AccountCard',
  props: ['account'],
  data () {
    return {
      info: {}
    }
  },
  mounted () {
    this.getAccount(this.account)
  },
  methods: {
    getAccount (account) {
      var config = {
        method: 'get',
        url: '/api/account/' + account.address + '/',
        headers: { }
      }

      this.$axios(config).then((response) => {
        // this.$set(account, 'info', response.data)
        this.info = response.data
        // console.log(this.info)
      }).catch(function (error) {
        console.log(error)
      })
    },
    routeTo (pair) {
      this.$router.push({
        name: 'UniswapPair',
        params: {
          account: this.account,
          pair: pair
        }
      })
    }
  }
}
</script>

<style>
  .card-header {
    font-size: 12px;
    text-align: left;
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

  .card-pair-text {
    font-size: 10px;
    text-align: center;
  }

  .card-pair-item {
    margin-top: 5px;
    margin-bottom: 0px;
  }

  .card-pair-link {
    cursor: pointer;
    text-decoration-line: none;
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
  }
</style>
