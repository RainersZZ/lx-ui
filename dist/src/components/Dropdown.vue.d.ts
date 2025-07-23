import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: __VLS_WithTemplateSlots<DefineComponent<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    modelValue: {
        type: StringConstructor;
        default: any;
    };
    items: {
        type: ArrayConstructor;
        required: true;
    };
    idAttribute: {
        type: StringConstructor;
        default: string;
    };
    idAttributeArray: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
    };
    kind: {
        type: StringConstructor;
        default: string;
    };
    variant: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: any;
    };
    nameAttribute: {
        type: StringConstructor;
        default: string;
    };
    dictionary: {
        type: ObjectConstructor;
        default: any;
    };
    tooltip: {
        type: StringConstructor;
        default: any;
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
    labelId: {
        type: StringConstructor;
        default: any;
    };
    tabindex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    change: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    modelValue: {
        type: StringConstructor;
        default: any;
    };
    items: {
        type: ArrayConstructor;
        required: true;
    };
    idAttribute: {
        type: StringConstructor;
        default: string;
    };
    idAttributeArray: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
    };
    kind: {
        type: StringConstructor;
        default: string;
    };
    variant: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: any;
    };
    nameAttribute: {
        type: StringConstructor;
        default: string;
    };
    dictionary: {
        type: ObjectConstructor;
        default: any;
    };
    tooltip: {
        type: StringConstructor;
        default: any;
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
    labelId: {
        type: StringConstructor;
        default: any;
    };
    tabindex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}>> & Readonly<{
    onChange?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
}>, {
    invalid: boolean;
    variant: string;
    disabled: boolean;
    id: string;
    modelValue: string;
    kind: string;
    tooltip: string;
    tabindex: string | number;
    dictionary: Record<string, any>;
    idAttribute: string;
    nameAttribute: string;
    labelId: string;
    placeholder: string;
    readOnly: boolean;
    invalidationMessage: string;
    idAttributeArray: string | unknown[];
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    panel?(_: {
        click: void;
    }): any;
    customItem?(_: any): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
