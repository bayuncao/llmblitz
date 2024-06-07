import { SvelteComponentTyped } from "svelte";
import type { MiniMapProps } from './types';
declare const __propDef: {
    props: MiniMapProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MinimapProps = typeof __propDef.props;
export type MinimapEvents = typeof __propDef.events;
export type MinimapSlots = typeof __propDef.slots;
export default class Minimap extends SvelteComponentTyped<MinimapProps, MinimapEvents, MinimapSlots> {
}
export {};
