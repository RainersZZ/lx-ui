import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: __VLS_WithTemplateSlots<DefineComponent<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    placement: {
        type: StringConstructor;
        default: string;
    };
    offsetDistance: {
        type: StringConstructor;
        default: string;
    };
    offsetSkid: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    arrowPointer: {
        type: BooleanConstructor;
        default: boolean;
    };
    wrapperClass: {
        type: StringConstructor;
        default: string;
    };
    panelClass: {
        type: StringConstructor;
        default: string;
    };
    arrowPadding: {
        type: StringConstructor;
        default: string;
    };
    content: {
        default: any;
    };
    show: {
        type: BooleanConstructor;
        default: any;
    };
    locked: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:placement": (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    placement: {
        type: StringConstructor;
        default: string;
    };
    offsetDistance: {
        type: StringConstructor;
        default: string;
    };
    offsetSkid: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    arrowPointer: {
        type: BooleanConstructor;
        default: boolean;
    };
    wrapperClass: {
        type: StringConstructor;
        default: string;
    };
    panelClass: {
        type: StringConstructor;
        default: string;
    };
    arrowPadding: {
        type: StringConstructor;
        default: string;
    };
    content: {
        default: any;
    };
    show: {
        type: BooleanConstructor;
        default: any;
    };
    locked: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    "onUpdate:placement"?: (...args: any[]) => any;
}>, {
    disabled: boolean;
    id: string;
    placement: string;
    offsetDistance: string;
    offsetSkid: string;
    arrowPointer: boolean;
    wrapperClass: string;
    panelClass: string;
    arrowPadding: string;
    content: any;
    show: boolean;
    locked: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
    content?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
