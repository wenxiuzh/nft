<template lang="html">
  <div>
    <div class="content content-pagex">
      <h2>交易记录</h2>
      <box>
      <vs-row>
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
            <br />
          </vs-col>
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
            <box header>
              <vs-table pagination max-items="8" :data="tradeLog">
                <template slot="thead">
                  <vs-th sort-key="email">
                    用户
                  </vs-th>
                  <vs-th sort-key="username">
                    金额
                  </vs-th>
                  <vs-th sort-key="email">
                    操作
                  </vs-th>
                  <vs-th sort-key="id">
                    时间
                  </vs-th>
                  <vs-th sort-key="id">
                    详情
                  </vs-th>
                </template>

                <template slot-scope="{data}">
                  <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data" >
                    <vs-td :data="data[indextr].username">
                      {{data[indextr].username}}
                    </vs-td>

                    <vs-td :data="data[indextr].ammount">
                      {{data[indextr].ammount}}
                    </vs-td>

                    <vs-td :data="data[indextr].operation">
                      {{data[indextr].operation}}
                    </vs-td>

                    <vs-td :data="data[indextr].CreatedAt">
                      {{data[indextr].CreatedAt}}
                    </vs-td>
                    <vs-td :data="data[indextr].detail">
                      {{data[indextr].detail}}
                    </vs-td>
                  </vs-tr>
                </template>
              </vs-table>
            </box>
          </vs-col>
        </vs-row>
      </box>
    </div>
    <Footer/>
  </div>
</template>

<script>

import Sidebar from '../theme/Sidebar.vue'
import Footer from '../theme/Footer.vue'

export default {
  components:{
    Footer,
    Sidebar
  },
  data:()=>({
    userInfo:{
      username: '',
      password: '',
      checkPassword: '',
    },
    page:1,
    currentPage: 1,
    previewAssets:[
    ],
    tradeLog:[
    ]
  }),
  mounted(){
    this.getMyTrade()
  },
  methods:{
    getMyTrade(){
      this.axios({
          method: 'get',
          url: '/api/userTrade/getUserTradeList?page=1&pageSize=10',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
      .then(json => {
        // var json = api
          // productDescomentar cuando sea real la solicitud
          if(json.data.msg == '获取成功'){
            this.page = json.data.data.page;
            this.total = Math.ceil(json.data.data.total/json.data.data.pageSize);
            this.tradeLog = json.data.data.list;
          }
        })
    },
  }
}
</script>

