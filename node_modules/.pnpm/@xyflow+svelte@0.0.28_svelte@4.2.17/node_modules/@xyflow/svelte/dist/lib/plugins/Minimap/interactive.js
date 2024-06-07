import { get } from 'svelte/store';
import { XYMinimap } from '@xyflow/system';
export default function interactive(domNode, params) {
    const minimap = XYMinimap({
        domNode,
        panZoom: params.panZoom,
        getTransform: () => {
            const viewport = get(params.viewport);
            return [viewport.x, viewport.y, viewport.zoom];
        },
        getViewScale: params.getViewScale
    });
    function update(params) {
        minimap.update({
            translateExtent: params.translateExtent,
            width: params.width,
            height: params.height,
            inversePan: params.inversePan,
            zoomStep: params.zoomStep,
            pannable: params.pannable,
            zoomable: params.zoomable
        });
    }
    return {
        update,
        destroy() {
            minimap.destroy();
        }
    };
}
