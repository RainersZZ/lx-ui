import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare function changeState(e: any): void;
declare function getFiles(): any[];
declare const _default: DefineComponent<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    modelValue: {
        type: ArrayConstructor;
        default: any;
    };
    kind: {
        type: StringConstructor;
        default: string;
    };
    mode: {
        type: StringConstructor;
        default: string;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    dataType: {
        type: StringConstructor;
        default: string;
    };
    hasSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    busy: {
        type: BooleanConstructor;
        default: boolean;
    };
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowedFileExtensions: {
        type: ArrayConstructor;
        default: () => any[];
    };
    maxFileSize: {
        type: NumberConstructor;
        default: number;
    };
    hasDownloadButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    showMeta: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxSizeForMeta: {
        type: NumberConstructor;
        default: number;
    };
    hasCamera: {
        type: BooleanConstructor;
        default: boolean;
    };
    cameraSwitcherMode: {
        type: StringConstructor;
        default: string;
    };
    hasFlashlightToggle: {
        type: BooleanConstructor;
        default: boolean;
    };
    imageSize: {
        type: StringConstructor;
        default: string;
    };
    preferencesId: {
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
    changeState: typeof changeState;
    getFiles: typeof getFiles;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    onError: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    downloadFile: (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    modelValue: {
        type: ArrayConstructor;
        default: any;
    };
    kind: {
        type: StringConstructor;
        default: string;
    };
    mode: {
        type: StringConstructor;
        default: string;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    dataType: {
        type: StringConstructor;
        default: string;
    };
    hasSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    busy: {
        type: BooleanConstructor;
        default: boolean;
    };
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowedFileExtensions: {
        type: ArrayConstructor;
        default: () => any[];
    };
    maxFileSize: {
        type: NumberConstructor;
        default: number;
    };
    hasDownloadButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    showMeta: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxSizeForMeta: {
        type: NumberConstructor;
        default: number;
    };
    hasCamera: {
        type: BooleanConstructor;
        default: boolean;
    };
    cameraSwitcherMode: {
        type: StringConstructor;
        default: string;
    };
    hasFlashlightToggle: {
        type: BooleanConstructor;
        default: boolean;
    };
    imageSize: {
        type: StringConstructor;
        default: string;
    };
    preferencesId: {
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
    onOnError?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onDownloadFile?: (...args: any[]) => any;
}>, {
    texts: Record<string, any>;
    disabled: boolean;
    mode: string;
    id: string;
    loading: boolean;
    modelValue: unknown[];
    kind: string;
    busy: boolean;
    labelId: string;
    readOnly: boolean;
    hasSearch: boolean;
    draggable: boolean;
    cameraSwitcherMode: string;
    hasFlashlightToggle: boolean;
    imageSize: string;
    preferencesId: string;
    hasDownloadButton: boolean;
    showMeta: boolean;
    dataType: string;
    allowedFileExtensions: unknown[];
    maxFileSize: number;
    maxSizeForMeta: number;
    hasCamera: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
