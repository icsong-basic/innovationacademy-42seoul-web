export default {
    isProduction() {
        return window.location.hostname === "42seoul.kr" || window.location.hostname === "www.42seoul.kr";
    }
}