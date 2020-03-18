import {DirectiveBinding, DirectiveOptions} from "vue/types/options";

function isIE() {
    const agent = navigator.userAgent.toLowerCase();
    return agent.indexOf("msie") !== -1 || agent.indexOf("trident") !== -1 || agent.indexOf(" edge/") !== -1;
}

function createResizeElement(element: HTMLElement, resizeHandle: EventListenerOrEventListenerObject) {
    const iframe: HTMLIFrameElement = document.createElement("iframe");
    iframe.src = "about:blank";
    iframe.classList.add("resize-trigger");
    iframe.onload = (): void => {
        const win = iframe.contentWindow;
        if (win) {
            win.addEventListener("resize", resizeHandle);
        }
    };
    element.appendChild(iframe);
    // const obj: HTMLObjectElement = document.createElement("object");
    // obj.innerHTML = "<param name=\"wmode\" value=\"opaque\">";
    // obj.type = "text/html";
    // obj.classList.add("resize-trigger");
    // obj.setAttribute("tabindex", "-1");
    //
    // obj.onload = (): void => {
    //     const win: WindowProxy | null = obj.contentDocument ? obj.contentDocument.defaultView : null;
    //     if (win) {
    //         win.addEventListener("resize", resizeHandle);
    //     }
    // };
    //
    // if (!isIE()) {
    //     obj.data = "about:blank";
    // }
    // element.appendChild(obj);
    // if (isIE()) {
    //     obj.data = "about:blank";
    // }
}

function initResizeHandle(param: ResizeHandleParam): void {
    const resizeHandle = param.resizeHandle;
    const element = param.element;
    if (element.style.position === "" || element.style.position === "static") {
        element.style.position = "relative";
    }
    createResizeElement(element, resizeHandle);
}

interface ResizeHandleParam {
    resizeHandle: EventListenerOrEventListenerObject;
    element: HTMLElement;
}

const Resize: DirectiveOptions = {
    bind(el: HTMLElement, binding: DirectiveBinding) {
        initResizeHandle({element: el, resizeHandle: binding.value});
    }
};
export default Resize;
