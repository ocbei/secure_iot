
var total = 1000; // 数据总数
var  datas = [];
colorList = {
    first: ["#F179C4", "#26AEFB", "#CDAD92", "#ED65BA", "#989FBB", "#E86A6A", "#6718CF"],
    second: ["#E33AA3", "#056FAB", "#FFAA62", "#E33AA3", "#28B1FF", "#FFAA62", "#F47384"]
}
chartConfig = { //配置信息为，chart中横坐标第一项索引，最后一项索引，规定列表长度
    first: 0,
    second: 7,
    max: 20
}
option = {
    title:{
        text: '威胁来源地区top5',
        /*x:'center',*/
        top: '30px',
        textStyle: {
            color: '#2bddc7',
            fontSize: 16
        }
    },
    yAxis: {
        max: 1000,
        show: true,
        axisLine: {
            show: false,
            lineStyle: { //隐藏Y轴
                opacity: 0
            }
        },
        axisTick: { //隐藏刻度
            show: false,
        },
        splitLine: { //隐藏刻度
            show: false,
        },
        axisLabel: { //Y轴文字
            color: '#22ac9b',
            fontSize: 12
        },
    },
    grid: {
        left: 50,
        top: 80, // 设置条形图的边距
        right: 80,
        bottom: 40
    },
    xAxis: [{
        data: ['南昌', '重庆', '广州', '武汉', '长沙'], //X轴数据
        show: true,
        axisLabel: { //X轴文字样式
            // color: '#a9aabc',
            color: '#22ac9b',
            fontSize: 12,
            interval: 0,
            padding: [10, 0, 0, 0]
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false,
        }
    }],
    series: [{
        // 内
        type: "bar",
        barWidth: 18,

        legendHoverLink: false,
    },
        {
            // 分隔
            name: '',
            type: 'pictorialBar', //设置类型为象形柱状图
            symbol: 'roundRect', //图形类型，带圆角的矩形
            barWidth: '11%', //柱图宽度
            barMaxWidth: '20%', //最大宽度
            symbolMargin: '0.8', //图形垂直间隔
            animationDelay: (dataIndex, params) => { //每个图形动画持续时间
                return params.index * 50;
            },
            itemStyle: {
                normal: {
                    /*color: params => { //图形渐变颜色方法，四个数字分别代表，右，下，左，上，offset表示0%到100%
                        return new echarts.graphic.LinearGradient(
                            1, 1, 0, 0, [{
                                offset: 0,
                                color: colorList.first[params.dataIndex]
                            },
                                {
                                    offset: 1,
                                    color: colorList.second[params.dataIndex]
                                }
                            ])
                    }*/
                    color: '#8afb10'
                }
            },
            z: 1,
            symbolRepeat: true, //图形是否重复
            symbolSize: [25, 6], //图形元素的尺寸
            data: [480, 200, 238, 301, 189], //Y轴数据
            animationEasing: 'elasticOut' //动画效果
        },
        {
            name: "外框",
            type: "bar",
            barGap: "-120%", // 设置外框粗细
            data: [total, total, total,total,total,total,total,total,total,total,total,total,total,total,total,total,total,total,total,total],
            barWidth: 25,
            itemStyle: {
                normal: {
                    color: "transparent", // 填充色
                    barBorderColor: "#1C4B8E", // 边框色
                    barBorderWidth: 1, // 边框宽度
                    barBorderRadius: 10, //圆角半径
                    label: {
                        // 标签显示位置
                        show: false,
                        position: "top" // insideTop 或者横向的 insideLeft
                    }
                }
            },
            z: 0
        }
    ]
};
var myChart = echarts.init(document.getElementById('chart1'));

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
