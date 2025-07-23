import { DefineComponent, ExtractPropTypes, Ref, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: __VLS_WithTemplateSlots<DefineComponent<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    placement: {
        type: StringConstructor;
        default: string;
    };
    offsetSkid: {
        type: StringConstructor;
        default: string;
    };
    offsetDistance: {
        type: StringConstructor;
        default: string;
    };
    hover: {
        type: BooleanConstructor;
        default: boolean;
    };
    arrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    arrowPadding: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    openDelay: {
        type: StringConstructor;
        default: string;
    };
    closeDelay: {
        type: StringConstructor;
        default: string;
    };
    content: {
        default: any;
    };
    locked: {
        type: BooleanConstructor;
        default: boolean;
    };
    focusable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    handleOpen: () => void;
    handleClose: () => void;
    showPopper: Ref<boolean, boolean>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    placement: {
        type: StringConstructor;
        default: string;
    };
    offsetSkid: {
        type: StringConstructor;
        default: string;
    };
    offsetDistance: {
        type: StringConstructor;
        default: string;
    };
    hover: {
        type: BooleanConstructor;
        default: boolean;
    };
    arrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    arrowPadding: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    openDelay: {
        type: StringConstructor;
        default: string;
    };
    closeDelay: {
        type: StringConstructor;
        default: string;
    };
    content: {
        default: any;
    };
    locked: {
        type: BooleanConstructor;
        default: boolean;
    };
    focusable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    disabled: boolean;
    focusable: boolean;
    id: string;
    placement: string;
    offsetDistance: string;
    offsetSkid: string;
    arrowPadding: string;
    content: any;
    locked: boolean;
    hover: boolean;
    arrow: boolean;
    openDelay: string;
    closeDelay: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
    panel?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
