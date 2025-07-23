import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: DefineComponent<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    label: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    busyTooltip: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    iconSet: {
        type: StringConstructor;
        default: () => string;
    };
    iconVariant: {
        type: StringConstructor;
        default: string;
    };
    kind: {
        type: StringConstructor;
        default: string;
    };
    variant: {
        type: StringConstructor;
        default: string;
    };
    destructive: {
        type: BooleanConstructor;
        default: boolean;
    };
    href: {
        type: ObjectConstructor;
        default: () => void;
    };
    disabled: {
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
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    tabindex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    customClass: {
        type: StringConstructor;
        default: string;
    };
    openInNewTab: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    click: (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    label: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    busyTooltip: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    iconSet: {
        type: StringConstructor;
        default: () => string;
    };
    iconVariant: {
        type: StringConstructor;
        default: string;
    };
    kind: {
        type: StringConstructor;
        default: string;
    };
    variant: {
        type: StringConstructor;
        default: string;
    };
    destructive: {
        type: BooleanConstructor;
        default: boolean;
    };
    href: {
        type: ObjectConstructor;
        default: () => void;
    };
    disabled: {
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
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    tabindex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    customClass: {
        type: StringConstructor;
        default: string;
    };
    openInNewTab: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onClick?: (...args: any[]) => any;
}>, {
    label: string;
    title: string;
    iconSet: string;
    variant: string;
    customClass: string;
    icon: string;
    disabled: boolean;
    id: string;
    loading: boolean;
    kind: string;
    busyTooltip: string;
    iconVariant: string;
    destructive: boolean;
    href: Record<string, any>;
    busy: boolean;
    badge: string;
    badgeIcon: string;
    badgeType: string;
    badgeTitle: string;
    active: boolean;
    tabindex: string | number;
    openInNewTab: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
