let chart3 = document.getElementById('chart3');

var data1 = [
    { name: "拒绝服务", value: 10 },
    { name: "蠕虫病毒", value: 13 },
    { name: "其他", value: 15 },
]


var data = data1
function getNum(num, d) {
    let maxX = data[0].value
    let minX = data[data.length - 1].value
    let maxY = 5
    let minY = 1
    let a = (maxX - minX) / (maxY - minY)
    let b = maxY - maxX / a
    // console.log(maxX, minX, maxY, minY, a, b)
    return +(num / a + b).toFixed(2)
}

function sum(start, end){
    let num = 0
    let d = data.slice(start, end)
    for (let i = 0; i < d.length; i++) {
        num += d[i].value
    }

    return num
}

var getColor1 = function (x, y, r) {
    return {
        type: "radial",
        x,
        y,
        r,
        colorStops: [
            { offset: 0, color: "rgba(0, 42, 254, 0)" },
            { offset: 1, color: "rgba(0, 180, 255, 0.3)" }
        ]
    }
}
var getColor2 = function (x, y, r) {
    return {
        type: "radial",
        x,
        y,
        r,
        colorStops: [
            { offset: 1, color: "rgba(0, 245, 254, 0.3)" },
            { offset: 0, color: "rgba(0, 180, 255, 0)" }
        ]
    }
}

// var colorList = ["yellow", "blue", "red"]
var colorList = [
    getColor1(0.18, 1.1, 0.8),
    getColor1(-0.1, 0.26, 0.8),
    getColor1(0, 0, 0.8),
    getColor2(0.8, 0, 0.8),
    getColor2(0.8, 0.35, 0.8),
    getColor2(0.8, 0.65, 0.8),
    getColor2(0.6, 0.75, 0.8),
    getColor2(0.6, 0.65, 0.8)
]

var lineLength = [[10, 0],[-20, -0],[-100, 0],[-30, 0],[-60, 0],[-100, 0],[-120, 0],[-130, 0]]

var text = ["代码执行", "间谍软件", "分期收入", "发卡方收入", "年费", "取现费", "收单业务", "其他收入"]

data = data.map( (item, index) => {
    return {
        name: item.name,
        value: getNum(item.value),
        value1: item.value,
        itemStyle: {
            color: colorList[index]
        },
        labelLine: {
            length: lineLength[index][0],
            length2 : lineLength[index][1]
        }
    }
})

var option = {
    title: {
        // left: 'center',
        text: '威胁类型 tops',
        top:5,
        textStyle: {
            color: '#2bddc7',
            fontSize: 16
        }
    },
    color: ["yellow", "blue", "red","rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(0,0,0,0)"],
    series: [
       {
            type: 'pie',
            radius: ["38%", "31%"],
            startAngle: 100,
            data: [
                {
                    name: "间谍软件",
                    value: sum(0, 3),
                    value1: 21,
                    itemStyle: {
                        color: "#00d8ff"
                    }
                },
                {
                    name: "代码执行",
                    // value: 1150500,
                    value: sum(3),
                    value1: 10,
                    itemStyle: {
                        color: "#00fe5e"
                    }

                }
            ],
            label: {
                formatter: function(params) {
                    return "{n|" +  params.name + "}\n{hr|}\n{d|"+"     " + params.data.value1 +"  " + "}{unit|次}"
                },
                rich: {
                    hr: {
                        borderColor: "#fff",
                        width: "100%",
                        borderWidth: 2,
                        height: 0
                    },
                    n: {
                        fontSize: 16,
                        color: "#fff",
                        padding: 7
                    },
                    d: {
                        fontSize: 23,
                        color: "#ffb400",
                        fontFamily: "DINCond-Regular",
                        fontWeight: "bold",
                        padding: 4
                    },
                    unit: {
                        fontSize: 9,
                        color: "#ffb400"
                    }
                }
            },
            labelLine: {
                show: true,
                lineStyle: {
                    color: "#fff"
                }
            },
            z: 3
        },
        {
            type: "pie",
            startAngle: 100,
            radius: ["31%", "90%"],
            roseType: 'radius',
            emphasis: {
                label: {
                    show: true
                }
            },
            labelLine: {
                show: false,
            },
            label: {
                color: '#fff',
                formatter: function(params) {
                    return "{n|" +  params.name + "}\n{d|" + params.data.value1 + "}"
                },
                rich: {
                    n: {
                        fontSize: 12,
                        color: "#fff",
                        //padding: 7
                    },
                    d: {
                        fontSize: 14,
                        color: "#8afb10",
                        // fontFamily: "DINCond-Regular",
                        // fontWeight: "bold",
                        padding: [4, 0]
                    },
                    unit: {
                        fontSize: 9,
                        color: "#ffb400"
                    }
                }
            },
            itemStyle: {
                color: colorList
            },
            data: data
        }
    ]
};

echarts.init(chart3).setOption(option, true);