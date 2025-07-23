import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: DefineComponent<ExtractPropTypes<{
    icon: {
        type: StringConstructor;
        default: any;
    };
    iconSet: {
        type: StringConstructor;
        default: () => string;
    };
    value: {
        type: StringConstructor;
        default: any;
    };
    tooltip: {
        type: StringConstructor;
        default: any;
        validator: (v: unknown, p: {
            [x: string]: unknown;
        }) => boolean;
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<{
    icon: {
        type: StringConstructor;
        default: any;
    };
    iconSet: {
        type: StringConstructor;
        default: () => string;
    };
    value: {
        type: StringConstructor;
        default: any;
    };
    tooltip: {
        type: StringConstructor;
        default: any;
        validator: (v: unknown, p: {
            [x: string]: unknown;
        }) => boolean;
    };
}>> & Readonly<{}>, {
    value: string;
    iconSet: string;
    icon: string;
    tooltip: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
