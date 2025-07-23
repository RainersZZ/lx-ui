import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: DefineComponent<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: any;
    };
    modelValue: {
        type: (ArrayConstructor | StringConstructor)[];
        default: () => any[];
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
    iconAttribute: {
        type: StringConstructor;
        default: string;
    };
    iconSetAttribute: {
        type: StringConstructor;
        default: string;
    };
    categoryAttribute: {
        type: StringConstructor;
        default: string;
    };
    descriptionAttribute: {
        type: StringConstructor;
        default: string;
    };
    groupId: {
        type: StringConstructor;
        default: any;
    };
    variant: {
        type: StringConstructor;
        default: string;
    };
    kind: {
        type: StringConstructor;
        default: string;
    };
    nullable: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: any;
    };
    hasSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    alwaysAsArray: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltip: {
        type: StringConstructor;
        default: any;
    };
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    readOnlyRenderType: {
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
    searchAttributes: {
        type: ArrayConstructor;
        default: any;
    };
    hasSelectAll: {
        type: BooleanConstructor;
        default: boolean;
    };
    labelId: {
        type: StringConstructor;
        default: any;
    };
    texts: {
        type: ObjectConstructor;
        default: () => void;
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: any;
    };
    modelValue: {
        type: (ArrayConstructor | StringConstructor)[];
        default: () => any[];
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
    iconAttribute: {
        type: StringConstructor;
        default: string;
    };
    iconSetAttribute: {
        type: StringConstructor;
        default: string;
    };
    categoryAttribute: {
        type: StringConstructor;
        default: string;
    };
    descriptionAttribute: {
        type: StringConstructor;
        default: string;
    };
    groupId: {
        type: StringConstructor;
        default: any;
    };
    variant: {
        type: StringConstructor;
        default: string;
    };
    kind: {
        type: StringConstructor;
        default: string;
    };
    nullable: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: any;
    };
    hasSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    alwaysAsArray: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltip: {
        type: StringConstructor;
        default: any;
    };
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    readOnlyRenderType: {
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
    searchAttributes: {
        type: ArrayConstructor;
        default: any;
    };
    hasSelectAll: {
        type: BooleanConstructor;
        default: boolean;
    };
    labelId: {
        type: StringConstructor;
        default: any;
    };
    texts: {
        type: ObjectConstructor;
        default: () => void;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
}>, {
    invalid: boolean;
    variant: string;
    texts: Record<string, any>;
    disabled: boolean;
    id: string;
    modelValue: string | unknown[];
    kind: string;
    tooltip: string;
    idAttribute: string;
    nameAttribute: string;
    groupId: string;
    labelId: string;
    placeholder: string;
    readOnly: boolean;
    invalidationMessage: string;
    items: unknown[];
    iconAttribute: string;
    iconSetAttribute: string;
    categoryAttribute: string;
    hasSearch: boolean;
    hasSelectAll: boolean;
    searchAttributes: unknown[];
    descriptionAttribute: string;
    nullable: boolean;
    readOnlyRenderType: string;
    alwaysAsArray: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
