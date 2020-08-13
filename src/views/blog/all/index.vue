<template>
  <div class="blog">
    <container>
        <Nav :local="'撒旦法'"></Nav>
        <div class="labelsBox">
            <h2>文章分类</h2>

            <div class="lists">
                <span v-for="p in labelsList" :key="p.id" :style="{'color': '#'+p.color}" @click="goLables(p.name)">{{p.name}}</span>
            </div>
        </div>
    </container>
  </div>
</template>

<script>
import Nav from '@/components/nav/index.vue'
import container from '@/components/container/index.vue'
import {apiLabels,apiIssues} from "@/api/blog/api"

export default {
    components:{
        Nav,
        container
    },
    data(){
        return{
            labelsList: []
        }
    },
    mounted(){
        this.getLables()
    },
    methods:{
        getLables(){
            console.log(11)
            apiLabels().then(res=>{
                this.labelsList = res
            })
           
        },
        goLables(name){
            // let params = {}
            // params.labels = name
            // apiIssues(params).then(res=>{
            //     console.log(res)
            // })
            this.$router.push({
                path: 'categories',
                query: { labels: name }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.labelsBox{
    border: 1px solid #ccc;
    padding: 15px;
    margin-bottom: 30px;
    h2{
        font-size: 22px;
        font-weight: 400;
        border-bottom: 1px dashed #ccc;
        width: 590px;
        max-width: 100%;
        line-height: 2;
        margin-bottom: 15px;
    }
    .lists span{
        cursor: pointer;
        padding: 0 7px;
        line-height: 28px;
        font-size: 16px;
    }
}
</style>