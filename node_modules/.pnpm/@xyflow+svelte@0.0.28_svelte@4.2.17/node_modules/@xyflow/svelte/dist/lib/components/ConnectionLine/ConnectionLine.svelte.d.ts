import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        containerStyle?: string | undefined;
        style?: string | undefined;
        isCustomComponent?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        connectionLine: {};
    };
};
export type ConnectionLineProps = typeof __propDef.props;
export type ConnectionLineEvents = typeof __propDef.events;
export type ConnectionLineSlots = typeof __propDef.slots;
export default class ConnectionLine extends SvelteComponentTyped<ConnectionLineProps, ConnectionLineEvents, ConnectionLineSlots> {
}
export {};
