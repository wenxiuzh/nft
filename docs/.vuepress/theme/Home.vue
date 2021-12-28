<template>

  <div class="con-home vs-component">

    <div class="logo-g">
      <img  v-if="data.heroImage" :src="$withBase(data.heroImage)" alt="hero">
    </div>

    <div class="home">
      <div v-if="data.heroImage" :class="{'doc-activo':doc}" class="doc-img">
        <img :src="$withBase(data.heroImage)" alt="">
      </div>
      <div :class="{'git-activo':git}" class="flaticon-github git-img">

      </div>
      <div :class="{'git-activo':discord}" class="doc-img">
        <img :src="$withBase('/Discord-Logo-White.svg')" alt="">
      </div>
      <div :class="{'homeBackgroundComponent':data.heroBackgroundComponent}" class="home-init">
        <div class="heroBackgroundComponent" :is="data.heroBackgroundComponent">

        </div>
        <div class="hero">

          <h1 v-if="data.heroText" v-html="data.heroText"></h1>
          <!-- <h1 v-else>{{$title || 'hello'}}</h1> -->
          <p v-html="data.tagline || $description || 'Welcome to your VuePress site'" class="description"></p>
          <p class="action" v-if="data.actionText && data.actionLink">
            <NavLink class="action-button" :item="actionLink"/>
          </p>
          <p class="actions">
            <!-- {{data.vueThemes.actionsLinks}} -->
            <ul>
              <li @mouseenter="doc=true" @mouseleave="doc=false" v-for="action in data.vueThemes.actionsLinks">
                <router-link
                  class="nav-link"
                  :to="action.link"
                  :exact="action.link === '/'"
                >{{action.text}}</router-link>
              </li>
              <li @mouseenter="discord=true" @mouseleave="discord=false">
                <a
                  target="_blank"
                  href="/market/"
                  class="nav-link discord-link"
                  rel="noopener noreferrer"
                  style="background-color:#fff;color:#000;border-color:#000;border: 1px solid;"
                >
                探索数字藏品
                </a>
              </li>

            </ul>
          </p>
        </div>
      </div>
      <!-- <div class="features" v-if="data.features && data.features.length">
        <div class="feature" v-for="feature in data.features">
          <h2>{{ feature.title }}</h2>
          <p>{{ feature.details }}</p>
        </div>
      </div> -->
      <div class="contenedor">

        <vs-row vs-justify="center">
          <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="7">
            <div style="padding:1rem;">
              <vs-card actionable class="cardx">
                <div slot="header">
                  <h3>
                    {{recommandations[0].productName}}
                  </h3>
                </div>
                <div slot="media" class="recommand-card-top">
                  <img style="max-height:500px;" :src="$withBase(recommandations[0].previewImage)">
                </div>
                <div>
                  <span>{{recommandations[0].ProductDesc}}</span>
                </div>
                <div slot="footer">
                  <vs-row vs-justify="flex-end">
                    <vs-button color="primary" type="gradient" >查看</vs-button>
                    <vs-button color="danger" type="gradient">购买</vs-button>
                  </vs-row>
                </div>
              </vs-card>
            </div>
          </vs-col>
          <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="5">
            <div style="padding:1rem;">
              <h1>{{recommandations[0].productName}}</h1>
              <p class="person_info">
                <vs-avatar size="70px" :src="$withBase(recommandations[0].creatorAvatar)"/>
                <h4>
                  创作者
                </h4>
                <a>{{recommandations[0].creatorName}}</a>
              </p>
              <vs-row vs-justify="center" class="recommand-desc-card">
                <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
                  <vs-card>
                    <div slot="header">
                      出售价格
                      <h3>
                        ￥{{recommandations[0].productPrice}}
                      </h3>
                    </div>
                    <div>
                      商品描述
                      <span>{{recommandations[0].productDesc}}</span>
                    </div>
                  </vs-card>
                </vs-col>
              </vs-row>
              <div class="recommand-desc-bottom">
                <vs-button class="recommand-desc-button"  color="danger" type="gradient" style="width:100%;height:3rem;position:relative;bottom:0px;"  :href="{url: '/asset/?a='+recommandations[0].ID }" >立即购买</vs-button>
              </div>
            </div>
          </vs-col>
        </vs-row>
        <vs-row>
          <vs-col :key="index" v-for="recommandation,index in recommandations" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
            <div style="padding:.5rem;">
              <vs-card class="cardx" fixedHeight>
                <div slot="header">
                  <h3>
                    {{recommandation.productName}}
                  </h3>
                </div>
                <div slot="media">
                  <img :src="$withBase(recommandation.previewImage)">
                </div>
                <div style="display:block;">
                  <span><h3>{{recommandation.name}}</h3></span>
                </div>
                <div>
                  <vs-row vs-justify="flex-end">
                    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="3">
                      <p>
                        <vs-avatar size="70px" :src="$withBase(recommandation.creatorAvatar)"/>
                        <span></span>
                      </p>
                    </vs-col>
                    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="7">
                      <p class="person_info">
                        <h4>
                          创作者
                        </h4>
                        <a>{{recommandation.creatorName}}</a>
                      </p>
                    </vs-col>
                    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="2">
                      <vs-button type="border">￥{{recommandation.productPrice}}</vs-button>
                    </vs-col>
                  </vs-row>
                </div>
              </vs-card>
            </div>
          </vs-col>
        </vs-row>
        <vs-row vs-justify="center">
          <vs-button color="danger" type="border" style="width:28rem;height:3.5rem;" to="/market/">查看更多</vs-button>
        </vs-row>
        <home-patreons/>
        <home-templates/>
        <div class="contribuitors">
          <div class="con-contribuitors">
            <contributors :title="'优秀创作者'" :repo="this.$site.themeConfig.repo" contributors="all"/>
          </div>
          <div class="con-svg-trofeos">
            <trofeos />
          </div>
        </div>
        <Content custom/>
      </div>
    </div>
      <Footer/>
  </div>
  </div>
