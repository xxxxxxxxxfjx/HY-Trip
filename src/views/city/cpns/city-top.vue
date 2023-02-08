<template>
    <div class="city-top">
        <van-search v-model="value" placeholder="请输入搜索关键词" shape="round" show-action  @cancel="onCancel" />
        <van-tabs v-model:active="active" color="#ff9854">
            <template v-for="(item, key, index) in cityGroup" :key="index">
                <van-tab :title="item.title"></van-tab>
            </template>
        </van-tabs>
    </div>
</template>

<script setup>
import { ref,watch } from 'vue'
import useCityStore from '@/stores/modules/city';
import { useRouter } from 'vue-router';
defineProps({
    cityGroup: {
        type: Object,
        default: {}
    }
})
const value = ref('');
const active = ref(0);
const cityStore = useCityStore();
watch(active, (newValue) => {
    cityStore.active = active.value;
})

const router = useRouter();
const onCancel = () => {
    router.back()
}
</script>

<style lang='less' scoped>

</style>
