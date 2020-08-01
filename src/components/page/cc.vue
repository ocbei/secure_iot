<template>

 <div class = "content">

   <div class = online>
    <el-button width="100" @click="scanip">扫描活跃主机</el-button>  
        <el-table
        :data = "iptable"
      style="width: 100% align:center">
      <el-table-column
        prop="ip"
        label="活跃主机ip"
        width="400">
      </el-table-column>
      <el-table-column
        prop="time"
        label="扫描时间"
        width="400">
      </el-table-column>
    </el-table>

   </div>

 <el-form  >
  <el-form-item label="目标:" style="width:200px float:left">
   <el-input v-model="input_ip" size = "small" style = "width:200px" placeholder="请输入目标IP"></el-input>
   <el-button width="100" @click="createPerson" style="margin-left:20px">扫描</el-button>
  </el-form-item>
  </el-form>

       
    <div class = "progress">
    <el-progress :text-inside="true" :stroke-width="18" :percentage="progressNum"></el-progress>
    </div>
    

    <div class = "loudong">

    <el-table 
     :data="tab"
      style="width: 100% ">
      <el-table-column 
        prop="name"
        label="漏洞名称"
        width="300">
      </el-table-column>
      <el-table-column
        prop="grade"
        label="威胁等级"
        width="300">
      </el-table-column>
      <el-table-column
        prop="des"
        label="漏洞描述"
        width="300">
      </el-table-column>
      <el-table-column
        prop="date"
        label="扫描时间"
        width="300">
      </el-table-column>
      
    </el-table>
  </div>
  </div>



</template>

<style>
.content{
  width: 100%;
  height: 100%;
}
.online{
  width:800px;
  height: 300px;
}

.progress{
  height: 49px;
}
.scaleProgress {
    transform: scaleY(0.75);
}

.loudong{
  width:1200px;
  height:300px;
}
</style>
<script>
import Axios from 'axios';
export default {
  data() {
    return {
      input_ip:'',
      dialogVisible:false,
      progresscom:0,
      progressNum: 0,
      startTimer: '',
      endTimer: '',
      tab:[],
      iptable:[],
    }
  },
  methods:{
          scanip(){
             this.$axios.get('http://localhost:8000/liveip/api')
                  .then(Response=>{
                    console.log(Response.data)
                    this.iptable = Response.data
                  })    
          },

          scanweb(){
             this.$axios.get('http://localhost:8000/loudong/api')
                  .then(Response=>{
                  })       
          },
          startProgress () {
                this.startTimer = setInterval(() => {
                this.$axios.get('http://localhost:8000/progress/api')
                  .then(Response=>{
                    this.progressNum = Response.data*100

                    if (this.progressNum >= 100) {
                        clearInterval(this.startTimer)
                    }

                    })     
              
                 this.$axios.get('http://localhost:8000/bug/api')
                  .then(Response=>{
                    console.log(Response.data)
                    this.tab = Response.data
                    })     
                }, 1000); 
            },
            endProgress () {
                clearInterval(this.startTimer)
                this.endTimer = setInterval(() => {
                    this.progressNum ++
                    if (this.progressNum > 99) {
                        clearInterval(this.endTimer)
                        this.finishProgress()
                    }
                }, 10);
            },
            finishProgress () {
                this.$emit('finishProgress', false)
            },
            createPerson(){
                this.scanweb()
                this.startProgress()
            }
        },
  
  }

</script>