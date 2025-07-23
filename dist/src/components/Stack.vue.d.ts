import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: __VLS_WithTemplateSlots<DefineComponent<ExtractPropTypes<{
    /**
     * A unique identifier for the component instance.
     * @type {String}
     * @default generateUUID()
     * @since 1.8.0-beta.16
     */
    id: {
        type: StringConstructor;
        default: () => string;
    };
    /**
     * The orientation of the stack.
     * @type {String}
     * @default 'vertical'
     * @since 1.8.0-beta.16
     */
    orientation: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The kind of stack.
     * @type {String}
     * @default 'default'
     * @since 1.8.0-beta.16
     */
    kind: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The mode of the stack.
     * @type {String}
     * @default 'default'
     * @since 1.8.0-beta.16
     */
    mode: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The horizontal alignment of the stack.
     * @type {String}
     * @default 'leading'
     * @since 1.8.0-beta.16
     */
    horizontalAlignment: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The vertical alignment of the stack.
     * @type {String}
     * @default 'leading'
     * @since 1.8.0-beta.16
     */
    verticalAlignment: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Grid vertical configuration. Works only when mode is set to 'grid'.
     * @type {Array}
     * @default []
     * @since 1.8.0
     */
    verticalConfig: {
        type: ArrayConstructor;
        default: () => any[];
    };
    /**
     * Grid horizontal configuration. Works only when mode is set to 'grid'.
     * @type {Array}
     * @default []
     * @since 1.8.0
     */
    horizontalConfig: {
        type: ArrayConstructor;
        default: () => any[];
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<{
    /**
     * A unique identifier for the component instance.
     * @type {String}
     * @default generateUUID()
     * @since 1.8.0-beta.16
     */
    id: {
        type: StringConstructor;
        default: () => string;
    };
    /**
     * The orientation of the stack.
     * @type {String}
     * @default 'vertical'
     * @since 1.8.0-beta.16
     */
    orientation: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The kind of stack.
     * @type {String}
     * @default 'default'
     * @since 1.8.0-beta.16
     */
    kind: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The mode of the stack.
     * @type {String}
     * @default 'default'
     * @since 1.8.0-beta.16
     */
    mode: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The horizontal alignment of the stack.
     * @type {String}
     * @default 'leading'
     * @since 1.8.0-beta.16
     */
    horizontalAlignment: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The vertical alignment of the stack.
     * @type {String}
     * @default 'leading'
     * @since 1.8.0-beta.16
     */
    verticalAlignment: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Grid vertical configuration. Works only when mode is set to 'grid'.
     * @type {Array}
     * @default []
     * @since 1.8.0
     */
    verticalConfig: {
        type: ArrayConstructor;
        default: () => any[];
    };
    /**
     * Grid horizontal configuration. Works only when mode is set to 'grid'.
     * @type {Array}
     * @default []
     * @since 1.8.0
     */
    horizontalConfig: {
        type: ArrayConstructor;
        default: () => any[];
    };
}>> & Readonly<{}>, {
    mode: string;
    id: string;
    kind: string;
    orientation: string;
    horizontalAlignment: string;
    verticalAlignment: string;
    verticalConfig: unknown[];
    horizontalConfig: unknown[];
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
