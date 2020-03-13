<template>
   <div>
       <!--轮播图-->
       <mt-swipe :auto="4000">
           <mt-swipe-item v-for="item in chartList" :key="item.url">
               <img :src="item.img" class="rotationImg">
           </mt-swipe-item>
       </mt-swipe>
       <!--六宫格-->
       <ul class="mui-table-view mui-grid-view mui-grid-9">
           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
               <router-link to="/home/news">
              <img src="../../images/menu1.png"  class="sixImg">
               <div class="mui-media-body">新闻</div>
               </router-link></li>
           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
               <router-link to="/home/photoList">
                   <img src="../../images/menu2.png" class="sixImg">
                   <div class="mui-media-body">图片</div>
               </router-link></li>
           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
               <router-link to="/home/goodslist">
                   <img src="../../images/menu3.png" class="sixImg">
                   <div class="mui-media-body">购买</div>
               </router-link></li>
           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
               <router-link to="/home/news">
                   <img src="../../images/menu4.png" class="sixImg">
                   <div class="mui-media-body">反馈</div>
               </router-link></li>
           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
               <router-link to="/home/news">
                   <img src="../../images/menu5.png" class="sixImg">
                   <div class="mui-media-body">视频</div>
               </router-link></li>
           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
               <router-link to="/home/news">
                   <img src="../../images/menu6.png" class="sixImg">
                   <div class="mui-media-body">联系</div>
               </router-link></li>
       </ul>
   </div>
</template>

<script>
    import { Toast } from 'mint-ui'
    export default {
        data() {
            return {
                chartList: []
            }
        },
        created() {
          this.rotationChart()
        },
        methods: {
            rotationChart() { //获取轮播图数据
                this.$http.get('api/getlunbo').then(result => {
                    if(result.body.status === 0) {
                        this.chartList = result.body.message
                    }else {
                        Toast('Wrong!')
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .mint-swipe {
    height: 200px;
}
    .mint-swipe-item:nth-child(1) {
    background-color: #5f80a0;
}
    .mint-swipe-item:nth-child(2) {
    background-color: #afd0e1;
}
    .mint-swipe-item:nth-child(3) {
    background-color: #ec971f;
}
    .rotationImg {
        width: 100%;
        height: 100%;
}
    .mui-grid-view.mui-grid-9 {

}
    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        background-color: white;
        border: none;
    }
    .sixImg {
        width: 60px;
        height: 60px;
    }
</style>