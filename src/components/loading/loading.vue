<template>
    <div class="loading">
        <div class="text">数据请求中...</div>
        <div class="bg">
            <img src="@/assets/img/home/full-screen-loading.gif" alt="">
        </div>
    </div>
</template>

<script setup>

</script>

<style lang='less' scoped>
.loading{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    display: flex;
    color:#666;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    z-index: 10;
    .bg{
        width: 150px;
        height: 150px;
        background-image: url(@/assets/img/home/loading-bg.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 0 0;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 100px;
            margin-top:-16px;
        }
    }
}
</style>
