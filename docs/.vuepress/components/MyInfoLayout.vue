<template lang="html">
  <div>
    <div class="content content-pagex">
      <vs-row class="info-row">
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
          <h2>个人中心</h2>
        <br />
        <br />
        </vs-col>
        <vs-col vs-type="flex" vs-justify="end" vs-align="right" vs-w="2">
        用户名
        </vs-col>
        <vs-col vs-offset="1" vs-type="flex" vs-justify="left" vs-align="left" vs-w="9">
            {{username}}
        </vs-col>
        </vs-row>
        <vs-row class="info-row">
        <vs-col vs-type="flex" vs-justify="end" vs-align="right" vs-w="2">
        昵称
        </vs-col>
        <vs-col vs-offset="1" vs-type="flex" vs-justify="left" vs-align="left" vs-w="9">
            <vs-input class="inputx" placeholder="" v-model="nickname"/>
        </vs-col>
        </vs-row>
        <vs-row class="info-row">
        <vs-col vs-type="flex" vs-justify="end" vs-align="right" vs-w="2">
        头像
        </vs-col>
        <vs-col vs-offset="1" vs-type="flex" vs-justify="left" vs-align="left" vs-w="9">
            <vs-avatar size="70px" :src="$withBase(avatar)"/>
            <vs-upload class="update-asset" fileName="file" action="http://101.43.145.27:8888/pub/fileUploadAndDownload/upload" @on-success="successUpload" show-upload-button />
        </vs-col>
        </vs-row>
        <vs-row class="info-row">
        <vs-col vs-type="flex" vs-justify="end" vs-align="right" vs-w="2">
        
        </vs-col>
        <vs-col vs-offset="1" vs-type="flex" vs-justify="left" vs-align="left" vs-w="9">
            <vs-button @click="save" color="primary" type="filled">保存</vs-button>
        </vs-col>
        </vs-row>
        <vs-row class="info-row">
        <vs-col vs-type="flex" vs-justify="end" vs-align="right" vs-w="2">
        <h4>修改密码</h4>
        </vs-col>
        <vs-col vs-offset="1" vs-type="flex" vs-justify="left" vs-align="left" vs-w="9">
        </vs-col>
        </vs-row>
        <vs-row class="info-row">
        <vs-col vs-type="flex" vs-justify="end" vs-align="right" vs-w="2">
        原密码
        </vs-col>
        <vs-col vs-offset="1" vs-type="flex" vs-justify="left" vs-align="left" vs-w="9">
            <vs-input class="inputx" placeholder="输入密码" v-model="password"/>
        </vs-col>
        </vs-row>
        <vs-row class="info-row">
        <vs-col vs-type="flex" vs-justify="end" vs-align="right" vs-w="2">
        新密码
        </vs-col>
        <vs-col vs-offset="1" vs-type="flex" vs-justify="left" vs-align="left" vs-w="9">
            <vs-input class="inputx" placeholder="输入密码" v-model="newPassword"/>
        </vs-col>
        </vs-row>
        <vs-row class="info-row">
        <vs-col vs-type="flex" vs-justify="end" vs-align="right" vs-w="2">
        确认密码
        </vs-col>
        <vs-col vs-offset="1" vs-type="flex" vs-justify="left" vs-align="left" vs-w="9">
            <vs-input class="inputx" placeholder="确认密码" v-model="checkPassword"/>
        </vs-col>
        </vs-row>
        <vs-row class="info-row">
        <vs-col vs-type="flex" vs-justify="end" vs-align="right" vs-w="2">
        
        </vs-col>
        <vs-col vs-offset="1" vs-type="flex" vs-justify="left" vs-align="left" vs-w="9">
            <vs-button @click="changePassword" color="primary" type="filled">保存</vs-button>
        </vs-col>
        </vs-row>
    </div>
    <Footer/>
  </div>
</template>

<script>

import Sidebar from '../theme/Sidebar.vue'
import Footer from '../theme/Footer.vue'
import { resolveSidebarItems } from '../theme/util'

export default {
  components:{
    Footer,
    Sidebar
  },
  data:()=>({
    userId: '',
    username: '',
    nickname: '',
    avatar: '',
    password: '',
    newPassword: '',
    checkPassword:'',
    currentPage: 1,
    previewAssets:[
    ],
  }),
  mounted(){
    this.userId= this.$cookies.get('x-user-id')
    this.username= this.$cookies.get('x-username')
    this.nickname= this.$cookies.get('x-nickname')
    this.avatar= this.$cookies.get('x-avatar')
  },
  methods:{
    successUpload(e){
      let response = JSON.parse(e.currentTarget.response)
      if(response.msg == '上传成功'){
        this.avatar = response.data.file.url
        this.$vs.notify({color:'success',title:'上传成功'})
      } else {
        this.$vs.notify({color:'danger',title:'上传失败'})
      }
    },
    save(){
      this.axios({
          method: 'post',
          url: '/user/SetUserInfo',
          data: {
            nickName: this.nickname,
            headerImg: this.avatar,
        },
      })
      .then(json => {
        // var json = api
        // productDescomentar cuando sea real la solicitud
        if(json.data.msg == '设置成功'){
          this.$vs.notify({color:'success',title:'设置成功','position':'top-center'})
        } else {
          this.$vs.notify({color:'danger',title:'设置失败','position':'top-center'})
        }
      })
    },
    changePassword(){
      if ((this.newPassword != '' || this.checkPassword != '') && this.newPassword != this.checkPassword){
        this.$vs.notify({color:'danger',title:'密码输入不一致','position':'top-center'})
        return false
      }
      if ((this.newPassword != '' && this.checkPassword != '') && this.newPassword == this.checkPassword){
        this.axios({
            method: 'post',
            url: '/user/changePassword',
            data: {
              username: this.username,
              password: this.password,
              newPassword: this.newPassword,
          },
        })
        .then(json => {
          if(json.data.msg == '修改成功'){
            this.$vs.notify({color:'success',title:'修改成功','position':'top-center'})
          } else {
            this.$vs.notify({color:'danger',title:'修改失败，原密码与当前账户不符','position':'top-center'})
          }
        })
      }
    },
  }
}
</script>

