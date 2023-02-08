import axios from 'axios';
import { baseURL, timeout } from './config';
import useMainStore from '@/stores/modules/main';
import { ref } from 'vue';

const mainStore = useMainStore();
class HYRequest {
    constructor(baseURL, timeout) {
        this.instance = axios.create({
            baseURL,
            timeout,
        });
        this.instance.interceptors.request.use(
            res => {
                mainStore.isLoading = true;
                return res;
            },
            err => {
                return err;
            }
        );
        this.instance.interceptors.response.use(
            res => {
                mainStore.isLoading = false;
                return res;
            },
            err => {
                mainStore.isLoading = false;
                return err;
            }
        );
    }
    request(config) {
        return new Promise((resolve, reject) => {
            this.instance
                .request(config)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
    get(config) {
        return this.request({ ...config, method: 'get' });
    }

    post(config) {
        return this.request({ ...config, method: 'post' });
    }
}

export default new HYRequest(baseURL, timeout);
