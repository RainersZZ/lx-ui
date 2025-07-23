import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare function addTitles(): void;
declare const _default: DefineComponent<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    kind: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: (ArrayConstructor | StringConstructor)[];
        default: () => any[];
    };
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    mode: {
        type: StringConstructor;
        default: string;
    };
    selectingKind: {
        type: StringConstructor;
        default: string;
    };
    labelId: {
        type: StringConstructor;
        default: any;
    };
    texts: {
        type: ObjectConstructor;
        default: () => {};
    };
}>, {
    addTitles: typeof addTitles;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    kind: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: (ArrayConstructor | StringConstructor)[];
        default: () => any[];
    };
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    mode: {
        type: StringConstructor;
        default: string;
    };
    selectingKind: {
        type: StringConstructor;
        default: string;
    };
    labelId: {
        type: StringConstructor;
        default: any;
    };
    texts: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
}>, {
    texts: Record<string, any>;
    mode: string;
    id: string;
    modelValue: string | unknown[];
    kind: string;
    labelId: string;
    readOnly: boolean;
    selectingKind: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
