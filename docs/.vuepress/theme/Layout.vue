<template>
  <div class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd">

    <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar"/>

    <!-- <CodeFund
      propertyId="1d55a3b5-154d-4e29-a7b6-46017e50c663"
      template="image-centered"
      theme="light"
    /> -->
    <!-- <Carbon/> -->
     <!-- <sidebar-map :items="sortComponents" /> -->

    <div class="sidebar-mask" @click="toggleSidebar(false)"></div>
    <Sidebar v-if="shouldShowSidebar && !shouldShowMySidebar" :items="sortComponents" @toggle-sidebar="toggleSidebar">
      <slot name="sidebar-top" slot="top"/>
      <slot name="sidebar-bottom" slot="bottom"/>
    </Sidebar>
    <MySidebar v-if="shouldShowMySidebar" :items="sortComponents" @toggle-sidebar="toggleSidebar">
      <slot name="sidebar-top" slot="top"/>
      <slot name="sidebar-bottom" slot="bottom"/>
    </MySidebar>
    <div class="page" v-if="$page.frontmatter.layout">
      <component :is="$page.frontmatter.layout"/>
    </div>
    <transition name="pagex">
    <Home v-if="$page.frontmatter.home"/>
    </transition>
    <transition name="homex">
    <Page v-if="!$page.frontmatter.home&&!$page.frontmatter.layout" :sidebar-items="sortComponents">
      <slot name="page-top" slot="top"/>
      <slot name="page-bottom" slot="bottom"/>
    </Page>
    </transition>



  </div>
</template>

<script>
import Vue from 'vue'

import nprogress from 'nprogress'
import Home from './Home.vue'
import Navbar from './Navbar.vue'
import Page from './Page.vue'
import Sidebar from './Sidebar.vue'
import MySidebar from './MySidebar.vue'
// import sidebarMap from './SidebarMap.vue'
import { resolveSidebarItems, pathToComponentName } from './util'
import './icons/font/flaticon.css'
import vsTrVue from '../../../src/components/vsTable/vsTr.vue'
export default {
  components: { Home, Page, Sidebar, Navbar, MySidebar },
  data () {
    return {
      isSidebarOpen: false,
      currentMetaTags: [],
      select1:2,
      switchPreview: false,
      switchOnSale: true,
      switchBlindBox: false,
      popupActivo: false,
      options1:[
        {text: 'Square', value: 1},
        {text: 'Rectangle', value: 2},
        {text: 'Rombo', value: 3},
        {text: 'Romboid', value: 4},
        {text: 'Trapeze', value: 5},
        {text: 'Triangle', value: 6},
        {text: 'Polygon', value: 7},
        {text: 'Regular polygon', value: 8},
        {text: 'Circumference', value: 9},
        {text: 'Circle', value: 10},
        {text: 'Circular sector', value: 11},
        {text: 'Circular trapeze', value: 12},
      ],
    }
  },

  computed: {
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (frontmatter.navbar === false) return false
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      )
    },
    shouldShowSidebar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      var arr = ["/article/","/portal/","/announcement/","/uploadNFT/","/mintNFT/","/my/portal/","/asset/","/asset-blindbox/","/asset-preview/","/login/","/register/"]
      var noSidebar = false
      for(var i in arr){
          if(arr[i] == this.$route.path){
              noSidebar = true
          }
      }
      var arr1 = ["/my/"]
      var noMySidebar = false
      for(var i in arr1){
          if(arr1[i] == this.$route.path){
            noMySidebar = true
          }
      }
      return (
        // !frontmatter.layout &&
        !frontmatter.home &&
        !noSidebar &&
        !noMySidebar &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      )
    },
    shouldShowMySidebar () {
      
    var arr = ["/my/","/my/info/","/my/assets/","/my/sold/","/my/bought/","/my/trade/","/my/withdraw/","/my/settings/",]
    var needlogin = false
    for(var i in arr){
        if(arr[i] == this.$route.path){
          needlogin = true
        }
    }
    if((this.$cookies.get('x-user-id') == null || this.$cookies.get('x-username') == null) && needlogin){
      this.$vs.notify({color:'danger',title:'需要登录','position':'top-center'})
      this.$router.push('/')
    }

      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      var arr = ["/my/","/my/info/","/my/assets/","/my/sold/","/my/bought/","/my/trade/","/my/withdraw/","/my/settings/",]
      var noMySidebar = true
      for(var i in arr){
          if(arr[i] == this.$route.path){
            noMySidebar = false
          }
      }
      console.log(this.$route.path)
      console.log("noMySidebar:"+noMySidebar)
      return !noMySidebar
    },
    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$route,
        this.$site,
        this.$localePath
      )
    },
    sortComponents () {
      return this.sidebarItems.map((items) => {
        if(items.title == 'Components') {
          items.children = items.children.sort((a, b) => a.title.localeCompare(b.title))
        }
        return items
      })
    },
    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar && !this.shouldShowMySidebar,
        },
        userPageClass
      ]
    }
  },

  created () {
    if (this.$ssrContext) {
      this.$ssrContext.title = this.$title
      this.$ssrContext.lang = this.$lang
      this.$ssrContext.description = this.$page.description || this.$description
    }
    var arr = ["/my/","/my/info/","/my/assets/","/my/sold/","/my/bought/","/my/trade/","/my/withdraw/","/my/settings/",]
    var needlogin = false
    for(var i in arr){
        if(arr[i] == this.$route.path){
          needlogin = true
        }
    }
    if((this.$cookies.get('x-user-id') == null || this.$cookies.get('x-username') == null) && needlogin){
      this.$vs.notify({color:'danger',title:'需要登录','position':'top-center'})
      this.$router.push('/')
    }

  },

  mounted () {
    // update title / meta tags
    // this.currentMetaTags = []
    // const updateMeta = () => {
    //   document.documentElement.lang = this.$lang
    //   const meta = [
    //     {
    //       name: 'description',
    //       content: this.$description
    //     },
    //     ...(this.$page.frontmatter.meta || [])
    //   ]
    //   this.currentMetaTags = updateMetaTags(meta, this.currentMetaTags)
    // }
    // this.$watch('$page', updateMeta)
    // updateMeta()

    // configure progress bar
    nprogress.configure({ showSpinner: false })

    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path && !Vue.component(pathToComponentName(to.path))) {
        nprogress.start()
      }
      next()
    })

    this.$router.afterEach(() => {
      nprogress.done()
      this.isSidebarOpen = false
    })
  },

  beforeDestroy () {
    updateMetaTags(null, this.currentMetaTags)
  },

  methods: {
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
    },
    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },
    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  }
}

