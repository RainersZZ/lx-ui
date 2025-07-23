import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: DefineComponent<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: any;
    };
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
    stepMultiplier: {
        type: NumberConstructor;
        default: number;
    };
    hasInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    labelId: {
        type: StringConstructor;
        default: any;
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: any;
    };
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
    stepMultiplier: {
        type: NumberConstructor;
        default: number;
    };
    hasInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    labelId: {
        type: StringConstructor;
        default: any;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
}>, {
    max: number;
    id: string;
    modelValue: number;
    labelId: string;
    readOnly: boolean;
    min: number;
    step: number;
    stepMultiplier: number;
    hasInput: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
