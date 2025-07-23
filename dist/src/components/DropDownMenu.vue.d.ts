import { DefineComponent, Ref, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: __VLS_WithTemplateSlots<DefineComponent<{}, {
    closeMenu: typeof closeMenu;
    openMenu: typeof openMenu;
    preventClose: typeof preventClose;
    menuOpen: Ref<boolean, boolean>;
    $emit: (event: "actionClick", ...args: any[]) => void;
    customClass: string;
    disabled: boolean;
    placement: string;
    triggerClick: string;
    actionDefinitions: unknown[];
    offsetSkid?: string;
    $props: {
        readonly customClass?: string;
        readonly disabled?: boolean;
        readonly placement?: string;
        readonly triggerClick?: string;
        readonly actionDefinitions?: unknown[];
        readonly offsetSkid?: string;
    };
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
    clickSafePanel?(_: {}): any;
    panel?(_: {}): any;
}>;
export default _default;
declare function closeMenu(): void;
declare function openMenu(): void;
declare function preventClose(event: any): void;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
