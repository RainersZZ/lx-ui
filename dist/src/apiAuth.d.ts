import { AxiosError, AxiosInstance } from 'axios';
/**
 * Clear the session storage and reload the page on unauthorized responses
 * @param {import('axios').AxiosError} error
 */
export function unauthorizedInterceptor(error: AxiosError): Promise<never>;
declare function _default(authUrl: string, sessionKey: string, options?: {
    allowAnonymous?: boolean;
}): AxiosInstance | {
    get: typeof unauthorizedResp;
    post: typeof unauthorizedResp;
    put: typeof unauthorizedResp;
    patch: typeof unauthorizedResp;
    delete: typeof unauthorizedResp;
};
export default _default;
declare function unauthorizedResp(): Promise<never>;
