declare namespace _default {
    function state(): {
        error: any;
        showError: boolean;
        isNavigating: boolean;
    };
    namespace actions {
        function setError(err: any): void;
        function startNavigating(): void;
        function stopNavigating(): void;
    }
}
export default _default;
