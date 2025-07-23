import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: DefineComponent<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: any;
    };
    modelValue: {
        type: StringConstructor;
        default: any;
    };
    items: {
        type: ArrayConstructor;
        required: true;
    };
    kind: {
        type: StringConstructor;
        default: string;
    };
    idAttribute: {
        type: StringConstructor;
        default: string;
    };
    nameAttribute: {
        type: StringConstructor;
        default: string;
    };
    descriptionAttribute: {
        type: StringConstructor;
        default: string;
    };
    stateAttribute: {
        type: StringConstructor;
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    busy: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
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
    items: {
        type: ArrayConstructor;
        required: true;
    };
    kind: {
        type: StringConstructor;
        default: string;
    };
    idAttribute: {
        type: StringConstructor;
        default: string;
    };
    nameAttribute: {
        type: StringConstructor;
        default: string;
    };
    descriptionAttribute: {
        type: StringConstructor;
        default: string;
    };
    stateAttribute: {
        type: StringConstructor;
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    busy: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
}>, {
    disabled: boolean;
    id: string;
    loading: boolean;
    modelValue: string;
    kind: string;
    busy: boolean;
    idAttribute: string;
    nameAttribute: string;
    descriptionAttribute: string;
    stateAttribute: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
