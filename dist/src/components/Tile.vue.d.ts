import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: __VLS_WithTemplateSlots<DefineComponent<ExtractPropTypes<{
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
    title: {
        type: StringConstructor;
        default: any;
    };
    icon: {
        type: StringConstructor;
        default: any;
    };
    iconSet: {
        type: StringConstructor;
        default: () => string;
    };
    kind: {
        type: StringConstructor;
        default: string;
    };
    to: {
        type: ObjectConstructor;
        default: any;
    };
    href: {
        type: ObjectConstructor;
        default: any;
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
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<{
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
    title: {
        type: StringConstructor;
        default: any;
    };
    icon: {
        type: StringConstructor;
        default: any;
    };
    iconSet: {
        type: StringConstructor;
        default: () => string;
    };
    kind: {
        type: StringConstructor;
        default: string;
    };
    to: {
        type: ObjectConstructor;
        default: any;
    };
    href: {
        type: ObjectConstructor;
        default: any;
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
}>> & Readonly<{}>, {
    label: string;
    title: string;
    iconSet: string;
    icon: string;
    to: Record<string, any>;
    disabled: boolean;
    id: string;
    loading: boolean;
    kind: string;
    description: string;
    href: Record<string, any>;
    busy: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
