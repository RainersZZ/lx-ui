import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: DefineComponent<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    routes: {
        type: ArrayConstructor;
        default: () => any[];
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    category: {
        type: StringConstructor;
        default: string;
    };
    translator: {
        type: (ObjectConstructor | FunctionConstructor)[];
        default: any;
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    routes: {
        type: ArrayConstructor;
        default: () => any[];
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    category: {
        type: StringConstructor;
        default: string;
    };
    translator: {
        type: (ObjectConstructor | FunctionConstructor)[];
        default: any;
    };
}>> & Readonly<{}>, {
    label: string;
    id: string;
    category: string;
    routes: unknown[];
    translator: Function | Record<string, any>;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
