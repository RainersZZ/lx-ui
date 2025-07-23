import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: __VLS_WithTemplateSlots<DefineComponent<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
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
    name: {
        type: StringConstructor;
        default: any;
    };
    description: {
        type: StringConstructor;
        default: any;
    };
    forceUppercase: {
        type: BooleanConstructor;
        default: boolean;
    };
    expandable: {
        type: BooleanConstructor;
        default: boolean;
    };
    actionDefinitions: {
        type: ArrayConstructor;
        default: () => any[];
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    busy: {
        type: BooleanConstructor;
        default: boolean;
    };
    hasSelecting: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectingKind: {
        type: StringConstructor;
        default: string;
    };
    selected: {
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
    texts: {
        type: ObjectConstructor;
        default: () => {};
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    actionClick: (...args: any[]) => void;
    selectingClick: (...args: any[]) => void;
    "update:selected": (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
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
    name: {
        type: StringConstructor;
        default: any;
    };
    description: {
        type: StringConstructor;
        default: any;
    };
    forceUppercase: {
        type: BooleanConstructor;
        default: boolean;
    };
    expandable: {
        type: BooleanConstructor;
        default: boolean;
    };
    actionDefinitions: {
        type: ArrayConstructor;
        default: () => any[];
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    busy: {
        type: BooleanConstructor;
        default: boolean;
    };
    hasSelecting: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectingKind: {
        type: StringConstructor;
        default: string;
    };
    selected: {
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
    texts: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onActionClick?: (...args: any[]) => any;
    onSelectingClick?: (...args: any[]) => any;
    "onUpdate:selected"?: (...args: any[]) => any;
}>, {
    invalid: boolean;
    iconSet: string;
    texts: Record<string, any>;
    size: string;
    icon: string;
    disabled: boolean;
    name: string;
    id: string;
    loading: boolean;
    modelValue: boolean;
    description: string;
    busy: boolean;
    invalidationMessage: string;
    actionDefinitions: unknown[];
    selected: boolean;
    hasSelecting: boolean;
    selectingKind: string;
    forceUppercase: boolean;
    expandable: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    customHeader?(_: {}): any;
    default?(_: {}): any;
    toolbar?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
