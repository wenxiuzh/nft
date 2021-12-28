---
layout: MyWithdrawLayout
---


# 提现

<box header>

你可以选择提现到微信或支付宝即时到账。系统将在提现申请审核通过后提现到你提供的账号上。

</box>

<box>
<vs-row class="info-row">
  <vs-col :key="index" v-tooltip="'col - 4'" vs-type="flex" vs-justify="end" vs-align="right" vs-w="2">
  提现平台
  </vs-col>
  <vs-col :key="index" v-tooltip="'col - 8'" vs-offset="1" vs-type="flex" vs-justify="left" vs-align="left" vs-w="9">
      <vs-radio v-model="radios1" vs-name="radios1" vs-value="luis">微信</vs-radio>
      <vs-radio v-model="radios1" vs-name="radios1" vs-value="luis">支付宝</vs-radio>
  </vs-col>
</vs-row>
<vs-row class="info-row">
  <vs-col :key="index" v-tooltip="'col - 4'" vs-type="flex" vs-justify="end" vs-align="right" vs-w="2">
  姓名
  </vs-col>
  <vs-col :key="index" v-tooltip="'col - 8'" vs-offset="1" vs-type="flex" vs-justify="left" vs-align="left" vs-w="9">
      <vs-input class="inputx" placeholder="输入密码" v-model="value1"/>
  </vs-col>
</vs-row>
<vs-row class="info-row">
  <vs-col :key="index" v-tooltip="'col - 4'" vs-type="flex" vs-justify="end" vs-align="right" vs-w="2">
  账号信息
  </vs-col>
  <vs-col :key="index" v-tooltip="'col - 8'" vs-offset="1" vs-type="flex" vs-justify="left" vs-align="left" vs-w="9">
      <vs-input class="inputx" placeholder="输入密码" v-model="value1"/>
  </vs-col>
</vs-row>
<vs-row class="info-row">
  <vs-col :key="index" v-tooltip="'col - 4'" vs-type="flex" vs-justify="end" vs-align="right" vs-w="2">
  提现金额
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

<box>

## 提现记录
<div>
    <vs-table max-items="3" pagination :data="users">
      <template slot="header">
        <h3>
          Users
        </h3>
      </template>
      <template slot="thead">
        <vs-th>
          Email
        </vs-th>
        <vs-th>
          Name
        </vs-th>
        <vs-th>
          Website
        </vs-th>
        <vs-th>
          Nro
        </vs-th>
      </template>
      <template slot-scope="{data}">
        <vs-tr :key="indextr" v-for="(tr, indextr) in data" >
          <vs-td :data="data[indextr].email">
            {{data[indextr].email}}
          </vs-td>
          <vs-td :data="data[indextr].username">
            {{data[indextr].username}}
          </vs-td>
          <vs-td :data="data[indextr].id">
            {{data[indextr].website}}
          </vs-td>
          <vs-td :data="data[indextr].id">
            {{data[indextr].id}}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</box>
