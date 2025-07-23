import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: DefineComponent<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    startDate: {
        type: StringConstructor;
        default: any;
    };
    endDate: {
        type: StringConstructor;
        default: any;
    };
    kind: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: any;
    };
    tooltip: {
        type: StringConstructor;
        default: any;
    };
    minDate: {
        type: StringConstructor;
        default: any;
    };
    maxDate: {
        type: StringConstructor;
        default: any;
    };
    maxRangeLength: {
        type: NumberConstructor;
        default: any;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
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
    timeAdjust: {
        type: StringConstructor;
        default: any;
    };
    locale: {
        type: ObjectConstructor;
        default: () => any;
    };
    rangeMonth: {
        type: StringConstructor;
        default: string;
    };
    clearIfNotExact: {
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
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:startDate": (...args: any[]) => void;
    "update:endDate": (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    startDate: {
        type: StringConstructor;
        default: any;
    };
    endDate: {
        type: StringConstructor;
        default: any;
    };
    kind: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: any;
    };
    tooltip: {
        type: StringConstructor;
        default: any;
    };
    minDate: {
        type: StringConstructor;
        default: any;
    };
    maxDate: {
        type: StringConstructor;
        default: any;
    };
    maxRangeLength: {
        type: NumberConstructor;
        default: any;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
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
    timeAdjust: {
        type: StringConstructor;
        default: any;
    };
    locale: {
        type: ObjectConstructor;
        default: () => any;
    };
    rangeMonth: {
        type: StringConstructor;
        default: string;
    };
    clearIfNotExact: {
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
    "onUpdate:startDate"?: (...args: any[]) => any;
    "onUpdate:endDate"?: (...args: any[]) => any;
}>, {
    invalid: boolean;
    required: boolean;
    texts: Record<string, any>;
    disabled: boolean;
    id: string;
    kind: string;
    locale: Record<string, any>;
    tooltip: string;
    labelId: string;
    placeholder: string;
    readOnly: boolean;
    invalidationMessage: string;
    clearIfNotExact: boolean;
    minDate: string;
    maxDate: string;
    timeAdjust: string;
    startDate: string;
    endDate: string;
    maxRangeLength: number;
    rangeMonth: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
