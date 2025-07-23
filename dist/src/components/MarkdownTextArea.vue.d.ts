import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare function repleaceImageLoader(src: any, id: any, alt: any, title: any): void;
declare function removeImageLoader(id: any): void;
declare function removeAllImageLoaders(): void;
declare const _default: DefineComponent<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    modelValue: {
        type: StringConstructor;
        default: any;
    };
    placeholder: {
        type: StringConstructor;
        default: any;
    };
    rows: {
        type: NumberConstructor;
        default: number;
    };
    maxlength: {
        type: NumberConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    showColorPicker: {
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
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    showLinkEditor: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltip: {
        type: StringConstructor;
        default: any;
    };
    showPlaceholderPicker: {
        type: BooleanConstructor;
        default: boolean;
    };
    showImagePicker: {
        type: BooleanConstructor;
        default: boolean;
    };
    showUnderlineToggle: {
        type: BooleanConstructor;
        default: boolean;
    };
    showHeadingPicker: {
        type: BooleanConstructor;
        default: boolean;
    };
    imageMaxSize: {
        type: NumberConstructor;
        default: number;
    };
    dictionary: {
        type: ObjectConstructor;
        default: any;
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
    removeImageLoader: typeof removeImageLoader;
    removeAllImageLoaders: typeof removeAllImageLoaders;
    repleaceImageLoader: typeof repleaceImageLoader;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    notification: (...args: any[]) => void;
    preparedImage: (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    modelValue: {
        type: StringConstructor;
        default: any;
    };
    placeholder: {
        type: StringConstructor;
        default: any;
    };
    rows: {
        type: NumberConstructor;
        default: number;
    };
    maxlength: {
        type: NumberConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    showColorPicker: {
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
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    showLinkEditor: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltip: {
        type: StringConstructor;
        default: any;
    };
    showPlaceholderPicker: {
        type: BooleanConstructor;
        default: boolean;
    };
    showImagePicker: {
        type: BooleanConstructor;
        default: boolean;
    };
    showUnderlineToggle: {
        type: BooleanConstructor;
        default: boolean;
    };
    showHeadingPicker: {
        type: BooleanConstructor;
        default: boolean;
    };
    imageMaxSize: {
        type: NumberConstructor;
        default: number;
    };
    dictionary: {
        type: ObjectConstructor;
        default: any;
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
    onNotification?: (...args: any[]) => any;
    onPreparedImage?: (...args: any[]) => any;
}>, {
    invalid: boolean;
    texts: Record<string, any>;
    disabled: boolean;
    id: string;
    modelValue: string;
    tooltip: string;
    dictionary: Record<string, any>;
    labelId: string;
    placeholder: string;
    readOnly: boolean;
    invalidationMessage: string;
    maxlength: number;
    rows: number;
    showColorPicker: boolean;
    showLinkEditor: boolean;
    showPlaceholderPicker: boolean;
    showImagePicker: boolean;
    showUnderlineToggle: boolean;
    showHeadingPicker: boolean;
    imageMaxSize: number;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
