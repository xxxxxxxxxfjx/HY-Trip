import hyRequest from '../request/index';
export function getCityData() {
    return hyRequest.get({
        url:'/city/all'
    })
}