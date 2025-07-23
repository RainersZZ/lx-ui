import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: __VLS_WithTemplateSlots<DefineComponent<{}, {
    $emit: (event: "actionClick", ...args: any[]) => void;
    label: string;
    texts: Record<string, any>;
    id: string;
    kind: string;
    width: string;
    height: string;
    actionDefinitions: unknown[];
    showHeader: boolean;
    showFooter: boolean;
    coverImage: string;
    href?: Record<string, any>;
    $props: {
        readonly label?: string;
        readonly texts?: Record<string, any>;
        readonly id?: string;
        readonly kind?: string;
        readonly width?: string;
        readonly height?: string;
        readonly actionDefinitions?: unknown[];
        readonly showHeader?: boolean;
        readonly showFooter?: boolean;
        readonly coverImage?: string;
        readonly href?: Record<string, any>;
    };
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
