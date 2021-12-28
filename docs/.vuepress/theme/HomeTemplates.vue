<template>
  <div class="home-templates">
    <header>
      <h2>
        什么是<b>数字藏品</b>
      </h2>
      <p>
        开启全新的数字艺术收藏之旅
      </p>
    </header>
      <vs-row vs-justify="center">
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="3">
          <div style="padding:.5rem;">
            <vs-card fixedHeight class="cardx">
              <div slot="media">
                <img :src="$withBase('/one.png')">
              </div>
              <div>
                <h3>唯一性</h3>
              </div>
              <div>
                <span>每个数字藏品都是独一无二的，且具有不同属性，这些属性通常存储在元数据中，且铸造后不可篡改。</span>
              </div>
            </vs-card>
          </div>
        </vs-col>
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="3">
          <div style="padding:.5rem;">
            <vs-card fixedHeight class="cardx">
              <div slot="media">
                <img :src="$withBase('/two.png')">
              </div>
              <div>
                <h3>可证明的稀缺性</h3>
              </div>
              <div>
                <span>数字藏品铸造数量可通过公共区块链网络验证，数量固定，永恒不变，具有可证明性。</span>
              </div>
            </vs-card>
          </div>
        </vs-col>
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="3">
          <div style="padding:.5rem;">
            <vs-card fixedHeight class="cardx">
              <div slot="media">
                <img :src="$withBase('/three.png')">
              </div>
              <div>
                <h3>不可分割性</h3>
              </div>
              <div>
                <span>每个数字藏品都是一个独立的个体，无法拆分，因此不能购买或转让数字藏品的一部分，因此具有不可分割性。</span>
              </div>
            </vs-card>
          </div>
        </vs-col>
      </vs-row>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus" scoped>

.home-templates
  width 100%
  background transparent
  display flex
  align-items center
  justify-content center
  flex-direction column
  margin-top 50px
  margin-bottom 70px
  vs-card--media
    height: 260px;
    img
      max-width: 240px;
      max-height: 240px;
      margin: 0 auto;
  h2
    border 0
    text-align center
    padding 20px
    font-size 2.1rem
  h3
    text-align center
  p
    font-size 16px
    padding-bottom 20px
    opacity .7
  ul
    padding 20px
    box-sizing border-box
    li
      margin 10px
      transition all .25s ease
      position relative
      list-style none
      .blackfriday
        position absolute
        top -25px
        right -50px
        font-weight bold
        box-shadow 0px 0px 20px 0px rgba(0,0,0,.1)
        border-radius 30px
        max-width 160px
        background rgb(255,255,255)
        img
          width 100%
      &:hover
        box-shadow 0px 10px 20px -10px rgba(0,0,0,.1)
        transform translate(0,-10px)
      img
        max-width 400px
        width 100%
        border-radius 16px
</style>
