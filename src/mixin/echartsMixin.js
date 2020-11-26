export default {
  data() {
    return {
      //安全生产数据折线图
      lineOptions: {
        grid: {
          top: '20%',
          left: '2%',
          right: '2%',
          bottom: '2%',
          containLabel: true
        },

        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            label: {
              show: true
            }
          }
        },
        legend: {
          data: ["违章总量", "车均违章率"],
          textStyle: {
            color: "#ffffff"
          }
        },
        xAxis: {
          data: ['白云', '越秀', '天河', '海珠', '荔湾', '黄埔', '增城', '番禺', '花都', '从化'],
          axisLine: {
            show: true //隐藏X轴轴线
          },
          axisTick: {
            show: false //隐藏X轴刻度
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff" //X轴文字颜色
            }
          },
          axisLine: {
            lineStyle: {
              color: '#01FCE3'
            }
          },
        },
        yAxis: [{
            type: "value",
            name: "(总量)",
            min: 0,
            max: 500,
            nameTextStyle: {
              color: "#fff"
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#fff"
              }
            },
            axisLine: {
              lineStyle: {
                color: '#FFFFFF'
              }
            },
          },
          {
            type: "value",
            name: "(车均)",
            min: 0,
            max: 100,
            nameTextStyle: {
              color: "#fff"
            },
            position: "right",
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#FFFFFF'
              }
            },
            axisLabel: {
              show: true,
              formatter: "{value} %", //右侧Y轴文字显示
              textStyle: {
                color: "#fff"
              }
            }
          },
        ],
        series: [{
            name: "车均违章率",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 10, //标记的大小
            itemStyle: {
              //折线拐点标志的样式
              color: "#058cff"
            },
            lineStyle: {
              color: "#058cff"
            },
            areaStyle: {
              color: "rgba(5,140,255, 0.2)"
            },
            data: [14, 33, 24, 35, 29, 28, 30, 50, 67, 83]
          },
          {
            name: "车均违章率",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 10, //标记的大小
            itemStyle: {
              //折线拐点标志的样式
              // color: "#058cff"
            },
            lineStyle: {
              color: "#058cff"
            },
            areaStyle: {
              color: "rgba(5,140,255, 0.2)"
            },
            data: [42, 38, 48, 35, 29, 28, 33, 55, 77, 82]
          },

          {
            name: "违章总量",
            type: "bar",
            barWidth: 15,
            itemStyle: {
              normal: {
                color: "#00FFE3"
              }
            },
            data: [14, 33, 24, 35, 29, 28, 30, 50, 67, 83]
          },
          {
            name: "违章总量",
            type: "bar",
            barWidth: 15,
            itemStyle: {
              normal: {
                // color: "#00FFE3"
              }
            },
            data: [42, 38, 48, 35, 29, 28, 33, 55, 77, 82]
          }
        ],
        animationDuration: 3000,
        animationDelay: 1000
      },
      // 交通违法分析柱状图
      barOption: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            crossStyle: {
              color: '#999'
            }
          }
        },
        grid: {
          top: '20%',
          left: '2%',
          right: '2%',
          bottom: '2%',
          containLabel: true
        },
        xAxis: [{
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          },
          type: 'category',
          data: ['客运', '货运', '危运', '公交车', '出租车', '客运站场', '货运站场'],
          axisPointer: {
            type: 'shadow'
          }
        }],
        yAxis: [{
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            },
            axisTick: {
              show: false //隐藏X轴刻度
            },
            type: 'value',
            name: '违法总量',
            min: 0,
            max: 150,
            interval: 30,
          },
          {
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            },
            axisTick: {
              show: false //隐藏X轴刻度
            },
            type: 'value',
            name: '年均违法率(%)',
            min: 0,
            max: 100,
            interval: 20,
          }
        ],
        legend: {
          textStyle: {
            color: '#fff'
          },
          data: ['年均违法率', '违法总量']
        },
        series: [{
            name: '年均违法率',
            type: 'bar',
            stack: '交通违法',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6]
          },
          {
            name: '违法总量',
            type: 'bar',
            stack: '交通违法',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6]
          },
        ],
        animationDuration: 3000,
        animationDelay: 1000
      },
      //象形柱状图
      pictorialBarOption: {
        tooltip: {},
        xAxis: {
          max: 2000,
          splitLine: {
            show: false
          },
          offset: 10,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          }
        },
        yAxis: {
          data: ['白云', '越秀', '天河', '海珠', '荔湾', '黄埔', '增城', '番禺', '花都', '从化'],
          inverse: true,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              color: '#fff',
              fontSize: 12
            }
          }
        },
        grid: {
          top: 'center',
          height: 200,
          left: '10%',
          right: '14%',
        },
        series: [{
          // current data
          type: 'pictorialBar',
          symbol: 'rect',
          itemStyle: {
            normal: {
              barBorderRadius: 5,
              color: '#36d7b6',

            }
          },
          symbolRepeat: 'fixed',
          symbolMargin: '5%',
          symbolClip: true,
          symbolSize: 16,
          symbolBoundingData: 2000,
          data: [{
            "value": 891,
            "itemStyle": {
              "normal": {
                "color": "#ff49f9"
              }
            },
          }, {
            "value": 1220,
            "itemStyle": {
              "normal": {
                "color": "#8e49ff"
              }
            },
          }, {
            "value": 660,
            "itemStyle": {
              "normal": {
                "color": "#1a86ff"
              }
            },
          }, {
            "value": 1670,
            "itemStyle": {
              "normal": {
                "color": "#00addf"
              }
            },
          }, {
            "value": 799,
            "itemStyle": {
              "normal": {
                "color": "#00df93"
              }
            },
          }, {
            "value": 455,
            "itemStyle": {
              "normal": {
                "color": "#46e621"
              }
            },
          }, {
            "value": 633,
            "itemStyle": {
              "normal": {
                "color": "#baff15"
              }
            },
          }, {
            "value": 188,
            "itemStyle": {
              "normal": {
                "color": "#ffdb15"
              }
            },
          }, {
            "value": 225,
            "itemStyle": {
              "normal": {
                "color": "#ff9915"
              }
            },
          }, {
            "value": 578,
            "itemStyle": {
              "normal": {
                "color": "#ff5715"
              }
            },
          }, ],
          z: 99999999,
          animationEasing: 'elasticOut',
          animationDelay: function(dataIndex, params) {
            return params.index * 30;
          }
        }, {
          // full data
          type: 'pictorialBar',
          itemStyle: {
            normal: {
              color: 'rgba(54,215,182,0.27)'
            }
          },
          label: {
            normal: {
              show: true,
              formatter: function(params) {
                return (params.value);
              },
              position: 'right',
              offset: [10, 0],
              textStyle: {
                color: '#10C7E2',
                fontSize: 14
              }
            }
          },
          symbolRepeat: 'fixed',
          symbolMargin: '5%',
          symbol: 'rect',
          symbolSize: 16,
          symbolBoundingData: 2000,
          data: [891, 1220, 660, 1670, 799, 455, 633, 188, 225, 578],
          z: 99999,
          animationEasing: 'elasticOut',
        }],
        animationDuration: 3000,
        animationDelay: 1000
      },
      //饼图
      pieOption1: {
        title: {
          text: '50%',
          x: 'center',
          y: 'center',
          textStyle: {
            fontWeight: 'normal',
            color: '#fff',
          }
        },
        color: ['#042D6B'],
        series: [{
          name: 'Line 1',
          type: 'pie',
          clockWise: true,
          radius: ['50%', '66%'],
          itemStyle: {
            normal: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          },
          hoverAnimation: false,
          data: [{
            value: 50,
            name: '01',
            itemStyle: {
              normal: {
                color: { // 完成的圆环的颜色
                  colorStops: [{
                    offset: 0,
                    color: '#2DEDC7' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#2DEDC7' // 100% 处的颜色
                  }]
                },
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            }
          }, {
            name: '02',
            value: 50
          }]
        }],
        animationDuration: 3000,
        animationDelay: 500
      },
      tableData: [{
        address: '白云区',
        industry: '货运',
        weifala: 50,
        weifazl: 50,
        shigula: 50,
        shiguzl: 50,
      }, {
        address: '白云区',
        industry: '货运',
        weifala: 50,
        weifazl: 50,
        shigula: 50,
        shiguzl: 50,
      }, {
        address: '白云区',
        industry: '货运',
        weifala: 50,
        weifazl: 50,
        shigula: 50,
        shiguzl: 50,
      }, {
        address: '白云区',
        industry: '货运',
        weifala: 50,
        weifazl: 50,
        shigula: 50,
        shiguzl: 50,
      }, {
        address: '白云区',
        industry: '货运',
        weifala: 50,
        weifazl: 50,
        shigula: 50,
        shiguzl: 50,
      }, {
        address: '白云区',
        industry: '货运',
        weifala: 50,
        weifazl: 50,
        shigula: 50,
        shiguzl: 50,
      }, {
        address: '白云区',
        industry: '货运',
        weifala: 50,
        weifazl: 50,
        shigula: 50,
        shiguzl: 50,
      }, {
        address: '白云区',
        industry: '货运',
        weifala: 50,
        weifazl: 50,
        shigula: 50,
        shiguzl: 50,
      }, {
        address: '白云区',
        industry: '货运',
        weifala: 50,
        weifazl: 50,
        shigula: 50,
        shiguzl: 50,
      }, {
        address: '白云区',
        industry: '货运',
        weifala: 50,
        weifazl: 50,
        shigula: 50,
        shiguzl: 50,
      }]
    };
  }
}
