import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: __VLS_WithTemplateSlots<DefineComponent<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    modelValue: {
        type: (ObjectConstructor | StringConstructor)[];
        default: any;
    };
    items: {
        type: (ArrayConstructor | FunctionConstructor)[];
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
    dictionary: {
        type: ObjectConstructor;
        default: any;
    };
    groupId: {
        type: StringConstructor;
        default: any;
    };
    queryMinLength: {
        type: NumberConstructor;
        default: number;
    };
    queryMaxLength: {
        type: NumberConstructor;
        default: any;
    };
    queryDebounce: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    placeholder: {
        type: StringConstructor;
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
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    hasDetails: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectingKind: {
        type: StringConstructor;
        default: string;
    };
    detailMode: {
        type: StringConstructor;
        default: string;
    };
    variant: {
        type: StringConstructor;
        default: string;
    };
    preloadedItems: {
        type: ArrayConstructor;
        default: any;
    };
    labelId: {
        type: StringConstructor;
        default: any;
    };
    hasSelectAll: {
        type: BooleanConstructor;
        default: boolean;
    };
    texts: {
        type: ObjectConstructor;
        default: () => {};
    };
    searchAttributes: {
        type: ArrayConstructor;
        default: any;
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    openDetails: (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    modelValue: {
        type: (ObjectConstructor | StringConstructor)[];
        default: any;
    };
    items: {
        type: (ArrayConstructor | FunctionConstructor)[];
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
    dictionary: {
        type: ObjectConstructor;
        default: any;
    };
    groupId: {
        type: StringConstructor;
        default: any;
    };
    queryMinLength: {
        type: NumberConstructor;
        default: number;
    };
    queryMaxLength: {
        type: NumberConstructor;
        default: any;
    };
    queryDebounce: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    placeholder: {
        type: StringConstructor;
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
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    hasDetails: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectingKind: {
        type: StringConstructor;
        default: string;
    };
    detailMode: {
        type: StringConstructor;
        default: string;
    };
    variant: {
        type: StringConstructor;
        default: string;
    };
    preloadedItems: {
        type: ArrayConstructor;
        default: any;
    };
    labelId: {
        type: StringConstructor;
        default: any;
    };
    hasSelectAll: {
        type: BooleanConstructor;
        default: boolean;
    };
    texts: {
        type: ObjectConstructor;
        default: () => {};
    };
    searchAttributes: {
        type: ArrayConstructor;
        default: any;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onOpenDetails?: (...args: any[]) => any;
}>, {
    invalid: boolean;
    variant: string;
    texts: Record<string, any>;
    disabled: boolean;
    id: string;
    loading: boolean;
    modelValue: string | Record<string, any>;
    tooltip: string;
    dictionary: Record<string, any>;
    idAttribute: string;
    nameAttribute: string;
    groupId: string;
    labelId: string;
    placeholder: string;
    readOnly: boolean;
    invalidationMessage: string;
    items: Function | unknown[];
    selectingKind: string;
    queryMinLength: number;
    queryMaxLength: number;
    queryDebounce: string | number;
    hasDetails: boolean;
    detailMode: string;
    preloadedItems: unknown[];
    hasSelectAll: boolean;
    searchAttributes: unknown[];
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    panel?(_: {
        click: void;
    }): any;
    customItem?(_: any): any;
    details?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
