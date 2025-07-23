import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: __VLS_WithTemplateSlots<DefineComponent<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    parentId: {
        type: StringConstructor;
        default: any;
    };
    label: {
        type: StringConstructor;
        required: true;
    };
    description: {
        type: StringConstructor;
        default: any;
    };
    value: {
        type: ObjectConstructor;
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
    href: {
        type: (ObjectConstructor | StringConstructor)[];
        default: any;
    };
    kind: {
        type: StringConstructor;
        default: string;
    };
    category: {
        type: StringConstructor;
        default: any;
    };
    clickable: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    selected: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    busy: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    invalid: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchString: {
        type: StringConstructor;
        default: string;
    };
    tooltip: {
        type: StringConstructor;
        default: string;
    };
    actionDefinitions: {
        type: ArrayConstructor;
        default: () => any[];
    };
    actionsLayout: {
        type: StringConstructor;
        default: string;
    };
    texts: {
        type: ObjectConstructor;
        default: () => {};
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    click: (...args: any[]) => void;
    actionClick: (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    parentId: {
        type: StringConstructor;
        default: any;
    };
    label: {
        type: StringConstructor;
        required: true;
    };
    description: {
        type: StringConstructor;
        default: any;
    };
    value: {
        type: ObjectConstructor;
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
    href: {
        type: (ObjectConstructor | StringConstructor)[];
        default: any;
    };
    kind: {
        type: StringConstructor;
        default: string;
    };
    category: {
        type: StringConstructor;
        default: any;
    };
    clickable: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    selected: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    busy: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    invalid: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchString: {
        type: StringConstructor;
        default: string;
    };
    tooltip: {
        type: StringConstructor;
        default: string;
    };
    actionDefinitions: {
        type: ArrayConstructor;
        default: () => any[];
    };
    actionsLayout: {
        type: StringConstructor;
        default: string;
    };
    texts: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & Readonly<{
    onClick?: (...args: any[]) => any;
    onActionClick?: (...args: any[]) => any;
}>, {
    invalid: boolean;
    value: Record<string, any>;
    iconSet: string;
    texts: Record<string, any>;
    icon: string;
    disabled: boolean;
    id: string;
    loading: boolean;
    kind: string;
    description: string;
    tooltip: string;
    href: string | Record<string, any>;
    busy: boolean;
    active: boolean;
    searchString: string;
    actionDefinitions: unknown[];
    parentId: string;
    category: string;
    clickable: string | boolean;
    selected: boolean;
    actionsLayout: string;
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
