import { observable } from "mobx";

(window as any).addEventListener('resize', function () {
    width.set(window.outerWidth);
})

const width = observable.box(window.outerWidth);

export function getWidth() {
    return width.get()
};

export function isMobileWidth() {
    return width.get() <= 768;
};