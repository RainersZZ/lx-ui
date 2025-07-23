import { UnwrapRef } from 'vue';
import { RemovableRef } from '.pnpm/@vueuse+shared@13.4.0_vue@3.5.17_typescript@5.3.3_/node_modules/@vueuse/shared';
declare function _default(authService: (authUrl: any, publicUrl: any, clientId: any, scope: any, authSessionKey: any) => {
    keepAlive: () => Promise<any>;
    login: () => Promise<any>;
    logout: () => Promise<any>;
    authorize: (authType: string, clientID: string) => Promise<any>;
    setSessionKey: (key: string) => void;
    removeSessionKey: () => void;
    session: () => Promise<any>;
    setRole: (role: string) => Promise<any>;
    hasPermission: (name: string) => boolean;
    hasPermissionRead: (name: string) => boolean;
    hasPermissionWrite: (name: string) => boolean;
    hasPermissionExport: (name: string) => boolean;
    hasPermissionDelete: (name: string) => boolean;
    getSessionKey: (oneTimeToken: string) => Promise<string>;
    modules: () => Promise<any>;
    roles: () => Promise<any>;
}, authUrl: any, publicUrl: any, clientId: any, scope: any, authSessionKey: any, useLocalStorage?: boolean): () => {
    /** @type {typeof initState} */
    session: {
        active: boolean;
        family_name: any;
        given_name: any;
        code: any;
        org_id: any;
        org_name: any;
        sid: any;
        /** @type {SessionState} */
        st: SessionState;
        scope: any[];
        role: any;
        institution: any;
        secondsToLive: any;
        secondsToCountdown: any;
        isSessionExtendable: boolean;
        phone_number: any;
        email: any;
    };
    modules: RemovableRef<any[]>;
    /** @type {typeof Boolean} */
    showSessionEndCountdown: typeof Boolean;
    /** @type {typeof String} */
    fullName: typeof String;
    /** @type {typeof String} */
    roleName: typeof String;
    /** @type {typeof Boolean} */
    isAuthorized: typeof Boolean;
    fetchSession: () => Promise<{
        active: boolean;
        family_name: any;
        given_name: any;
        code: any;
        org_id: any;
        org_name: any;
        sid: any;
        /** @type {SessionState} */
        st: SessionState;
        scope: any[];
        role: any;
        institution: any;
        secondsToLive: any;
        secondsToCountdown: any;
        isSessionExtendable: boolean;
        phone_number: any;
        email: any;
    }>;
    fetchModules: () => Promise<void>;
    keepAlive: () => Promise<void>;
    login: (retPath?: any, authType?: any, clientID?: any) => Promise<any>;
    logout: () => Promise<any>;
    $reset: () => void;
    loadRoles: (force?: boolean) => Promise<void>;
    setRole: (role: any) => Promise<void>;
    setSessionKey: (key: any) => Promise<void>;
    removeSessionKey: () => Promise<void>;
    getSessionKey: (oneTimeToken: any) => Promise<string>;
    hasPermission: (name: any) => boolean;
    hasPermissionRead: (name: any) => boolean;
    hasPermissionWrite: (name: any) => boolean;
    hasPermissionExport: (name: any) => boolean;
    hasPermissionDelete: (name: any) => boolean;
    clearReturnPath: () => Promise<void>;
    getReturnPath: () => Promise<string>;
    /** @type {UnwrapRef<typeof rolesState>} */
    rolesState: {
        roles: any[];
        initialized: boolean;
        loading: boolean;
    };
};
export default _default;
export type SessionState = 'authorized' | 'req_role' | 'req_agreement' | 'none';
