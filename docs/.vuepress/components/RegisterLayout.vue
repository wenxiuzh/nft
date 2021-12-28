
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
                    昵称
                </label>
                <div class="con-input">
                  <vs-input
                  success-text="The mail is valid"
                  placeholder="NickName"
                  v-model="NickName"/>
                </div>
                <label for="password">
                    密码
                </label>
                <div class="con-input">
                  <vs-input
                  danger-text="The password does not meet the standards"
                  placeholder="Password"
                  v-model="password"/>
                </div>
                <label for="confirmpassword">
                    确认密码
                </label>
                <div class="con-input">
                  <vs-input
                  danger-text="The password does not meet the standards"
                  placeholder="Password"
                  v-model="confirmpassword"/>
                </div>
                <br/>
                <vs-button class="recommand-desc-button"  @click="register" color="danger" type="gradient" style="width:100%;height:3rem;position:relative;bottom:0px;">注册</vs-button>
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
    confirmpassword: "",
    NickName:""
  }),
  methods:{
    register() {
      this.axios({
          method: 'post',
          url: '/user/register',
          data: {
            Username: this.username,
            password: this.password,
            NickName: this.NickName,
            AuthorityId:"888"
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
      .then(json => {
        // var json = api
          // productDescomentar cuando sea real la solicitud
          if(json.data.msg == '注册成功'){
            this.$vs.notify({color:'success',title:'注册成功','position':'top-center'})
            this.$router.push('/login/')
          } else {
            this.$vs.notify({color:'danger',title:'注册失败','position':'top-center'})
          }
        })
    },
  }
}
</script>