import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: DefineComponent<{}, {
    $emit: (event: "goBack", ...args: any[]) => void;
    texts: Record<string, any>;
    showBackButton: boolean;
    breadcrumbs: unknown[];
    hideHeaderText: boolean;
    label?: string;
    description?: string;
    backLabel?: string;
    backPath?: string | Record<string, any>;
    $props: {
        readonly texts?: Record<string, any>;
        readonly showBackButton?: boolean;
        readonly breadcrumbs?: unknown[];
        readonly hideHeaderText?: boolean;
        readonly label?: string;
        readonly description?: string;
        readonly backLabel?: string;
        readonly backPath?: string | Record<string, any>;
    };
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
