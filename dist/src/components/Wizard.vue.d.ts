import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: __VLS_WithTemplateSlots<DefineComponent<ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: any;
    };
    items: {
        type: ArrayConstructor;
        default: () => any[];
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: any;
    };
    items: {
        type: ArrayConstructor;
        default: () => any[];
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
}>, {
    modelValue: string;
    items: unknown[];
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    body?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
