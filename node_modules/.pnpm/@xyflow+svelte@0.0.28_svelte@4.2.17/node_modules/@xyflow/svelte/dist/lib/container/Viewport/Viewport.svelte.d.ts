import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ViewportProps = typeof __propDef.props;
export type ViewportEvents = typeof __propDef.events;
export type ViewportSlots = typeof __propDef.slots;
export default class Viewport extends SvelteComponentTyped<ViewportProps, ViewportEvents, ViewportSlots> {
}
export {};
