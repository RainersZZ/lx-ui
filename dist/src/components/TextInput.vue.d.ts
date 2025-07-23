import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare function focus(): void;
declare const _default: DefineComponent<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    placeholder: {
        type: StringConstructor;
        default: any;
    };
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    convertToString: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    uppercase: {
        type: BooleanConstructor;
        default: boolean;
    };
    invalid: {
        type: BooleanConstructor;
        default: boolean;
    };
    invalidationMessage: {
        type: StringConstructor;
        default: any;
    };
    maxlength: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    tooltip: {
        type: StringConstructor;
        default: any;
    };
    mask: {
        type: StringConstructor;
        default: any;
        validator(value: unknown): boolean;
    };
    customMaskValue: {
        type: RegExpConstructor;
        default: RegExp;
    };
    scale: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    signed: {
        type: BooleanConstructor;
        default: boolean;
    };
    kind: {
        type: StringConstructor;
        default: string;
    };
    labelId: {
        type: StringConstructor;
        default: any;
    };
    autocomplete: {
        type: StringConstructor;
        default: string;
    };
    options: {
        type: ObjectConstructor;
        default: () => {
            phone: string;
        };
    };
    texts: {
        type: ObjectConstructor;
        default: () => {};
    };
}>, {
    focus: typeof focus;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    placeholder: {
        type: StringConstructor;
        default: any;
    };
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    convertToString: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    uppercase: {
        type: BooleanConstructor;
        default: boolean;
    };
    invalid: {
        type: BooleanConstructor;
        default: boolean;
    };
    invalidationMessage: {
        type: StringConstructor;
        default: any;
    };
    maxlength: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    tooltip: {
        type: StringConstructor;
        default: any;
    };
    mask: {
        type: StringConstructor;
        default: any;
        validator(value: unknown): boolean;
    };
    customMaskValue: {
        type: RegExpConstructor;
        default: RegExp;
    };
    scale: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    signed: {
        type: BooleanConstructor;
        default: boolean;
    };
    kind: {
        type: StringConstructor;
        default: string;
    };
    labelId: {
        type: StringConstructor;
        default: any;
    };
    autocomplete: {
        type: StringConstructor;
        default: string;
    };
    options: {
        type: ObjectConstructor;
        default: () => {
            phone: string;
        };
    };
    texts: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
}>, {
    invalid: boolean;
    mask: string;
    texts: Record<string, any>;
    disabled: boolean;
    id: string;
    modelValue: string | number;
    kind: string;
    tooltip: string;
    options: Record<string, any>;
    signed: boolean;
    labelId: string;
    placeholder: string;
    readOnly: boolean;
    convertToString: boolean;
    uppercase: boolean;
    invalidationMessage: string;
    maxlength: string | number;
    customMaskValue: RegExp;
    scale: string | number;
    autocomplete: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
