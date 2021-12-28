<template lang="html">
  <div v-if="contribuitorsx.length > 0" class="con-contribuitor">
    <h3 :class="{'allcontribuitors':contributors == 'all'}">{{title || 'contributors of'}}  </h3>
    <ul>
      <li v-if="index < 19" :title="contributor.login" v-for="(contributor,index) in contribuitorsx">
        <a target="_blank" :href="$withBase('/portal/?id='+index)" rel="noopener noreferrer">
          <img :src="contributor.avatar_url" alt="">
          <img class="img-blur" :src="contributor.avatar_url" alt="">
        </a>
      </li>
      <li :class="{'is-see-more':index == 19}" v-if="index == 19" title="See more" v-for="(contributor,index) in contribuitorsx">
        <router-link
          to="/portal/"
        >
          <vs-icon class="" icon="add"></vs-icon>
        </router-link>
      </li>
    </ul>
    <div v-if="contributors == 'all'" class="con-btns-contribuitors">
      <button type="button" name="button">
        <!-- <a href="">Contribuitors</a> -->
        <router-link
          to="/portal/"
        >创作者列表</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    repo:{
      default:null,
      type:String,
    },
    contributors:{
      type:[Array, String],
      default:null
    },
    title:{
      type:String,
      default:null
    }
  },
  data(){
    return {
      contribuitorsx:[
  {
    "login": "luisDanielRoviraContreras",
    "id": 31676496,
    "node_id": "MDQ6VXNlcjMxNjc2NDk2",
    "avatar_url": "https://avatars.githubusercontent.com/u/31676496?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/luisDanielRoviraContreras",
    "html_url": "https://github.com/luisDanielRoviraContreras",
    "followers_url": "https://api.github.com/users/luisDanielRoviraContreras/followers",
    "following_url": "https://api.github.com/users/luisDanielRoviraContreras/following{/other_user}",
    "gists_url": "https://api.github.com/users/luisDanielRoviraContreras/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/luisDanielRoviraContreras/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/luisDanielRoviraContreras/subscriptions",
    "organizations_url": "https://api.github.com/users/luisDanielRoviraContreras/orgs",
    "repos_url": "https://api.github.com/users/luisDanielRoviraContreras/repos",
    "events_url": "https://api.github.com/users/luisDanielRoviraContreras/events{/privacy}",
    "received_events_url": "https://api.github.com/users/luisDanielRoviraContreras/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 1127
  },
  {
    "login": "jd-0001",
    "id": 47495003,
    "node_id": "MDQ6VXNlcjQ3NDk1MDAz",
    "avatar_url": "https://avatars.githubusercontent.com/u/47495003?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/jd-0001",
    "html_url": "https://github.com/jd-0001",
    "followers_url": "https://api.github.com/users/jd-0001/followers",
    "following_url": "https://api.github.com/users/jd-0001/following{/other_user}",
    "gists_url": "https://api.github.com/users/jd-0001/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/jd-0001/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/jd-0001/subscriptions",
    "organizations_url": "https://api.github.com/users/jd-0001/orgs",
    "repos_url": "https://api.github.com/users/jd-0001/repos",
    "events_url": "https://api.github.com/users/jd-0001/events{/privacy}",
    "received_events_url": "https://api.github.com/users/jd-0001/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 52
  },
  {
    "login": "jacrys",
    "id": 3784287,
    "node_id": "MDQ6VXNlcjM3ODQyODc=",
    "avatar_url": "https://avatars.githubusercontent.com/u/3784287?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/jacrys",
    "html_url": "https://github.com/jacrys",
    "followers_url": "https://api.github.com/users/jacrys/followers",
    "following_url": "https://api.github.com/users/jacrys/following{/other_user}",
    "gists_url": "https://api.github.com/users/jacrys/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/jacrys/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/jacrys/subscriptions",
    "organizations_url": "https://api.github.com/users/jacrys/orgs",
    "repos_url": "https://api.github.com/users/jacrys/repos",
    "events_url": "https://api.github.com/users/jacrys/events{/privacy}",
    "received_events_url": "https://api.github.com/users/jacrys/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 45
  },
  {
    "login": "brunokunace",
    "id": 16597320,
    "node_id": "MDQ6VXNlcjE2NTk3MzIw",
    "avatar_url": "https://avatars.githubusercontent.com/u/16597320?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/brunokunace",
    "html_url": "https://github.com/brunokunace",
    "followers_url": "https://api.github.com/users/brunokunace/followers",
    "following_url": "https://api.github.com/users/brunokunace/following{/other_user}",
    "gists_url": "https://api.github.com/users/brunokunace/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/brunokunace/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/brunokunace/subscriptions",
    "organizations_url": "https://api.github.com/users/brunokunace/orgs",
    "repos_url": "https://api.github.com/users/brunokunace/repos",
    "events_url": "https://api.github.com/users/brunokunace/events{/privacy}",
    "received_events_url": "https://api.github.com/users/brunokunace/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 43
  },
  {
    "login": "potato4d",
    "id": 6993514,
    "node_id": "MDQ6VXNlcjY5OTM1MTQ=",
    "avatar_url": "https://avatars.githubusercontent.com/u/6993514?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/potato4d",
    "html_url": "https://github.com/potato4d",
    "followers_url": "https://api.github.com/users/potato4d/followers",
    "following_url": "https://api.github.com/users/potato4d/following{/other_user}",
    "gists_url": "https://api.github.com/users/potato4d/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/potato4d/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/potato4d/subscriptions",
    "organizations_url": "https://api.github.com/users/potato4d/orgs",
    "repos_url": "https://api.github.com/users/potato4d/repos",
    "events_url": "https://api.github.com/users/potato4d/events{/privacy}",
    "received_events_url": "https://api.github.com/users/potato4d/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 19
  },
  {
    "login": "fergardi",
    "id": 3602272,
    "node_id": "MDQ6VXNlcjM2MDIyNzI=",
    "avatar_url": "https://avatars.githubusercontent.com/u/3602272?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/fergardi",
    "html_url": "https://github.com/fergardi",
    "followers_url": "https://api.github.com/users/fergardi/followers",
    "following_url": "https://api.github.com/users/fergardi/following{/other_user}",
    "gists_url": "https://api.github.com/users/fergardi/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/fergardi/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/fergardi/subscriptions",
    "organizations_url": "https://api.github.com/users/fergardi/orgs",
    "repos_url": "https://api.github.com/users/fergardi/repos",
    "events_url": "https://api.github.com/users/fergardi/events{/privacy}",
    "received_events_url": "https://api.github.com/users/fergardi/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 16
  },
  {
    "login": "jsinhSolanki",
    "id": 31243533,
    "node_id": "MDQ6VXNlcjMxMjQzNTMz",
    "avatar_url": "https://avatars.githubusercontent.com/u/31243533?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/jsinhSolanki",
    "html_url": "https://github.com/jsinhSolanki",
    "followers_url": "https://api.github.com/users/jsinhSolanki/followers",
    "following_url": "https://api.github.com/users/jsinhSolanki/following{/other_user}",
    "gists_url": "https://api.github.com/users/jsinhSolanki/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/jsinhSolanki/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/jsinhSolanki/subscriptions",
    "organizations_url": "https://api.github.com/users/jsinhSolanki/orgs",
    "repos_url": "https://api.github.com/users/jsinhSolanki/repos",
    "events_url": "https://api.github.com/users/jsinhSolanki/events{/privacy}",
    "received_events_url": "https://api.github.com/users/jsinhSolanki/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 16
  },
  {
    "login": "guastallaigor",
    "id": 22016005,
    "node_id": "MDQ6VXNlcjIyMDE2MDA1",
    "avatar_url": "https://avatars.githubusercontent.com/u/22016005?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/guastallaigor",
    "html_url": "https://github.com/guastallaigor",
    "followers_url": "https://api.github.com/users/guastallaigor/followers",
    "following_url": "https://api.github.com/users/guastallaigor/following{/other_user}",
    "gists_url": "https://api.github.com/users/guastallaigor/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/guastallaigor/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/guastallaigor/subscriptions",
    "organizations_url": "https://api.github.com/users/guastallaigor/orgs",
    "repos_url": "https://api.github.com/users/guastallaigor/repos",
    "events_url": "https://api.github.com/users/guastallaigor/events{/privacy}",
    "received_events_url": "https://api.github.com/users/guastallaigor/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 15
  },
  {
    "login": "pitchinnate",
    "id": 2814435,
    "node_id": "MDQ6VXNlcjI4MTQ0MzU=",
    "avatar_url": "https://avatars.githubusercontent.com/u/2814435?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/pitchinnate",
    "html_url": "https://github.com/pitchinnate",
    "followers_url": "https://api.github.com/users/pitchinnate/followers",
    "following_url": "https://api.github.com/users/pitchinnate/following{/other_user}",
    "gists_url": "https://api.github.com/users/pitchinnate/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/pitchinnate/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/pitchinnate/subscriptions",
    "organizations_url": "https://api.github.com/users/pitchinnate/orgs",
    "repos_url": "https://api.github.com/users/pitchinnate/repos",
    "events_url": "https://api.github.com/users/pitchinnate/events{/privacy}",
    "received_events_url": "https://api.github.com/users/pitchinnate/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 14
  },
  {
    "login": "Tofandel",
    "id": 6115458,
    "node_id": "MDQ6VXNlcjYxMTU0NTg=",
    "avatar_url": "https://avatars.githubusercontent.com/u/6115458?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Tofandel",
    "html_url": "https://github.com/Tofandel",
    "followers_url": "https://api.github.com/users/Tofandel/followers",
    "following_url": "https://api.github.com/users/Tofandel/following{/other_user}",
    "gists_url": "https://api.github.com/users/Tofandel/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Tofandel/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Tofandel/subscriptions",
    "organizations_url": "https://api.github.com/users/Tofandel/orgs",
    "repos_url": "https://api.github.com/users/Tofandel/repos",
    "events_url": "https://api.github.com/users/Tofandel/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Tofandel/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 13
  },
  {
    "login": "kamaladenalhomsi",
    "id": 16209653,
    "node_id": "MDQ6VXNlcjE2MjA5NjUz",
    "avatar_url": "https://avatars.githubusercontent.com/u/16209653?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/kamaladenalhomsi",
    "html_url": "https://github.com/kamaladenalhomsi",
    "followers_url": "https://api.github.com/users/kamaladenalhomsi/followers",
    "following_url": "https://api.github.com/users/kamaladenalhomsi/following{/other_user}",
    "gists_url": "https://api.github.com/users/kamaladenalhomsi/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/kamaladenalhomsi/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/kamaladenalhomsi/subscriptions",
    "organizations_url": "https://api.github.com/users/kamaladenalhomsi/orgs",
    "repos_url": "https://api.github.com/users/kamaladenalhomsi/repos",
    "events_url": "https://api.github.com/users/kamaladenalhomsi/events{/privacy}",
    "received_events_url": "https://api.github.com/users/kamaladenalhomsi/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 12
  },
  {
    "login": "Pedrazl",
    "id": 10074431,
    "node_id": "MDQ6VXNlcjEwMDc0NDMx",
    "avatar_url": "https://avatars.githubusercontent.com/u/10074431?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Pedrazl",
    "html_url": "https://github.com/Pedrazl",
    "followers_url": "https://api.github.com/users/Pedrazl/followers",
    "following_url": "https://api.github.com/users/Pedrazl/following{/other_user}",
    "gists_url": "https://api.github.com/users/Pedrazl/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Pedrazl/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Pedrazl/subscriptions",
    "organizations_url": "https://api.github.com/users/Pedrazl/orgs",
    "repos_url": "https://api.github.com/users/Pedrazl/repos",
    "events_url": "https://api.github.com/users/Pedrazl/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Pedrazl/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 10
  },
  {
    "login": "JerssonDev",
    "id": 26398248,
    "node_id": "MDQ6VXNlcjI2Mzk4MjQ4",
    "avatar_url": "https://avatars.githubusercontent.com/u/26398248?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/JerssonDev",
    "html_url": "https://github.com/JerssonDev",
    "followers_url": "https://api.github.com/users/JerssonDev/followers",
    "following_url": "https://api.github.com/users/JerssonDev/following{/other_user}",
    "gists_url": "https://api.github.com/users/JerssonDev/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/JerssonDev/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/JerssonDev/subscriptions",
    "organizations_url": "https://api.github.com/users/JerssonDev/orgs",
    "repos_url": "https://api.github.com/users/JerssonDev/repos",
    "events_url": "https://api.github.com/users/JerssonDev/events{/privacy}",
    "received_events_url": "https://api.github.com/users/JerssonDev/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 9
  },
  {
    "login": "michalszajnecki",
    "id": 5558640,
    "node_id": "MDQ6VXNlcjU1NTg2NDA=",
    "avatar_url": "https://avatars.githubusercontent.com/u/5558640?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/michalszajnecki",
    "html_url": "https://github.com/michalszajnecki",
    "followers_url": "https://api.github.com/users/michalszajnecki/followers",
    "following_url": "https://api.github.com/users/michalszajnecki/following{/other_user}",
    "gists_url": "https://api.github.com/users/michalszajnecki/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/michalszajnecki/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/michalszajnecki/subscriptions",
    "organizations_url": "https://api.github.com/users/michalszajnecki/orgs",
    "repos_url": "https://api.github.com/users/michalszajnecki/repos",
    "events_url": "https://api.github.com/users/michalszajnecki/events{/privacy}",
    "received_events_url": "https://api.github.com/users/michalszajnecki/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 8
  },
  {
    "login": "periscuelo",
    "id": 6675426,
    "node_id": "MDQ6VXNlcjY2NzU0MjY=",
    "avatar_url": "https://avatars.githubusercontent.com/u/6675426?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/periscuelo",
    "html_url": "https://github.com/periscuelo",
    "followers_url": "https://api.github.com/users/periscuelo/followers",
    "following_url": "https://api.github.com/users/periscuelo/following{/other_user}",
    "gists_url": "https://api.github.com/users/periscuelo/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/periscuelo/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/periscuelo/subscriptions",
    "organizations_url": "https://api.github.com/users/periscuelo/orgs",
    "repos_url": "https://api.github.com/users/periscuelo/repos",
    "events_url": "https://api.github.com/users/periscuelo/events{/privacy}",
    "received_events_url": "https://api.github.com/users/periscuelo/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 8
  },
  {
    "login": "rendoh",
    "id": 15811084,
    "node_id": "MDQ6VXNlcjE1ODExMDg0",
    "avatar_url": "https://avatars.githubusercontent.com/u/15811084?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/rendoh",
    "html_url": "https://github.com/rendoh",
    "followers_url": "https://api.github.com/users/rendoh/followers",
    "following_url": "https://api.github.com/users/rendoh/following{/other_user}",
    "gists_url": "https://api.github.com/users/rendoh/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/rendoh/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/rendoh/subscriptions",
    "organizations_url": "https://api.github.com/users/rendoh/orgs",
    "repos_url": "https://api.github.com/users/rendoh/repos",
    "events_url": "https://api.github.com/users/rendoh/events{/privacy}",
    "received_events_url": "https://api.github.com/users/rendoh/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 7
  },
  {
    "login": "rfigueroa",
    "id": 41128440,
    "node_id": "MDQ6VXNlcjQxMTI4NDQw",
    "avatar_url": "https://avatars.githubusercontent.com/u/41128440?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/rfigueroa",
    "html_url": "https://github.com/rfigueroa",
    "followers_url": "https://api.github.com/users/rfigueroa/followers",
    "following_url": "https://api.github.com/users/rfigueroa/following{/other_user}",
    "gists_url": "https://api.github.com/users/rfigueroa/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/rfigueroa/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/rfigueroa/subscriptions",
    "organizations_url": "https://api.github.com/users/rfigueroa/orgs",
    "repos_url": "https://api.github.com/users/rfigueroa/repos",
    "events_url": "https://api.github.com/users/rfigueroa/events{/privacy}",
    "received_events_url": "https://api.github.com/users/rfigueroa/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 7
  },
  {
    "login": "m-sallam",
    "id": 36113254,
    "node_id": "MDQ6VXNlcjM2MTEzMjU0",
    "avatar_url": "https://avatars.githubusercontent.com/u/36113254?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/m-sallam",
    "html_url": "https://github.com/m-sallam",
    "followers_url": "https://api.github.com/users/m-sallam/followers",
    "following_url": "https://api.github.com/users/m-sallam/following{/other_user}",
    "gists_url": "https://api.github.com/users/m-sallam/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/m-sallam/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/m-sallam/subscriptions",
    "organizations_url": "https://api.github.com/users/m-sallam/orgs",
    "repos_url": "https://api.github.com/users/m-sallam/repos",
    "events_url": "https://api.github.com/users/m-sallam/events{/privacy}",
    "received_events_url": "https://api.github.com/users/m-sallam/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 7
  },
  {
    "login": "damuso",
    "id": 30797402,
    "node_id": "MDQ6VXNlcjMwNzk3NDAy",
    "avatar_url": "https://avatars.githubusercontent.com/u/30797402?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/damuso",
    "html_url": "https://github.com/damuso",
    "followers_url": "https://api.github.com/users/damuso/followers",
    "following_url": "https://api.github.com/users/damuso/following{/other_user}",
    "gists_url": "https://api.github.com/users/damuso/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/damuso/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/damuso/subscriptions",
    "organizations_url": "https://api.github.com/users/damuso/orgs",
    "repos_url": "https://api.github.com/users/damuso/repos",
    "events_url": "https://api.github.com/users/damuso/events{/privacy}",
    "received_events_url": "https://api.github.com/users/damuso/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 7
  },
  {
    "login": "hyperupcall",
    "id": 24364012,
    "node_id": "MDQ6VXNlcjI0MzY0MDEy",
    "avatar_url": "https://avatars.githubusercontent.com/u/24364012?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/hyperupcall",
    "html_url": "https://github.com/hyperupcall",
    "followers_url": "https://api.github.com/users/hyperupcall/followers",
    "following_url": "https://api.github.com/users/hyperupcall/following{/other_user}",
    "gists_url": "https://api.github.com/users/hyperupcall/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/hyperupcall/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/hyperupcall/subscriptions",
    "organizations_url": "https://api.github.com/users/hyperupcall/orgs",
    "repos_url": "https://api.github.com/users/hyperupcall/repos",
    "events_url": "https://api.github.com/users/hyperupcall/events{/privacy}",
    "received_events_url": "https://api.github.com/users/hyperupcall/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 7
  },
  {
    "login": "lk77",
    "id": 9606882,
    "node_id": "MDQ6VXNlcjk2MDY4ODI=",
    "avatar_url": "https://avatars.githubusercontent.com/u/9606882?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/lk77",
    "html_url": "https://github.com/lk77",
    "followers_url": "https://api.github.com/users/lk77/followers",
    "following_url": "https://api.github.com/users/lk77/following{/other_user}",
    "gists_url": "https://api.github.com/users/lk77/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/lk77/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/lk77/subscriptions",
    "organizations_url": "https://api.github.com/users/lk77/orgs",
    "repos_url": "https://api.github.com/users/lk77/repos",
    "events_url": "https://api.github.com/users/lk77/events{/privacy}",
    "received_events_url": "https://api.github.com/users/lk77/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 6
  },
  {
    "login": "RALMAZ",
    "id": 26162860,
    "node_id": "MDQ6VXNlcjI2MTYyODYw",
    "avatar_url": "https://avatars.githubusercontent.com/u/26162860?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/RALMAZ",
    "html_url": "https://github.com/RALMAZ",
    "followers_url": "https://api.github.com/users/RALMAZ/followers",
    "following_url": "https://api.github.com/users/RALMAZ/following{/other_user}",
    "gists_url": "https://api.github.com/users/RALMAZ/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/RALMAZ/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/RALMAZ/subscriptions",
    "organizations_url": "https://api.github.com/users/RALMAZ/orgs",
    "repos_url": "https://api.github.com/users/RALMAZ/repos",
    "events_url": "https://api.github.com/users/RALMAZ/events{/privacy}",
    "received_events_url": "https://api.github.com/users/RALMAZ/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 6
  },
  {
    "login": "emanuelmutschlechner",
    "id": 27734375,
    "node_id": "MDQ6VXNlcjI3NzM0Mzc1",
    "avatar_url": "https://avatars.githubusercontent.com/u/27734375?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/emanuelmutschlechner",
    "html_url": "https://github.com/emanuelmutschlechner",
    "followers_url": "https://api.github.com/users/emanuelmutschlechner/followers",
    "following_url": "https://api.github.com/users/emanuelmutschlechner/following{/other_user}",
    "gists_url": "https://api.github.com/users/emanuelmutschlechner/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/emanuelmutschlechner/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/emanuelmutschlechner/subscriptions",
    "organizations_url": "https://api.github.com/users/emanuelmutschlechner/orgs",
    "repos_url": "https://api.github.com/users/emanuelmutschlechner/repos",
    "events_url": "https://api.github.com/users/emanuelmutschlechner/events{/privacy}",
    "received_events_url": "https://api.github.com/users/emanuelmutschlechner/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 5
  },
  {
    "login": "OzairP",
    "id": 6686039,
    "node_id": "MDQ6VXNlcjY2ODYwMzk=",
    "avatar_url": "https://avatars.githubusercontent.com/u/6686039?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/OzairP",
    "html_url": "https://github.com/OzairP",
    "followers_url": "https://api.github.com/users/OzairP/followers",
    "following_url": "https://api.github.com/users/OzairP/following{/other_user}",
    "gists_url": "https://api.github.com/users/OzairP/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/OzairP/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/OzairP/subscriptions",
    "organizations_url": "https://api.github.com/users/OzairP/orgs",
    "repos_url": "https://api.github.com/users/OzairP/repos",
    "events_url": "https://api.github.com/users/OzairP/events{/privacy}",
    "received_events_url": "https://api.github.com/users/OzairP/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 5
  },
  {
    "login": "ManuelRovira",
    "id": 38593101,
    "node_id": "MDQ6VXNlcjM4NTkzMTAx",
    "avatar_url": "https://avatars.githubusercontent.com/u/38593101?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ManuelRovira",
    "html_url": "https://github.com/ManuelRovira",
    "followers_url": "https://api.github.com/users/ManuelRovira/followers",
    "following_url": "https://api.github.com/users/ManuelRovira/following{/other_user}",
    "gists_url": "https://api.github.com/users/ManuelRovira/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ManuelRovira/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ManuelRovira/subscriptions",
    "organizations_url": "https://api.github.com/users/ManuelRovira/orgs",
    "repos_url": "https://api.github.com/users/ManuelRovira/repos",
    "events_url": "https://api.github.com/users/ManuelRovira/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ManuelRovira/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 5
  },
  {
    "login": "andreslgo",
    "id": 4074043,
    "node_id": "MDQ6VXNlcjQwNzQwNDM=",
    "avatar_url": "https://avatars.githubusercontent.com/u/4074043?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/andreslgo",
    "html_url": "https://github.com/andreslgo",
    "followers_url": "https://api.github.com/users/andreslgo/followers",
    "following_url": "https://api.github.com/users/andreslgo/following{/other_user}",
    "gists_url": "https://api.github.com/users/andreslgo/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/andreslgo/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/andreslgo/subscriptions",
    "organizations_url": "https://api.github.com/users/andreslgo/orgs",
    "repos_url": "https://api.github.com/users/andreslgo/repos",
    "events_url": "https://api.github.com/users/andreslgo/events{/privacy}",
    "received_events_url": "https://api.github.com/users/andreslgo/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 4
  },
  {
    "login": "jbienesdev",
    "id": 17470909,
    "node_id": "MDQ6VXNlcjE3NDcwOTA5",
    "avatar_url": "https://avatars.githubusercontent.com/u/17470909?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/jbienesdev",
    "html_url": "https://github.com/jbienesdev",
    "followers_url": "https://api.github.com/users/jbienesdev/followers",
    "following_url": "https://api.github.com/users/jbienesdev/following{/other_user}",
    "gists_url": "https://api.github.com/users/jbienesdev/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/jbienesdev/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/jbienesdev/subscriptions",
    "organizations_url": "https://api.github.com/users/jbienesdev/orgs",
    "repos_url": "https://api.github.com/users/jbienesdev/repos",
    "events_url": "https://api.github.com/users/jbienesdev/events{/privacy}",
    "received_events_url": "https://api.github.com/users/jbienesdev/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 4
  },
  {
    "login": "Kylart",
    "id": 18316666,
    "node_id": "MDQ6VXNlcjE4MzE2NjY2",
    "avatar_url": "https://avatars.githubusercontent.com/u/18316666?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Kylart",
    "html_url": "https://github.com/Kylart",
    "followers_url": "https://api.github.com/users/Kylart/followers",
    "following_url": "https://api.github.com/users/Kylart/following{/other_user}",
    "gists_url": "https://api.github.com/users/Kylart/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Kylart/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Kylart/subscriptions",
    "organizations_url": "https://api.github.com/users/Kylart/orgs",
    "repos_url": "https://api.github.com/users/Kylart/repos",
    "events_url": "https://api.github.com/users/Kylart/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Kylart/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 4
  },
  {
    "login": "eusonlito",
    "id": 644551,
    "node_id": "MDQ6VXNlcjY0NDU1MQ==",
    "avatar_url": "https://avatars.githubusercontent.com/u/644551?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/eusonlito",
    "html_url": "https://github.com/eusonlito",
    "followers_url": "https://api.github.com/users/eusonlito/followers",
    "following_url": "https://api.github.com/users/eusonlito/following{/other_user}",
    "gists_url": "https://api.github.com/users/eusonlito/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/eusonlito/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/eusonlito/subscriptions",
    "organizations_url": "https://api.github.com/users/eusonlito/orgs",
    "repos_url": "https://api.github.com/users/eusonlito/repos",
    "events_url": "https://api.github.com/users/eusonlito/events{/privacy}",
    "received_events_url": "https://api.github.com/users/eusonlito/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 4
  },
  {
    "login": "mg98",
    "id": 22933507,
    "node_id": "MDQ6VXNlcjIyOTMzNTA3",
    "avatar_url": "https://avatars.githubusercontent.com/u/22933507?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mg98",
    "html_url": "https://github.com/mg98",
    "followers_url": "https://api.github.com/users/mg98/followers",
    "following_url": "https://api.github.com/users/mg98/following{/other_user}",
    "gists_url": "https://api.github.com/users/mg98/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mg98/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mg98/subscriptions",
    "organizations_url": "https://api.github.com/users/mg98/orgs",
    "repos_url": "https://api.github.com/users/mg98/repos",
    "events_url": "https://api.github.com/users/mg98/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mg98/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 4
  }
],
    }
  },


  mounted(){
    this.consultContributors()
  },
  watch:{
    contribuitors(){
      // console.log("cambio", this.Contribuitors);
      this.Contribuitorsx = []
      this.consultContributors()
    }
  },
  methods:{
    consultContributors(){
      if(!this.contributors) {
        return
      }
    }
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl'
.con-btns-contribuitors {
  margin-top: 40px;
}
.con-btns-contribuitors button {
  transition: all .2s ease;
  top: 0px;
  border 0px
  background transparent
}
.con-btns-contribuitors button a{
  border-radius 10px !important
  padding: 13px;
  background: $accentColor
  color: rgb(255, 255, 255);
  display: block;
  padding-left: 35px;
  padding-right: 35px;
  transition: all .3s ease;
  border-radius 15px !important;
}
.con-btns-contribuitors button a:hover {
  box-shadow: 0px 9px 28px -9px #5b3cc4 !important;
}
.allcontribuitors {
  text-align: left !important;
  font-size: 30px;
  margin-bottom: 20px;

}
.con-contribuitor {
  width: 100%;
  position: relative;
  padding: 10px;
}
.con-contribuitor ul {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-left: 0px !important
}
.con-contribuitor ul li {
  margin: 7px;
  list-style: none !important;
  position: relative;
  transition: all .3s ease;
  z-index: 200;
}
.con-contribuitor ul li:hover {
  transform: scale(1.1);
  z-index: 300;
}
.con-contribuitor ul li img {
  width: 50px;
  height: 50px;
  border-radius: 35%;
  z-index: 100;
  position: relative;
  display: block;
  }
.con-contribuitor ul li a i {
  font-size 30px;
  color #fff
}
.is-see-more
  background: #5b3cc4
  border-radius: 18px;
  display flex
  cursor pointer
  &:hover
    transform scale(1) !important
    box-shadow: 0px 9px 28px -9px #5b3cc4 !important;
.is-see-more a {
  display flex
  align-items center
  justify-content center
  padding: 10px;
}

.img-blur {
  position: absolute !important;
  left: 0px;
  bottom: -5px;
  z-index: 50 !important;
  filter: blur(7px);
  opacity: .5;
}
.con-contribuitor h3 {
  text-align: center;
  padding: 10px;
}
</style>
