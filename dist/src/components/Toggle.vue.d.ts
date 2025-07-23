import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: __VLS_WithTemplateSlots<DefineComponent<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    modelValue: {
        type: BooleanConstructor;
        default: any;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    invalid: {
        type: BooleanConstructor;
        default: boolean;
    };
    invalidationMessage: {
        type: StringConstructor;
        default: any;
    };
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltip: {
        type: StringConstructor;
        default: any;
    };
    labelId: {
        type: StringConstructor;
        default: any;
    };
    texts: {
        type: ObjectConstructor;
        default: () => {};
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    modelValue: {
        type: BooleanConstructor;
        default: any;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    invalid: {
        type: BooleanConstructor;
        default: boolean;
    };
    invalidationMessage: {
        type: StringConstructor;
        default: any;
    };
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltip: {
        type: StringConstructor;
        default: any;
    };
    labelId: {
        type: StringConstructor;
        default: any;
    };
    texts: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
}>, {
    invalid: boolean;
    texts: Record<string, any>;
    size: string;
    disabled: boolean;
    id: string;
    modelValue: boolean;
    tooltip: string;
    labelId: string;
    readOnly: boolean;
    invalidationMessage: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
    indeterminate?(_: {}): any;
    off?(_: {}): any;
    on?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
