import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: __VLS_WithTemplateSlots<DefineComponent<{}, {
    clearModel: typeof clearModel;
    $emit: (event: "update:modelValue" | "actionClick" | "update:selectedValues", ...args: any[]) => void;
    texts: Record<string, any>;
    id: string;
    kind: string;
    idAttribute: string;
    nameAttribute: string;
    readOnly: boolean;
    actionDefinitions: unknown[];
    hasSelecting: boolean;
    selectingKind: string;
    forceUppercase: boolean;
    expandable: boolean;
    columnCount: number;
    requiredMode: string;
    addButtonLabel: string;
    canAddItems: boolean;
    defaultExpanded: boolean;
    expandedAttribute: string;
    selectedValues: Record<string, any>;
    modelValue?: unknown[];
    labelId?: string;
    iconAttribute?: string;
    descriptionAttribute?: string;
    hideRemoveAttribute?: string;
    $props: {
        readonly texts?: Record<string, any>;
        readonly id?: string;
        readonly kind?: string;
        readonly idAttribute?: string;
        readonly nameAttribute?: string;
        readonly readOnly?: boolean;
        readonly actionDefinitions?: unknown[];
        readonly hasSelecting?: boolean;
        readonly selectingKind?: string;
        readonly forceUppercase?: boolean;
        readonly expandable?: boolean;
        readonly columnCount?: number;
        readonly requiredMode?: string;
        readonly addButtonLabel?: string;
        readonly canAddItems?: boolean;
        readonly defaultExpanded?: boolean;
        readonly expandedAttribute?: string;
        readonly selectedValues?: Record<string, any>;
        readonly modelValue?: unknown[];
        readonly labelId?: string;
        readonly iconAttribute?: string;
        readonly descriptionAttribute?: string;
        readonly hideRemoveAttribute?: string;
    };
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    customItem?(_: {
        item: unknown;
        index: number;
    }): any;
    customHeader?(_: {
        item: unknown;
        expanded: any;
    }): any;
}>;
export default _default;
declare function clearModel(): any[];
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
