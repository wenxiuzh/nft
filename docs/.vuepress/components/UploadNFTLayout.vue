<template lang="html">
  <div>
    <div class="content content-pagex">
      <vs-row class="info-row">
        <vs-col  vs-offset="4" vs-type="flex" vs-justify="flex-start"  vs-align="flex-start" vs-w="4">
          <h2>创建作品</h2>
        </vs-col>
        <vs-col  vs-offset="4" vs-type="flex" vs-justify="center"  vs-align="center" vs-w="4">
          Create new item
      图片, 视频, 音频, 或者3D模型
      支持的文件类型: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. 文件大小: 100 MB
        </vs-col>
        <vs-col  vs-offset="4" vs-type="flex" vs-justify="center"  vs-align="center" vs-w="4">
          <vs-upload class="update-asset" fileName="file" action="http://101.43.145.27:8888/pub/fileUploadAndDownload/upload" @on-success="successUpload" show-upload-button />
        </vs-col>
        <vs-col  vs-offset="4" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="4">
          <div class="centerx labelx" style="justify-content:flex-start;">
            <vs-input label="作品名称" placeholder="输入作品名称" style="margin-top:10px;width:25rem;" v-model="PorductName"/>
            <vs-input label="标价" placeholder="￥0.00" style="margin-top:10px;width:25rem;" v-model="ProductPrice"/>
            <vs-textarea label="作品描述" height="200px" style="margin-top:10px;width:25rem;" v-model="ProductNum"/>
            <vs-input label="发行量" placeholder="￥0.00" style="margin-top:10px;width:25rem;"  v-model="ProductDesc"/>
            <vs-select
              class="selectExample"
              label="分类"
              v-model="CategoryId"
              style="margin-top:10px;height:4rem;width:25rem;">
              <vs-select-item :value="item.value" :text="item.text" v-for="item,index in CategoryOptions" />
            </vs-select>
          </div>
        </vs-col>
        <vs-col  vs-offset="4" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="4">
          <div class="centerx labelx" style="justify-content:flex-start;margin-top:10px;">
            <label for="">预售展览</label>
            <vs-switch v-model="JoinPreview" vs-icon-off="notifications_none" vs-icon-on="done" style="margin-left:20px;"/>
            <Datepicker
              v-model="PreviewTime"
            />

          </div>
        </vs-col>
        <vs-col  vs-offset="4" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="4">
          <div class="centerx labelx" style="justify-content:flex-start;margin-top:10px;">
            <label for="">首发销售</label>
            <vs-switch v-model="JoinMarket" vs-icon-off="done" vs-icon-on="done" style="margin-left:20px;"/>
          </div>
        </vs-col>
        <vs-col  vs-offset="4" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="4">
          <div class="centerx labelx" style="justify-content:flex-start;margin-top:10px;">
            <label for="">参与盲盒</label>
            <vs-switch v-model="JoinBlindbox" vs-icon-off="done" vs-icon-on="done" style="margin-left:20px;"/>
          </div>
        </vs-col>
        <vs-col  vs-offset="4" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
          <vs-button class="recommand-desc-button"  color="danger" type="gradient" style="width:10rem;height:3rem;margin-top:10px;" @click="startMint">开始铸造</vs-button>
        </vs-col>
      </vs-row>
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
    PreviewTime: new Date(),
    aass: '',
    PreviewImage:'',
    PorductName: '',
    ProductPrice: '',
    ProductNum: 1,
    CategoryId: '',
    JoinPreview: 0,
    JoinMarket: 0,
    JoinBlindbox: 0,
    uploadTime: '',
    ProductDesc: '',
    CategoryOptions:[
      {value:2,text:'艺术'},
      {value:3,text:'音乐'},
      {value:4,text:'域名'},
      {value:5,text:'虚拟世界'},
      {value:6,text:'交易卡片'},
      {value:7,text:'收藏品'},
      {value:8,text:'体育运动'},
      {value:9,text:'实用品'}
    ]
  }),
  computed: {
  },
  mounted(){
  },
  methods:{
    successUpload(e){
      let response = JSON.parse(e.currentTarget.response)
      if(response.msg == '上传成功'){
        this.PreviewImage = response.data.file.url
        this.uploadTime =  new Date()
        this.$vs.notify({color:'success',title:'上传成功'})
      } else {
        this.$vs.notify({color:'danger',title:'上传失败'})
      }
    },
    startMint(){
      // this.$router.push(this.to)
      console.log(this.PorductName)
      this.axios({
          method: 'post',
          url: '/api/mintProduct/createMintProduct',
          data: {
            previewImage: this.PreviewImage,
            porductName: this.PorductName,
            productPrice: this.ProductPrice,
            productNum: this.ProductNum,
            categoryId: this.CategoryId,
            joinPreview: this.joinPreview,
            joinMarket: this.joinMarket,
            previewTime: this.PreviewTime,
            ProductDesc: this.ProductDesc,
            joinBlindbox: 1,
            ownerId: this.$cookies.get('x-user-id'),
            ownerName: this.$cookies.get('x-username'),
            uploadTime: this.uploadTime,
        },
      })
      .then(json => {
        // var json = api
          // productDescomentar cuando sea real la solicitud
          if(json.data.msg == '创建成功'){
            this.$vs.notify({color:'success',title:'创建成功','position':'top-center'})
            this.$router.push('/')
          } else {
            this.$vs.notify({color:'danger',title:'上传失败','position':'top-center'})
          }
        })

    },
  }
}
</script>

