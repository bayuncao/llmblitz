/** @typedef {typeof __propDef.props}  LockProps */
/** @typedef {typeof __propDef.events}  LockEvents */
/** @typedef {typeof __propDef.slots}  LockSlots */
export default class Lock extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type LockProps = typeof __propDef.props;
export type LockEvents = typeof __propDef.events;
export type LockSlots = typeof __propDef.slots;
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
