<template>
    <div>
        <!--mui的顶部滑动条-->
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <!--在ｃｌａｓｓ里使用三元表达式设置第一项激活ｍｕｉ－ａｃｔｉｖｅ高亮(其他选项的高亮是滑动组件内的)-->
                    <a :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']" v-for="item in imgCategory" :key="item.id">
                        {{item.title}}
                    </a>
                </div>
            </div>

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
                imgCategory: []
            }
        },
        mounted() {
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005//flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        created() {
            this.getAllCategory()
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
</style>