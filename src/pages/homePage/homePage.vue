<template>
  <div id="homePage">
    <!--页面布局START-->
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>{{time}}</el-main>
        <input v-model="ocrName" placeholder="请输入内容">
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
    <!--页面布局END-->
    <!--侧边栏START-->
    <!-- <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row> -->
    <!--侧边栏END-->
    <div></div>
  </div>
</template>
<script>
export default {
  name: 'homePage',
  data(){
    return {
      time:'',
      ocrName:''
    }
  },
  methods: {
    handleOpen(key, keyPath){
      console.log(key,keyPath)
    },
    handleClose(key,keyPath){
      console.log(key,keyPath)
    },
    showDate(){},
    // 清除首字母空格
    deleteFrist(infos){
      console.log('infos',infos)
      // // js正则验证标点符号+空格
      // var regFunc = /^[\p{P}|\s]/
      // var CNPunctuation = /^[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/
      // // // js正则验证特殊字符
      // var regEnF = /^[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/
      // var regCnF = /^[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/
      // if(CNPunctuation.test(infos)){
      //   console.log('含有中文字符,不通过校验')
      //   return false
      // }
      // if(regFunc.test(infos)){
      //   console.log('含有标点符号+空格,不通过校验')
      //   return false
      // }
      // if(regEnF.test(infos) || regCnF.test(infos)){
      //   console.log('含有特殊字符,不通过校验')
      //   return false
      // }
      // 只允许输入中英文+数字首字母
      var reg = /^([\u4e00-\u9fa5a-z|0-9]+$)/
      if(infos.length>0){
        console.log('可以校验')
      }else{
        return false
      }
      if(reg.test(infos)){
        console.log('通过')
      }else{
        console.log('不通过校验')
        this.ocrName = ''
      }
    }
  },
  watch:{
    'ocrName':'deleteFrist'
  },
  mounted(){
    this.showDate()
  }
}
</script>
<style scoped>
.el-header,.el-footer{
  background-color: #B3C0D1;
  color: #333;
  text-align:center;
  line-height: 60px;
}
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
body > .el-container {
  margin-bottom: 40px;
}
</style>
