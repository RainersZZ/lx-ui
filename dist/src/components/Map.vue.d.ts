import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: __VLS_WithTemplateSlots<DefineComponent<{}, {
    $emit: (event: "searched" | "update:zoom" | "update:center" | "update:selected-base-layer" | "update:selected-overlay-layers", ...args: any[]) => void;
    center: Record<string, any>;
    texts: Record<string, any>;
    id: string;
    showToolbar: boolean;
    baseLayerDefinitions: unknown[];
    selectedBaseLayer: string;
    overlayLayerDefinitions: unknown[];
    selectedOverlayLayers: unknown[];
    zoom: number;
    objectDefinitions: unknown[];
    showSearch: boolean;
    ignoreThemeChange: boolean;
    hasUserLocation: boolean;
    $props: {
        readonly center?: Record<string, any>;
        readonly texts?: Record<string, any>;
        readonly id?: string;
        readonly showToolbar?: boolean;
        readonly baseLayerDefinitions?: unknown[];
        readonly selectedBaseLayer?: string;
        readonly overlayLayerDefinitions?: unknown[];
        readonly selectedOverlayLayers?: unknown[];
        readonly zoom?: number;
        readonly objectDefinitions?: unknown[];
        readonly showSearch?: boolean;
        readonly ignoreThemeChange?: boolean;
        readonly hasUserLocation?: boolean;
    };
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    toolbar?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