function updateMetaTags (meta, current) {
  if (current) {
    current.forEach(c => {
      document.head.removeChild(c)
    })
  }
  if (meta) {
    return meta.map(m => {
      const tag = document.createElement('meta')
      Object.keys(m).forEach(key => {
        tag.setAttribute(key, m[key])
      })
      document.head.appendChild(tag)
      return tag
    })
  }
}
</script>
<style lang="stylus">
.homex-enter-active, .homex-leave-active {
  transition: all .250s;
}
.homex-enter /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  position: absolute !important;
  transform: translate(-100%) !important;
}
.homex-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translate(100%) !important;
  position: absolute !important;
}

.homex-enter-active .logo-g, .homex-leave-active .logo-g{
  transition: all .250s .3s;
}
.homex-enter .logo-g /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  position: absolute !important;
  transform: translate(0,-100%) !important;
}
.homex-leave-to .logo-g/* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translate(0,100%) !important;
  position: absolute !important;
}
//

.pagex-enter-active, .pagex-leave-active {
  transition: all .250s;

}
.pagex-enter /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  position: absolute !important;
  transform: translate(-100%) !important;
}
.pagex-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  position: absolute !important;
  transform: translate(100%) !important;
}

.pagex-enter-active .sidebar, .pagex-leave-active .sidebar{
  transition: all .250s .3s;

}

.recommand-card
  img
    height: 240px;
.recommand-card-detail
  img
    height: 560px;
.login-box
  .box
    height: 480px;
.con-input {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    box-shadow: 0px 15px 30px 0px rgba(0,0,0,.14);
    position: relative;
    overflow: hidden;
    transition: all .25s ease;
    background: #fff;
}
.con-input.click {
    transform: scale(.9);
}
.effect {
    opacity: 1;
    position: absolute;
    z-index: 2;
    width: 500px;
    height: 500px;
    background: rgba(101, 85, 223,1);
    border-radius: 50%;
    right: 0px;
    transform: translate(100%,0%);
    pointer-events: none;
}
.effect:after {
    content: '';
    background: rgba(255,255,255,.4);
    opacity: .5;
    width: 70%;
    height: 100%;
    position: absolute;
    border-radius: 50%;
}
.effect:before {
    content: '';
    background: rgba(255,255,255,.4);
    opacity: .5;
    width: 35%;
    height: 100%;
    position: absolute;
    border-radius: 50%;
}
.effect.active {
    opacity: 1;
    width: 500px;
    height: 500px;
    transform: translate(0%);
}
.effect.remove {
    transform: translate(-60%);
}
.con-input input {
    padding: 12px 20px;
    border: 0px;
    border-radius: 18px 0px 0px 18px;
    background: #fff;
    color: #6555df;
    font-weight: 600;
    caret-color: #6555df;
}
.con-input__input {
    transition: all .25s ease;
}
.con-input__input.hideEffect {
    opacity: 0;
    transform: translate(-15px);
}
.con-input button {
    width: 44px;
    height: 44px;
    border: 0px;
    border-radius: 0px 18px 18px 0px;
    cursor: pointer;
    background: #fff;
}
.con-input .show {
    display: none;
}
.con-input button i {
    font-size: 1.15rem;
    display: block;
    color: #6555df;
}
.con-input__text {
    display: none;
}
.con-img-upload
  .con-input-upload
    width: 22rem;
    height: 22rem;
.info-row {
  padding: 10px 0;
}
label {
    font-size: .8rem;
    font-weight: 600;
    color: #6555df;
    padding-left: 10px;
    display: block;
}
@media only screen and (max-width: 1100px)
  .con-contributors
    width 100% !important
    padding-right 0px
    padding 10px
</style>
<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="./styles/theme.styl" lang="stylus"></style>
