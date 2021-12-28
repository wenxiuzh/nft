<template>
  <div class="con-home-patreons">
    <h2>创建并售卖您的NFT作品</h2>
    <ul>
      <li :class="{'patreonx':patreon.name}" :title="patreon.name?`${patreon.name}`:''" v-for="patreon,index in patreons">
        <a target="_blank" :href="patreon.link?patreon.link:''" rel="noopener noreferrer">
          <img v-if="patreon.img" :src="$withBase(patreon.img)" alt="vuesax-patreon">
          <vs-icon v-if="!patreon.img" class="" icon="add"></vs-icon>
        </a>
        <h3>{{patreon.name}}</h3>
        <p>{{patreon.desc}}</p>
      </li>
    </ul>

    <ul>
      <li class="patreon2" :class="{'patreonx':patreon.name}" :title="patreon.name?`${patreon.name}`:'Become a Patron2 - Add your logo here'" v-for="patreon,index in patreons2">
        <a target="_blank" :href="patreon.link?patreon.link:''" rel="noopener noreferrer">
          <img v-if="patreon.img" :src="$withBase(patreon.img)" alt="vuesax-patreon">
          <vs-icon v-if="!patreon.img" class="" icon="add"></vs-icon>
  
        </a>
      </li>
    </ul>



    <div class="con-text-home-patreons">
      <a target="_blank" href="/uploadNFT/" class="btn-patreon" rel="noopener noreferrer">
        铸造NFT作品
      </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: ()=>({
    patreons:[
      {
        name:'设置你的钱包',
        img:'/tipe.png',
        link:'https://tipe.io/',
        desc:'设置好所选钱包后，单击右上角的钱包图标，将其连接到NFT交易平台。了解我们支持的钱包。'
      },
      {
        name:'创建你的收藏集',
        img:'/bit-share-code.png',
        link:'https://bitsrc.io/',
        desc:'单击“我的收藏”并设置收藏。添加社交链接、说明、个人资料和横幅图像，并设置二级销售费用。'
      },
      {
        name:'添加您的NFT',
        img:'/wrappixel-logo.png',
        link:'https://www.wrappixel.com/?ref=102',
        desc:'上传您的作品（图像、视频、音频或3D艺术），添加标题和描述，并使用属性、统计信息和可解锁内容自定义NFT。'
      },
      {
        name:'售卖您的NFT',
        img:'/vuesax-logo.png',
        link:'https://www.wrappixel.com/?ref=102',
        desc:'在拍卖、固定价格挂牌和降价挂牌之间进行选择。您可以选择如何销售您的NFT，我们将帮助您销售它们！'
      }
    ],
    patreons2: [

    ]
  })
}
</script>

<style lang="stylus">
@import './styles/config.styl'
.con-home-patreons
  margin-top:50px;
  padding 20px;
  h2
    text-align center
    border-bottom 0px;
  h3
    text-align center
    border-bottom 0px;
  p
    padding-top:10px;
    text-align center
    border-bottom 0px;
  ul
    display flex
    align-items center
    justify-content center
    flex-wrap wrap
    margin-left 0px;
    padding-left 0px
    li
      position relative
      list-style none
      margin 10px;
      transition all .2s ease
      max-width: 15vw;
      &.patreon2
        a
          width 85px !important
          height 85px !important
      &.patreonx
        border: 1px solid rgb(245,245,245)
        img
          opacity 1 !important
          filter grayscale(0%) !important
        &:hover
          background rgba(255,255,255,1)
          border: 1px solid rgba(245,245,245,0)
          box-shadow: 0px 9px 28px -9px rgba(0, 0, 0,.1)
      &:hover
        background rgba(249, 104, 84,.1)
        cursor pointer
        border: 1px dashed rgba(249, 104, 84,1)
        box-shadow: 0px 9px 28px -9px rgba(249, 104, 84,.5)
        transform translate(0,-6px)
        img
          filter grayscale(0%)
          opacity 1
        i
          color rgba(249, 104, 84,1) !important
          opacity 1
      img
        transition all .2s ease
        position absolute
        left 50%;
        top 50%
        width 80px;
        filter grayscale(100%)
        opacity .1
        transform translate(-50%,-50%)
        width 80%;
        height auto
      i
        transition all .2s ease

        text-align center
        font-size 2rem;
        position absolute
        left 50%;
        top 50%
        width 80px;
        opacity .1
        transform translate(-50%,-50%)
      a
        width 120px;
        height 120px;
        position relative
        display block
        margin: 0 auto;
  .con-text-home-patreons
    text-align center
    padding 10px;
    display flex
    align-items center
    justify-content center
    flex-direction column
  .btn-patreon
    padding 10px
    padding-left 20px
    padding-right 20px;
    border 1px solid rgb(249, 104, 84)
    color $accentColor
    background transparent
    margin-top 20px;
    border-radius 8px;
    cursor pointer
    transition all .2s ease
    background rgb(249, 104, 84)
    color rgb(255,255,255)
    display flex
    align-items center
    justify-content center
    text-transform uppercase
    font-size 14px
    font-weight bold
    &:hover
      box-shadow: 0px 9px 28px -9px rgb(249, 104, 84)
    img
      margin-right 5px
@media (max-width: $MQMobile)
  .con-home-patreons
    padding 0px
    ul
      li
        margin 5px;
        a
          width 80px;
          height 80px
</style>
