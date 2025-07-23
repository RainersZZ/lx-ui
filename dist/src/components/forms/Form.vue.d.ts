import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
/**
 * Highlights a row in the form.
 * @param {string} rowId - The ID of the row element to highlight.
 * @param {string} kind - The kind of highlight to apply (default is 'default').
 * @param {number} duration - The duration of the highlight animation in milliseconds (default is 500).
 * @since 1.1.0
 */
declare function highlightRow(rowId: any, kind?: string, duration?: number): void;
/**
 * Removes  the lx-highlight class from all rows in the form.
 * @since 1.1.0
 */
declare function clearHighlights(): void;
declare const _default: __VLS_WithTemplateSlots<DefineComponent<ExtractPropTypes<{
    /**
     * The unique identifier for the form.
     * @type {String}
     * @default generateUUID()
     * @since 0.1.63
     */
    id: {
        type: StringConstructor;
        default: () => string;
    };
    /**
     * The number of columns to display in the form.
     * @type {Number}
     * @default 1
     * @since 0.1.63
     */
    columnCount: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Determines whether to show the header of the form.
     * @type {Boolean}
     * @default true
     * @since 0.1.63
     */
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether the header should be sticky or not.
     * @type {Boolean}
     * @default true
     * @since 0.1.63
     */
    stickyHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether to show the footer of the form.
     * @type {Boolean}
     * @default true
     * @since 0.1.63
     */
    showFooter: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether the footer should be sticky or not.
     * @type {Boolean}
     * @default true
     * @since 0.1.63
     */
    stickyFooter: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether to show pre-header information slot.
     * @type {Boolean}
     * @default true
     * @since 0.1.63
     */
    showPreHeaderInfo: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether to show post-header information slot.
     * @type {Boolean}
     * @default true
     * @since 0.1.63
     */
    showPostHeaderInfo: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * The array of sections in the form.
     * @type {Array}
     * @default []
     * @since 0.1.63
     */
    index: {
        type: ArrayConstructor;
        default: () => any[];
    };
    /**
     * The type of index for the form.
     * @type {String}
     * @default 'default'
     * @since 0.3.0
     */
    indexType: {
        type: StringConstructor;
        default: string;
    };
    /**
     * An array of buttons for the form.
     * @type {Array}
     * @default []
     * @since 0.1.63
     */
    actionDefinitions: {
        type: ArrayConstructor;
        default: () => any[];
    };
    /**
     * The required mode for the form.
     * @type {String}
     * @default 'optional'
     * @since 0.3.11
     */
    requiredMode: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determines spacings between, before, after rows and sections in form.
     * @type {String}
     * @default 'default'
     * @since 0.3.11
     */
    kind: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The orientation of the forms rows
     * @type {String}
     * @default null
     * @since 1.7.0-beta.13
     */
    orientation: {
        type: StringConstructor;
        default: any;
    };
    /**
     * Show skip link to skip form
     * @type {Boolean}
     * @default false
     * @since 1.8.0-beta.10
     */
    hasSkipLink: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * The object containing text translations for the form.
     * @type {Object}
     * @since 0.3.5
     */
    texts: {
        type: ObjectConstructor;
        default: () => void;
    };
    role: {
        type: StringConstructor;
        default: string;
    };
}>, {
    highlightRow: typeof highlightRow;
    clearHighlights: typeof clearHighlights;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    buttonClick: (...args: any[]) => void;
    "update:index": (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    /**
     * The unique identifier for the form.
     * @type {String}
     * @default generateUUID()
     * @since 0.1.63
     */
    id: {
        type: StringConstructor;
        default: () => string;
    };
    /**
     * The number of columns to display in the form.
     * @type {Number}
     * @default 1
     * @since 0.1.63
     */
    columnCount: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Determines whether to show the header of the form.
     * @type {Boolean}
     * @default true
     * @since 0.1.63
     */
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether the header should be sticky or not.
     * @type {Boolean}
     * @default true
     * @since 0.1.63
     */
    stickyHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether to show the footer of the form.
     * @type {Boolean}
     * @default true
     * @since 0.1.63
     */
    showFooter: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether the footer should be sticky or not.
     * @type {Boolean}
     * @default true
     * @since 0.1.63
     */
    stickyFooter: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether to show pre-header information slot.
     * @type {Boolean}
     * @default true
     * @since 0.1.63
     */
    showPreHeaderInfo: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether to show post-header information slot.
     * @type {Boolean}
     * @default true
     * @since 0.1.63
     */
    showPostHeaderInfo: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * The array of sections in the form.
     * @type {Array}
     * @default []
     * @since 0.1.63
     */
    index: {
        type: ArrayConstructor;
        default: () => any[];
    };
    /**
     * The type of index for the form.
     * @type {String}
     * @default 'default'
     * @since 0.3.0
     */
    indexType: {
        type: StringConstructor;
        default: string;
    };
    /**
     * An array of buttons for the form.
     * @type {Array}
     * @default []
     * @since 0.1.63
     */
    actionDefinitions: {
        type: ArrayConstructor;
        default: () => any[];
    };
    /**
     * The required mode for the form.
     * @type {String}
     * @default 'optional'
     * @since 0.3.11
     */
    requiredMode: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determines spacings between, before, after rows and sections in form.
     * @type {String}
     * @default 'default'
     * @since 0.3.11
     */
    kind: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The orientation of the forms rows
     * @type {String}
     * @default null
     * @since 1.7.0-beta.13
     */
    orientation: {
        type: StringConstructor;
        default: any;
    };
    /**
     * Show skip link to skip form
     * @type {Boolean}
     * @default false
     * @since 1.8.0-beta.10
     */
    hasSkipLink: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * The object containing text translations for the form.
     * @type {Object}
     * @since 0.3.5
     */
    texts: {
        type: ObjectConstructor;
        default: () => void;
    };
    role: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    onButtonClick?: (...args: any[]) => any;
    "onUpdate:index"?: (...args: any[]) => any;
}>, {
    texts: Record<string, any>;
    id: string;
    kind: string;
    role: string;
    actionDefinitions: unknown[];
    hasSkipLink: boolean;
    index: unknown[];
    columnCount: number;
    requiredMode: string;
    orientation: string;
    showHeader: boolean;
    stickyHeader: boolean;
    showFooter: boolean;
    stickyFooter: boolean;
    showPreHeaderInfo: boolean;
    showPostHeaderInfo: boolean;
    indexType: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    "pre-header"?(_: {}): any;
    "pre-header-info"?(_: {}): any;
    header?(_: {}): any;
    "post-header"?(_: {}): any;
    "post-header-info"?(_: {}): any;
    default?(_: {}): any;
    sections?(_: {}): any;
    footer?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
