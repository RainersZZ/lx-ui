import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: __VLS_WithTemplateSlots<DefineComponent<{}, {
    $emit: (event: "actionClick", ...args: any[]) => void;
    disabled: boolean;
    id: string;
    loading: boolean;
    actionDefinitions: unknown[];
    noBorders: boolean;
    $props: {
        readonly disabled?: boolean;
        readonly id?: string;
        readonly loading?: boolean;
        readonly actionDefinitions?: unknown[];
        readonly noBorders?: boolean;
    };
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    leftArea?(_: {}): any;
    default?(_: {}): any;
    rightArea?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
