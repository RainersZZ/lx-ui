import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: __VLS_WithTemplateSlots<DefineComponent<ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: {
        type: StringConstructor;
        default: () => string;
    };
    kind: {
        type: StringConstructor;
        default: string;
    };
    interactive: {
        type: BooleanConstructor;
        default: boolean;
    };
    texts: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: {
        type: StringConstructor;
        default: () => string;
    };
    kind: {
        type: StringConstructor;
        default: string;
    };
    interactive: {
        type: BooleanConstructor;
        default: boolean;
    };
    texts: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
}>, {
    texts: Record<string, any>;
    id: string;
    modelValue: boolean;
    kind: string;
    interactive: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
    reverse?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
