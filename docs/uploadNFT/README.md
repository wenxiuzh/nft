---
layout: UploadNFTLayout
---

# 上传NFT

<box header>

请上传你的nft资产。

</box>

<box>
<vs-row class="info-row">
  <vs-col :key="index" v-tooltip="'col - 4'" vs-offset="4" vs-type="flex" vs-justify="flex-start"  vs-align="flex-start" vs-w="4">
    <h2>创建作品</h2>
  </vs-col>
  <vs-col :key="index" v-tooltip="'col - 4'" vs-offset="4" vs-type="flex" vs-justify="center"  vs-align="center" vs-w="4">
    Create new item
图片, 视频, 音频, 或者3D模型
支持的文件类型: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. 文件大小: 100 MB
  </vs-col>
  <vs-col :key="index" v-tooltip="'col - 4'" vs-offset="4" vs-type="flex" vs-justify="center"  vs-align="center" vs-w="4">
    <vs-upload class="update-asset" action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload" show-upload-button />
  </vs-col>
  <vs-col :key="index" v-tooltip="'col - 4'" vs-offset="4" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="4">
    <div class="centerx labelx" style="justify-content:flex-start;">
      <vs-input label="作品名称" placeholder="输入作品名称" style="margin-top:10px;width:25rem;"/>
      <vs-input label="标价" placeholder="￥0.00" style="margin-top:10px;width:25rem;"/>
      <vs-textarea label="作品描述" height="200px" style="margin-top:10px;width:25rem;"/>
      <vs-textarea label="发行量" height="200px" style="margin-top:10px;"/>
      <vs-select
        class="selectExample"
        label="分类"
        v-model="select1"
         style="margin-top:10px;height:4rem;width:25rem;">
        <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in options1" />
      </vs-select>
    </div>
  </vs-col>
  <vs-col :key="index" v-tooltip="'col - 4'" vs-offset="4" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="4">
    <div class="centerx labelx" style="justify-content:flex-start;margin-top:10px;">
      <label for="">预售展览</label>
      <vs-switch v-model="switchPreview" vs-icon-off="notifications_none" vs-icon-on="done" style="margin-left:20px;"/>
    <vs-input icon-after="true" label-placeholder="icon-after" icon="date_range" placeholder="Nombre" v-model="value2" style="margin-left:20px;margin-top:0;"/>
    </div>
  </vs-col>
  <vs-col :key="index" v-tooltip="'col - 4'" vs-offset="4" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="4">
    <div class="centerx labelx" style="justify-content:flex-start;margin-top:10px;">
      <label for="">首发销售</label>
      <vs-switch v-model="switchOnSale" vs-icon-off="done" vs-icon-on="done" style="margin-left:20px;"/>
    </div>
  </vs-col>
  <vs-col :key="index" v-tooltip="'col - 4'" vs-offset="4" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="4">
    <div class="centerx labelx" style="justify-content:flex-start;margin-top:10px;">
      <label for="">参与盲盒</label>
      <vs-switch v-model="switchBlindBox" vs-icon-off="notifications_none" vs-icon-on="done" style="margin-left:20px;"/>
    </div>
  </vs-col>
  <vs-col :key="index" v-tooltip="'col - 4'" vs-offset="4" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
    <vs-button class="recommand-desc-button"  color="danger" type="gradient" style="width:10rem;height:3rem;margin-top:10px;">开始铸造</vs-button>
  </vs-col>
</vs-row>
</box>
<box>

</box>