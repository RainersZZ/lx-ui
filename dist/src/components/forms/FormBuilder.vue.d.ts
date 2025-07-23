import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare function componentSelect(row: any, name: any): "" | "link" | "file" | "button" | "icon" | "checkbox" | "text" | "toggle" | "dropDownMenu" | "camera" | "flag" | "stateDisplay" | "personDisplay" | "textInputDefault" | "textArea" | "dateTimePicker" | "arrayList" | "arrayListModal" | "arrayTable" | "arrayTableModal" | "valuePicker" | "appendableList" | "smallAppendableList" | "map" | "objectList" | "objectButton" | "dataBlock" | "autoComplete" | "fileViewer" | "illustration" | "contentSwitcher" | "markdownTextArea" | "qr" | "qrScanner" | "richTextDisplay" | "steps" | "visualPicker" | "dayInput" | "drawPad" | "logoDisplay" | "numberSlider" | "ratings" | "dataVisualizer" | "lxPlaceholder" | "textInputInteger" | "stack";
/**
 * Validates the model based on the provided rules in schema prop.
 *
 * @return {Array} An array of validation errors, if any.
 */
declare function validateModel(): any[];
declare function clearValidations(): void;
declare const _default: DefineComponent<ExtractPropTypes<{
    /**
     * The unique identifier for the form builder component.
     * @type {String}
     * @default generateUUID()
     * @since 1.1.0
     */
    id: {
        type: StringConstructor;
        default: () => string;
    };
    /**
     * The values of the forms input components.
     * @type {Object}
     * @default null
     * @since 1.1.0
     */
    modelValue: {
        type: ObjectConstructor;
        default: any;
    };
    /**
     * Determines rows layout.
     * @type {Object}
     * @default null
     * @since 1.1.0
     */
    schema: {
        type: ObjectConstructor;
        default: any;
    };
    /**
     * Determines whether the form is read-only.
     * @type {boolean}
     * @default false
     * @since 1.1.0
     */
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether the form will be built from modelValue or schema.
     *
     * @type {String}
     * @default 'default'
     * @since 1.1.3
     */
    mode: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determines invalidation messages for the form.
     *
     * @type {Object}
     * @default null
     * @since 1.9.0
     */
    validations: {
        type: ObjectConstructor;
        default: any;
    };
    /**
     * The object containing text translations for the form.
     * @type {Object}
     * @default {}
     * @since 1.1.0
     */
    texts: {
        type: ObjectConstructor;
        default: () => void;
    };
}>, {
    validateModel: typeof validateModel;
    clearValidations: typeof clearValidations;
    componentSelect: typeof componentSelect;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    emit: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    rowActionClick: (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    /**
     * The unique identifier for the form builder component.
     * @type {String}
     * @default generateUUID()
     * @since 1.1.0
     */
    id: {
        type: StringConstructor;
        default: () => string;
    };
    /**
     * The values of the forms input components.
     * @type {Object}
     * @default null
     * @since 1.1.0
     */
    modelValue: {
        type: ObjectConstructor;
        default: any;
    };
    /**
     * Determines rows layout.
     * @type {Object}
     * @default null
     * @since 1.1.0
     */
    schema: {
        type: ObjectConstructor;
        default: any;
    };
    /**
     * Determines whether the form is read-only.
     * @type {boolean}
     * @default false
     * @since 1.1.0
     */
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Determines whether the form will be built from modelValue or schema.
     *
     * @type {String}
     * @default 'default'
     * @since 1.1.3
     */
    mode: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Determines invalidation messages for the form.
     *
     * @type {Object}
     * @default null
     * @since 1.9.0
     */
    validations: {
        type: ObjectConstructor;
        default: any;
    };
    /**
     * The object containing text translations for the form.
     * @type {Object}
     * @default {}
     * @since 1.1.0
     */
    texts: {
        type: ObjectConstructor;
        default: () => void;
    };
}>> & Readonly<{
    onEmit?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onRowActionClick?: (...args: any[]) => any;
}>, {
    texts: Record<string, any>;
    mode: string;
    id: string;
    modelValue: Record<string, any>;
    readOnly: boolean;
    schema: Record<string, any>;
    validations: Record<string, any>;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
