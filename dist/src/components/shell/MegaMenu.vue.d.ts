import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: DefineComponent<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    items: {
        type: ArrayConstructor;
        default: () => any[];
    };
    hasShowAll: {
        type: BooleanConstructor;
        default: boolean;
    };
    groupDefinitions: {
        type: ArrayConstructor;
        default: any;
    };
    selectedMegaMenuItem: {
        type: StringConstructor;
        default: any;
    };
    buttonVariant: {
        type: StringConstructor;
        default: string;
    };
    texts: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    megaMenuShowAllClick: (...args: any[]) => void;
    "update:selectedMegaMenuItem": (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    items: {
        type: ArrayConstructor;
        default: () => any[];
    };
    hasShowAll: {
        type: BooleanConstructor;
        default: boolean;
    };
    groupDefinitions: {
        type: ArrayConstructor;
        default: any;
    };
    selectedMegaMenuItem: {
        type: StringConstructor;
        default: any;
    };
    buttonVariant: {
        type: StringConstructor;
        default: string;
    };
    texts: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
}>> & Readonly<{
    onMegaMenuShowAllClick?: (...args: any[]) => any;
    "onUpdate:selectedMegaMenuItem"?: (...args: any[]) => any;
}>, {
    texts: Record<string, any>;
    id: string;
    items: unknown[];
    groupDefinitions: unknown[];
    hasShowAll: boolean;
    selectedMegaMenuItem: string;
    buttonVariant: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
