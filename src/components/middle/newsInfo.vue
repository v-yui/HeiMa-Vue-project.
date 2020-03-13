<template>
    <div class="container">
        <h3 class="title">{{newsInfo.title}}</h3>
        <p class="inform">
            <span>发表时间：{{newsInfo.add_time | dateFormat}}</span>
            <span>点击：{{newsInfo.click}}次</span>
        </p>
        <hr>
        <!--正文-->
        <div v-html="newsInfo.content"class="content">
        </div>
        <!--评论子组件-->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui'
    import comment from "./newsComment.vue";
    export default {
        name: "newsInfo",
        data() {
            return {
                id: this.$route.params.id,
                newsInfo: {}
            }
        },
        created() {
            this.getNewsInfo()
        },
        methods: {
            getNewsInfo() {
                this.$http.get('api/getnew/' + this.id).then(result => {
                    if(result.body.status === 0) {
                        this.newsInfo = result.body.message[0]
                    } else {
                        Toast('获取失败')
                    }
                })
            }
        },
        components: {
            "comment-box": comment //将评论组件注册为子组件
        }
    }
</script>

<style scoped>
.container {
    padding: 0 4px;
}
.title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: #0b0e16;
}
.inform {
    display: flex;
    font-size: 13px;
    justify-content: space-between;
}
</style>