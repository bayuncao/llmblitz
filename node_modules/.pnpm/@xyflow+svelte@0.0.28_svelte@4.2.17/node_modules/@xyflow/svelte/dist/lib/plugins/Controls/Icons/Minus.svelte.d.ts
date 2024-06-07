/** @typedef {typeof __propDef.props}  MinusProps */
/** @typedef {typeof __propDef.events}  MinusEvents */
/** @typedef {typeof __propDef.slots}  MinusSlots */
export default class Minus extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type MinusProps = typeof __propDef.props;
export type MinusEvents = typeof __propDef.events;
export type MinusSlots = typeof __propDef.slots;
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
