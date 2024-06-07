/** @typedef {typeof __propDef.props}  FitProps */
/** @typedef {typeof __propDef.events}  FitEvents */
/** @typedef {typeof __propDef.slots}  FitSlots */
export default class Fit extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type FitProps = typeof __propDef.props;
export type FitEvents = typeof __propDef.events;
export type FitSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
