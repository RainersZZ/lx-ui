import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare function toggleExpander(value?: any): void;
declare function focus(): void;
declare const _default: __VLS_WithTemplateSlots<DefineComponent<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: any;
    };
    label: {
        type: StringConstructor;
        default: any;
    };
    description: {
        type: StringConstructor;
        default: any;
    };
    usesFilters: {
        type: BooleanConstructor;
        default: boolean;
    };
    filterButtonKind: {
        type: StringConstructor;
        default: string;
    };
    columnCount: {
        type: NumberConstructor;
        default: number;
    };
    expanded: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    fastFilters: {
        type: ArrayConstructor;
        default: () => any[];
    };
    fastIdAttribute: {
        type: StringConstructor;
        default: string;
    };
    fastNameAttribute: {
        type: StringConstructor;
        default: string;
    };
    badge: {
        type: StringConstructor;
        default: string;
    };
    badgeIcon: {
        type: StringConstructor;
        default: any;
    };
    badgeType: {
        type: StringConstructor;
        default: string;
    };
    badgeTitle: {
        type: StringConstructor;
        default: any;
        validator: (v: unknown, p: {
            [x: string]: unknown;
        }) => boolean;
    };
    kind: {
        type: StringConstructor;
        default: string;
    };
    shortlistColumnCount: {
        type: NumberConstructor;
        default: number;
    };
    texts: {
        type: ObjectConstructor;
        default: () => {};
    };
}>, {
    toggleExpander: typeof toggleExpander;
    focus: typeof focus;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    filter: (...args: any[]) => void;
    resetFilters: (...args: any[]) => void;
    "update:expanded": (...args: any[]) => void;
    fastFilterClick: (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: any;
    };
    label: {
        type: StringConstructor;
        default: any;
    };
    description: {
        type: StringConstructor;
        default: any;
    };
    usesFilters: {
        type: BooleanConstructor;
        default: boolean;
    };
    filterButtonKind: {
        type: StringConstructor;
        default: string;
    };
    columnCount: {
        type: NumberConstructor;
        default: number;
    };
    expanded: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    fastFilters: {
        type: ArrayConstructor;
        default: () => any[];
    };
    fastIdAttribute: {
        type: StringConstructor;
        default: string;
    };
    fastNameAttribute: {
        type: StringConstructor;
        default: string;
    };
    badge: {
        type: StringConstructor;
        default: string;
    };
    badgeIcon: {
        type: StringConstructor;
        default: any;
    };
    badgeType: {
        type: StringConstructor;
        default: string;
    };
    badgeTitle: {
        type: StringConstructor;
        default: any;
        validator: (v: unknown, p: {
            [x: string]: unknown;
        }) => boolean;
    };
    kind: {
        type: StringConstructor;
        default: string;
    };
    shortlistColumnCount: {
        type: NumberConstructor;
        default: number;
    };
    texts: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & Readonly<{
    onFilter?: (...args: any[]) => any;
    onResetFilters?: (...args: any[]) => any;
    "onUpdate:expanded"?: (...args: any[]) => any;
    onFastFilterClick?: (...args: any[]) => any;
}>, {
    label: string;
    texts: Record<string, any>;
    disabled: boolean;
    id: string;
    kind: string;
    description: string;
    badge: string;
    badgeIcon: string;
    badgeType: string;
    badgeTitle: string;
    expanded: boolean;
    columnCount: number;
    usesFilters: boolean;
    filterButtonKind: string;
    fastFilters: unknown[];
    fastIdAttribute: string;
    fastNameAttribute: string;
    shortlistColumnCount: number;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
    shortlist?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
