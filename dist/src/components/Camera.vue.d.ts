import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: DefineComponent<{}, {
    $emit: (event: "update:modelValue", ...args: any[]) => void;
    texts: Record<string, any>;
    id: string;
    cameraSwitcherMode: string;
    hasFlashlightToggle: boolean;
    imageSize: string;
    preferencesId: string;
    modelValue?: string;
    labelId?: string;
    $props: {
        readonly texts?: Record<string, any>;
        readonly id?: string;
        readonly cameraSwitcherMode?: string;
        readonly hasFlashlightToggle?: boolean;
        readonly imageSize?: string;
        readonly preferencesId?: string;
        readonly modelValue?: string;
        readonly labelId?: string;
    };
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
