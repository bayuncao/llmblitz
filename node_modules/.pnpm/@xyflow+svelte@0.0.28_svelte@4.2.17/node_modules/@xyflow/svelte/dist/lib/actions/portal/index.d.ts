type PortalOptions = {
    target?: string;
    domNode: Element | null;
};
export default function (node: Element, { target, domNode }: PortalOptions): {
    update({ target, domNode }: PortalOptions): Promise<void>;
    destroy(): void;
};
export {};
