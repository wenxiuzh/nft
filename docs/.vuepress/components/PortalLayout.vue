<template lang="html">
  <div class="page">
    <div class="content content-pagex">
        <vs-avatar size="70px" :src="$withBase(portalInfo.avatar)"/>
        <br />
        <box>

        {{portalInfo.title}}
        <br />

        {{portalInfo.chainId}}
        <br />

        创作者介绍: {{portalInfo.content}}


        </box>

        <box>
        <div class="">
            <vs-tabs>
            <vs-tab label="拥有的作品">
                <div class="con-tab-ejemplo">
                <vs-row>
                    <vs-col :key="index" v-for="col,index in 3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
                    <div style="padding:.5rem;">
                    <vs-card>
                        <div slot="header">
                        <h3>
                            《宝宝—创世》
                        </h3>
                        </div>
                        <div slot="media" class="recommand-card">
                        <img :src="$withBase('/2accc02e3c484286875f49be72be2e9b.png')">
                        </div>
                        <div>
                        商品描述
                        <span>宝宝为婴儿之意，有宝宝的地方就充满欢笑与治愈，同时宝宝也是现实世界中最接近神异世界的存在。本作品以“盘古开天”的神话为灵感，描绘了天地初始的景象：山林建成，水木苏醒，宝宝作为成长的</span>
                        </div>
                    </vs-card>
                    </div>
                    </vs-col>
                </vs-row>
                <div class="center">
                    <vs-pagination :total="boughtTotal" v-model="boughtCurrentPage" :length="20" />
                </div>
                </div>
            </vs-tab>
            <vs-tab label="在售作品">
                <div class="con-tab-ejemplo">
                <vs-row>
                    <vs-col :key="index" v-for="col,index in portalSold" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
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
                    <vs-pagination :total="soldTotal" v-model="soldCurrentPage" :length="20" />
                </div>
                </div>
            </vs-tab>
            <vs-tab label="预展作品">
                <div class="con-tab-ejemplo">
                <vs-row>
                    <vs-col :key="index" v-for="col,index in portalPreview" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
                    <div style="padding:.5rem;">
                    <vs-card>
                        <div slot="header">
                        预售时间
                        <h3>
                            {{col.previewTime}}
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
                            <vs-button color="primary" type="gradient" :href="{url: '/asset-preview/?a='+col.ID }" >查看</vs-button>
                        </vs-row>
                        </div>
                    </vs-card>
                    </div>
                    </vs-col>
                </vs-row>
                <div class="center">
                    <vs-pagination :total="previewTotal" v-model="previewCurrentPage" :length="20" />
                </div>
                </div>
            </vs-tab>
            </vs-tabs>
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
    id: 2,
    portalInfo:{
        avatar:'https://avatars2.githubusercontent.com/u/31676496?s=460&v=4',
        chainId:'0x294878c0dc63990e6947d009c1d6a4658b91999a',
      title:'加密艺术创作者',
      content:'加密艺术工作室是由加密艺术策展人杨先生主理创立，集加NFT研究、创作、作品孵化等多元的艺术“盒子”。团队成员包括区块链行业深耕多年的技术专家，也有在当代艺术领域造诣精深的专业学者，汇聚了数字艺术、算法工程、AI工程等方面资历经验颇丰的实战专家，致力于为NFT方向提供全方位、全链条、全生命周期的强大支持。',
    },
    portalBought:[
    ],
    boughtCurrentPage:0,
    boughtTotal:0,
    portalSold:[
    ],
    soldCurrentPage:0,
    soldTotal:0,
    portalPreview:[
    ],
    previewCurrentPage:0,
    previewTotal:0,
  }),
  computed: {
  },
  mounted(){
    this.getContent(this.$route.query.id)
  },
  methods:{
    getContent(id){
      this.axios({
          method: 'get',
          url: '/api/pub/MktProd/getMarketProductList?page='+id+'&pageSize=12',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
      .then(json => {
      // var json = api
        // productDescomentar cuando sea real la solicitud
        this.soldCurrentPage = json.data.data.page;
        this.soldTotal = Math.ceil(json.data.data.total/json.data.data.pageSize);
        
        var currentAssets = [];
        json.data.data.list.forEach((item)=>{
          currentAssets.push(item)
        })
        this.portalSold = currentAssets;

      });
      this.axios({
          method: 'get',
          url: '/api/pub/prevProd/getPreviewProductList?page='+id+'&pageSize=12',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
      .then(json => {
      // var json = api
        // productDescomentar cuando sea real la solicitud
        this.previewCurrentPage = json.data.data.page;
        this.previewTotal = Math.ceil(json.data.data.total/json.data.data.pageSize);
        
        var currentAssets = [];
        json.data.data.list.forEach((item)=>{
          currentAssets.push(item)
        })
        this.portalPreview = currentAssets;
      });
    },
  }
}
</script>

<style lang="stylus">
.page
  overflow: hidden;
  display: block;
  position: relative;
  z-index: 5;
  // padding-bottom 2rem
  background: rgb(253, 253, 253)
</style>