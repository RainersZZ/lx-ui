import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare function setActiveTab(itemCode: any): void;
declare function isActiveTab(itemCode: any): boolean;
declare const _default: __VLS_WithTemplateSlots<DefineComponent<ExtractPropTypes<{
    value: {
        type: ArrayConstructor;
        default: () => any[];
    };
    level: {
        type: NumberConstructor;
        default: number;
    };
    kind: {
        type: StringConstructor;
        default: string;
    };
    texts: {
        type: ObjectConstructor;
        default: () => {};
    };
}>, {
    setActiveTab: typeof setActiveTab;
    isActiveTab: typeof isActiveTab;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<{
    value: {
        type: ArrayConstructor;
        default: () => any[];
    };
    level: {
        type: NumberConstructor;
        default: number;
    };
    kind: {
        type: StringConstructor;
        default: string;
    };
    texts: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & Readonly<{}>, {
    value: unknown[];
    texts: Record<string, any>;
    kind: string;
    level: number;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    body?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
