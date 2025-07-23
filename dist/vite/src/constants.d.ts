/**
 * MIME types used in the application.
 */
export type MIME_TYPES = string;
/**
 * MIME types used in the application.
 * @enum {string}
 */
export const MIME_TYPES: Readonly<{
    PDF: "application/pdf";
    ZIP: "application/zip";
    XML: "application/xml";
    Binary: "application/octet-stream";
    Image: "image/*";
}>;
