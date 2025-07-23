import { AxiosResponse } from 'axios';
declare function _default(authUrl: any, publicUrl: any, clientId: any, scope: any, authSessionKey: any): {
    authorize(authType?: any, authClientId?: any): void;
    session(): Promise<AxiosResponse<any, any>>;
    keepAlive(): Promise<AxiosResponse<any, any>>;
    roles(): Promise<AxiosResponse<any, any>>;
    setRole(roleCode: any): Promise<AxiosResponse<any, any>>;
    modules(): Promise<AxiosResponse<any, any>>;
    status(): Promise<AxiosResponse<any, any>>;
    logout(): Promise<AxiosResponse<any, any>>;
    getSessionKey(oneTimeToken: any): Promise<AxiosResponse<any, any>>;
};
export default _default;
