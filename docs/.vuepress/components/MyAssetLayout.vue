<template lang="html">
  <div>
    <div class="content content-pagex">
      <box>
        <vs-row>
          <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
            <h2>资产</h2>
            <br />
            <br />
          </vs-col>
          <vs-col :key="index" v-for="col,index in previewAssets" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
            <div style="padding:.5rem;">
            <vs-card>
              <div slot="header">
                <h3>
                  ￥{{col.productName}}
                </h3>
              </div>
              <div slot="media" class="recommand-card">
                <img :src="$withBase(col.previewImage)">
              </div>
              <div>
                商品描述
                <span>{{col.productDesc}}</span>
              </div>
              <div slot="footer">
                <vs-row vs-justify="flex-end">
                  <vs-button color="primary" type="gradient" :href="{url: '/asset/?a='+col.ID }" >查看</vs-button>
                </vs-row>
              </div>
            </vs-card>
            </div>
          </vs-col>
        </vs-row>
        <div class="center">
          <vs-pagination v-model="page" :length="20" :total="total" />
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
    userInfo:{
      username: '',
      password: '',
      checkPassword: '',
    },
    page:1,
    currentPage: 1,
    total: 0,
    previewAssets:[
    ],
  }),
  mounted(){
    this.getMySold(this.userId)
  },
  methods:{
    getMySold(id){
      this.axios({
          method: 'get',
          url: '/api/userMint/getUserMintList?page=1&pageSize=10',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
      .then(json => {
      // var json = api
        // productDescomentar cuando sea real la solicitud
        this.page = json.data.data.page;
        this.total = Math.ceil(json.data.data.total/json.data.data.pageSize);
        
        var currentAssets = [];
        json.data.data.list.forEach((item)=>{
          currentAssets.push(item)
        })
        this.previewAssets = currentAssets;

      })
    },
  }
}
</script>

