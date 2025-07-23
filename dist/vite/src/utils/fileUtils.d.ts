import { MIME_TYPES } from '../constants';
/**
 * Convert ArrayBuffer to base64 data URL.
 * @description It is useful when you want to use LxFileViewer component to show application/pdf files.
 * @param {ArrayBuffer} buffer - ArrayBuffer, which will be converted to base64.
 * @param {import('../constants').MIME_TYPES} mimeType - MIME type of the data.
 * @returns {Promise<string>} Promise with base64 data URL.
 * @throws {Error} - FileReader error or FileReader did not return a string.
 * @example const base64 = await lxFileUtils.arrayBufferToBase64(buffer, MIME_TYPES.PDF);
 */
export function arrayBufferToBase64(buffer: ArrayBuffer, mimeType: MIME_TYPES): Promise<string>;
