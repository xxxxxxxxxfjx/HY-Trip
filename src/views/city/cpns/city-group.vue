<template>
    <div class="city-group">
        <van-index-bar :sticky="false" :index-list="indexList">
            <van-index-anchor index="热门" />
            <div class="hot-area">
                <template v-for="(item, index) in groupData.hotCities " :key="item.cityId">
                    <span class="text" @click="itemClick(item)">{{ item.cityName }}</span>
                </template>
            </div>
            <template v-for="(item, index) in groupData.cities" :key="index">
                <div class="item">
                    <van-index-anchor :index="item.group" />
                    <template v-for="(iten, index) in item.cities">
                        <van-cell :title="iten.cityName" @click="itemClick(iten)" />
                    </template>
                </div>
            </template>
        </van-index-bar>
    </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home'
import { storeToRefs } from 'pinia';
import { computed } from 'vue'
import { useRouter } from 'vue-router';
const props = defineProps({
    groupData: {
        type: Object,
        default: {}
    }
})

const indexList = computed(() => {
    const list = props.groupData?.cities.map(item => item.group)
    list.unshift('#');
    return list
}) 

const router = useRouter()
const homeStore = useHomeStore()
const {currentCity} = storeToRefs(homeStore)
const itemClick = (item) => {
    console.log(item);
    currentCity.value = item;
    router.back()
}
</script>

<style lang='less' scoped>
.city-group {
    --van-index-bar-index-active-color:var(--primary-color);
    .hot-area {
        display: flex;
        justify-content: space-around;
        padding: 10px 20px 10px 10px;
        flex-wrap: wrap;

        .text {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 5px 0;
            width: 70px;
            height: 28px;
            font-size: 12px;
            background-color: rgb(255, 244, 236);
            border-radius: 15px;
        }
    }
}
</style>
