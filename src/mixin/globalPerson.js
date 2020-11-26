export default {
  data() {
    var ydata = [{
        name: '货运',
        value: 20
      },
      {
        name: '客运',
        value: 20
      },
      {
        name: '普货',
        value: 20
      },
      {
        name: '公交',
        value: 10
      },
      {
        name: '出租车',
        value: 10
      },
      {
        name: '客运站场',
        value: 10
      },
      {
        name: '货运站场',
        value: 10
      }
    ];
    var color = ["#8d7fec", "#5085f2", "#e75fc3", "#f87be2", "#fdb301", "#57e7ec", "#cf9ef1"]
    var xdata = ['货运', "客运", "普货", "公交", '出租车', '客运站场', '货运站场'];

    var bdata = [80, 34, 60, 78, 69, 78, 69]
    var titlename = ['货运站场', '客运站场', '出租', '公交', '普货', '客运', '货运'];
    var valdata = [500, 500, 500, 500, 500, 500, 500]
    var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6', '#F8B448', '#8B78F6'];

    return {
      // 饼图
      pieOption: {
        color: color,
        legend: {
          orient: "vartical",
          x: "left",
          top: "center",
          left: "60%",
          bottom: "0%",
          data: xdata,
          itemWidth: 8,
          itemHeight: 8,
          itemGap: 16,
          textStyle: {
            color: '#fff'
          },
          formatter: function(name) {
            return '' + name
          }
        },
        series: [{
          type: 'pie',
          clockwise: false, //饼图的扇区是否是顺时针排布
          minAngle: 2, //最小的扇区角度（0 ~ 360）
          radius: ["50%", "80%"],
          center: ["30%", "50%"],
          avoidLabelOverlap: false,
          itemStyle: { //图形样式
            normal: {
              borderWidth: 2,
            },
          },
          label: {
            normal: {
              show: false,
              position: 'center',
              formatter: '{text|{b}}\n{c} ({d}%)',
              rich: {
                text: {
                  color: "#fff",
                  fontSize: 18,
                  align: 'center',
                  verticalAlign: 'middle',
                  padding: 8
                },
                value: {
                  color: "#8693F3",
                  fontSize: 16,
                  align: 'center',
                  verticalAlign: 'middle',
                },
              }
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: 12,
              }
            }
          },
          data: ydata
        }]
      },
      //进度图
      barOption: {
        grid: {
          top: '6%',
          bottom: '6%',
          left: '16%',
          right: '10%'
        },
        xAxis: {
          show: false
        },
        yAxis: [{
          show: true,
          data: titlename,
          inverse: true,
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#fff',
          },
        }, {
          show: true,
          inverse: true,
          data: valdata,
          axisLabel: {
            textStyle: {
              fontSize: 12,
              color: '#fff',
            },
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },

        }],
        series: [{
          name: '条',
          type: 'bar',
          yAxisIndex: 0,
          data: bdata,
          barWidth: 15,
          itemStyle: {
            normal: {
              barBorderRadius: 20,
              color: function(params) {
                var num = myColor.length;
                return myColor[params.dataIndex % num]
              },
            }
          },
          label: {
            normal: {
              show: true,
              position: 'inside',
              formatter: '{c}%'
            }
          },
        }, {
          name: '框',
          type: 'bar',
          yAxisIndex: 1,
          barGap: '-100%',
          data: [100, 100, 100, 100, 100, 100, 100],
          barWidth: 15,
          itemStyle: {
            normal: {
              color: 'none',
              borderColor: '#00c1de',
              borderWidth: 3,
              barBorderRadius: 10,
            }
          }
        }, ]
      },
      //折线图
      singleLine: {
        color: '#7EFF00',
        grid: {
          top: '15%',
          left: '1%',
          right: '5.6%',
          bottom: '6%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisLabel: {
            textStyle: {
              fontSize: 10
            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#61A4FF",
            }
          },
          axisTick: {
            show: false
          },
        },
        yAxis: {
          axisLabel: {
            formatter: '{value}%',
            textStyle: {
              color: '#fff',
              fontSize: 10
            }
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false
          },
        },
        series: [{
          label: {
            normal: {
              show: true,
              position: 'top',
            }
          },
          data: [39, 68, 48, 59, 19, 28, 77, 82, 63, 94, 21, 88],
          type: 'line'
        }]
      },
      // 环比图表参数
      chainRatio: {
        grid: {
          left: '5%',
          right: '5%',
          top: '20%',
          bottom: '0%',
          containLabel: true
        },
        tooltip: {
          show: true,
          trigger: 'item'
        },
        legend: {
          show: true,
          x: 'center',
          top: '0%',
          y: '35',
          icon: 'stack',
          itemWidth: 8,
          itemHeight: 8,
          textStyle: {
            color: '#1bb4f6'
          },
          data: ['大户', '市中', '历下', '天桥', '槐荫', '历城']
        },
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            fontSize: 10,
            color: '#30eee9'
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#397cbc'
            }
          },
          axisTick: {
            show: false,
          },
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }],
        yAxis: [{
          type: 'value',
          min: 0,
          max: 500,
          axisLabel: {
            formatter: '{value}',
            textStyle: {
              color: '#2ad1d2'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#27b4c2'
            }
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#11366e'
            }
          }
        }],
        series: [{
            name: '大户',
            type: 'line',
            symbol: 'circle',
            symbolSize: 4,
            itemStyle: {
              normal: {
                color: '#0092f6',
                lineStyle: {
                  color: "#0092f6",
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgba(7,44,90,0.3)'
                  }, {
                    offset: 1,
                    color: 'rgba(0,146,246,0.9)'
                  }]),
                }
              }
            },
            markPoint: {
              itemStyle: {
                normal: {
                  color: 'red'
                }
              }
            },
            data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 260, 280]
          },
          {
            name: '市中',
            type: 'line',
            symbol: 'circle',
            symbolSize: 4,

            itemStyle: {
              normal: {
                color: '#00d4c7',
                lineStyle: {
                  color: "#00d4c7",
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgba(7,44,90,0.3)'
                  }, {
                    offset: 1,
                    color: 'rgba(0,212,199,0.9)'
                  }]),
                }
              }
            },
            data: [220, 182, 191, 210, 230, 270, 270, 201, 154, 140, 240, 250]
          },
          {
            name: '历下',
            type: 'line',
            symbol: 'circle',
            symbolSize: 4,
            itemStyle: {
              normal: {
                color: '#aecb56',
                lineStyle: {
                  color: "#aecb56",
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgba(7,44,90,0.3)'
                  }, {
                    offset: 1,
                    color: 'rgba(114,144,89,0.9)'
                  }]),
                }
              }
            },
            data: [150, 232, 201, 154, 190, 180, 210, 150, 182, 201, 154, 190]
          },
          {
            name: '天桥',
            type: 'line',
            symbol: 'circle',
            symbolSize: 4,
            itemStyle: {
              normal: {
                color: '#3A44FB',
                lineStyle: {
                  color: "#3A44FB",
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgba(7,46,101,0.3)'
                  }, {
                    offset: 1,
                    color: 'rgba(0,166,246,0.9)'
                  }]),
                }
              }
            },
            data: [150, 232, 201, 154, 190, 180, 210, 150, 182, 201, 154, 190]
          },
          {
            name: '槐荫',
            type: 'line',
            symbol: 'circle',
            symbolSize: 4,
            itemStyle: {
              normal: {
                color: '#6FE81A',
                lineStyle: {
                  color: "#6FE81A",
                  width: 1
                },
                areaStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgba(7,44,90,0.3)'
                  }, {
                    offset: 1,
                    color: 'rgba(0,212,199,0.9)'
                  }]),
                }
              }
            },
            data: [150, 232, 201, 154, 190, 180, 210, 150, 182, 201, 154, 190]
          },
          {
            name: '历城',
            type: 'line',
            symbol: 'circle',
            symbolSize: 4,
            itemStyle: {
              normal: {
                color: '#aecb56',
                lineStyle: {
                  color: "#aecb56",
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgba(7,44,90,0.3)'
                  }, {
                    offset: 1,
                    color: 'rgba(0,212,199,0.9)'
                  }]),
                }
              }
            },
            data: [200, 232, 201, 200, 190, 190, 210, 190, 182, 201, 154, 190]
          }
        ]
      },

    };
  },
}
