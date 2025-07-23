import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: __VLS_WithTemplateSlots<DefineComponent<{}, {
    $emit: (event: "update:modelValue", ...args: any[]) => void;
    texts: Record<string, any>;
    kind: string;
    readOnly: boolean;
    columnCount: number;
    requiredMode: string;
    addButtonLabel: string;
    canAddItems: boolean;
    modelValue?: unknown[];
    $props: {
        readonly texts?: Record<string, any>;
        readonly kind?: string;
        readonly readOnly?: boolean;
        readonly columnCount?: number;
        readonly requiredMode?: string;
        readonly addButtonLabel?: string;
        readonly canAddItems?: boolean;
        readonly modelValue?: unknown[];
    };
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    customItem?(_: {
        item: unknown;
        index: number;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
