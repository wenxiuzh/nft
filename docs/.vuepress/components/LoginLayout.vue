<template lang="html">
  <div>
    <div class="content content-pagex">
        <vs-row>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
            <div class="content">
                <label for="password">
                    用户名/Email/手机号
                </label>
                <div class="con-input">
                  <vs-input
                  success-text="The mail is valid"
                  placeholder="Email"
                  v-model="username"/>
                </div>
                <label for="password">
                    Password
                </label>
                <div class="con-input">
                  <vs-input
                  danger-text="The password does not meet the standards"
                  placeholder="Password"
                  v-model="password"/>
                </div>
                <br/>
                <vs-button class="recommand-desc-button" @click="login"  color="danger" type="gradient" style="width:100%;height:3rem;position:relative;bottom:0px;">登录</vs-button>
                <br/>
                <vs-button class="recommand-desc-button"  color="danger" type="border" style="width:100%;height:3rem;position:relative;bottom:0px;">注册</vs-button>
            </div>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
            </vs-col>
        </vs-row>
    </div>
    <Footer/>
  </div>
</template>

<script>

import Footer from '../theme/Footer.vue'

export default {
  components:{
    Footer,
  },
  data:()=>({
    username: "",
    password: "",
  }),
  mounted(){
    
            console.log('x-user-id:'+this.$cookies.get('x-user-id'))
  },
  methods:{
    login() {
      this.axios({
          method: 'post',
          url: '/api/pub/base/login',
          data: {
            Username: this.username,
            password: this.password,
            captchaId: 'asdasd',
            captcha: '1'
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
      .then(json => {
        // var json = api
          // productDescomentar cuando sea real la solicitud
          if(json.data.msg == '登录成功'){
            this.$vs.notify({color:'success',title:'登录成功','position':'top-center'})
            this.$cookies.set('x-user-id',json.data.data.user.ID)
            this.$cookies.set('x-token',json.data.data.token)
            this.$cookies.set('x-avatar',json.data.data.user.headerImg)
            this.$cookies.set('x-nickname',json.data.data.user.nickName)
            this.$cookies.set('x-username',json.data.data.user.userName)
            this.$router.push('/')
          } else {
            this.$vs.notify({color:'success',title:'登录失败','position':'top-center'})
          }
        })
    },
  }
}
</script>