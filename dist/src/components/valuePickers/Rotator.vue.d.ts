import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: __VLS_WithTemplateSlots<DefineComponent<ExtractPropTypes<{
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
    hasSearch: boolean;
    searchAttributes: unknown[];
    descriptionAttribute: string;
    nullable: boolean;
    readOnlyRenderType: string;
    alwaysAsArray: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    customItem?(_: any): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
