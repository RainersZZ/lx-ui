import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: DefineComponent<{}, {
    $emit: (event: "error" | "update", ...args: any[]) => void;
    texts: Record<string, any>;
    id: string;
    kind: string;
    cameraSwitcherMode: string;
    hasFlashlightToggle: boolean;
    formats: unknown[];
    hasFileUploader: boolean;
    showAlerts: boolean;
    labelId?: string;
    $props: {
        readonly texts?: Record<string, any>;
        readonly id?: string;
        readonly kind?: string;
        readonly cameraSwitcherMode?: string;
        readonly hasFlashlightToggle?: boolean;
        readonly formats?: unknown[];
        readonly hasFileUploader?: boolean;
        readonly showAlerts?: boolean;
        readonly labelId?: string;
    };
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
