<template>
    <div>
        <div id="echart" style="width:100%;height: 300px"></div>
    </div>
</template>
<script>
let echarts = require("echarts/lib/echarts");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
    name:'echart',
    mounted(){
        this.Chart1();
    },
    methods:{
        Chart1() {
      var myChart1 = echarts.init(document.getElementById("echart"));
      myChart1.setOption({
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(0,0,0,0.5)",
          axisPointer: {
            lineStyle: {
              color: "#ddd"
            }
          },
        //   axisPointer: {
        //     lineStyle: {
        //       color: {
        //         type: "linear",
        //         x: 0,
        //         y: 0,
        //         x2: 0,
        //         y2: 1,
        //         colorStops: [
        //           {
        //             offset: 0,
        //             color: "#d9efff"
        //           },
        //           {
        //             offset: 0.5,
        //             color: "#48b3FF"
        //           },
        //           {
        //             offset: 1,
        //             color: "#d9efff"
        //           }
        //         ],
        //         global: false
        //       }
        //     }
        //   }
        },
        grid: {
          top: "5%",
          left: "5%",
          right: "3%",
          bottom: "8%"
          // containLabel: true
        },
        xAxis: [
          {
            type: "category",
            color: "#59588D",
            axisLine: {
              show: true
            },
            axisLabel: {
              color: "#282828"
            },
            splitLine: {
              // show: true
            },

            axisTick: {
              show: false
            },
            // boundaryGap: true,
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ]
          }
        ],

        yAxis: [
          {
            type: "value",
            min: 0,
            splitNumber: 4,
            splitLine: {
              show: true
            },
            axisLine: {
              show: true
            },
            axisLabel: {
              show: true,
              // margin: 20,
              textStyle: {
                color: "#737373"
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: "rgba(131,101,101,0.2)",
                type: "dashed"
              }
            }
          }
        ],
        series: [
          {
            name: "",
            type: "line",
            // smooth: true, //是否平滑
            showAllSymbol: true,
            symbol: "circle",
            symbolSize: 10,
            lineStyle: {
              normal: {
                color: "#48B3FF"
              }
            },
            label: {
              show: false,
              position: "top",
              textStyle: {
                color: "#48B3FF"
              }
            },
            itemStyle: {
              color: "#FFF",
              borderColor: "#f77062",
              borderWidth: 2
            },
            tooltip: {
              show: true
            },
            areaStyle: {
              normal: {
              
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "#7028e4"
                    },
                    {
                      offset: 1,
                      color: "#e5b2ca"
                    }
                  ],
                  false
                ),
                shadowColor: "#f77062",
                shadowBlur: 20
              }
            },
            data: [55, 35, 62, 55, 97, 64, 44, 66, 78, 82, 33, 77]
          }
        ]
      });
    }
    }
}
</script>

<style scoped>

</style>