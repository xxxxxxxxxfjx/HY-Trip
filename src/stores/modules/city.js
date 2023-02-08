import { defineStore } from 'pinia';
import { getCityData } from '@/services/index.js';

const useCityStore = defineStore('city', {
    state: () => ({
        cityGroupe: {},
        active: 0,
    }),
    actions: {
        async fetchCityGroup() {
            const data = await getCityData();
            this.cityGroupe = data.data;
        },
    },
});

export default useCityStore;