</template>

<script>
// <!-- Hotjar Tracking Code for https://lusaxweb.github.io/vuesax/ -->



import trofeos from './trofeos.vue'
import NavLink from './NavLink.vue'
import Footer from './Footer.vue'
import contributors from './contributors.vue'
import homePatreons from './homePatreons.vue'
import homeTemplates from './HomeTemplates.vue'
import Partners from './Partners.vue'
export default {
  components: { NavLink, Footer, contributors, trofeos, homePatreons, Partners, homeTemplates },
  data(){
    return {
      star:0,
      git:false,
      doc:false,
      discord: false,
      recommandations:[],
      selected:[],
    totalItems:10,
    }
  },
  computed: {
    data () {
      return this.$page.frontmatter
    },
    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  },
  mounted(){
    this.axios({
        method: 'get',
        url: '/api/pub/recommandProduct/getRecommandProductList?page=1&pageSize=7',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
    .then(json => {
      // productDescomentar cuando sea real la solicitud
      var arr = [];
      json.data.data.list.forEach((item)=>{
        arr.push(item)
      })
      this.recommandations = arr;
      console.log(this.recommandations)

    })
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl'

.contribuitors
  display: flex;
  align-items: center;
  justify-content: center;
  .con-svg-trofeos
    display: block;
    width: 460px;
    margin-left: 30px
    min-width 460px;
.doc-img
  position: absolute;
  transform: translate(-5%);
  opacity: 0;
  transition: all .3s ease;
  >img
    width: 50vw;
    filter: grayscale(100%);
    opacity: .080;
.person_info
  h4
    padding-top:10px;
.githubx
  padding:0px
  width: 40px;
  border-radius: 50%;
  height: 40px;
  margin-left: 0px;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $accentColor;
  color: rgb(255, 255, 255) !important;
  transition: all .2s ease;
  &:hover
    box-shadow: 0px 0px 10px 0px $accentColor
.doc-activo
  opacity: 1 !important;
  transform: translate(0%);

.git-img {
  opacity: 0;
  transition: all .250s ease;
  transform: translate(-5%);
}
.git-img:before {
  font-size: 60rem !important;
  position: absolute;
  left: 100px;
  top: 0px
  color: rgb(247, 247, 247);
}
.git-activo {
  opacity: 1;
  transform: translate(0%) rotate(0deg);
}
.oculto-img
  transform: translate(0,-100%) !important;
  opacity: 0 !important
.logo-g
  margin-left: 30px
  padding: 10px
  top: -10px
  display: block;
  position: absolute;
  z-index: 1300;
  background: #1e1a17
  transition: all .3s ease
  opacity: 1;
  transform: translate(0);
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.04)
  width: 180px
  border-radius: 6px
  padding-top: 25px
  >img
    width: 100%
    display: block;
.con-btns-features
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 10px;
  button
    margin-right 8px
    background: $accentColor !important
    border: 0px;
    border-radius: 6px;
    color: rgb(255, 255, 255);
    cursor: pointer;
    transition: all .2s ease;

    box-shadow: 0px 0px 0px 0px $accentColor
    a
      display: block;
      padding: 10px;
      color: rgb(255, 255, 255);
      padding-left: 20px
      padding-right: 20px
    &:hover
      box-shadow: 0px 9px 28px -9px $accentColor
.homeBackgroundComponent {
  margin-bottom: 100px;
}
.heroBackgroundComponent {
  position: absolute;
  z-index: 0;
  width: 80%;
  right:  -5%;
  bottom: -5%
  max-width: 1000px;
  // transform: translate(0,40%);
}
.vs-card--media
  img
    max-height: 400px;
.recommand-desc-card
  padding-top:80px;
.recommand-desc-bottombutton
    position:absolute;
    bottom:0;
.recommand-desc-button
    width: 100%;
    height: 3rem;
@media (min-width: 1800px) {
  .heroBackgroundComponent {
  max-width: 1500px;
}
}
.con-img-feature
  width: 100%
  max-width: 600px;
  padding: 2rem

.fgithub
  padding: 0px !important;
  width: 42px;
  height: 42px;
  border-radius: 20px !important;
  background: rgb(255, 255, 255) !important;
  display: flex !important;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 2px solid $accentColor;
  color: $accentColor !important
  .stargazers_count
    position: absolute;
    right: -15px;
    background: $accentColor;
    border-radius: 7px;
    padding: 2px;
    padding-left: 8px;
    padding-right: 8px;
    color: rgb(255, 255, 255);
    font-size: 12px;
    transform: translate(100%);
    &:after
      position: absolute;
      left: 0px;
      top: 50%;
      transform: translate(-50%,-50%) rotate(45deg);
      content: '';
      width: 10px
      height: 10px;
      background: inherit

.actions
  clear: both;
  width: 100%
  display: flex
  align-items: center
  justify-content: flex-start;
  ul
    padding-left: 0px !important
    width 100%;
  *
    list-style: none
  .starx
    padding-right 60px;
  li
    // background: $accentColor
    float: left;

    margin-right: 10px;
    transition: all .3s ease
    a
      padding: 8px
      font-size: 15px;
      padding-left: 20px;
      padding-right: 20px;
      color: rgb(255, 255, 255);
      display: block;
      box-shadow: 0px 0px 0px 0px $accentColor
      transition: all .250s ease
      background: $accentColor
      border-radius: 7px;
      &:hover
        box-shadow: 0px 9px 28px -9px $accentColor
      &.discord-link
        display flex
        align-items center
        justify-content center
        height auto
        padding-left 10px
        padding-right 15px;
        cursor pointer
        img
          width 25px
          margin 0px !important
          margin-right 10px !important;
.home-init
  display: flex
  align-items: flex-start;
  justify-content: center;
  flex-direction: column
  position: relative;
  height: 100vh;
.contenedor
  max-width: 1300px
  width: 100%
  margin 0px auto
.con-home,.con-contributors
  // padding-right 9rem
  width: 100%;
.home
  top: 0px;
  display: block;
  position: relative;
  padding $navbarHeight 2rem 0
  width: 100%;
  .hero
    width calc(100% - 200px)
    position: relative;
    display: block;
    z-index: 1;
    margin-top: -15rem
    padding-left: 3rem
    img
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 3rem
      color: $textColor
      font-weight: lighter;
      font-size: 40px;
    h1, .description, .action
      // margin 1.8rem auto
    .description
      // max-width 35rem
      padding: 10px
      padding-left: 0px
      padding-bottom: 20px
      font-size 1.3rem
      line-height 1.3
      color lighten($textColor, 10%)

    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    // border-top 1px solid $borderColor
    // box-shadow: 0px -7px 20px -10px rgba(0, 0, 0, 0.1);
    padding 1.2rem
    margin-top 2.5rem
    // display flex
    // flex-wrap wrap
    // align-items: center;
  .feature
    flex-grow 1
    flex-basis 100%
    max-width 100%
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.2rem;
    margin-bottom: 2rem

    &:last-child
      border-bottom: 0px solid rgba(0, 0, 0, 0.050)
    &:nth-child(odd)
      .con-text-feature
        order: 3;
    h2
      font-size 2rem
      font-weight 500
      border-bottom none
      padding-bottom 0
    p
      color $textColor
    .con-text-feature
      max-width: 500px;
      padding: 30px;
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media only screen and (max-width: 1100px)
  .con-home
    padding-right 0px

@media (max-width: $MQMobile)
  #codefund_ad
    width 100% !important
    position relative !important
    right 0px !important
    margin-bottom 20px
  .hero
      width 100% !important

  .contribuitors
    flex-direction column
  .homeBackgroundComponent
    margin-bottom 100px
  .logo-g
    display: none
  .home
    .hero
      padding-left 0
    .features
      // flex-direction column
      .feature
        max-width 100%
        padding 0
        margin-bottom 2.5rem
        display block
        // flex-direction column
        .con-text-feature
          &:nth-child(odd)
            order 1
        .con-img-feature
          padding 0
          &:nth-child(odd)
            order 0
  .con-home
    footer
      margin-top 200px



@media (max-width: $MQMobileNarrow)

  .contribuitors
    flex-direction column
  .navbar
    right:0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .con-logo
    img
      margin-left: 0px;
      height: 1.8rem !important
  .heroBackgroundComponent
    right: 0
    bottom: 0
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      width 100% !important
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
        padding-top: 0px !important
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .features
      padding 0
      .feature
        h2
          font-size 1.25rem
  footer
    .bosque
      top 60%
      transform scale(1.5)
      right: 15% !important



</style>
