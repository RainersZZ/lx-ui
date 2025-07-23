export function parseDate(date: any): Date;
export function formatJSON(date: any): any;
export function isDateValid(date: any): boolean;
export function isTimeValid(value: any): boolean;
export function isSameDate(date1: any, date2: any): boolean;
export function formatDateJSON(date: any): string;
export function formatDate(date: any, empty?: string): string;
export function formatDateTime(date: any, empty?: string): string;
export function formatFull(date: any, empty?: string): string;
export function isLeapYear(year: any): boolean;
export function getMonthNames(localeId?: string): {
    fullName: string;
    shortName: string;
    orderIndex: number;
}[];
export function getWeekdayNames(localeId?: string, firstDayOfTheWeek?: number): {
    fullName: string;
    shortName: string;
    narrowName: string;
    orderIndex: number;
}[];
export function formatLocalizedDate(localeId: any, date: any): any;
export function getMonthYearString(localeId: any, month: any, year: any): string;
export function extractTimeFromDate(localeId: any, dateString: any): string;
export function extractMonthFromDate(localeId: any, dateString: any, capitalize?: boolean): string;
