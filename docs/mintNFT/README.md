---
layout: MintNFTLayout
---

# 铸造NFT

<box header>

即将对您的作品进行上链。

</box>

<box>
  <vs-row class="info-row">
    <vs-col :key="index" v-tooltip="'col - 4'" vs-offset="4" vs-type="flex" vs-justify="center"  vs-align="center" vs-w="4">
        <vs-card>
          <div slot="header">
            出售价格
            <h3>
              ￥535
            </h3>
          </div>
          <div slot="media" class="recommand-card">
            <img :src="$withBase('/blindbox.png')">
          </div>
          <div>
            商品描述
            <span>宝宝为婴儿之意，有宝宝的地方就充满欢笑与治愈，同时宝宝也是现实世界中最接近神异世界的存在。本作品以“盘古开天”的神话为灵感，描绘了天地初始的景象：山林建成，水木苏醒，宝宝作为成长的</span>
          </div>
        </vs-card>
    </vs-col>
    <vs-col :key="index" v-tooltip="'col - 4'" vs-offset="4" vs-type="flex" vs-justify="center"  vs-align="center" vs-w="4">
      <vs-card style="padding-top:20px;padding-bottom:10px;">
        <div slot="header">
          上链信息
        </div>
        <div style="padding-top:20px;">
          公链名称
          <span style="padding-left:20px;"><a>BSC-币安智能链</a></span>
        </div>
        <div style="padding-top:20px;">
          TOKEN标准
          <span style="padding-left:20px;">ERC-721</span>
        </div>
        <div style="padding-top:20px;">
          铸造合约地址
          <span style="padding-left:20px;"><a>0xd3d2...32fb</a></span>
        </div>
        <div style="padding-top:20px;">
          作品元数据
          <span style="padding-left:20px;"><a>0xd3d2...32fb</a></span>
        </div>
      </vs-card>
    </vs-col>
    <vs-col :key="index" v-tooltip="'col - 4'" vs-offset="4" vs-type="flex" vs-justify="center"  vs-align="center" vs-w="4">
      <vs-card style="padding-top:20px;padding-bottom:10px;">
        <div>
          铸造费支付
          <span><img :src="$withBase('/qrcode.png')"></span>
        </div>
      </vs-card>
    </vs-col>
    <vs-col :key="index" v-tooltip="'col - 4'" vs-offset="4" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
      <vs-button class="recommand-desc-button"  color="danger" type="gradient" style="width:10rem;height:3rem;margin-top:10px;">开始铸造</vs-button>
    </vs-col>
  </vs-row>
</box>
<box>

</box>