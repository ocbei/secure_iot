<template>
<div>
<body>
    <div style="color: #eeeeee; width: 300px; margin: 10px auto; left: 39%; border-bottom: 2px solid rgba(66, 115 ,131, 0.5); font-size: 28px;z-index: 240; position: absolute"><p style="text-align: center">外部威胁感知态势</p></div>
<div style="height: 600px; width: 20%; float: left">
    <div id="chart1" style="height:300px; width: 400px"></div>
    <div id="chart2" style="height: 300px; width: 600px; bottom: 10px; position: absolute; z-index: 200"></div>
</div>
<div id="container" style="height:100%;width: 60%; float:left; position: absolute; left:280px;">
</div>
<div style="height:600px;width: 10%;float:left; ">
    <div id="time" style="color: green; font-size: 18px;right: 20px; top: 20px; position: absolute;"></div>
    <div id = "chart3" style="height: 250px; width: 400px; top: 100px; position: absolute;right: 20px;"></div>
    <div id="app" style="height: 250px; width: 550px; position: absolute; right: 35px;top: 430px;color: white">
        <el-table :data="dectData"
                  height="250"
                  border
                  :header-cell-style="{background:'rgba(105,154,225,0.1)',color:'#cccccc',height:'30px', fontSize:'14px'}"
                  style="width: 100%; text-align: center; color: #389e70; font-size: 13px"
                  :row-style="{height: '20px'}"
                  :cell-style="{padding: '7px 0'}">
            <el-table-column prop="IP" label="IP" width="150">
            </el-table-column>
            <el-table-column prop="act" label="行为" width="150">
            </el-table-column>
            <el-table-column prop="level" label="攻击级别" width="150">
            </el-table-column>
            <el-table-column prop="name" label="描述">
            </el-table-column>
        </el-table>
    </div>
</div>
</body>
</div>
</template>


<script>
export default {
    methods:{
        showTime(){
            var myDate = new Date();//获取系统当前时间
            let year = myDate.getFullYear(); //获取完整的年份(4位,1970-???)
            let month = myDate.getMonth()+1; //获取当前月份(0-11,0代表1月)
            let date = myDate.getDate(); //获取当前日(1-3
            let Time = document.getElementById('container');
            let str =myDate.getHours()+':'+ myDate.getMinutes()+':'+myDate.getSeconds();
            console.log("aaaa")
            Time.innerHTML = '<p>'+year + '/'+month+'/'+date+' '+str+'</p>';
        }
    },
    mounted(){
        this.showTime();//目的：衔接
        setInterval(this.showTime,1000); 
    }
}
</script>

<script src="../../assets/js/world.js"></script>
 <style>
        body{
            background:url('../../assets/img/11.jpg'); 
            background-size: cover;
        }
        *{
            padding: 0;
            margin: 0;
            overflow: hidden;
        }
</style>

