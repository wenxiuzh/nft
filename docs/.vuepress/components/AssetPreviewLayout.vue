<template lang="html">
  <div>
    <div class="contenedor">
      <br />
      <br />
      <br />
      <br />
      <vs-row vs-justify="center">
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="7">
          <div style="padding:1rem;">
            <vs-card actionable class="cardx">
              <div slot="media" class="recommand-card-detail">
                <img :src="$withBase(asset.previewImage)">
              </div>
            </vs-card>
          </div>
        </vs-col>
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="5">
          <div style="padding:1rem;">
            <h1>{{asset.productName}}</h1>
            <div style="color:rgba(44,44,52,.5)">编号：#20/100</div>
            <vs-row vs-justify="center" class="recommand-desc-card">
              <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
                <vs-card style="padding-top:20px;padding-bottom:10px;">
                  <div>
                    开售时间
                  </div>
                  <div style="padding-top:20px;">
                    {{asset.previewTime}}
                  </div>
                </vs-card>
              </vs-col>
            </vs-row>
            <div class="recommand-desc-bottom">
              <vs-button @click="popupActivo=true" class="recommand-desc-button"  color="danger" type="gradient" style="width:100%;height:3rem;position:relative;bottom:0px;" to="/asset/">立即购买</vs-button>
              <vs-popup class="holamundo"  title="选择支付方式" :active.sync="popupActivo">
                <p>
                  <a>微信支付</a>
                  <a>支付宝支付</a>
                </p>
              </vs-popup>
            </div>
            <vs-divider/>
            <vs-card style="padding-top:10px;padding-bottom:5px;">
              <div style="display:block;height: 80px;">
                <div>
                  <vs-avatar size="70px" src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4" style="float:left;"/>
                  <div style="padding:1rem;">
                    创作者 
                  </div>
                  <a style="padding-top:1rem;">{{asset.creatorName}} / <span><a>{{asset.creatorChainId}}</a></span></a>
                  <a style="float:right;padding-right:20px;margin-top:-1.5rem;" :href="{url: asset.creatorLink }">个人主页</a>
                </div>
              </div>
            </vs-card>
          </div>
        </vs-col>
      </vs-row>
    </div>
    <div class="contenedor">
      <vs-row vs-justify="center">
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
          <h2>作品描述</h2>
          <box>
            {{asset.productDesc}}
          </box>
        </vs-col>
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
          <br />
          <br />
          <br />
          <h2>关于数字藏品</h2>
          <box>
            <p>数字藏品可以通俗理解为区块链凭证。通常是指开发者在以太坊平台上根据ERC721标准/协议所发行，特性为不可分割、不可替代、独一无二。数字藏品常见于文化艺术品领域、知识产权的链上发行、流转、确权等作用，能有效保护链上知识产权，防止篡改、造假等，是区块链技术的一类场景应用。</p>
          </box>
        </vs-col>
      </vs-row>
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
    asset:{},
    popupActivo: false
  }),
  mounted(){
    this.getAnnouncements(this.$route.query.a)
  },
  methods:{
    getAnnouncements(id){
        this.axios({
            method: 'get',
            url: '/api/pub/MktProd/findMarketProduct?ID='+id,
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          }
        })
        .then(json => {
        // var json = api
          // productDescomentar cuando sea real la solicitud
          this.asset = json.data.data.reMktProd;

        })
    },
  }
}
</script>

