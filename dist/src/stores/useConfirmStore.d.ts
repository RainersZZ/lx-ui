declare namespace _default {
    function state(): {
        isOpen: boolean;
        confirmDialogState: {};
    };
    namespace actions {
        function push(title: any, message: any, primaryLabel: any, secondaryLabel: any, primaryCallback: any, secondaryCallback: any, escEnabled?: boolean, primaryBusy?: any, secondaryBusy?: any): void;
        function pushSimple(title: any, message: any, primaryCallback: any): void;
        function confirm(callback: any): Promise<void>;
    }
}
export default _default;
