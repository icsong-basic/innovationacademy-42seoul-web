
export default {
    setScrolling(enable: boolean) {
        const fullPageApi = ((window as any).fullpage_api as any);
        if (fullPageApi) {
            if (fullPageApi.setMouseWheelScrolling) {
                fullPageApi.setMouseWheelScrolling(enable)
            }
            if (fullPageApi.setKeyboardScrolling) {
                fullPageApi.setKeyboardScrolling(enable)
            }
            if (fullPageApi.setAllowScrolling) {
                fullPageApi.setAllowScrolling(enable)
            }
        }
    },
    /**
     * 
     * @param index index는 1부터 시작
     */
    moveTo(index: number) {
        const fullPageApi = ((window as any).fullpage_api as any);
        if (fullPageApi) {
            fullPageApi.moveTo(index);
        }
    },
    moveSectionDown() {
        const fullPageApi = ((window as any).fullpage_api as any);
        if (fullPageApi) {
            fullPageApi.moveSectionDown();
        }
    }
};