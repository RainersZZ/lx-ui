import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: DefineComponent<ExtractPropTypes<{
    value: {
        type: StringConstructor;
        default: string;
    };
    iconSet: {
        type: StringConstructor;
        default: () => string;
    };
    variant: {
        type: StringConstructor;
        default: string;
    };
    customClass: {
        type: StringConstructor;
        default: string;
    };
    animation: {
        type: StringConstructor;
        default: string;
    };
    meaningful: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    desc: {
        type: StringConstructor;
        default: string;
    };
    texts: {
        type: ObjectConstructor;
        default: () => {};
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<{
    value: {
        type: StringConstructor;
        default: string;
    };
    iconSet: {
        type: StringConstructor;
        default: () => string;
    };
    variant: {
        type: StringConstructor;
        default: string;
    };
    customClass: {
        type: StringConstructor;
        default: string;
    };
    animation: {
        type: StringConstructor;
        default: string;
    };
    meaningful: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    desc: {
        type: StringConstructor;
        default: string;
    };
    texts: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & Readonly<{}>, {
    title: string;
    desc: string;
    value: string;
    iconSet: string;
    variant: string;
    customClass: string;
    animation: string;
    meaningful: boolean;
    texts: Record<string, any>;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
