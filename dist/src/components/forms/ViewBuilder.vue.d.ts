import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: DefineComponent<{}, {
    validateModel: typeof validateModel;
    clearValidations: typeof clearValidations;
    $emit: (event: "emit" | "update:modelValue" | "rowActionClick", ...args: any[]) => void;
    $props: {
        readonly [x: string]: any;
    };
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
/**
 * Validates the model based on the provided rules in schema prop.
 *
 * @return {Array} An array of validation errors, if any.
 */
declare function validateModel(): any[];
declare function clearValidations(): void;
