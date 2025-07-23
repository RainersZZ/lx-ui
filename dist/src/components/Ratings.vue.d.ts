import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: DefineComponent<ExtractPropTypes<{
    mode: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    kind: {
        type: StringConstructor;
        default: string;
    };
    variant: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    texts: {
        type: ObjectConstructor;
        default: () => {};
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    mode: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    kind: {
        type: StringConstructor;
        default: string;
    };
    variant: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    texts: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
}>, {
    variant: string;
    texts: Record<string, any>;
    disabled: boolean;
    mode: string;
    modelValue: number;
    kind: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
