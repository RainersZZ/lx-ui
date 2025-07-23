import { Plugin } from 'vite';
/**
 * @typedef {Object} PortalVersionOptions
 * @property {string} [outDir] - Custom output directory for version.json (defaults to vite build.outDir with fallback 'dist')
 */
/**
 * Creates a Vite plugin for version.json generation for both development and production
 * @param {PortalVersionOptions} [options] - Plugin options
 * @returns {import('vite').Plugin}
 */
export function lxVitePortalVersionPlugin(options?: PortalVersionOptions): Plugin;
export type PortalVersionOptions = {
    /**
     * - Custom output directory for version.json (defaults to vite build.outDir with fallback 'dist')
     */
    outDir?: string;
};
