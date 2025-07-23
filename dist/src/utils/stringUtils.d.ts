export function generateUUID(): string;
/**
 * Generates an integer hash for a given string value.
 * @param {string} value - The string value to generate hash for.
 * @param {number} [seed=0] - The seed value for the hash calculation.
 * @returns {number} - The generated integer hash.
 */
export function generateIntegerHash(value: string, seed?: number): number;
/**
 * Generates an integer for a given string value within a specified range.
 * @param {string} value - The string value to generate an integer for.
 * @param {number} range - The upper limit of the output value [0 to range - 1].
 * @param {number} [seed=0] - The seed value for integer calculation.
 * @returns {number} - The generated integer.
 */
export function generateIntegerInRange(value: string, range: number, seed?: number): number;
export function isPhone(value: any): boolean;
export function isEmail(value: any): boolean;
export function isUrl(value: any): boolean;
/**
 * Check if a string is a valid file name
 * @param {string} fileName -  file name to check
 * @returns {boolean} - True if the file name is valid, false otherwise
 */
export function isValidFileName(fileName: string): boolean;
export function foldToAscii(v: any): string;
export function safeString(v: any): string;
export function textSearch(query: any, text: any): boolean;
/** Take and join values only if they are not empty */
export function joinValues(arr: any, separator?: string): any;
/** Take substring from string with specified character count and add '…' at the end */
export function cutString(string: any, characterCount: any): string;
/**
 * Truncate first name so that only first letter remains, and concatenate it with last name,
 * e.g., John Doe -> J. Doe
 */
export function shortenUserName(firstName: any, lastName: any): string;
/**
 * Extract the file name using a regular expression
 * @returns {string} the file name or an empty string if it couldn't be extracted
 */
export function getFileNameFromPath(path: any): string;
export function camelToKebab(str: any): any;
/**
 * Remove the part of the string after the last dot
 * @returns {string} part of the string after the last dot
 */
export function removeExtension(fileName: any): string;
/**
 * Capitalize the first letter of provided string
 * @returns {string} string with capitalized first letter
 */
export function capitalizeFirstLetter(string: any): string;
export function kebabToCamel(kebabStr: any): any;
