<template>
    <div class="tab-bar">
        <van-tabbar v-model="active" class="tab" active-color="FF9854">
            <template v-for="(item, index) in data" :key="index">
                <div class="item">
                    <van-tabbar-item :to="item.path">
                        <span class="text" :class="{ isActive: active == index }">{{ item.title }}</span>
                        <template #icon>
                            <img v-if="active == index" :src="getImgPath(item.img_active)" alt="">
                            <img v-if="active != index" :src="getImgPath(item.img)" alt="">
                        </template>
                    </van-tabbar-item>
                </div>
            </template>
        </van-tabbar>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import data from '@/assets/data/tabbar.js'
import getImgPath from '@/utils/getImgPath.js'
const active = ref(0)
</script>

<style lang='less' scoped>
.tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    border-top: 1px solid #eee;

    .tab {
        display: flex;
        justify-content: space-around;
        align-items: center;

        .text {
            color: #666;
            font-size: 12px;
        }

        .isActive {
            color: var(--primary-color);
        }

        img {
            width: 30px;
        }
    }
}
</style>
