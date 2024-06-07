import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MarkerDefinitionProps = typeof __propDef.props;
export type MarkerDefinitionEvents = typeof __propDef.events;
export type MarkerDefinitionSlots = typeof __propDef.slots;
export default class MarkerDefinition extends SvelteComponentTyped<MarkerDefinitionProps, MarkerDefinitionEvents, MarkerDefinitionSlots> {
}
export {};
