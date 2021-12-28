<template>
  <div :class="{'activeSuggestion': activeSuggestion}" class="sidebar">
    
    <div class="c-sidebar">
        
    <div ref="parentSidebar" id="parentx">
      <vs-button @click="active=!active" color="primary" type="filled">Open Sidebar</vs-button>
      <vs-sidebar default-index="1" :hidden-background="hiddenBackground" color="primary" class="sidebarx" spacer v-model="active">

        <div class="header-sidebar" slot="header">
          <vs-avatar  size="70px" :src="$withBase(avatar)"/>

          <h4>
            {{nickname}}
            <vs-button color="primary" icon="more_horiz" type="flat"></vs-button>
          </h4>

        </div>

        <vs-sidebar-item index="1" icon="question_answer" to="/my/info/">
          个人中心
        </vs-sidebar-item>
        <vs-sidebar-item index="2" icon="gavel" to="/my/assets/">
          资产
        </vs-sidebar-item>
        <vs-sidebar-item index="3" icon="verified_user" to="/my/sold/">
          出售签发
        </vs-sidebar-item>
        <vs-sidebar-item index="4" icon="account_box" to="/my/bought/">
          已购作品
        </vs-sidebar-item>
        <vs-sidebar-item index="5" icon="verified_user"  to="/my/withdraw/">
          提现
        </vs-sidebar-item>
        <vs-sidebar-item index="6" icon="verified_user"  to="/my/trade/">
          交易
        </vs-sidebar-item>

        <div class="footer-sidebar" slot="footer">
          <vs-button icon="reply" color="danger" type="flat" to="/login/">log out</vs-button>
          <vs-button icon="settings" color="primary" type="border" to="/my/settings/"></vs-button>
        </div>

      </vs-sidebar>
    </div>
  </div>
  </div>
</template>

<script>
import SidebarGroup from './SidebarGroup.vue'
import SidebarLink, { groupHeaders } from './SidebarLink.vue'
import NavLinks from './NavLinks.vue'
import SearchBox from './SearchBox.vue'
import { isActive, resolveSidebarItems } from './util'
import VsButton from '../../../src/components/vsButton/vsButton.vue'

export default {
  components: { SidebarGroup, SidebarLink, NavLinks, SearchBox, VsButton },
  props: ['items'],
  data () {
    return {
      active: true,
      openGroupIndex: 0,
      activeSuggestion: false,
      hiddenBackground: true,
      userId: '',
      username: '',
      nickname: '',
      avatar: '',
    }
  },
  created () {
    this.refreshIndex()
  },
    mounted(){
      this.userId= this.$cookies.get('x-user-id')
      this.username= this.$cookies.get('x-username')
      this.nickname= this.$cookies.get('x-nickname')
      this.avatar= this.$cookies.get('x-avatar')
  },
  watch: {
    '$route' () {
      this.refreshIndex()
    }
  },
  methods: {
    refreshIndex () {
      const index = resolveOpenGroupIndex(
        this.$route,
        this.items
      )
      if (index > -1) {
        this.openGroupIndex = index
      }
    },
    toggleGroup (index) {
      this.openGroupIndex = index === this.openGroupIndex ? -1 : index
    },
    isActive (page) {
      return isActive(this.$route, page.path)
    }
  }
}

function resolveOpenGroupIndex (route, items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (item.type === 'group' && item.children.some(c => isActive(route, c.path))) {
      return i
    }
  }
  return -1
}
</script>

<style lang="stylus">
@import './styles/config.styl'

.sidebar
  box-shadow: 0px 15px 30px 0px #959595
.title-sidebar
  padding-bottom 10px
  h4
    padding 10px
  ul
    display flex
    align-items center
    justify-content center
    li
      background transparent
      margin 5px
      margin-top 0px
      border-radius 10px
      border 1px dashed #dcdcdc
      cursor pointer
      transition all .25s ease
      a
        width 50px
        height 50px
        display flex
        align-items center
        justify-content center
        color rgba(0,0,0,.15)
        transition all .25s ease
      &:hover
        border 1px dashed #f96854
        background alpha(#f96854, .13)
        transform translate(0, -3px)
        box-shadow 0px 4px 10px 0px alpha(#f96854, .13)
        a
          color #f96854
.c-sidebar
  width: calc(100% - 5px)
  margin-right: 5px;
  overflow: auto;
  height: calc(100% - 10px);
  margin-top: 5px;
  padding-right: 5px;
.sidebar
  &.activeSuggestion
    .sidebar-links
      filter: blur(3px);
  ul
    padding 0
    margin 0
    list-style-type none
  a
    display inline-block

  .nav-links
    display none
    border-bottom 1px solid $borderColor
    padding 0.5rem 0 0.75rem 0
    a
      font-weight 600
      opacity: 1 !important;
    .nav-item, .repo-link
      display block
      line-height 1.25rem
      font-size 1.1em
      padding 0.5rem 0 0.5rem 1.5rem
  .sidebar-links
    padding 1rem 0
@media (max-width: $MQMobile)
  .sidebar
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.040)
    .nav-links
      display block
    .sidebar-links
      padding 1rem 0 !important



.header-sidebar
  display flex
  align-items center
  justify-content center
  flex-direction column
  width 100%
  h4
    display flex
    align-items center
    justify-content center
    width 100%
    > button
      margin-left 10px
.footer-sidebar
  display flex
  align-items center
  justify-content space-between
  width 100%
  > button
      border 0px solid rgba(0,0,0,0) !important
      border-left 1px solid rgba(0,0,0,.07) !important
      border-radius 0px !important
</style>
