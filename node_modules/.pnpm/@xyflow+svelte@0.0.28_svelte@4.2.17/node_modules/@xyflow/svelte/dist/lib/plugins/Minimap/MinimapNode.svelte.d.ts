import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        x: number;
        y: number;
        width?: number | undefined;
        height?: number | undefined;
        borderRadius?: number | undefined;
        color?: string | undefined;
        shapeRendering: string;
        strokeColor?: string | undefined;
        strokeWidth?: number | undefined;
        selected?: boolean | undefined;
        class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MinimapNodeProps = typeof __propDef.props;
export type MinimapNodeEvents = typeof __propDef.events;
export type MinimapNodeSlots = typeof __propDef.slots;
export default class MinimapNode extends SvelteComponentTyped<MinimapNodeProps, MinimapNodeEvents, MinimapNodeSlots> {
}
export {};
