import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: __VLS_WithTemplateSlots<DefineComponent<ExtractPropTypes<{
    /**
     * The unique identifier for the row.
     *
     * @type {String}
     * @default generateUUID()
     * @since 0.1.63
     */
    id: {
        type: StringConstructor;
        default: () => string;
    };
    /**
     * The label for the row.
     *
     * @type {String}
     * @default ''
     * @since 0.1.63
     */
    label: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Description of the component.
     *
     * @type {String}
     * @default ''
     * @since 0.1.63
     */
    description: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determines whether the label should be hidden.
     * @type {boolean}
     * @default false
     * @since 0.1.63
     */
    hideLabel: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * The number of columns the row should take up.
     * @type {Number|String}
     * @default 1
     * @since 0.1.63
     */
    columnSpan: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /**
     * The number of rows that the component should take up.
     * @type {Number|String}
     * @default 1
     * @since 0.1.63
     */
    rowSpan: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /**
     * The orientation of the row.
     * @type {String}
     * @default null
     * @since 0.1.63
     */
    orientation: {
        type: StringConstructor;
        default: any;
    };
    /**
     * Determines whether the row is required.
     * @type {Boolean}
     * @default null
     * @since 0.3.11
     */
    required: {
        type: BooleanConstructor;
        default: any;
    };
    /**
     * The unique identifier for the input element.
     * @type {String}
     * @default null
     * @since 0.4.0
     */
    inputId: {
        type: StringConstructor;
        default: any;
    };
    /**
     * The action definitions for the row.
     * @type {Array}
     * @default []
     * @since 1.5.0
     */
    actionDefinitions: {
        type: ArrayConstructor;
        default: () => any[];
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    actionClick: (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    /**
     * The unique identifier for the row.
     *
     * @type {String}
     * @default generateUUID()
     * @since 0.1.63
     */
    id: {
        type: StringConstructor;
        default: () => string;
    };
    /**
     * The label for the row.
     *
     * @type {String}
     * @default ''
     * @since 0.1.63
     */
    label: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Description of the component.
     *
     * @type {String}
     * @default ''
     * @since 0.1.63
     */
    description: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determines whether the label should be hidden.
     * @type {boolean}
     * @default false
     * @since 0.1.63
     */
    hideLabel: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * The number of columns the row should take up.
     * @type {Number|String}
     * @default 1
     * @since 0.1.63
     */
    columnSpan: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /**
     * The number of rows that the component should take up.
     * @type {Number|String}
     * @default 1
     * @since 0.1.63
     */
    rowSpan: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /**
     * The orientation of the row.
     * @type {String}
     * @default null
     * @since 0.1.63
     */
    orientation: {
        type: StringConstructor;
        default: any;
    };
    /**
     * Determines whether the row is required.
     * @type {Boolean}
     * @default null
     * @since 0.3.11
     */
    required: {
        type: BooleanConstructor;
        default: any;
    };
    /**
     * The unique identifier for the input element.
     * @type {String}
     * @default null
     * @since 0.4.0
     */
    inputId: {
        type: StringConstructor;
        default: any;
    };
    /**
     * The action definitions for the row.
     * @type {Array}
     * @default []
     * @since 1.5.0
     */
    actionDefinitions: {
        type: ArrayConstructor;
        default: () => any[];
    };
}>> & Readonly<{
    onActionClick?: (...args: any[]) => any;
}>, {
    required: boolean;
    label: string;
    id: string;
    description: string;
    actionDefinitions: unknown[];
    orientation: string;
    hideLabel: boolean;
    columnSpan: string | number;
    rowSpan: string | number;
    inputId: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    info?(_: {}): any;
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
