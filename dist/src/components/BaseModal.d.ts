declare namespace _default {
    namespace props {
        let card: BooleanConstructor;
        let visible: BooleanConstructor;
        let closable: BooleanConstructor;
        namespace transition {
            export let type: StringConstructor;
            let _default: string;
            export { _default as default };
        }
    }
    function data(): {
        show: any;
    };
    function mounted(): void;
    namespace methods {
        function beforeEnter(): void;
        function afterEnter(): void;
        function beforeLeave(): void;
        function afterLeave(): void;
        function active(): void;
        function deactive(): void;
    }
    namespace computed {
        function enterClass(): string;
        function leaveClass(): string;
    }
    namespace watch {
        function visible(val: any): void;
    }
}
export default _default;
