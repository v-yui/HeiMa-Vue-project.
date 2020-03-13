<template>
    <div>
        <h3>发表评论</h3>
        <hr>
        <textarea v-model="newComment" placeholder="请输入评论内容" maxlength="120"></textarea>
       <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        <div class="list">
            <div class="item" v-for="(item,i) in commentList" :key="item.add_time">
                <div class="title">
                    第{{ i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;
                    发表时间：{{item.add_time | dateFormat}}
                </div>
                <div class="body">
                    {{item.content === 'undefined' ? '此用户还未发表任何观点喔' : item.content}}
                </div>
            </div>
        </div>
       <mt-button type="danger" plain size="large" @click="getMore()">加载更多</mt-button>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui'
    export default {
        name: "newsComment",
        data() {
            return {
                commentList: [],
                newComment: "",//自己发表的新评论
                pageIndex: 1 //默认展示第一页数据
            }
        },
        created() {
            this.getComments()
        },
        methods: {
            getComments() {
                this.$http.get("api/getcomments/" + this.id +
                    "?pageindex=" + this.pageIndex).then(result => {
                    if(result.body.status === 0) {
                        //防止加载更多时覆盖上一页，此处采用数组拼接。
                        this.commentList = this.commentList.concat(result.body.message)
                    } else {
                        Toast('评论加载失败')
                    }
                })
            },
            getMore() {
                this.pageIndex ++
                this.getComments()
            },
            postComment() {
                if(this.newComment.trim().length === 0) {
                    return Toast('评论内容不能为空')
                }
                    this.$http.post("api/postcomment/" + this.$route.params.id, {
                        // trim()去除字符串的头尾空格
                        content: this.newComment.trim()
                    }).then(function (result) {
                            console.log(result)
                            if(result.body.status === 0) {//拼接一个最新的评论
                                var cmt = {user_name: '匿名用户', add_time: Date.now(), content: this.newComment.trim()}
                                this.commentList.unshift(cmt)
                                this.newComment = ""
                            }
                    })
            }
        },
        props: ["id"]
    }
</script>

<style scoped>
h3 {
    font-size: 14px;
}
textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
}
.list {
    margin: 5px 0;
}
.item {
    font-size: 13px;
}
.title {
    line-height: 30px;
    background-color: #cccccc;
}
.body {
    line-height: 35px;
    text-indent: 2em;
}
</style>