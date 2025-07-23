import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare function focus(): void;
declare const _default: DefineComponent<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: any;
    };
    modelValue: {
        type: StringConstructor;
        default: any;
    };
    placeholder: {
        type: StringConstructor;
        default: any;
    };
    rows: {
        type: NumberConstructor;
        default: number;
    };
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
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
    maxlength: {
        type: NumberConstructor;
        default: any;
    };
    dynamicHeight: {
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
}>, {
    focus: typeof focus;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: any;
    };
    modelValue: {
        type: StringConstructor;
        default: any;
    };
    placeholder: {
        type: StringConstructor;
        default: any;
    };
    rows: {
        type: NumberConstructor;
        default: number;
    };
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
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
    maxlength: {
        type: NumberConstructor;
        default: any;
    };
    dynamicHeight: {
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
}>> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
}>, {
    invalid: boolean;
    disabled: boolean;
    id: string;
    modelValue: string;
    tooltip: string;
    labelId: string;
    placeholder: string;
    readOnly: boolean;
    invalidationMessage: string;
    maxlength: number;
    rows: number;
    dynamicHeight: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
