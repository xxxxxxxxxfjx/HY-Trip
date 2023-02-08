<template>
    <div class="location">
        <div class="position">
            <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
            <div class="myPosition" @click="itemClick">
                <span>我的位置</span>
                <img src="@/assets/img/home/icon_location.png" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const router  = useRouter()
const cityClick = () => {
    router.push('/city')
}

const itemClick = () => {
    return navigator.geolocation.getCurrentPosition(res => {
        console.log(res);
    }, err => {
        console.log(err);
    })
}

const homeStore = useHomeStore();
const {currentCity} = storeToRefs(homeStore)
</script>

<style lang='less' scoped>
.location{
    background-color: #fff;
    padding: 0 20px;
    .position{
        height: 44px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #eee;
        .city{
            flex: 1;
            font-size: 16px;
        }
        .myPosition{
            width: 74px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 12px;
            img{
                width: 18px;
                margin-left: 5px;
            }
        }
    }
}
</style>
