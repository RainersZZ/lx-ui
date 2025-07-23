declare namespace _default {
    function state(): {
        header: boolean;
        navBar: boolean;
        goBack: any;
        backName: any;
        description: any;
        blockNav: boolean;
        title: any;
        breadcrumbOverrides: any;
    };
    namespace getters {
        function isHeaderShown(state: any): any;
        function isNavBarShown(state: any): any;
        function pageTitle(state: any): any;
        function canGoBack(state: any): any;
        function backRouteName(state: any): any;
        function pageDescription(state: any): any;
        function getBreadcrumbOverrides(state: any): any;
    }
    namespace actions {
        function showHeader(): void;
        function hideHeader(): void;
        function showNavBar(): void;
        function hideNavBar(): void;
        function showBack(): void;
        function hideBack(): void;
        function blockNavigation(): void;
        function unblockNavigation(): void;
        function setBackRouteName(value: any): void;
        function setPageTitle(value: any): void;
        function setPageDescription(value: any): void;
        function forcePageState(title: any, url?: any): void;
        function overrideBreadcrumbs(code: any, value: any): void;
    }
}
export default _default;
