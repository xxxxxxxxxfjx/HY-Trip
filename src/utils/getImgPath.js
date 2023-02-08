export default function (path) {
    return new URL(`../assets/img/tabbar/${path}`, import.meta.url).href;    
}