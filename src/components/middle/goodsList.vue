<template>
    <div class="wrapper">
        <div class="container">
            <img src="../../images/menu1.png">
            <h3 class="title">小米手机</h3>
            <div class="box">
                <p class="top-box">
                    <span class="now">￥now</span>
                    <span class="old">￥old</span>
                </p>
                <p class="bottom-box">
                    <span>热卖中</span>
                    <span>还剩</span>
                </p>
            </div>
        </div>
        <div class="container">
            <img src="../../images/menu1.png">
            <h3 class="title">小米手机哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈</h3>
            <div class="box">
                <p class="top-box">
                    <span class="now">￥now</span>
                    <span class="old">￥old</span>
                </p>
                <p class="bottom-box">
                    <span>热卖中</span>
                    <span>还剩</span>
                </p>
            </div>
        </div>
        <div class="container">
            <img src="../../images/menu1.png">
            <h3 class="title">小米手机</h3>
            <div class="box">
                <p class="top-box">
                    <span class="now">￥now</span>
                    <span class="old">￥old</span>
                </p>
                <p class="bottom-box">
                    <span>热卖中</span>
                    <span>还剩</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "goodsList"
    }
</script>

<style scoped>
    .wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0;
        padding: 3px 5px;
        /*padding: 5px;*/
    }
    .container {
        width: 48%;
        height: 250px;
        margin: 3px 1%;
        border: 1px solid #cccccc;
        box-shadow: 0 0 8px #cccccc;
        position: relative;
        padding: 2px;
    }
    img {
        width: 100%;
    }
    .title {
        font-size: 18px;
        position: absolute;
        bottom: 55px;
    }
    .box {
        background-color: #eeeeee;
        position: absolute;
        bottom: 2px;
        width: 98%;
        height: 55px;
    }
    .now {
        color: red;
        font-weight: bold;
        font-size: 16px;
    }
    .old {
        font-size: 14px;
        text-decoration: line-through;
        margin-left: 10px;
    }
    .bottom-box {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
        bottom: 5px;
    }
    p {
        margin: 0;
        padding: 3px;
    }
</style>