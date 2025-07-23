import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare function open(): void;
declare function close(source?: any): void;
declare const _default: __VLS_WithTemplateSlots<DefineComponent<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    buttonPrimaryVisible: {
        default: boolean;
        type: BooleanConstructor;
    };
    buttonPrimaryLoading: {
        default: boolean;
        type: BooleanConstructor;
    };
    buttonPrimaryBusy: {
        default: boolean;
        type: BooleanConstructor;
    };
    buttonPrimaryLabel: {
        default: any;
        type: StringConstructor;
    };
    buttonPrimaryDisabled: {
        default: boolean;
        type: BooleanConstructor;
    };
    buttonSecondaryVisible: {
        default: boolean;
        type: BooleanConstructor;
    };
    buttonSecondaryLoading: {
        default: boolean;
        type: BooleanConstructor;
    };
    buttonSecondaryBusy: {
        default: boolean;
        type: BooleanConstructor;
    };
    buttonSecondaryLabel: {
        default: any;
        type: StringConstructor;
    };
    buttonSecondaryIsCancel: {
        default: boolean;
        type: BooleanConstructor;
    };
    buttonPrimaryIsDestructive: {
        default: boolean;
        type: BooleanConstructor;
    };
    disableClosing: {
        default: boolean;
        type: BooleanConstructor;
    };
    kind: {
        default: string;
        type: StringConstructor;
    };
    escEnabled: {
        default: boolean;
        type: BooleanConstructor;
    };
    buttonCloseLabel: {
        default: string;
        type: StringConstructor;
    };
}>, {
    open: typeof open;
    close: typeof close;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    closed: (...args: any[]) => void;
    primaryAction: (...args: any[]) => void;
    secondaryAction: (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    buttonPrimaryVisible: {
        default: boolean;
        type: BooleanConstructor;
    };
    buttonPrimaryLoading: {
        default: boolean;
        type: BooleanConstructor;
    };
    buttonPrimaryBusy: {
        default: boolean;
        type: BooleanConstructor;
    };
    buttonPrimaryLabel: {
        default: any;
        type: StringConstructor;
    };
    buttonPrimaryDisabled: {
        default: boolean;
        type: BooleanConstructor;
    };
    buttonSecondaryVisible: {
        default: boolean;
        type: BooleanConstructor;
    };
    buttonSecondaryLoading: {
        default: boolean;
        type: BooleanConstructor;
    };
    buttonSecondaryBusy: {
        default: boolean;
        type: BooleanConstructor;
    };
    buttonSecondaryLabel: {
        default: any;
        type: StringConstructor;
    };
    buttonSecondaryIsCancel: {
        default: boolean;
        type: BooleanConstructor;
    };
    buttonPrimaryIsDestructive: {
        default: boolean;
        type: BooleanConstructor;
    };
    disableClosing: {
        default: boolean;
        type: BooleanConstructor;
    };
    kind: {
        default: string;
        type: StringConstructor;
    };
    escEnabled: {
        default: boolean;
        type: BooleanConstructor;
    };
    buttonCloseLabel: {
        default: string;
        type: StringConstructor;
    };
}>> & Readonly<{
    onClosed?: (...args: any[]) => any;
    onPrimaryAction?: (...args: any[]) => any;
    onSecondaryAction?: (...args: any[]) => any;
}>, {
    label: string;
    size: string;
    id: string;
    kind: string;
    buttonPrimaryVisible: boolean;
    buttonPrimaryLoading: boolean;
    buttonPrimaryBusy: boolean;
    buttonPrimaryLabel: string;
    buttonPrimaryDisabled: boolean;
    buttonSecondaryVisible: boolean;
    buttonSecondaryLoading: boolean;
    buttonSecondaryBusy: boolean;
    buttonSecondaryLabel: string;
    buttonSecondaryIsCancel: boolean;
    buttonPrimaryIsDestructive: boolean;
    disableClosing: boolean;
    escEnabled: boolean;
    buttonCloseLabel: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
