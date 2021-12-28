<template lang="html">
  <div>
    <div class="content content-pagex">
      <vs-row>
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
          <h2>首发市场</h2>
        </vs-col>
        <vs-col :key="index" v-for="col,index in previewAssets" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
          <div style="padding:.5rem;">
          <vs-card>
            <div slot="header">
              出售价格
              <h3>
                ￥{{col.productPrice}}
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
        <vs-pagination :total="total" v-model="currentPage" :length="20" />
      </div>
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
    total: 1,
    currentPage: 1,
    previewAssets:[
    ],
  }),
  watch: {
    currentPage(now, before){
      /* 动态加载分页 */
      this.getPreviewAssets(this.currentPage)
    }
  },
  computed: {
  },
  mounted(){
    this.getPreviewAssets(this.currentPage)
  },
  methods:{
    getPreviewAssets(currentPage){
        this.axios({
            method: 'get',
            url: '/api/pub/MktProd/getMarketProductList?page='+currentPage+'&pageSize=12',
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

