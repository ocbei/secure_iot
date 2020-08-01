// 指定图表的配置项和数据
option = {
    title: {
        text: "",
        textStyle: {
            color: "#436EEE",
            fontSize: 17
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data:[
            {
                name: '政策法规',
                icon: 'circle',
                textStyle: {
                    color: 'red',  // 单独设置某一个图列的颜色
                    backgroundColor: '#fff' // 单独设置某一个图列的字体背景色
                }
            },
            {
                name: '经办规程',
                icon: 'circle',
                textStyle: {
                    color: 'red',  // 单独设置某一个图列的颜色
                    backgroundColor: '#fff' // 单独设置某一个图列的字体背景色
                }
            },
            {
                name: '业务场景模拟',
                icon: 'circle',
                textStyle: {
                    color: 'red',  // 单独设置某一个图列的颜色
                    backgroundColor: '#fff' // 单独设置某一个图列的字体背景色
                }
            },
            {
                name: '常见问题',
                icon: 'circle',
                textStyle: {
                    color: 'red',  // 单独设置某一个图列的颜色
                    backgroundColor: '#fff' // 单独设置某一个图列的字体背景色
                }
            }
        ]
    },
    //x轴显示
    xAxis: {
        data: [20180611, 20180612, 20180613, 20180614, 20180615, 20180616, 20180617],
        show: true,  // 是否显示
        position: 'bottom',  // x轴的位置
        offset: 0, // x轴相对于默认位置的偏移
        type: 'category',   // 轴类型， 默认为 'category'
        name: '月份',    // 轴名称
        nameLocation: 'end',  // 轴名称相对位置
        nameTextStyle: {   // 坐标轴名称样式
            color: 'red',
            padding: [5, 0, 0, -5]
        },
        nameGap: 15, // 坐标轴名称与轴线之间的距离
        nameRotate: 0,  // 坐标轴名字旋转
        axisLine: {       // 坐标轴 轴线
            show: true,  // 是否显示
            symbol: ['none', 'arrow'],  // 是否显示轴线箭头
            symbolSize: [8, 8], // 箭头大小
            symbolOffset: [0, 7],  // 箭头位置
            // ------   线 ---------
            lineStyle: {
                color: 'blue',
                width: 1,
                type: 'solid'
            }
        },
        axisTick: {    // 坐标轴 刻度
            show: true,  // 是否显示
            inside: true,  // 是否朝内
            length: 3,     // 长度
            lineStyle: {   // 默认取轴线的样式
                color: 'red',
                width: 1,
                type: 'solid'
            }
        },
        axisLabel: {    // 坐标轴标签
            show: true,  // 是否显示
            inside: false, // 是否朝内
            rotate: 0, // 旋转角度
            margin: 5, // 刻度标签与轴线之间的距离
            color: 'red'  // 默认取轴线的颜色
        },
        splitLine: {    // gird区域中的分割线
            show: false,  // 是否显示
            lineStyle: {
                // color: 'red',
                // width: 1,
                // type: 'solid'
            }
        },
        splitArea: {    // 网格区域
            show: false  // 是否显示，默认为false
        },
        // show: false
    },
    //   ------   y轴  ----------
    yAxis: {
        show: true,  // 是否显示
        position: 'left', // y轴位置
        offset: 0, // y轴相对于默认位置的偏移
        type: 'value',  // 轴类型，默认为 ‘category’
        name: '销量',   // 轴名称
        nameLocation: 'end', // 轴名称相对位置value
        nameTextStyle: {    // 坐标轴名称样式
            color: '#fff',
            padding: [5, 0, 0, 5]  // 坐标轴名称相对位置
        },
        nameGap: 15, // 坐标轴名称与轴线之间的距离
        nameRotate: 270,  // 坐标轴名字旋转

        axisLine: {    // 坐标轴 轴线
            show: true,  // 是否显示
            //  -----   箭头 -----
            symbol: ['none', 'arrow'],  // 是否显示轴线箭头
            symbolSize: [8, 8],  // 箭头大小
            symbolOffset: [0, 7], // 箭头位置

            // ----- 线 -------
            lineStyle: {
                color: 'blue',
                width: 1,
                type: 'solid'
            }
        },
        axisTick: {      // 坐标轴的刻度
            show: true,    // 是否显示
            inside: true,  // 是否朝内
            length: 3,      // 长度
            lineStyle: {
                color: 'red',  // 默认取轴线的颜色
                width: 1,
                type: 'solid'
            }
        },
        axisLabel: {      // 坐标轴的标签
            show: true,    // 是否显示
            inside: false,  // 是否朝内
            rotate: 0,     // 旋转角度
            margin: 8,     // 刻度标签与轴线之间的距离
            color: 'red',  // 默认轴线的颜色
        },
        splitLine: {    // gird 区域中的分割线
            show: true,   // 是否显示
            lineStyle: {
                color: '#666',
                width: 1,
                type: 'dashed'
            }
        },
        splitArea: {     // 网格区域
            show: false   // 是否显示，默认为false
        }
    },
    tooltip: {
        position: ['50%', '50%'],
        padding: [5, 10]
    },
    grid: {
        left: '0%'
    },
    series: [
        {
            name: "政策法规",
            type: "bar",
            stack: "业务",//折叠显示
            data: ["87.54", "88.54", "90", "91", "92", '95', '100'],
            barWidth : 25,
            //显示颜色
            itemStyle:{
                normal:{color:"blue"}
            },
            label: {   // 图形上的文本标签
                show: false,
                position: 'insideTop', // 相对位置
                rotate: 0,  // 旋转角度
                color: '#eee'
            }
        },
        {
            name: "经办规程",
            type: "bar",
            stack: "业务",
            data: ["87.54", "88.54", "90", "91", "92", '95', '100'],
            barWidth : 25,
            label: {   // 图形上的文本标签
                show: false,
                position: 'insideTop', // 相对位置
                rotate: 0,  // 旋转角度
                color: '#eee'
            },
            itemStyle:{
                normal:{color:"#FF8849"}
            }
        },
        {
            name: "业务场景模拟",
            type: "bar",
            stack: "业务",
            data: ["87.54", "88.54", "90", "91", "92", '95', '100'],
            barWidth : 25,
            label: {   // 图形上的文本标签
                show: false,
                position: 'insideTop', // 相对位置
                rotate: 0,  // 旋转角度
                color: '#eee'
            },
            itemStyle:{
                normal:{color:"#3FBB49"}
            }
        },
        {
            name: "常见问题",
            type: "bar",
            stack: "业务",
            data: ["87.54", "88.54", "90", "91", "92", '95', '100'],
            barWidth : 25,
            label: {   // 图形上的文本标签
                show: false,
                position: 'insideTop', // 相对位置
                rotate: 0,  // 旋转角度
                color: '#eee'
            },
            itemStyle:{
                normal:{color:"#56C4A5"}
            },
            barCateGoryGap: 15
        }
    ]
};