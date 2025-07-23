import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare function validateModel(): any;
declare function clearValidations(): void;
declare const _default: DefineComponent<ExtractPropTypes<{
    /**
     * The prop is used to bind a value to the component. It supports two-way data binding in Vue components.
     * @type {Object}
     * @default null
     * @since 1.9.0-beta.3
     */
    modelValue: {
        type: ObjectConstructor;
        default: any;
    };
    /**
     * Defines the input fields for the filter.
     * @type {Object}
     * @default null
     * @since 1.9.0-beta.3
     */
    schema: {
        type: ObjectConstructor;
        default: any;
    };
    /**
     * Indicates whether the component is in read-only mode.
     * @type {Boolean}
     * @default false
     * @since 1.9.0-beta.3
     */
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether the form will be built from modelValue or schema.
     * @type {String}
     * @default 'default'
     * @since 1.9.0-beta.3
     */
    mode: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The default values for the filter component.
     * @type {Object}
     * @default null
     * @since 1.9.0-beta.3
     */
    defaultValues: {
        type: ObjectConstructor;
        default: any;
    };
    /**
     * Indicates whether to use initial modelValue props values as default values.
     * @type {Boolean}
     * @default true
     * @since 1.9.0-beta.3
     */
    useDefaults: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * The label for the filter component.
     * @type {String}
     * @default null
     * @since 1.9.0-beta.3
     */
    label: {
        type: StringConstructor;
        default: any;
    };
    /**
     * The description for the filter component.
     * @type {String}
     * @default null
     * @since 1.9.0-beta.3
     */
    description: {
        type: StringConstructor;
        default: any;
    };
    /**
     * Indicates whether the filter values differ from default values.
     * @type {Boolean}
     * @default undefined
     * @since 1.9.0-beta.3
     */
    usesFilters: {
        type: BooleanConstructor;
        default: any;
    };
    /**
     * The kind of the filter buttons.
     * @type {String}
     * @default 'tertiary'
     * @since 1.9.0-beta.3
     */
    filterButtonKind: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The number of columns for the filter component.
     * @type {Number}
     * @default 3
     * @since 1.9.0-beta.3
     */
    columnCount: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Indicates whether the filter component is expanded.
     * @type {Boolean}
     * @default undefined
     * @since 1.9.0-beta.3
     */
    expanded: {
        type: BooleanConstructor;
        default: any;
    };
    /**
     * Indicates whether the filter component is disabled.
     * @type {Boolean}
     * @default false
     * @since 1.9.0-beta.3
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * The list of fast filters.
     * @type {Array}
     * @default []
     * @since 1.9.0-beta.3
     */
    fastFilters: {
        type: ArrayConstructor;
        default: () => any[];
    };
    /**
     * The attribute used to identify fast filters.
     * @type {String}
     * @default 'id'
     * @since 1.9.0-beta.3
     */
    fastIdAttribute: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The attribute used to name fast filters.
     * @type {String}
     * @default 'name'
     * @since 1.9.0-beta.3
     */
    fastNameAttribute: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Badge text to be displayed on the filter component.
     * @type {String}
     * @default ''
     * @since 1.9.0-beta.3
     */
    badge: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Badge icon to be displayed on the filter component inside badge.
     * @type {String}
     * @default ''
     * @since 1.9.0-beta.8
     */
    badgeIcon: {
        type: StringConstructor;
        default: any;
    };
    /**
     * The type of the badge.
     * @type {String}
     * @default 'default'
     * @since 1.9.0-beta.3
     */
    badgeType: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Badge title to be displayed on the filter badge when badge is provided.
     * @type {String}
     * @default ''
     * @since 1.9.0-beta.8
     */
    badgeTitle: {
        type: StringConstructor;
        default: any;
        validator: (v: unknown, p: {
            [x: string]: unknown;
        }) => boolean;
    };
    /**
     * Determines invalidation messages for the filters input fields.
     *
     * @type {Object}
     * @default null
     * @since 1.9.0
     */
    validations: {
        type: ObjectConstructor;
        default: any;
    };
    /**
     * The object containing text translations.
     * @type {Object}
     * @since 1.9.0-beta.3
     */
    texts: {
        type: ObjectConstructor;
        default: () => {};
    };
}>, {
    validateModel: typeof validateModel;
    clearValidations: typeof clearValidations;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    filter: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    resetFilters: (...args: any[]) => void;
    "update:expanded": (...args: any[]) => void;
    fastFilterClick: (...args: any[]) => void;
    rowActionClick: (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    /**
     * The prop is used to bind a value to the component. It supports two-way data binding in Vue components.
     * @type {Object}
     * @default null
     * @since 1.9.0-beta.3
     */
    modelValue: {
        type: ObjectConstructor;
        default: any;
    };
    /**
     * Defines the input fields for the filter.
     * @type {Object}
     * @default null
     * @since 1.9.0-beta.3
     */
    schema: {
        type: ObjectConstructor;
        default: any;
    };
    /**
     * Indicates whether the component is in read-only mode.
     * @type {Boolean}
     * @default false
     * @since 1.9.0-beta.3
     */
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether the form will be built from modelValue or schema.
     * @type {String}
     * @default 'default'
     * @since 1.9.0-beta.3
     */
    mode: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The default values for the filter component.
     * @type {Object}
     * @default null
     * @since 1.9.0-beta.3
     */
    defaultValues: {
        type: ObjectConstructor;
        default: any;
    };
    /**
     * Indicates whether to use initial modelValue props values as default values.
     * @type {Boolean}
     * @default true
     * @since 1.9.0-beta.3
     */
    useDefaults: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * The label for the filter component.
     * @type {String}
     * @default null
     * @since 1.9.0-beta.3
     */
    label: {
        type: StringConstructor;
        default: any;
    };
    /**
     * The description for the filter component.
     * @type {String}
     * @default null
     * @since 1.9.0-beta.3
     */
    description: {
        type: StringConstructor;
        default: any;
    };
    /**
     * Indicates whether the filter values differ from default values.
     * @type {Boolean}
     * @default undefined
     * @since 1.9.0-beta.3
     */
    usesFilters: {
        type: BooleanConstructor;
        default: any;
    };
    /**
     * The kind of the filter buttons.
     * @type {String}
     * @default 'tertiary'
     * @since 1.9.0-beta.3
     */
    filterButtonKind: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The number of columns for the filter component.
     * @type {Number}
     * @default 3
     * @since 1.9.0-beta.3
     */
    columnCount: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Indicates whether the filter component is expanded.
     * @type {Boolean}
     * @default undefined
     * @since 1.9.0-beta.3
     */
    expanded: {
        type: BooleanConstructor;
        default: any;
    };
    /**
     * Indicates whether the filter component is disabled.
     * @type {Boolean}
     * @default false
     * @since 1.9.0-beta.3
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * The list of fast filters.
     * @type {Array}
     * @default []
     * @since 1.9.0-beta.3
     */
    fastFilters: {
        type: ArrayConstructor;
        default: () => any[];
    };
    /**
     * The attribute used to identify fast filters.
     * @type {String}
     * @default 'id'
     * @since 1.9.0-beta.3
     */
    fastIdAttribute: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The attribute used to name fast filters.
     * @type {String}
     * @default 'name'
     * @since 1.9.0-beta.3
     */
    fastNameAttribute: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Badge text to be displayed on the filter component.
     * @type {String}
     * @default ''
     * @since 1.9.0-beta.3
     */
    badge: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Badge icon to be displayed on the filter component inside badge.
     * @type {String}
     * @default ''
     * @since 1.9.0-beta.8
     */
    badgeIcon: {
        type: StringConstructor;
        default: any;
    };
    /**
     * The type of the badge.
     * @type {String}
     * @default 'default'
     * @since 1.9.0-beta.3
     */
    badgeType: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Badge title to be displayed on the filter badge when badge is provided.
     * @type {String}
     * @default ''
     * @since 1.9.0-beta.8
     */
    badgeTitle: {
        type: StringConstructor;
        default: any;
        validator: (v: unknown, p: {
            [x: string]: unknown;
        }) => boolean;
    };
    /**
     * Determines invalidation messages for the filters input fields.
     *
     * @type {Object}
     * @default null
     * @since 1.9.0
     */
    validations: {
        type: ObjectConstructor;
        default: any;
    };
    /**
     * The object containing text translations.
     * @type {Object}
     * @since 1.9.0-beta.3
     */
    texts: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & Readonly<{
    onFilter?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onResetFilters?: (...args: any[]) => any;
    "onUpdate:expanded"?: (...args: any[]) => any;
    onFastFilterClick?: (...args: any[]) => any;
    onRowActionClick?: (...args: any[]) => any;
}>, {
    label: string;
    texts: Record<string, any>;
    disabled: boolean;
    mode: string;
    modelValue: Record<string, any>;
    description: string;
    badge: string;
    badgeIcon: string;
    badgeType: string;
    badgeTitle: string;
    readOnly: boolean;
    expanded: boolean;
    columnCount: number;
    usesFilters: boolean;
    filterButtonKind: string;
    fastFilters: unknown[];
    fastIdAttribute: string;
    fastNameAttribute: string;
    schema: Record<string, any>;
    validations: Record<string, any>;
    defaultValues: Record<string, any>;
    useDefaults: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
