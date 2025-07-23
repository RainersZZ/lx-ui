import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: __VLS_WithTemplateSlots<DefineComponent<{}, {
    $emit: (event: "click" | "update:modelValue", ...args: any[]) => void;
    value: string;
    disabled: boolean;
    modelValue: boolean;
    tabindex: string;
    label?: string;
    id?: string;
    groupId?: string;
    labelId?: string;
    $props: {
        readonly value?: string;
        readonly disabled?: boolean;
        readonly modelValue?: boolean;
        readonly tabindex?: string;
        readonly label?: string;
        readonly id?: string;
        readonly groupId?: string;
        readonly labelId?: string;
    };
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
