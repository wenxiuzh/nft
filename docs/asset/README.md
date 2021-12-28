---
layout: AssetLayout
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
            <div style="color:rgba(44,44,52,.5)">编号：#20/100</div>
            <vs-row vs-justify="center" class="recommand-desc-card">
              <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
                <vs-card style="padding-top:20px;padding-bottom:10px;">
                  <div>
                    合约地址
                    <span style="padding-left:20px;"><a>0xd3d2...32fb</a></span>
                  </div>
                  <div style="padding-top:20px;">
                    链上标识
                    <span style="padding-left:20px;"><a>369821</a></span>
                  </div>
                </vs-card>
              </vs-col>
            </vs-row>
            <div class="recommand-desc-bottom">
              <div>
              <h1>￥ 465</h1>
              </div>
              <vs-button @click="popupActivo=true" class="recommand-desc-button"  color="danger" type="gradient" style="width:100%;height:3rem;position:relative;bottom:0px;" to="/asset/">立即购买</vs-button>
              <vs-popup class="holamundo"  title="选择支付方式" :active.sync="popupActivo">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </vs-popup>
            </div>
            <vs-divider/>
                <vs-card style="padding-top:10px;padding-bottom:5px;">
                  <div style="display:block;height: 80px;">
                    <div>
                      <vs-avatar size="70px" src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4" style="float:left;"/>
                      <div style="padding:1rem;">
                        创作者
                      </div>
                      <a style="padding-top:1rem;">Tei / <span><a>0xd3d2...32fb</a></span></a>
                      <a style="float:right;padding-right:20px;margin-top:-1.5rem;">个人主页</a>
                    </div>
                  </div>
                  <div style="display:block;height: 80px;">
                    <div>
                      <vs-avatar size="70px" src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4" style="float:left;"/>
                      <div style="padding:1rem;">
                        拥有者
                      </div>
                      <a style="padding-top:1rem;">Tei / <span><a>0xd3d2...32fb</a></span></a>
                      <a style="float:right;padding-right:20px;margin-top:-1.5rem;">个人主页</a>
                    </div>
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

#  交易记录

<box style="height:400px">


</box>