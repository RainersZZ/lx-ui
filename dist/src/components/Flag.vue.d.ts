import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: DefineComponent<ExtractPropTypes<{
    value: {
        type: StringConstructor;
        required: true;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<{
    value: {
        type: StringConstructor;
        required: true;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    title: string;
    size: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
