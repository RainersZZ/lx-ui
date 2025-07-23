import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: __VLS_WithTemplateSlots<DefineComponent<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    items: {
        type: ArrayConstructor;
        default: any;
    };
    idAttribute: {
        type: StringConstructor;
        default: string;
    };
    primaryAttribute: {
        type: StringConstructor;
        default: string;
    };
    secondaryAttribute: {
        type: StringConstructor;
        default: string;
    };
    childrenAttribute: {
        type: StringConstructor;
        default: string;
    };
    hasChildrenAttribute: {
        type: StringConstructor;
        default: string;
    };
    hrefAttribute: {
        type: StringConstructor;
        default: string;
    };
    clickableAttribute: {
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
    tooltipAttribute: {
        type: StringConstructor;
        default: string;
    };
    categoryAttribute: {
        type: StringConstructor;
        default: string;
    };
    selectableAttribute: {
        type: StringConstructor;
        default: string;
    };
    hasSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    areSomeExpandable: {
        type: BooleanConstructor;
        default: any;
    };
    query: {
        type: StringConstructor;
        default: string;
    };
    actionDefinitions: {
        type: ArrayConstructor;
        default: any;
    };
    actionsLayout: {
        type: StringConstructor;
        default: string;
    };
    groupDefinitions: {
        type: ArrayConstructor;
        default: any;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    iconSet: {
        type: StringConstructor;
        default: () => string;
    };
    hasSelecting: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectingKind: {
        type: StringConstructor;
        default: string;
    };
    selectedItems: {
        type: ObjectConstructor;
        default: () => void;
    };
    itemsStates: {
        type: ObjectConstructor;
        default: () => void;
    };
    mode: {
        type: StringConstructor;
        default: string;
    };
    texts: {
        type: ObjectConstructor;
        default: () => void;
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    actionClick: (...args: any[]) => void;
    "update:selectedItems": (...args: any[]) => void;
    "update:itemsStates": (...args: any[]) => void;
    loadChildren: (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    items: {
        type: ArrayConstructor;
        default: any;
    };
    idAttribute: {
        type: StringConstructor;
        default: string;
    };
    primaryAttribute: {
        type: StringConstructor;
        default: string;
    };
    secondaryAttribute: {
        type: StringConstructor;
        default: string;
    };
    childrenAttribute: {
        type: StringConstructor;
        default: string;
    };
    hasChildrenAttribute: {
        type: StringConstructor;
        default: string;
    };
    hrefAttribute: {
        type: StringConstructor;
        default: string;
    };
    clickableAttribute: {
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
    tooltipAttribute: {
        type: StringConstructor;
        default: string;
    };
    categoryAttribute: {
        type: StringConstructor;
        default: string;
    };
    selectableAttribute: {
        type: StringConstructor;
        default: string;
    };
    hasSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    areSomeExpandable: {
        type: BooleanConstructor;
        default: any;
    };
    query: {
        type: StringConstructor;
        default: string;
    };
    actionDefinitions: {
        type: ArrayConstructor;
        default: any;
    };
    actionsLayout: {
        type: StringConstructor;
        default: string;
    };
    groupDefinitions: {
        type: ArrayConstructor;
        default: any;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    iconSet: {
        type: StringConstructor;
        default: () => string;
    };
    hasSelecting: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectingKind: {
        type: StringConstructor;
        default: string;
    };
    selectedItems: {
        type: ObjectConstructor;
        default: () => void;
    };
    itemsStates: {
        type: ObjectConstructor;
        default: () => void;
    };
    mode: {
        type: StringConstructor;
        default: string;
    };
    texts: {
        type: ObjectConstructor;
        default: () => void;
    };
}>> & Readonly<{
    onActionClick?: (...args: any[]) => any;
    "onUpdate:selectedItems"?: (...args: any[]) => any;
    "onUpdate:itemsStates"?: (...args: any[]) => any;
    onLoadChildren?: (...args: any[]) => any;
}>, {
    iconSet: string;
    texts: Record<string, any>;
    icon: string;
    mode: string;
    id: string;
    query: string;
    idAttribute: string;
    actionDefinitions: unknown[];
    actionsLayout: string;
    items: unknown[];
    primaryAttribute: string;
    secondaryAttribute: string;
    childrenAttribute: string;
    hasChildrenAttribute: string;
    hrefAttribute: string;
    clickableAttribute: string;
    iconAttribute: string;
    iconSetAttribute: string;
    tooltipAttribute: string;
    categoryAttribute: string;
    selectableAttribute: string;
    hasSearch: boolean;
    areSomeExpandable: boolean;
    hasSelecting: boolean;
    selectingKind: string;
    selectedItems: Record<string, any>;
    itemsStates: Record<string, any>;
    groupDefinitions: unknown[];
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    customItem?(_: {
        [x: string]: any;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
