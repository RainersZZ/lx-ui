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
        default: () => any[];
    };
    idAttribute: {
        type: StringConstructor;
        default: string;
    };
    nameAttribute: {
        type: StringConstructor;
        default: string;
    };
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    kind: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: any;
    };
    iconSet: {
        type: StringConstructor;
        default: () => string;
    };
    tooltip: {
        type: StringConstructor;
        default: any;
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
        type: StringConstructor;
        default: any;
    };
    items: {
        type: ArrayConstructor;
        default: () => any[];
    };
    idAttribute: {
        type: StringConstructor;
        default: string;
    };
    nameAttribute: {
        type: StringConstructor;
        default: string;
    };
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    kind: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: any;
    };
    iconSet: {
        type: StringConstructor;
        default: () => string;
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
    iconSet: string;
    icon: string;
    disabled: boolean;
    id: string;
    modelValue: string;
    kind: string;
    tooltip: string;
    idAttribute: string;
    nameAttribute: string;
    labelId: string;
    readOnly: boolean;
    items: unknown[];
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
