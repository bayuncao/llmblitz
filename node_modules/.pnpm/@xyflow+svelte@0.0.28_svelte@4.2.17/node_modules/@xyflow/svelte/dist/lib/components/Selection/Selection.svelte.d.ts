import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        x?: number | null | undefined;
        y?: number | null | undefined;
        width?: string | number | null | undefined;
        height?: string | number | null | undefined;
        isVisible?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SelectionProps = typeof __propDef.props;
export type SelectionEvents = typeof __propDef.events;
export type SelectionSlots = typeof __propDef.slots;
export default class Selection extends SvelteComponentTyped<SelectionProps, SelectionEvents, SelectionSlots> {
}
export {};
