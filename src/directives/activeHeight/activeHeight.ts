import {DirectiveOptions, DirectiveBinding} from "vue/types/options";
import {ActiveHeightParam} from "./define";

function childActiveHandle(this: HTMLElement, e: any) {
    this.style.height = (this.offsetHeight + e.changeHeight) + "px";
}

function getTransactionEnd(data: ActiveHeightParam) {
    return function(this: HTMLElement) {
        if (data.active) {
            this.style.height = "auto";
        } else {
            if (data.remove) {
                if (this.remove) {
                    this.remove();
                } else {
                    if (this.parentNode) {
                        this.parentNode.removeChild(this);
                    }
                }
            }
        }
    };
}

function append(nextNode: HTMLElement, curNode: HTMLElement, parentNode: HTMLElement) {
    if (nextNode) {
        nextNode.insertBefore(curNode, parentNode);
    } else {
        parentNode.appendChild(curNode);
    }
}

function changeHeight(el: HTMLElement, data: ActiveHeightDirectiveParam) {
    if (data.transaction !== undefined && data.noTransactionClass !== undefined) {
        if (data.transaction) {
            el.classList.remove(data.noTransactionClass);
        } else {
            el.classList.add(data.noTransactionClass);
        }
    }
    if (data.active) {
        if (data.remove) {
            append(data.nextNode, el, data.parentNode);
        }
        el.style.height = el.scrollHeight + "px";
    } else {
        el.style.height = el.scrollHeight + "px";
        setTimeout(() => {
            el.style.height = 0 + "px";
        }, 0);
    }
}

const transitionEventArray = "transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd".split(" ");

interface ActiveHeightDirectiveParam extends ActiveHeightParam {
    nextNode: HTMLElement;
    parentNode: HTMLElement;
}

const ActiveHeight: DirectiveOptions = {
    bind(el: HTMLElement, binding: DirectiveBinding): void {
        el.addEventListener("active-height", childActiveHandle);
        transitionEventArray.forEach((item) => {
            el.addEventListener(item, getTransactionEnd(binding.value), true);
        });
    },

    inserted(el: HTMLElement, binding: DirectiveBinding): void {
        const data = binding.value;
        data.nextNode = el.nextSibling;
        data.parentNode = el.parentNode;
        changeHeight(el, data);
    },

    componentUpdated(el: HTMLElement, binding: DirectiveBinding) {
        const data = binding.value;
        changeHeight(el, data);
    },
};

export default ActiveHeight;
