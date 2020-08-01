let chart2 = document.getElementById('chart2');

var base = +new Date(2016, 9, 3);
var oneDay = 24 * 3600 * 1000;
var valueBase = Math.random() * 300;
var valueBase2 = Math.random() * 50;
var data = [];
var data2 = [];

for (var i = 1; i < 10; i++) {
    var now = new Date(base += oneDay);
    var dayStr = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-');

    valueBase = Math.round((Math.random() - 0.5) * 20 + valueBase);
    valueBase <= 0 && (valueBase = Math.random() * 300);
    data.push([dayStr, valueBase]);

    valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
    valueBase2 <= 0 && (valueBase2 = Math.random() * 50);
    data2.push([dayStr, valueBase2]);
}
let ydata = []
for(let i = 0; i < 3; i++){
    ydata.push('2020-6-'+(i+28))
}
for(let i = 1; i < 4; i++){
    ydata.push('2020-7-'+i)
}
option = {
    animation: false,
    title: {
        // left: 'center',
        text: '外部威胁趋势',
        top:80,
        textStyle: {
            color: '#2bddc7',
            fontSize: 16
        }
    },
    legend: {
        top: 'bottom',
        data: ['意向']
    },
    tooltip: {
        triggerOn: 'none',
        position: function (pt) {
            return [pt[0], 130];
        }
    },
    xAxis: {
        type: "category",
        show: true,
        splitLine: {
            show: false
        },
        axisLabel: {
            color: '#22ac9b'
        },
        data: ydata
    },
    yAxis: {
        type: 'value',
        show:true,
        axisTick: {
            inside: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle:{
                color:'rgba(87,87,87,0.1)',
            }
        },
        axisLabel: {
            color: '#22ac9b'
        },
        z: 10
    },
    grid: {
        top: 140,
        left: 30,
        right: 15,
        bottom: 60,
    },
    dataZoom: [{
        type: 'inside',
        throttle: 50
    }],
    series: [
        {
            name: '模拟数据',
            type: 'line',
            smooth: true,
            stack: 'a',
            symbol: 'circle',
            symbolSize: 5,
            sampling: 'average',
            itemStyle: {
                color: 'rgba(183,183,183,0.9)'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    //color: '#01025a'
                    color: 'rgba(1,2,90,0.3)'
                }, {
                    offset: 1,
                    //color: '#77aeff',
                    color: 'rgba(119,174,255,0.3)'
                }])
            },
            data: [2, 4, 3, 2,3, 4]
        }

    ]
};

echarts.init(chart2).setOption(option, true);