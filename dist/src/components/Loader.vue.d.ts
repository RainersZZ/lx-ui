import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: DefineComponent<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    variant: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    kind: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
    fakedDuration: {
        type: NumberConstructor;
        default: number;
    };
    faked: {
        type: BooleanConstructor;
        default: boolean;
    };
    state: {
        type: StringConstructor;
        default: string;
    };
    ariaHidden: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    variant: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    kind: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
    fakedDuration: {
        type: NumberConstructor;
        default: number;
    };
    faked: {
        type: BooleanConstructor;
        default: boolean;
    };
    state: {
        type: StringConstructor;
        default: string;
    };
    ariaHidden: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
}>, {
    label: string;
    variant: string;
    size: string;
    id: string;
    loading: boolean;
    modelValue: string | number;
    kind: string;
    description: string;
    fakedDuration: number;
    faked: boolean;
    state: string;
    ariaHidden: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
