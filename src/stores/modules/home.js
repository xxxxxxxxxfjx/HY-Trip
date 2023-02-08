import { defineStore } from 'pinia';
const useHomeStore = defineStore('home', {
    state: () => ({
        currentCity: {
            cityName:'广州'
        }
    })
});
export default useHomeStore;