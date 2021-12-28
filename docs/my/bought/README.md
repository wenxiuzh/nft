---
layout: MyBoughtLayout
---

# 已购作品

<box header>

</box>

<box>
<vs-row>
    <vs-col :key="index" v-for="col,index in 3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
      <div style="padding:.5rem;">
      <vs-card>
        <div slot="header">
          出售价格
          <h3>
            ￥535
          </h3>
        </div>
        <div slot="media" class="recommand-card">
          <img :src="$withBase('/2accc02e3c484286875f49be72be2e9b.png')">
        </div>
        <div>
          商品描述
          <span>宝宝为婴儿之意，有宝宝的地方就充满欢笑与治愈，同时宝宝也是现实世界中最接近神异世界的存在。本作品以“盘古开天”的神话为灵感，描绘了天地初始的景象：山林建成，水木苏醒，宝宝作为成长的</span>
        </div>
      </vs-card>
      </div>
    </vs-col>
    <vs-col :key="index" v-for="col,index in 3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
      <div style="padding:.5rem;">
      <vs-card>
        <div slot="header">
          出售价格
          <h3>
            ￥535
          </h3>
        </div>
        <div slot="media" class="recommand-card">
          <img :src="$withBase('/2accc02e3c484286875f49be72be2e9b.png')">
        </div>
        <div>
          商品描述
          <span>宝宝为婴儿之意，有宝宝的地方就充满欢笑与治愈，同时宝宝也是现实世界中最接近神异世界的存在。本作品以“盘古开天”的神话为灵感，描绘了天地初始的景象：山林建成，水木苏醒，宝宝作为成长的</span>
        </div>
      </vs-card>
      </div>
    </vs-col>
    <vs-col :key="index" v-for="col,index in 3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
      <div style="padding:.5rem;">
        <vs-card>
          <div slot="header">
            出售价格
            <h3>
              ￥535
            </h3>
          </div>
          <div slot="media" class="recommand-card">
            <img :src="$withBase('/2accc02e3c484286875f49be72be2e9b.png')">
          </div>
          <div>
            商品描述
            <span>宝宝为婴儿之意，有宝宝的地方就充满欢笑与治愈，同时宝宝也是现实世界中最接近神异世界的存在。本作品以“盘古开天”的神话为灵感，描绘了天地初始的景象：山林建成，水木苏醒，宝宝作为成长的</span>
          </div>
        </vs-card>
      </div>
    </vs-col>
  </vs-row>
  <div class="center">
    <vs-pagination v-model="page" :length="20" />
  </div>
</box>
