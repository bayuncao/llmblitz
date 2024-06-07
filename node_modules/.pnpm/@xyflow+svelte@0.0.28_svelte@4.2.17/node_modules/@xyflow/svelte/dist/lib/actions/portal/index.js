function tryToMount(node, domNode, target) {
    if (!domNode) {
        return;
    }
    const targetEl = target ? domNode.querySelector(target) : domNode;
    if (targetEl) {
        targetEl.appendChild(node);
    }
}
export default function (node, { target, domNode }) {
    tryToMount(node, domNode, target);
    return {
        async update({ target, domNode }) {
            tryToMount(node, domNode, target);
        },
        destroy() {
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
        }
    };
}
