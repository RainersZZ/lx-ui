import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: DefineComponent<{}, {
    $emit: (event: "emptyStateActionClick", ...args: any[]) => void;
    label: string;
    texts: Record<string, any>;
    icon: string;
    description: string;
    actionDefinitions?: unknown[];
    $props: {
        readonly label?: string;
        readonly texts?: Record<string, any>;
        readonly icon?: string;
        readonly description?: string;
        readonly actionDefinitions?: unknown[];
    };
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
