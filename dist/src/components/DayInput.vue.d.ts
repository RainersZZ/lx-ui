import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: DefineComponent<ExtractPropTypes<{
    modelValue: {
        type: (ObjectConstructor | NumberConstructor)[];
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    kind: {
        type: StringConstructor;
        default: string;
    };
    invalid: {
        type: BooleanConstructor;
        default: boolean;
    };
    invalidationMessage: {
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
    modelValue: {
        type: (ObjectConstructor | NumberConstructor)[];
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    kind: {
        type: StringConstructor;
        default: string;
    };
    invalid: {
        type: BooleanConstructor;
        default: boolean;
    };
    invalidationMessage: {
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
    disabled: boolean;
    modelValue: number | Record<string, any>;
    kind: string;
    labelId: string;
    readOnly: boolean;
    invalidationMessage: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
