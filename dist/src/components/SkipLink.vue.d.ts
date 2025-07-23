import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: DefineComponent<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    tabindex: {
        type: NumberConstructor;
        default: number;
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
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    tabindex: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{
    onClick?: (...args: any[]) => any;
}>, {
    label: string;
    title: string;
    id: string;
    tabindex: number;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
