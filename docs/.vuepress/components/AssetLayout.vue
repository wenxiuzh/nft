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
            <div style="color:rgba(44,44,52,.5)">编号：#{{asset.tokenId}}</div>
            <vs-row vs-justify="center" class="recommand-desc-card">
              <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
                <vs-card style="padding-top:20px;padding-bottom:10px;">
                  <div>
                    合约地址
                    <span style="padding-left:20px;"><a>{{asset.creatorChainId}}</a></span>
                  </div>
                  <div style="padding-top:20px;">
                    链上标识
                    <span style="padding-left:20px;"><a>369821</a></span>
                  </div>
                </vs-card>
              </vs-col>
            </vs-row>
            <div class="recommand-desc-bottom">
              <div>
              <h1>￥ {{asset.productPrice}}</h1>
              </div>
              <vs-button @click="buy" class="recommand-desc-button"  color="danger" type="gradient" style="width:100%;height:3rem;position:relative;bottom:0px;" >立即购买</vs-button>
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
                  <vs-avatar size="70px" :src="$withBase(asset.creatorAvatar)" style="float:left;"/>
                  <div style="padding:1rem;">
                    创作者 
                  </div>
                  <a style="padding-top:1rem;">{{asset.creatorName}} / <span><a>{{asset.creatorChainId}}</a></span></a>
                  <a style="float:right;padding-right:20px;margin-top:-1.5rem;" :href="{url: asset.creatorLink }">个人主页</a>
                </div>
              </div>
              <div style="display:block;height: 80px;">
                <div>
                  <vs-avatar size="70px" :src="$withBase(asset.ownerAvatar)" style="float:left;"/>
                  <div style="padding:1rem;">
                    拥有者
                  </div>
                  <a style="padding-top:1rem;">{{asset.ownerName}} / <span><a>{{asset.ownerChainId}}</a></span></a>
                  <a style="float:right;padding-right:20px;margin-top:-1.5rem;" :href="{url: asset.ownerLink }">个人主页</a>
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
          <h2>关于数字藏品</h2>
          <box>
            <p>数字藏品可以通俗理解为区块链凭证。通常是指开发者在以太坊平台上根据ERC721标准/协议所发行，特性为不可分割、不可替代、独一无二。数字藏品常见于文化艺术品领域、知识产权的链上发行、流转、确权等作用，能有效保护链上知识产权，防止篡改、造假等，是区块链技术的一类场景应用。</p>
          </box>
        </vs-col>
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
          <br />
          <br />
          <h2>交易记录</h2>
          <box >
            <vs-table max-items="3" pagination :data="tradeLog">
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
                动作
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
                <vs-td :data="data[indextr].operation">
                  {{data[indextr].operation}}
                </vs-td>
                <vs-td :data="data[indextr].CreatedAt">
                  {{data[indextr].CreatedAt}}
                </vs-td>
                <vs-td :data="data[indextr].status">
                  <div v-if="data[indextr].status == 1">
                    已成交
                  </div>
                  <div v-if="data[indextr].status == 0">
                    未成交
                  </div>
                </vs-td>
              </vs-tr>
            </template>
          </vs-table>
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
    popupActivo: false,
    page: 1,
    tradeLog:[
    ]
  }),
  mounted(){
    this.getAnnouncements(this.$route.query.a)
    this.getTradeLog(this.$route.query.a)
  },
  methods:{
    buy(){
      this.$router.push('/mintNFT/?a='+this.asset.ID)
    },
    getAnnouncements(id){
        this.axios({
            method: 'get',
            url: '/api/pub/MktProd/findMarketProduct?ID='+id,
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          }
        })
        .then(json => {
          this.asset = json.data.data.reMktProd;

        })
    },
    getTradeLog(id){
      this.axios({
        method: 'get',
        url: '/api/userTrade/getUserTradeList?page='+this.page+'&aid='+id+'&pageSize=10',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
      .then(json => {
          if(json.data.msg == '获取成功'){
            this.tradeLog = json.data.data.list;
            console.log(this.tradeLog)
          }
        })
    },
  }
}
</script>

