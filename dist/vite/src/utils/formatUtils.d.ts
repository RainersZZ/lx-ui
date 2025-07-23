export function formatValueDefault(value: any): any;
export function formatValueDate(value: any): string;
export function formatPersonCode(value: any, country?: string): any;
export function formatValueDateTime(value: any): string;
export function formatValueArray(value: any): any;
export function formatValueBool(value: any, texts?: {
    yes: string;
    no: string;
}): string;
export function formatUrl(value: any): string;
export function formatValue(value: any, type?: string, texts?: {
    yes: string;
    no: string;
}): any;
export function formatFieldName(name: any): any;
export function objectClone(value: any): any;
export function shortenValue(value: any, maxChars?: number, type?: any): any;
export function formatAddress(address: Address, includeAtvk?: boolean): string;
export function formatDecimal(value: any, precision?: number): any;
export function formatCountryCode(value: any, language?: string, notExistsValue?: any): any;
export type Address = {
    country?: string;
    county?: string;
    city?: string;
    postalCode?: string;
    streetName?: string;
    buildingNumber?: string;
    buildingNumberNumeric?: string;
    buildingNumberSuffix?: string;
    unitId?: string;
    streetAddressLine?: string;
    atvkCode?: string;
    atvkName1?: string;
    atvkName2?: string;
    atvkName3?: string;
    atvkName4?: string;
};
