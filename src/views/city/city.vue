<template>
    <div class="city top-page">
        <city-top :city-group='cityGroupe'></city-top>
        <div class="content">
            <template v-for="(item, key, index) in cityGroupe" :key="index">
                <city-group v-show="cityStore.active === index" :group-data="item"></city-group>
            </template>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import useCityStore from '@/stores/modules/city'
import CityTop from './cpns/city-top.vue'
import CityGroup from './cpns/city-group.vue'

const cityStore = useCityStore();
cityStore.fetchCityGroup();
const { cityGroupe } = storeToRefs(cityStore);
</script>

<style lang='less' scoped>
.city {
    --van-search-left-icon-color: var(--primary-color);
    --van-font-bold: 500;

    &::-webkit-scrollbar:none .top {
        position: relative;
    }

    .content {
        height: calc(100% - 98px);
        overflow-y: auto;
    }
}
</style>
