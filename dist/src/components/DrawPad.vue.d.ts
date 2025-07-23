import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: DefineComponent<ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    instrument: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    showInstruments: {
        type: BooleanConstructor;
        default: boolean;
    };
    showColorPicker: {
        type: BooleanConstructor;
        default: boolean;
    };
    showClearAll: {
        type: BooleanConstructor;
        default: boolean;
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
    getPng: () => any;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    "update:instrument": (...args: any[]) => void;
    "update:color": (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    instrument: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    showInstruments: {
        type: BooleanConstructor;
        default: boolean;
    };
    showColorPicker: {
        type: BooleanConstructor;
        default: boolean;
    };
    showClearAll: {
        type: BooleanConstructor;
        default: boolean;
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
    "onUpdate:instrument"?: (...args: any[]) => any;
    "onUpdate:color"?: (...args: any[]) => any;
}>, {
    texts: Record<string, any>;
    disabled: boolean;
    modelValue: string;
    width: string;
    height: string;
    labelId: string;
    color: string;
    instrument: string;
    showInstruments: boolean;
    showColorPicker: boolean;
    showClearAll: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
