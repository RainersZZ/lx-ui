import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: __VLS_WithTemplateSlots<DefineComponent<ExtractPropTypes<{
    /**
     * The number of columns to display in the section.
     * @type {Number}
     * @default 1
     * @since 0.1.63
     */
    columnCount: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * The label of the section.
     * @type {String}
     * @default null
     * @since 0.1.63
     */
    label: {
        type: StringConstructor;
        default: any;
    };
    /**
     * The description of the section.
     * @type {String}
     * @default null
     * @since 0.1.63
     */
    description: {
        type: StringConstructor;
        default: any;
    };
    /**
     * The unique identifier of the section.
     * @type {String}
     * @default generateUUID()
     * @since 0.1.63
     */
    id: {
        type: StringConstructor;
        default: () => string;
    };
    /**
     * The required mode of the section.
     * @type {String}
     * @default 'optional'
     * @since 0.3.11
     */
    requiredMode: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The icon at start of section header.
     * @type {String}
     * @default null
     * @since 1.6.0-beta.5
     */
    icon: {
        type: StringConstructor;
        default: any;
    };
    /**
     * The icon set for icon at start of section header.
     * @type {String}
     * @default
     * @since 1.6.0-beta.5
     */
    iconSet: {
        type: StringConstructor;
        default: () => string;
    };
    /**
     * The custom css class for expander.
     * @type {String}
     * @default 'default'
     * @since 1.6.0-beta.5
     */
    customClass: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The badge for header section.
     * @type {String}
     * @default
     * @since 1.6.0-beta.5
     */
    badge: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The badge icon for header section.
     * @type {String}
     * @default
     * @since 1.9.0-beta.8
     */
    badgeIcon: {
        type: StringConstructor;
        default: any;
    };
    /**
     * The badge type for header section.
     * @type {String}
     * @default
     * @since 1.9.0-beta.8
     */
    badgeType: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The badge title for header section if badge is provided.
     * @type {String}
     * @default
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
     * Defines the action definitions for the section.
     *
     * @type {Array}
     * @default []
     * @since 1.7.0-beta.8
     */
    actionDefinitions: {
        type: ArrayConstructor;
        default: () => any[];
    };
    /**
     * The orientation of the sections rows
     * @type {String}
     * @default null
     * @since 1.7.0-beta.13
     */
    orientation: {
        type: StringConstructor;
        default: any;
    };
    /**
     * The rendering mode for expander.
     * @type {String}
     * @since 1.9.0
     */
    expanderRenderMode: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The object containing text translations for the section.
     * @type {Object}
     * @since 1.2.3
     */
    texts: {
        type: ObjectConstructor;
        default: () => {};
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    actionClick: (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    /**
     * The number of columns to display in the section.
     * @type {Number}
     * @default 1
     * @since 0.1.63
     */
    columnCount: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * The label of the section.
     * @type {String}
     * @default null
     * @since 0.1.63
     */
    label: {
        type: StringConstructor;
        default: any;
    };
    /**
     * The description of the section.
     * @type {String}
     * @default null
     * @since 0.1.63
     */
    description: {
        type: StringConstructor;
        default: any;
    };
    /**
     * The unique identifier of the section.
     * @type {String}
     * @default generateUUID()
     * @since 0.1.63
     */
    id: {
        type: StringConstructor;
        default: () => string;
    };
    /**
     * The required mode of the section.
     * @type {String}
     * @default 'optional'
     * @since 0.3.11
     */
    requiredMode: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The icon at start of section header.
     * @type {String}
     * @default null
     * @since 1.6.0-beta.5
     */
    icon: {
        type: StringConstructor;
        default: any;
    };
    /**
     * The icon set for icon at start of section header.
     * @type {String}
     * @default
     * @since 1.6.0-beta.5
     */
    iconSet: {
        type: StringConstructor;
        default: () => string;
    };
    /**
     * The custom css class for expander.
     * @type {String}
     * @default 'default'
     * @since 1.6.0-beta.5
     */
    customClass: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The badge for header section.
     * @type {String}
     * @default
     * @since 1.6.0-beta.5
     */
    badge: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The badge icon for header section.
     * @type {String}
     * @default
     * @since 1.9.0-beta.8
     */
    badgeIcon: {
        type: StringConstructor;
        default: any;
    };
    /**
     * The badge type for header section.
     * @type {String}
     * @default
     * @since 1.9.0-beta.8
     */
    badgeType: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The badge title for header section if badge is provided.
     * @type {String}
     * @default
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
     * Defines the action definitions for the section.
     *
     * @type {Array}
     * @default []
     * @since 1.7.0-beta.8
     */
    actionDefinitions: {
        type: ArrayConstructor;
        default: () => any[];
    };
    /**
     * The orientation of the sections rows
     * @type {String}
     * @default null
     * @since 1.7.0-beta.13
     */
    orientation: {
        type: StringConstructor;
        default: any;
    };
    /**
     * The rendering mode for expander.
     * @type {String}
     * @since 1.9.0
     */
    expanderRenderMode: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The object containing text translations for the section.
     * @type {Object}
     * @since 1.2.3
     */
    texts: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & Readonly<{
    onActionClick?: (...args: any[]) => any;
}>, {
    label: string;
    iconSet: string;
    customClass: string;
    texts: Record<string, any>;
    icon: string;
    id: string;
    description: string;
    badge: string;
    badgeIcon: string;
    badgeType: string;
    badgeTitle: string;
    actionDefinitions: unknown[];
    columnCount: number;
    requiredMode: string;
    orientation: string;
    expanderRenderMode: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
