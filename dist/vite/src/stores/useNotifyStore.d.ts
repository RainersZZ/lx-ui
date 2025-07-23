declare namespace _default {
    function state(): {
        notifications: any[];
    };
    namespace actions {
        function push(type: any, title: any, subtitle: any, autoCloseSeconds: any): void;
        function pushSuccess(title: any, subtitle?: any, autoCloseSeconds?: number): void;
        function pushError(title: any, subtitle?: any, autoCloseSeconds?: number): void;
        function pushWarning(title: any, subtitle?: any, autoCloseSeconds?: number): void;
        function pushInfo(title: any, subtitle?: any, autoCloseSeconds?: number): void;
    }
}
export default _default;
