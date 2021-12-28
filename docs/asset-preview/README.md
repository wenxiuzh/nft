---
layout: AssetPreviewLayout
---

#  

<box>
    <div class="contenedor">
      <vs-row vs-justify="center">
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="7">
          <div style="padding:1rem;">
            <vs-card actionable class="cardx">
              <div slot="media" class="recommand-card-detail">
                <img src="https://www.ibox.art/file/oss/test/image/nft-goods/effc35994dbc4f8299405365b25b431d.jpg?style=st6">
              </div>
              <div slot="footer">
                <vs-image :key="index" :src="`https://picsum.photos/400/300?image=2${index}`" v-for="(image, index) in 4" />
              </div>
            </vs-card>
          </div>
        </vs-col>
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="5">
          <div style="padding:1rem;">
            <h1>《宝宝—创世》</h1>
            <div style="color:rgba(44,44,52,.5)">售卖总量：100个</div>
            <vs-row vs-justify="center" class="recommand-desc-card-preview">
              <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
                <div>
                  <h3 style="line-height:5rem">上架时间：2022年2月14日 12:14:00</h3>
                </div>
              </vs-col>
            </vs-row>
            <vs-divider/>
                <vs-card style="padding-top:10px;padding-bottom:5px;">
                  <div slot="header">
                        <vs-avatar size="70px" src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4" style="float:left;"/>
                        <div style="padding:1rem;">
                          创作者
                        </div>
                        <a style="padding-top:1rem;">Tei / <span><a>0xd3d2...32fb</a></span></a>
                        <a style="float:right;padding-right:20px;margin-top:-1.5rem;">个人主页</a>
                  </div>
                  <div style="display:block;height: 80px;">
                      创作者介绍:加密艺术工作室是由加密艺术策展人杨先生主理创立，集加NFT研究、创作、作品孵化等多元的艺术“盒子”。团队成员包括区块链行业深耕多年的技术专家，也有在当代艺术领域造诣精深的专业学者，汇聚了数字艺术、算法工程、AI工程等方面资历经验颇丰的实战专家，致力于为NFT方向提供全方位、全链条、全生命周期的强大支持。
                  </div>
                </vs-card>
          </div>
        </vs-col>
      </vs-row>
    </div>
    <div class="contenedor">
      <vs-row vs-justify="center">
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        </vs-col>
      </vs-row>
    </div>
</box>

#  作品描述

<box header>

  <p></p>
  <p>作者：袁梦（ID：Y.M）</p>
  <p>作品集：<a>https://www.ggac.com/v2/user/center/home/35007</a></p>
  <p>作品说明：</p>
  <p>楼兰遭遇了烈狱的浩劫，危急关头，部分人类受到精灵的庇佑，拥有了与之对抗的力量。</p>

</box>

#  关于数字藏品

<box header>

  <p></p>
  <p>数字藏品可以通俗理解为区块链凭证。通常是指开发者在以太坊平台上根据ERC721标准/协议所发行，特性为不可分割、不可替代、独一无二。数字藏品常见于文化艺术品领域、知识产权的链上发行、流转、确权等作用，能有效保护链上知识产权，防止篡改、造假等，是区块链技术的一类场景应用。</p>

</box>

#  其他作品

<box header>
<div style="padding:20px">
  <vs-row>
    <vs-col :key="index" v-for="col,index in 3" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="4">
      <div style="padding:.5rem;">
      <vs-card>
        <div slot="header">
          <h3>
            宝宝—创世
          </h3>
          上架时间：2022年2月14日 12:14:00
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
</div>
</box>