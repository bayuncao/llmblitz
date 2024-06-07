import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type UserSelectionProps = typeof __propDef.props;
export type UserSelectionEvents = typeof __propDef.events;
export type UserSelectionSlots = typeof __propDef.slots;
export default class UserSelection extends SvelteComponentTyped<UserSelectionProps, UserSelectionEvents, UserSelectionSlots> {
}
export {};
