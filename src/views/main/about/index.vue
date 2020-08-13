<template>
  <div>
    <container>
      <Nav :local="'关于'"></Nav>
      <strong class="title">
        一个有趣的灵魂 / About Me
      </strong>
      <div class="isMe desc">
        <img src="./img/my.png">
        <p>我叫丁铭，也可以叫我丁骚年. 我出生与1994年</p>
        <p>我是一名Web前端开发，很喜欢这个职业，也在工作中不断摸索成长</p>
        <p>在这里，我想记录下一些事情，留给自己以后一个回忆过去的地方</p>
        <p>我也有很多爱好，喜欢爬山，看书，打游戏什么的~~ 是一个长不大的大男孩</p>
      </div>

      <!-- <strong class="title">
        关于内容 / About The Website
      </strong> -->
      <!-- <div class="desc"><p>版权声明: 「署名-非商业性使用-禁止演绎 3.0 国际」（<a href="https://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh" target="_blank">CC BY-NC-ND 3.0</a>）</p><p>所有文章非特别说明皆为原创。技术更迭迅猛，部分内容可能会作修改，为保证信息与源同步，转载时请务必注明文章出处！谢谢合作 :-)</p><p>文章皆为个人观点，不代表所服务的公司。</p></div> -->
      <strong class="title">
        社交信息 / Social Links
      </strong>
      <div><ul>
        <li>Github： <a href="https://github.com/wohaofang" target="_blank">@wohaofang</a></li>
        <li>Social： <a href="https://juejin.im/user/59702c0d6fb9a06bc7498397" target="_blank">掘金</a> 
                      <span class="grey" aria-hidden="true" tabindex="0"> | </span> 
                      <a href="https://weibo.com/u/3733221127" target="_blank">微博</a> 
                      <span class="grey" aria-hidden="true" tabindex="0"> | </span> 
                      <a href="https://www.zhihu.com/people/ying-zi-xia-70" target="_blank">知乎</a></li>
        <li>E-mail： <a href="mailto:damdyx@163.com" target="_blank">damdyx@163.com</a></li>
        <li>Old Blog： <a href="https://wohaofang.github.io/" target="_blank">Here</a> <span class="grey"> Hexo 搭建 </span></li>
      </ul></div>

      <div id="gitalk-container"></div>
    </container>

  <!-- 本文总阅读量<span id="busuanzi_value_page_pv"></span> -->
  </div>
  
</template>

<script>
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'

import Nav from '@/components/nav/index.vue'
import container from '@/components/container/index.vue'


export default {
  components:{
    Nav,
    container
  },
  data(){
    return{
      gitalk : new Gitalk({
        id: '文章id，唯一标识',
        clientID: 'f07ec86c72637e14c416',
        clientSecret: 'df6577390dd69b8ae41bdf68a7775c96ac52fb5d',
        repo: 'Dm-blog',
        owner: 'wohaofang',//
        admin: ['wohaofang'],//github用户名
        labels: ['wohaofang'],
        perPage: 50,
        distractionFreeMode: false
        }), 
    }
  },
  mounted(){
     this.gitalk.render("gitalk-container");
  }
}

</script>

<style lang="scss" scoped>
strong.title {
    display: block;
    font-size: 18px;
    border-bottom: 1px dashed #ccc;
    line-height: 30px;
    margin-bottom: 15px;
    margin-top: 30px;
    padding-bottom: 8px;
}
p {
    line-height: 28px;
    font-size: 16px;
    margin-bottom: 15px;
}
.isMe::after{
  content: '';
  display: block;
  clear: both;
  overflow: hidden;
}
.desc{
  line-height: 28px;
    font-size: 16px;
    margin-bottom: 15px;
    word-break: break-word;
    img{
    height: 100px;
    width: 100px;
    float:left;
    margin: 10px 15px;
  }
}
ul {
    margin: 25px 0 25px 35px;
    list-style-type: square;
}

ul li {
    margin-bottom: 5px;
    list-style-type: square;
    line-height: 28px;
    font-size: 16px;
    a {
    color: #4a75b5;
    word-break: break-all;
}
}
</style>