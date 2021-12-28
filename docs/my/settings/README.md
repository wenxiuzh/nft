
# 我的设置

<box header>


</box>

<box>
<vs-row class="info-row">
  <vs-col :key="index" v-tooltip="'col - 4'" vs-type="flex" vs-justify="end" vs-align="right" vs-w="2">
  用户名
  </vs-col>
  <vs-col :key="index" v-tooltip="'col - 8'" vs-offset="1" vs-type="flex" vs-justify="left" vs-align="left" vs-w="9">
      <vs-input class="inputx" placeholder="输入用户名" v-model="value1"/>
  </vs-col>
</vs-row>
<vs-row class="info-row">
  <vs-col :key="index" v-tooltip="'col - 4'" vs-type="flex" vs-justify="end" vs-align="right" vs-w="2">
  头像
  </vs-col>
  <vs-col :key="index" v-tooltip="'col - 8'" vs-offset="1" vs-type="flex" vs-justify="left" vs-align="left" vs-w="9">
    <vs-avatar size="70px" src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4"/>
    <vs-upload action="https://jsonplaceholder.typicode.com/posts/" class="nft-upload" @on-success="successUpload" show-upload-button />
  </vs-col>
</vs-row>
<vs-row class="info-row">
  <vs-col :key="index" v-tooltip="'col - 4'" vs-type="flex" vs-justify="end" vs-align="right" vs-w="2">
  密码
  </vs-col>
  <vs-col :key="index" v-tooltip="'col - 8'" vs-offset="1" vs-type="flex" vs-justify="left" vs-align="left" vs-w="9">
      <vs-input class="inputx" placeholder="输入密码" v-model="value1"/>
  </vs-col>
</vs-row>
<vs-row class="info-row">
  <vs-col :key="index" v-tooltip="'col - 4'" vs-type="flex" vs-justify="end" vs-align="right" vs-w="2">
  确认密码
  </vs-col>
  <vs-col :key="index" v-tooltip="'col - 8'" vs-offset="1" vs-type="flex" vs-justify="left" vs-align="left" vs-w="9">
      <vs-input class="inputx" placeholder="确认密码" v-model="value1"/>
  </vs-col>
</vs-row>
<vs-row class="info-row">
  <vs-col :key="index" v-tooltip="'col - 4'" vs-type="flex" vs-justify="end" vs-align="right" vs-w="2">
  
  </vs-col>
  <vs-col :key="index" v-tooltip="'col - 8'" vs-offset="1" vs-type="flex" vs-justify="left" vs-align="left" vs-w="9">
      <vs-button color="primary" type="filled">保存</vs-button>
  </vs-col>
</vs-row>

</box>