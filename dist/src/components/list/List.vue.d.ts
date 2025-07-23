import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare function validate(): 0 | "Item codes are not unique!!!";
declare function selectRows(arr?: any): void;
declare function cancelSelection(): void;
declare function toggleSearch(): void;
declare const _default: __VLS_WithTemplateSlots<DefineComponent<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    items: {
        type: ArrayConstructor;
        default: any;
    };
    hasSearch: {
        type: BooleanConstructor;
        default: boolean;
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
    kind: {
        type: StringConstructor;
        default: string;
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
    hrefAttribute: {
        type: StringConstructor;
        default: string;
    };
    groupAttribute: {
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
    childrenAttribute: {
        type: StringConstructor;
        default: string;
    };
    hasChildrenAttribute: {
        type: StringConstructor;
        default: string;
    };
    selectableAttribute: {
        type: StringConstructor;
        default: string;
    };
    orderAttribute: {
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
    emptyStateActionDefinitions: {
        type: ArrayConstructor;
        default: any;
    };
    emptyStateIcon: {
        type: StringConstructor;
        default: string;
    };
    listType: {
        type: StringConstructor;
        default: string;
    };
    searchString: {
        type: StringConstructor;
        default: string;
    };
    searchSide: {
        type: StringConstructor;
        default: string;
    };
    showLoadMore: {
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
    hideFilteredItems: {
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
    selectionActionDefinitions: {
        type: ArrayConstructor;
        default: () => any[];
    };
    includeUnspecifiedGroups: {
        type: BooleanConstructor;
        default: boolean;
    };
    itemsStates: {
        type: ObjectConstructor;
        default: () => void;
    };
    mode: {
        type: StringConstructor;
        default: string;
    };
    searchMode: {
        type: StringConstructor;
        default: string;
    };
    labelId: {
        type: StringConstructor;
        default: any;
    };
    hasSkipLink: {
        type: BooleanConstructor;
        default: boolean;
    };
    texts: {
        type: ObjectConstructor;
        default: () => {};
    };
}>, {
    validate: typeof validate;
    cancelSelection: typeof cancelSelection;
    selectRows: typeof selectRows;
    toggleSearch: typeof toggleSearch;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    actionClick: (...args: any[]) => void;
    emptyStateActionClick: (...args: any[]) => void;
    "update:itemsStates": (...args: any[]) => void;
    loadChildren: (...args: any[]) => void;
    "update:searchString": (...args: any[]) => void;
    searched: (...args: any[]) => void;
    loadMore: (...args: any[]) => void;
    "update:items": (...args: any[]) => void;
    selectionChanged: (...args: any[]) => void;
    selectionActionClick: (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    items: {
        type: ArrayConstructor;
        default: any;
    };
    hasSearch: {
        type: BooleanConstructor;
        default: boolean;
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
    kind: {
        type: StringConstructor;
        default: string;
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
    hrefAttribute: {
        type: StringConstructor;
        default: string;
    };
    groupAttribute: {
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
    childrenAttribute: {
        type: StringConstructor;
        default: string;
    };
    hasChildrenAttribute: {
        type: StringConstructor;
        default: string;
    };
    selectableAttribute: {
        type: StringConstructor;
        default: string;
    };
    orderAttribute: {
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
    emptyStateActionDefinitions: {
        type: ArrayConstructor;
        default: any;
    };
    emptyStateIcon: {
        type: StringConstructor;
        default: string;
    };
    listType: {
        type: StringConstructor;
        default: string;
    };
    searchString: {
        type: StringConstructor;
        default: string;
    };
    searchSide: {
        type: StringConstructor;
        default: string;
    };
    showLoadMore: {
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
    hideFilteredItems: {
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
    selectionActionDefinitions: {
        type: ArrayConstructor;
        default: () => any[];
    };
    includeUnspecifiedGroups: {
        type: BooleanConstructor;
        default: boolean;
    };
    itemsStates: {
        type: ObjectConstructor;
        default: () => void;
    };
    mode: {
        type: StringConstructor;
        default: string;
    };
    searchMode: {
        type: StringConstructor;
        default: string;
    };
    labelId: {
        type: StringConstructor;
        default: any;
    };
    hasSkipLink: {
        type: BooleanConstructor;
        default: boolean;
    };
    texts: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & Readonly<{
    onActionClick?: (...args: any[]) => any;
    onEmptyStateActionClick?: (...args: any[]) => any;
    "onUpdate:itemsStates"?: (...args: any[]) => any;
    onLoadChildren?: (...args: any[]) => any;
    "onUpdate:searchString"?: (...args: any[]) => any;
    onSearched?: (...args: any[]) => any;
    onLoadMore?: (...args: any[]) => any;
    "onUpdate:items"?: (...args: any[]) => any;
    onSelectionChanged?: (...args: any[]) => any;
    onSelectionActionClick?: (...args: any[]) => any;
}>, {
    iconSet: string;
    texts: Record<string, any>;
    icon: string;
    mode: string;
    id: string;
    loading: boolean;
    kind: string;
    busy: boolean;
    searchString: string;
    idAttribute: string;
    labelId: string;
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
    hasSelecting: boolean;
    selectingKind: string;
    itemsStates: Record<string, any>;
    groupDefinitions: unknown[];
    groupAttribute: string;
    orderAttribute: string;
    emptyStateActionDefinitions: unknown[];
    emptyStateIcon: string;
    listType: string;
    searchSide: string;
    showLoadMore: boolean;
    hideFilteredItems: boolean;
    selectionActionDefinitions: unknown[];
    includeUnspecifiedGroups: boolean;
    searchMode: string;
    hasSkipLink: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    toolbar?(_: {}): any;
    customItem?(_: {
        [x: string]: any;
    }): any;
    customExpanderHeader?(_: {
        item: unknown;
        expanded: any;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
