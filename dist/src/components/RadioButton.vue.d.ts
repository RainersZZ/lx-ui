import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: __VLS_WithTemplateSlots<DefineComponent<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: any;
    };
    groupId: {
        type: StringConstructor;
        default: any;
    };
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        type: StringConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    value: {
        type: StringConstructor;
        default: string;
    };
    tabindex: {
        type: NumberConstructor;
        default: any;
    };
    labelId: {
        type: StringConstructor;
        default: any;
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    click: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: any;
    };
    groupId: {
        type: StringConstructor;
        default: any;
    };
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        type: StringConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    value: {
        type: StringConstructor;
        default: string;
    };
    tabindex: {
        type: NumberConstructor;
        default: any;
    };
    labelId: {
        type: StringConstructor;
        default: any;
    };
}>> & Readonly<{
    onClick?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
}>, {
    label: string;
    value: string;
    disabled: boolean;
    id: string;
    modelValue: boolean;
    tabindex: number;
    groupId: string;
    labelId: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
