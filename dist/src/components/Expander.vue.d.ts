import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare function focus(): void;
declare const _default: __VLS_WithTemplateSlots<DefineComponent<ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: {
        type: StringConstructor;
        default: () => string;
    };
    label: {
        type: StringConstructor;
        default: any;
    };
    description: {
        type: StringConstructor;
        default: any;
    };
    region: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: StringConstructor;
        default: any;
    };
    iconSet: {
        type: StringConstructor;
        default: () => string;
    };
    tooltip: {
        type: StringConstructor;
        default: any;
    };
    kind: {
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
    variant: {
        type: StringConstructor;
        default: string;
    };
    renderMode: {
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
    hasSelectButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectStatus: {
        type: StringConstructor;
        default: string;
    };
    customClass: {
        type: StringConstructor;
        default: string;
    };
    texts: {
        type: ObjectConstructor;
        default: () => {};
    };
}>, {
    focus: typeof focus;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    selectAll: (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: {
        type: StringConstructor;
        default: () => string;
    };
    label: {
        type: StringConstructor;
        default: any;
    };
    description: {
        type: StringConstructor;
        default: any;
    };
    region: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: StringConstructor;
        default: any;
    };
    iconSet: {
        type: StringConstructor;
        default: () => string;
    };
    tooltip: {
        type: StringConstructor;
        default: any;
    };
    kind: {
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
    variant: {
        type: StringConstructor;
        default: string;
    };
    renderMode: {
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
    hasSelectButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectStatus: {
        type: StringConstructor;
        default: string;
    };
    customClass: {
        type: StringConstructor;
        default: string;
    };
    texts: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onSelectAll?: (...args: any[]) => any;
}>, {
    invalid: boolean;
    label: string;
    iconSet: string;
    variant: string;
    customClass: string;
    texts: Record<string, any>;
    icon: string;
    disabled: boolean;
    id: string;
    modelValue: boolean;
    kind: string;
    description: string;
    tooltip: string;
    badge: string;
    badgeIcon: string;
    badgeType: string;
    badgeTitle: string;
    invalidationMessage: string;
    region: boolean;
    renderMode: string;
    hasSelectButton: boolean;
    selectStatus: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    customHeader?(_: {
        invalid: boolean;
        iconSet: string;
        variant: string;
        customClass: string;
        texts: Record<string, any>;
        disabled: boolean;
        id: string;
        modelValue: boolean;
        kind: string;
        badge: string;
        badgeType: string;
        region: boolean;
        renderMode: string;
        hasSelectButton: boolean;
        selectStatus: string;
        label?: string;
        icon?: string;
        description?: string;
        tooltip?: string;
        badgeIcon?: string;
        badgeTitle?: string;
        invalidationMessage?: string;
    }): any;
    additionalInfo?(_: {}): any;
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
