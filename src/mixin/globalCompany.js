export default {
  data() {
    return {
      liquidFill: {
        series: [{
          type: 'liquidFill',
          //data: [0.6, 0.5, 0.4, 0.3],
          data: [0.1, ],
          radius: '80%',
          // 水球颜色
          color: ['#FFF106'],
          // outline  外边
          outline: {
            // show: false
            borderDistance: 5,
            itemStyle: {
              borderWidth: 5,
              borderColor: '#FFF106',
            },
          },
          label: {
            normal: {
              textStyle: {
                color: '#fff',
                insideColor: 'yellow',
                fontSize: 18,
              }
            }
          },
          // 内图 背景色 边
          backgroundStyle: {
            color: 'rgba(4,24,74,0.8)',
            // borderWidth: 5,
            // borderColor: 'red',
          }
        }]
      },
      jzbOptions: {
        angleAxis: {
          interval: 1,
          type: 'category',
          data: ['客运',
            '普运',
            '危运',
            '公交',
            '出租',
            '客运站场',
            '货运站场',
          ],
          axisLine: {
            show: true,
            lineStyle: {
              color: "#fff",
              width: 1,
              type: "solid"
            },
          },
          axisLabel: {
            interval: 0,
            show: true,
            color: "#fff",
            fontSize: 10
          },
        },
        radiusAxis: {
          min: 0,
          max: 100,
          interval: 20,
          axisLine: {
            show: true,
            lineStyle: {
              color: "#fff",
              width: 1,
              type: "solid"
            },
          },
          axisLabel: {
            formatter: '{value} %',
            show: true,
            padding: [0, 0, 20, 0],
            color: "#fff",
            fontSize: 10,
          },
          splitLine: {
            lineStyle: {
              color: "#fff",
              width: 1,
              type: "solid"
            }
          }
        },
        polar: {},
        series: [{
          type: 'bar',
          data: [{
              value: 87,
              itemStyle: {
                normal: {
                  color: "#f54d4d"
                }
              }
            },
            {
              value: 80,
              itemStyle: {
                normal: {
                  color: "#f87544"
                }
              }
            },
            {
              value: 75,
              itemStyle: {
                normal: {
                  color: "#ffae00"
                }
              }
            },
            {
              value: 69,
              itemStyle: {
                normal: {
                  color: "#dcff00"
                }
              }
            },
            {
              value: 63,
              itemStyle: {
                normal: {
                  color: "#25d053"
                }
              }
            },
            {
              value: 54,
              itemStyle: {
                normal: {
                  color: "#01fff5"
                }
              }
            },
            {
              value: 47,
              itemStyle: {
                normal: {
                  color: "#007cff"
                }
              }
            }
          ],
          coordinateSystem: 'polar',
        }],
      },
      gaugeOptions: {
        title: {
          text: '一般',
          x: 'center',
          y: 'center',
          textStyle: {
            color: '#fff',
            fontSize: 24
          },
        },
        series: [{
            name: "",
            type: 'gauge',
            splitNumber: 40, //刻度数量
            min: 0,
            max: 100,
            radius: '85%', //图表尺寸
            center: ['50%', '50%'],
            startAngle: 90,
            endAngle: -269.9999,
            axisLine: {
              show: false,
              lineStyle: {
                width: 0,
                shadowBlur: 0,
                color: [
                  [1, '#0dc2fe']
                ]
              }
            },
            axisTick: {
              show: false,
              lineStyle: {
                color: 'auto',
                width: 2
              },
              length: 5,
              splitNumber: 5
            },
            splitLine: {
              show: true,
              length: 5,
              lineStyle: {
                color: 'auto',
              }
            },
            axisLabel: {
              show: false
            },
            pointer: { //仪表盘指针
              show: 0,
            },
            detail: {
              show: 0,
            },
          },
          {
            type: "pie",
            center: ["50%", "50%"],
            radius: ["80%", "85%"],
            hoverAnimation: false,

            data: [{
                name: "",
                value: 1.5,
                itemStyle: {
                  borderColor: '#ff0',
                  borderRadius: 10,
                  color: '#ff0',
                },
                labelLine: {
                  show: false,
                  lineStyle: {
                    color: 'rgba(0,0,0,0)',
                    width: 2
                  }
                }

              },
              { //画剩余的刻度圆环
                name: "",
                value: 6 - 1.5,
                label: {
                  show: false
                },
                itemStyle: {
                  borderType: 'dashed',
                  borderRadius: 10,
                  borderColor: '#919192',
                  borderWidth: 0,
                  color: 'rgba(0,0,0,0)',
                },
                labelLine: {
                  show: true,
                  lineStyle: {
                    color: 'rgba(0,0,0,0)',
                    width: 2
                  }
                },

              }
            ]
          },
        ]
      },
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
        xAxis: {
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月','11月','12月'],
          splitNumber: 12,
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
            show: true,
            lineStyle: {
              color: '#01FCE3'
            }
          },
        },
        yAxis: [{
            type: "value",
            name: "(总量)",
            min: 0,
            max: 50,
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
              formatter: "{value} %",
              textStyle: {
                color: "#fff"
              }
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#FFFFFF'
              }
            },
          }
        ],
        series: [{
            name: "违章总量",
            type: "line",
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 8, //标记的大小
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
            data: [14, 33, 24, 35, 29, 28, 30, 50, 49,37, 26, 34, 45]
          }
        ],
        animationDuration: 3000,
        animationDelay: 1000
      },
    };
  }
}
