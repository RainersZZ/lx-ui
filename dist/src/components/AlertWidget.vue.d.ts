import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: DefineComponent<ExtractPropTypes<{
    alerts: {
        type: ArrayConstructor;
        default: () => any[];
    };
    nextAlertTitle: {
        type: StringConstructor;
        default: string;
    };
    previousAlertTitle: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<{
    alerts: {
        type: ArrayConstructor;
        default: () => any[];
    };
    nextAlertTitle: {
        type: StringConstructor;
        default: string;
    };
    previousAlertTitle: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    alerts: unknown[];
    nextAlertTitle: string;
    previousAlertTitle: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
