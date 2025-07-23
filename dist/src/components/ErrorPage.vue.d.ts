import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: __VLS_WithTemplateSlots<DefineComponent<ExtractPropTypes<{
    kind: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: any;
    };
    title: {
        type: StringConstructor;
        default: any;
    };
    description: {
        type: StringConstructor;
        default: any;
    };
    actionDefinitions: {
        type: ArrayConstructor;
        default: () => any[];
    };
    texts: {
        type: ObjectConstructor;
        default: () => {};
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    actionClick: (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    kind: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: any;
    };
    title: {
        type: StringConstructor;
        default: any;
    };
    description: {
        type: StringConstructor;
        default: any;
    };
    actionDefinitions: {
        type: ArrayConstructor;
        default: () => any[];
    };
    texts: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & Readonly<{
    onActionClick?: (...args: any[]) => any;
}>, {
    title: string;
    texts: Record<string, any>;
    icon: string;
    kind: string;
    description: string;
    actionDefinitions: unknown[];
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    toolbar?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
