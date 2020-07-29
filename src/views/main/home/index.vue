<template>
  <div class="home">
    <div class="home-box">
      <div class="indexLogo" @click="setImgList">
        Dm的个人网站
        <img src="@/assets/img/my.png" />
      </div>
      <h3 title="一个有趣的灵魂" aria-hidden="true">Ding Ming's personal website</h3>

      <div class="row">
        <font aria-hidden="true">»</font>
        <span @click="goWhere('blog')">博客</span>
         <font aria-hidden="true">/</font>
        <span @click="goWhere('message')">留言</span>
        <font aria-hidden="true">/</font>
        <span @click="goWhere('demo')">实验</span>
        <font aria-hidden="true">/</font>
        <span @click="goWhere('wiki')">wiki文章</span>
        <font aria-hidden="true">/</font>
        <span @click="goWhere('about')">关于</span>
      </div>
      <div class="row">
        <font aria-hidden="true">»</font>
        <span class="iconfont" title="Github" @click="goWhere('git')">&#xe601;</span>
        <span class="iconfont" title="Juejin" @click="goWhere('juejin')">&#xe66f;</span>
        <span class="iconfont" title="Zhihu" @click="goWhere('zhihu')">&#xe61f;</span>
        <span class="iconfont" title="Sina Weibo" @click="goWhere('weibo')">&#xe611;</span>
      </div>
     
    </div>
    <div class="flyzone">
      <imgHeader v-for="(p,index) in imgList" :key="index" :imgData="p" :num='index'/>
    </div>
  </div>
</template>

<script>
import imgHeader from "./imgHeader"

export default {
  components:{
    imgHeader
  },
  data(){
    return{
      where:{
        blog:{
          inside: true,
          url: 'blog'
        },
        message:{
          inside: false,
          url: 'http://www.dingdaming.com/blog/#/Login'
        },
        demo:{
          inside: true,
          url: 'demo'
        },
        wiki:{
          inside: false,
          url: 'https://github.com/wohaofang/Summary/wiki'
        },
        about:{
          inside: true,
          url: 'about'
        },
        git:{
          inside: false,
          url: 'https://github.com/wohaofang'
        },
        juejin:{
          inside: false,
          url: 'https://juejin.im/user/59702c0d6fb9a06bc7498397'
        },
        zhihu:{
          inside: false,
          url: 'https://www.zhihu.com/people/ying-zi-xia-70'
        },
        weibo:{
          inside: false,
          url: 'https://weibo.com/u/3733221127'
        },
      },
      imgList:[
      
      ]
    }
  },
  methods:{
    goWhere(type){
      let obj = this.where[type]
      if(obj.inside){
        this.$router.push({
          path: obj.url
        })
      }else{
        // window.location.href=obj.url
        window.open(obj.url)
      }
    },
    setImgList(){
      let obj = {
        width: `${Math.floor(Math.random()*(250-50+1)+50)}px`,
        opacity: Math.random()+0.3,
        top: `${Math.floor(Math.random()*(80-20+1)+20)}vh`,
        left: 0,
        type: Math.floor(Math.random()*(4-0+1)+0)
      }
      this.imgList.push(obj)
    },
  }
};
</script>

<style lang="scss" scoped>
@import './font/iconfont.css';

.home {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  // background: #003973;
  // background: -moz-linear-gradient(left,#003973 0,#e5e5be 100%);
  // background: -webkit-linear-gradient(left,#003973 0,#e5e5be 100%);
  // background: linear-gradient(to right,#003973 0,#e5e5be 100%);
  background-image: url("../../../assets/img/bg.png");
  // background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center center;
}
.home-box {
  position: absolute;
  z-index: 10;
  width: 440px;
  height: 240px;
  background: rgba(68, 66, 66 ,.6);
  left: 50%;
  top: 50%;
  margin-left: -220px;
  margin-top: -120px;
  padding: 20px;
  border-radius: 12px;
  color: #eee;
  font-family: Georgia,serif;
}
.indexLogo {
  cursor: pointer;
  color: #eee;
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  line-height: 36px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    vertical-align: middle;
    margin-left: 5px;
  }

}
 .home-box  h3 {
    color: #eee;
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    line-height: 36px;
    font-size: 16px;
    margin-bottom: 30px;
    text-align: center;
    font-family: Palatino,Garamond,Times,Georgia,serif;
}
.row{
  transition: all .4 ease;
  background: rgba(154,154,154,.5);
  padding: 10px;
  line-height: 24px;
  margin-bottom: 20px;
  border-radius: 8px;
  font-size: 18px;
  span{
    padding: 0 5px;
    cursor: pointer;
  }
  span.iconfont{
        cursor: alias;
  }
}
.row:hover{
  background: rgba(228,228,228,.7);
  color: #000;
}

.flyzone{
  position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
}
</style>