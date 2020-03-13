<template>
    <div class="container">
        <h3>{{imgInfo.title}}</h3>
        <p>
            <span>发表时间：{{imgInfo.add_time |dateFormat}}</span>
            <span>点击{{imgInfo.click}}次</span>
        </p>
        <hr>
        <!--vue-preview的缩略图-->
        <!--我坦白vue-preview的用法我没摸透。。。先这样了-->
        <div class="thumbs">
            <vue-preview :slides="list" ></vue-preview>
        </div>
        <!--正文-->
        <div class="content" v-html="imgInfo.content"></div>
        <!--评论组件-->
        <img-comment :id="this.id"></img-comment>
    </div>
</template>

<script>
    import imgComment from "./newsComment.vue";
    import {Toast} from "mint-ui";
    export default {
        name: "photoInfo",
        data() {
            return {
                id: this.$route.params.id,
                imgInfo: {},
                list: []//缩略图
            }
        },
        created() {
            this.getImgInfo()
            this.getThumbs()
        },
        methods: {
            getImgInfo() {
                this.$http.get("api/getimageInfo/" + this.id).then(result => {
                    if(result.body.status === 0) {
                        this.imgInfo = result.body.message[0]
                    }
                })
            },
            getThumbs() {
                this.$http.get('api/getthumimages/' + this.id).then(result => {
                    if(result.body.status === 0) {
                        result.body.message.forEach(item => {
                            item.w = 600
                            item.h = 400
                            item.msrc = item.src;
                        })
                    }
                    this.list = result.body.message
                })
            }
        },
        components: {
            'img-comment': imgComment
        }
    }
</script>

<style scoped>
    .container {
        padding: 5px;
    }
    h3 {
        color: #41576d;
        font-size: 15px;
        text-align: center;
        margin: 15px;
    }
    p {
        display: flex;
        justify-content: space-between;
        padding: 0 5px;
        font-size: 13px;
    }
    .content {
        font-size: 13px;
        line-height: 25px;
    }
</style>