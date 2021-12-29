<template lang="html">
  <div>
    <div class="content content-pagex"> 
      <h2>购买作品</h2>

      <box>
        <vs-row class="info-row">
          <vs-col vs-offset="4" vs-type="flex" vs-justify="center"  vs-align="center" vs-w="4">
              <vs-card>
                <div slot="header">
                  出售价格
                  <h3>
                    ￥{{asset.productPrice}}
                  </h3>
                  <h2>
                    {{asset.productName}}
                  </h2>
                </div>
                <div slot="media" class="recommand-card">
                  <img :src="$withBase(asset.previewImage)">
                </div>
                <div>
                  商品描述
                  <span>{{asset.productDesc}}</span>
                </div>
              </vs-card>
          </vs-col>
          <vs-col vs-offset="4" vs-type="flex" vs-justify="center"  vs-align="center" vs-w="4">
            <vs-card style="padding-top:20px;padding-bottom:10px;">
              <div slot="header">
                上链信息
              </div>
              <div style="padding-top:20px;">
                公链名称
                <span style="padding-left:20px;"><a>BSC-币安智能链</a></span>
              </div>
              <div style="padding-top:20px;">
                TOKEN标准
                <span style="padding-left:20px;">ERC-721</span>
              </div>
              <div style="padding-top:20px;">
                铸造合约地址
                <span style="padding-left:20px;"><a href="https://testnet.bscscan.com/token/0x3e0aDca6e478045B7321D07E9fD4a868b29590d5">0x3e0aDca6e478045B7321D07E9fD4a868b29590d5</a></span>
              </div>
              <div style="padding-top:20px;">
                作品地址
                <span style="padding-left:20px;"><a href="https://testnet.bscscan.com/token/0x3e0adca6e478045b7321d07e9fd4a868b29590d5?a=4">0x3e0adca6e478045b7321d07e9fd4a868b29590d5?a={{asset.ID}}</a></span>
              </div>
              <div style="padding-top:20px;">
                原拥有者地址
                <span style="padding-left:20px;"><a :href="'https://testnet.bscscan.com/address/'+asset.ownerChainId">{{asset.ownerChainId}}</a></span>
              </div>
              <div style="padding-top:20px;">
                转入地址
                <span style="padding-left:20px;"><a href="https://testnet.bscscan.com/address/0x155267346a9baf08c4ab2a36ba3c90b5d471ffe5">0x155267346a9baf08c4ab2a36ba3c90b5d471ffe5</a></span>
              </div>
            </vs-card>
          </vs-col>
          <vs-col vs-offset="4" vs-type="flex" vs-justify="center"  vs-align="center" vs-w="4">
            <vs-card style="padding-top:20px;padding-bottom:10px;">
              <div>
                订单支付
                <span><img :src="$withBase('/qrcode.png')"></span>
              </div>
            </vs-card>
          </vs-col>
          <vs-col vs-offset="4" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
            <vs-button @click="finishPayment" class="recommand-desc-button"  color="danger" type="gradient" style="width:10rem;height:3rem;margin-top:10px;">完成</vs-button>
          </vs-col>
        </vs-row>
      </box>
    <Footer/>
    </div>
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
    id: 1,
    asset:{},
  }),
  computed: {
  },
  mounted(){
    this.id = this.$route.query.a
    this.getOrder(this.$route.query.a)
  },
  methods:{
    getOrder(id){
      this.axios({
        method: 'get',
        url: '/api/MktProd/findMarketProduct?ID='+id,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
      .then(json => {
          if(json.data.msg == '操作成功'){
            this.asset = json.data.data.reMktProd;
          }
        })
    },
    finishPayment(){
      if(this.$cookies.get('x-chain-id') == null || this.$cookies.get('x-chain-id') == ''){
        this.$vs.notify({color:'danger',title:'钱包地址未设置，请先设置','position':'top-center'})
        this.$route.push('/my/info/')
      }
      this.axios({
        method: 'post',
        url: '/api/MktProd/buy',
        data: {
          'id': this.id,
          'targetChainID': this.$cookies.get('x-chain-id')
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
      .then(json => {
        if(json.data.msg == '操作成功'){
          this.$vs.notify({color:'success',title:'购买完成,请稍后在“我的”-“已购作品”或链上钱包中查看。','position':'top-center'})
        }else {
          this.$vs.notify({color:'danger',title:'购买失败','position':'top-center'})

        }
      })
    }
  }
}
</script>

