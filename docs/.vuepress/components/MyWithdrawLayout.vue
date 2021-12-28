<template lang="html">
  <div>
    <div class="content content-pagex">
      <h2>提现</h2>
      <box>

      你可以选择提现到微信或支付宝即时到账。系统将在提现申请审核通过后提现到你提供的账号上。

      </box>

      <box>
      <vs-row class="info-row">
        <vs-col vs-type="flex" vs-justify="end" vs-align="right" vs-w="2">
        账户余额
        </vs-col>
        <vs-col vs-offset="1" vs-type="flex" vs-justify="left" vs-align="left" vs-w="9">
            ￥{{ammount}}
        </vs-col>
      </vs-row>
      <vs-row class="info-row">
        <vs-col vs-type="flex" vs-justify="end" vs-align="right" vs-w="2">
        提现平台
        </vs-col>
        <vs-col vs-offset="1" vs-type="flex" vs-justify="left" vs-align="left" vs-w="9">
            <vs-radio v-model="withdrawMethod" vs-name="withdrawMethod" vs-value="wx">微信</vs-radio>
            <vs-radio v-model="withdrawMethod" vs-name="withdrawMethod" vs-value="alipay">支付宝</vs-radio>
        </vs-col>
      </vs-row>
      <vs-row class="info-row">
        <vs-col vs-type="flex" vs-justify="end" vs-align="right" vs-w="2">
        姓名
        </vs-col>
        <vs-col vs-offset="1" vs-type="flex" vs-justify="left" vs-align="left" vs-w="9">
            <vs-input class="inputx" placeholder="姓名" v-model="withdrawName"/>
        </vs-col>
      </vs-row>
      <vs-row class="info-row">
        <vs-col vs-type="flex" vs-justify="end" vs-align="right" vs-w="2">
        账号信息
        </vs-col>
        <vs-col vs-offset="1" vs-type="flex" vs-justify="left" vs-align="left" vs-w="9">
            <vs-input class="inputx" placeholder="账户信息" v-model="withdrawAccount"/>
        </vs-col>
      </vs-row>
      <vs-row class="info-row">
        <vs-col vs-type="flex" vs-justify="end" vs-align="right" vs-w="2">
        提现金额
        </vs-col>
        <vs-col vs-offset="1" vs-type="flex" vs-justify="left" vs-align="left" vs-w="9">
            <vs-input class="inputx" placeholder="提现金额" v-model="withdrawAmmount"/>
        </vs-col>
      </vs-row>
      <vs-row class="info-row">
        <vs-col vs-type="flex" vs-justify="end" vs-align="right" vs-w="2">
        
        </vs-col>
        <vs-col vs-offset="1" vs-type="flex" vs-justify="left" vs-align="left" vs-w="9">
            <vs-button @click="submitWithdrawRequest" color="primary" type="filled">保存</vs-button>
        </vs-col>
      </vs-row>
      </box>
      <box>
      <div>
          <vs-table max-items="3" pagination :data="withdrawLog">
            <template slot="header">
              <h3>
                提现记录
              </h3>
            </template>
            <template slot="thead">
              <vs-th>
                ID
              </vs-th>
              <vs-th>
                金额
              </vs-th>
              <vs-th>
                支付方式
              </vs-th>
              <vs-th>
                订单编号
              </vs-th>
              <vs-th>
                日期
              </vs-th>
              <vs-th>
                状态
              </vs-th>
            </template>
            <template slot-scope="{data}">
              <vs-tr :key="indextr" v-for="(tr, indextr) in data" >
                <vs-td :data="data[indextr].ID">
                  {{data[indextr].ID}}
                </vs-td>
                <vs-td :data="data[indextr].ammount">
                  ￥ {{data[indextr].ammount}}
                </vs-td>
                <vs-td :data="data[indextr].paymentWay">
                  {{data[indextr].paymentWay}}
                </vs-td>
                <vs-td :data="data[indextr].orderSn">
                  {{data[indextr].orderSn}}
                </vs-td>
                <vs-td :data="data[indextr].tradedate">
                  {{data[indextr].tradedate}}
                </vs-td>
                <vs-td :data="data[indextr].status">
                  <div v-if="data[indextr].status == 0">
                    未完成
                  </div>
                  <div v-if="data[indextr].status == 1">
                    已完成
                  </div>
                  <div v-if="data[indextr].status == 2">
                    已取消
                  </div>
                </vs-td>
              </vs-tr>
            </template>
          </vs-table>
        </div>
      </box>
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
    userId: 1,
    // userInfo:this.getUserInfo(),
    ammount: 0,
    withdrawMethod:'',
    withdrawName:'',
    withdrawAccount:'',
    withdrawAmmount:'',
    currentPage: 1,
    previewAssets:[
    ],
    withdrawLog:[
    ]
  }),
  mounted(){
    this.getUserInfo()
    this.getMyWithdraw()
  },
  methods:{
    getUserInfo(){
      this.axios({
          method: 'get',
          url: '/user/getUserInfo',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
      .then(json => {
        // var json = api
          // productDescomentar cuando sea real la solicitud
          if(json.data.msg == '获取成功'){
            this.ammount = json.data.data.userInfo.ammount;
          } else {
            this.$vs.notify({color:'success',title:'获取失败','position':'top-center'})
          }
        })
    },
    submitWithdrawRequest(){
      this.axios({
          method: 'post',
          url: '/api/userBilling/createUserBilling',
          data: {
            ammount: this.withdrawAmmount,
            balance: this.ammount,
            paymentWay: this.withdrawMethod,
            withdrawName: this.withdrawName,
            withdrawAccount: this.withdrawAccount,
            userId: this.$cookies.get('x-user-id'),
            operation: '提现'
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
      .then(json => {
        // var json = api
          // productDescomentar cuando sea real la solicitud
          if(json.data.msg == '创建成功'){
            this.$vs.notify({color:'success',title:'提交成功，请等候审核','position':'top-center'})
            this.getMyWithdraw()
          } else {
            this.$vs.notify({color:'success',title:'创建失败','position':'top-center'})
          }
        })
    },
    getMyWithdraw(){
      this.axios({
          method: 'get',
          url: '/userBilling/getUserBillingList?page=1&pageSize=10',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
      .then(json => {
        // var json = api
          // productDescomentar cuando sea real la solicitud
          if(json.data.msg == '获取成功'){
            this.withdrawLog = json.data.data.list;
          }
        })
    },
  }
}
</script>

