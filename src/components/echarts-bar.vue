<template>
  <div class="EchartsBar">
    <h1>{{ msg }}</h1>

    <div id="myChart" :style="{width: '600px', height: '300px', position: 'relative', left: '100px'}"></div>
    <div id="chart2" :style="{width: '600px', height: '400px', position: 'relative', left: '100px', top: '20px'}"></div>
  </div>
</template>

<script>

export default {
  name: 'EchartsBar',
  data () {
    return {
      msg: 'Echarts 直方图'
    }
  },
  mounted () {
    this.drawLine()
    this.drawLine2()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'), 'dark')
      // 绘制图表
      myChart.setOption({
        title: {
          text: '地市收入对比图',
          left: 'center'
        },
        tooltip: {},
        itemStyle: {
        //   barBorderRadius: 5
        },
        xAxis: {
          data: ['成都', '天府新区', '德阳', '绵阳', '广元', '巴中']
        },
        yAxis: {},
        legend: {
          data: ['收入'],
          left: 'left'
        },
        series: [{
          name: '收入',
          type: 'bar',
          data: [500, 200, 150, 120, 80, 40],
          color: ['#6495ED']
        }]
      })
    },
    drawLine2 () {
      let chart2 = this.$echarts.init(document.getElementById('chart2'), 'light')
      let option2 = {
        title: {
          text: '本周携号转网',
          left: 'center',
          textStyle: {
            fontSize: 20
          }
        },
        itemStyle: {
          // barBorderRadius: 5
          // shadowBlur: 10,
          // shadowOffsetX: 10,
          // shadowOffsetY: 5
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['转入-转出', '转出', '转入'],
          left: 'left'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'value'
          }
        ],
        yAxis: [
          {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        series: [
          {
            name: '转入-转出',
            type: 'bar',
            label: {
              show: true,
              position: 'inside'
            },
            data: [200, 170, 240, 244, 200, 220, 210]
          },
          {
            name: '转入',
            type: 'bar',
            stack: '总量',
            label: {
              show: true
            },
            data: [320, 302, 341, 374, 390, 450, 420]
          },
          {
            name: '转出',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'inside'
            },
            data: [-120, -132, -101, -134, -190, -230, -210]
          }
        ]
      }
      chart2.setOption(option2)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
