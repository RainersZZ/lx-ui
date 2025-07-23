import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
/**
 * @param { RouteLocationNormalized } to
 * @param { RouteLocationNormalized } from
 * @param { import('vue-router').NavigationGuardNext} next
 * @param { any } appStore - Pinia LX store
 * @param { any } authStore - Pinia LX store
 * @param {(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => void } [successCallbackFn] - optional callback function to be called after authStore, returns true if navigation should continue
 */
export function beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext, appStore: any, authStore: any, successCallbackFn?: (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => void): Promise<void>;
export function afterEach(to: any, from: any, appStore: any, viewStore: any): Promise<void>;
export function removeFocus(): void;
