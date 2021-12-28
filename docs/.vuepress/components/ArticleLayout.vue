<template lang="html">
  <div class="page">
    <div class="content content-pagex">
      <h1>{{content.title}}</h1>
      发布时间：{{content.pubTime}}
      <p>{{content.content}}</p>
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
    content:{
      title:'',
      content:'',
      pubTime:''
    }
  }),
  computed: {
  },
  mounted(){
    this.getContent(this.$route.query.a)
  },
  methods:{
    getContent(id){
        this.axios({
            method: 'get',
            url: '/api/pub/articleAnnouncement1/findArticleAnnouncement?ID='+id,
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          }
        })
        .then(json => {
        // var json = api
          // productDescomentar cuando sea real la solicitud
          this.content.title = json.data.data.rearticleAnnouncement.title;
          this.content.content = json.data.data.rearticleAnnouncement.content;
          this.content.pubTime = json.data.data.rearticleAnnouncement.pubTime;
          
          console.log(this.content);

        })
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