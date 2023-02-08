<template>
    <div class="app">
      <router-view></router-view>
      <tab-bar></tab-bar>
      <loading v-if="isLoading"></loading>
    </div>
</template>

<script setup>
import useMainStore from '@/stores/modules/main'
import TabBar from '@/components/tabBar/tab-bar.vue'
import Loading from '@/components/loading/loading.vue'
import { storeToRefs } from 'pinia';
const mainStore = useMainStore();
const { isLoading } = storeToRefs(mainStore);
</script>

<style lang='less' scoped>

</style>
