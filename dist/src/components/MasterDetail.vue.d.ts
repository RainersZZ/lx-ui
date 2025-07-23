import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare function selectItem(id: any): void;
declare const _default: __VLS_WithTemplateSlots<DefineComponent<ExtractPropTypes<{
    modelValue: {
        type: ArrayConstructor;
        default: () => any[];
    };
    mode: {
        type: StringConstructor;
        default: string;
    };
    id: {
        type: StringConstructor;
        default: () => string;
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
        default: any;
    };
    categoryAttribute: {
        type: StringConstructor;
        default: string;
    };
    invalidAttribute: {
        type: StringConstructor;
        default: string;
    };
    texts: {
        type: ObjectConstructor;
        default: () => {};
    };
}>, {
    selectItem: typeof selectItem;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    selectionChanged: (...args: any[]) => void;
    newItemAdded: (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    modelValue: {
        type: ArrayConstructor;
        default: () => any[];
    };
    mode: {
        type: StringConstructor;
        default: string;
    };
    id: {
        type: StringConstructor;
        default: () => string;
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
        default: any;
    };
    categoryAttribute: {
        type: StringConstructor;
        default: string;
    };
    invalidAttribute: {
        type: StringConstructor;
        default: string;
    };
    texts: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onSelectionChanged?: (...args: any[]) => any;
    onNewItemAdded?: (...args: any[]) => any;
}>, {
    texts: Record<string, any>;
    mode: string;
    id: string;
    modelValue: unknown[];
    idAttribute: string;
    nameAttribute: string;
    categoryAttribute: string;
    descriptionAttribute: string;
    invalidAttribute: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
