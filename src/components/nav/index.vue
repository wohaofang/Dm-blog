<template>
  <div class="nav">
    <div class="h1">
      <span @click="goHome">隐形人Dm</span>
      <font aria-hidden="true"> » {{local}} </font>
      <span
        @mouseenter="mouseStatus(true)"
        @click="mouseStatus(false)"
      >▾</span>
      <div class="lists" v-show="showList">
        <div class="list" v-for="item in list" :key="item.text" @click="goWhere(item)" v-show="item.text != local">{{item.text}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    local:{
      type: String,
      default: '关于'
    }
  },
  data(){
    return{
      list:[
        {
          text: '博客',
          url: '/blog.html',
        },
         {
          text: '留言',
          url: '',
        },
         {
          text: '实验',
          url: '/demo.html/demo',
        },
         {
          text: 'wiki文章',
          url: 'https://github.com/wohaofang/Summary/wiki',

        },
         {
          text: '关于',
          url: '/main.html/about',
        }
      ],
      showList: false
    }
  },
  methods:{
    goHome(){
      window.location.href= `/main.html/home`

    },
    goWhere(item){
      // this.mouseStatus(false)
      window.location.href= item.url
    },
    mouseStatus(type){
      this.showList = type
      console.log(type)
    }
  }
}
</script>

<style lang="scss" scoped>
.nav{
  .h1{
    position: relative;
    font-size: 28px;
    line-height: 40px;
    margin-bottom: 20px;
    color: #567;
    font-family: Palatino,Garamond,Times,Georgia,serif;
    span{
      color: #4a75b5;
      word-break: break-all;
      cursor: pointer;
    }
    span:hover {
        color: #e58c7c;
    }

    .lists{
      position: absolute;
      border: 1px solid #ccc;
      background: #fff;
      text-align: center;
      left: 175px;
      top: 49px;
          z-index: 100;
      padding: 10px 0;
      width: 120px;
    }
    .list{
      font-size: 20px;
      cursor: pointer;
      color: #4a75b5;
      word-break: break-all;
    }
    .list:hover{
      color: #e58c7c;
      background: #eee;
    }
  }
}
</style>