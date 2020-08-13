<template>
  <div class="categories">
    <container>
        <Nav :local="'博客'"></Nav>
        <div class="labelsBox">
            <div class="text">类别:</div>
            <div>
                <span v-for="p in labelsList" :key="p.id" :style="{'color': '#'+p.color}" @click="getCategories(p.name)">{{p.name}}</span>
            </div>
        </div>
        <div class="lists" v-for="item in articleList" :key="item.id">
            <div class="lists-title">{{item.title}}</div>
            <div class="lists-desc">{{item.created_at}} <span v-for="p in item.labels" :key="p.id" :style="{'color': '#'+p.color}">{{p.name}}</span></div>
        </div>
    </container>
  </div>
</template>

<script>
import Nav from '@/components/nav/index.vue'
import container from '@/components/container/index.vue'
import { apiLabels, apiIssues } from "@/api/blog/api"

export default {
    components:{
        Nav,
        container
    },
    data(){
        return{
            labelsList: [],
            articleList: [],
        }
    },
    mounted(){
        this.getLables()
        this.getCategories(this.$route.query.labels)
    },
    methods:{
        getLables(){
            console.log(11)
            apiLabels().then(res=>{
                this.labelsList = res
            })
           
        },
        getCategories(name){
            let params = {}
            params.labels = name
            apiIssues(params).then(res=>{
                console.log(res)
                this.articleList = res
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.labelsBox{
    padding: 15px;
    margin-bottom: 30px;
    display: flex;
    line-height: 28px;
    margin-bottom: 10px;
    padding: 15px;
    background: #f8f8f8;
    .text{
        width: 60px;
        text-align: right;
        font-weight: 700;
        margin-right: 8px;
        font-size: 14px;
    }
    span{
        cursor: pointer;
        padding: 0 7px;
        font-size: 16px;
    }
}
</style>