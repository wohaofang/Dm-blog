<template>
    <div 
      :class="{
            headerBox0:imgData.type ===0,
            headerBox1:imgData.type ===1,
            headerBox2:imgData.type ===2,
            headerBox3:imgData.type ===3,
            headerBox4:imgData.type ===4,
        }"  
    >
    <!-- :class="{
            headerBox0:imgData.type ===0,
            headerBox1:imgData.type ===1,
            headerBox2:imgData.type ===2,
            headerBox3:imgData.type ===3,
            headerBox4:imgData.type ===4,
        }" -->
        <img class="imgHeader" :style="imgStyle" src="@/assets/img/my.png"/>
    </div>
</template>

<script>
export default {
    props:{
        imgData:{
            type: Object,
            default: ()=>{},
        },
        num:{
            type: Number,
            default: 0,
        }
    },
    computed: {
        imgStyle(){
            let data = this.imgData
            return{
                width: data.width,
                height: data.width,
                opacity: data.opacity,
                top: `calc(${data.top} - ${data.width})`,
                left:`calc(${data.left}vh - ${data.width})`,
                position: 'fixed',
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.headerBox0{
    animation: box1 10s infinite ease-in-out;
}

.headerBox1{
    animation: box1 12s infinite ease-in-out;
}

.headerBox2{
    animation: box1 14s infinite ease-in-out;
}

.headerBox3{
    animation: box1 16s infinite ease-in-out;
}

.headerBox4{
    animation: box1 15s infinite ease-in-out;
}

@keyframes box1 {
    0% {
        transform: translateX(0vw)
    }
  
    100% {
        transform: translateX(110vw)
    }
}

.imgHeader{
    border-radius: 100%;
    animation: large 1.5s infinite ease-in-out;
}

@keyframes large {
    0% {
        transform: translateY(0vh)
    }
    50% {
        transform: translateY(-5vh)
    }
    100% {
        transform: translateY(0vh)
    }
}
</style>