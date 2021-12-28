<template lang="html">
  <div>
    <div class="content content-pagex">
      <vs-row class="info-row">
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
          <h2>公告</h2>
        <br />
        </vs-col>
      </vs-row>
      <vs-table stripe :data="announcements">
        <template slot-scope="{data}">
          <vs-tr :key="indextr" v-for="(tr, indextr) in announcements" >
            <vs-td :data="tr.pubTime">
              <a :href="$withBase('/article/?a='+ tr.ID)">{{tr.title}}</a>
            </vs-td>
            <vs-td  :data="tr.pubTime">
              {{tr.pubTime}}
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
      <div>
        <vs-pagination :total="total" v-model="currentPage"></vs-pagination>
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
    page: 1,
    total: 1,
    currentPage: 1,
    announcements:[],
  }),
  watch: {
    currentPage(now, before){
      /* 动态加载分页 */
      this.getAnnouncements(this.currentPage)
    }
  },
  mounted(){
    this.getAnnouncements(this.currentPage)
  },
  methods:{
    getAnnouncements(currentPage){
        this.axios({
            method: 'get',
            url: '/api/pub/articleAnnouncement1/getArticleAnnouncementList?page='+currentPage+'&pageSize=10',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          }
        })
        .then(json => {
        // var json = api
          // productDescomentar cuando sea real la solicitud
          this.page = json.data.data.page;
          this.total = Math.ceil(json.data.data.total/json.data.data.pageSize);
          
          this.announcements = json.data.data.list;
          console.log(this.announcements);

        })
    },
  }
}
</script>

