import { SvelteComponentTyped } from "svelte";
import type { BackgroundVariant } from './types';
declare const __propDef: {
    props: {
        lineWidth?: number | undefined;
        dimensions: [number, number];
        variant?: BackgroundVariant | undefined;
        class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type LinePatternProps = typeof __propDef.props;
export type LinePatternEvents = typeof __propDef.events;
export type LinePatternSlots = typeof __propDef.slots;
export default class LinePattern extends SvelteComponentTyped<LinePatternProps, LinePatternEvents, LinePatternSlots> {
}
export {};
