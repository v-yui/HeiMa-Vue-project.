<template>
    <div>
        <!--mui的顶部滑动条-->
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <!--在ｃｌａｓｓ里使用三元表达式设置第一项激活ｍｕｉ－ａｃｔｉｖｅ高亮(其他选项的高亮是滑动组件内的)-->
                    <a :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']"
                       v-for="item in imgCategory" :key="item.id" @tap="getImgList(0,item.id)">
                        {{item.title}}
                    </a>
                </div>
            </div>
        <!--图片列表，使用mini-ui的懒加载-->
        <!--我努力过了但是努力不够，懒加载还是没效果（汗-->
        <ul class="list">
            <router-link tag="li" v-for="item in imgList" :key="item.id" :to="'/home/photoinfo/'+item.id">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h3 class="info-title">{{item.title}}</h3>
                    <div class="info-body">{{item.zhaiyao}}</div>
                </div>
            </router-link>
        </ul>
        </div>
</template>

<script>
    //mui的滑动控件
    import mui from '../../lib/mui/js/mui.min.js';
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005//flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    export default {
        name: "photoList",
        data() {
            return {
                imgCategory: [],//图片的分类描述
                imgList: [],//图片列表主体
            }
        },
        mounted() {
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005//flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        created() {
            this.getAllCategory()
            this.getImgList(0)//默认展示全部图片
        },
        methods: {
            getAllCategory() {
                this.$http.get('api/getimgcategory').then(result => {
                    if(result.body.status === 0) {
                        //全部分类需要手动拼接出来
                        result.body.message.unshift({title: "全部", id: 0})
                        this.imgCategory = result.body.message
                    }
                })
            },
            getImgList(id,cateId) {
                this.$http.get('api/getimages/'+id).then(result => {
                    if(result.body.status === 0) {
                        if (cateId === undefined) {
                            this.imgList = result.body.message
                            console.log(id)
                        } else {//努力了下还是没写出根据分类加载。。先放在这里
                            var list = result.body.message
                            for(var i=0; i<list.length; i++) {
                                // console.log(list)
                                // console.log(cateId)
                                // console.log(list[i].category_id)
                                // console.log((this.cateId) === (list[i].category_id))
                                if(this.cateId === list[i].category_id) {
                                    this.list.push(list[i])
                                }
                            }
                        }
                    }
                })
            },
            modifyId(id) {
               this.cateId = id
                console.log(id)
            }
        }
    }
</script>

<style scoped>
    * {
        touch-action: pan-y
        /* touch-action 用于设置触摸屏用户如何操纵元素的区域(例如，浏览器内置的缩放功能)。*/
    /*避免ｃｈｒｏｍｅ报错*/
    }
    #sliderSegmentedControl {
        background-color: white;
        position: fixed;
        top: 35px;
    }
    .list {
        list-style: none;
        margin: 0px;
        padding: 10px;
    }
    .list li {
        background-color: #cccccc;
        text-align: center;
        margin-bottom: 10px;
        box-shadow: 0 0 6px #999999;
        position: relative;
    }
    img {
        width: 100%;
        /*vertical-align 属性设置元素的垂直对齐方式。*/
        vertical-align: middle;
    }
    img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
    .info {
        color: white;
        text-align: left;
        position: absolute;
        bottom: 0px;
        background-color: rgba(0,0,0,0.4);
        max-height: 84px;
    }
    .info-title {
        font-size: 14px;
    }
    .info-body {
        font-size: 13px;
    }
</style>