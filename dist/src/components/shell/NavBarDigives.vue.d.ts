import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: DefineComponent<{}, {
    $emit: (event: "log-out" | "update:selected-context-person" | "nav-toggle" | "contextPersonChanged" | "alternativeProfileChanged" | "update:selected-alternative-profile" | "navClick", ...args: any[]) => void;
    texts: Record<string, any>;
    headerNavDisable: boolean;
    navBarSwitch: boolean;
    selectedNavItems: Record<string, any>;
    headerNavReadOnly: boolean;
    userInfo?: Record<string, any>;
    alternativeProfilesInfo?: unknown[];
    contextPersonsInfo?: unknown[];
    selectedContextPerson?: Record<string, any>;
    navItems?: unknown[];
    selectedAlternativeProfile?: Record<string, any>;
    $props: {
        readonly texts?: Record<string, any>;
        readonly headerNavDisable?: boolean;
        readonly navBarSwitch?: boolean;
        readonly selectedNavItems?: Record<string, any>;
        readonly headerNavReadOnly?: boolean;
        readonly userInfo?: Record<string, any>;
        readonly alternativeProfilesInfo?: unknown[];
        readonly contextPersonsInfo?: unknown[];
        readonly selectedContextPerson?: Record<string, any>;
        readonly navItems?: unknown[];
        readonly selectedAlternativeProfile?: Record<string, any>;
    };
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
