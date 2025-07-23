import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: DefineComponent<ExtractPropTypes<{
    value: {
        type: ObjectConstructor;
        default: any;
    };
    idAttribute: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
    };
    nameAttribute: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<{
    value: {
        type: ObjectConstructor;
        default: any;
    };
    idAttribute: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
    };
    nameAttribute: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    value: Record<string, any>;
    idAttribute: string | unknown[];
    nameAttribute: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
