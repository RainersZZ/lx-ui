export function getFileExtension(name: any): any;
export function acceptedMimeImage(name: any): boolean;
export function acceptedMimeArchive(name: any): boolean;
export function acceptedMimeOffice(name: any): boolean;
export function acceptedESignedDocument(name: any): boolean;
export function checkExtension(extension: any, allowedExtensions: any): any;
export function convertBytesToFormattedString(bytes: any): string;
export function extractC2paMetadata(arrayBuffer: any, fileType: any): Promise<{
    signatureId: string;
    isAIGenerated: boolean;
    signerInfo: {
        eSignType: string;
        nameAndSurname: string;
        eSignIssuer: string;
        eSignDate: string;
    };
}>;
export function getMeta(file: any, texts: any): Promise<any>;
export function getContent(file: any): Promise<any>;
export function getExtraParameter(meta: any, texts: any): any;
export function provideDefaultIcon(advancedFile: any): "file-rich-text" | "file-spreadsheet" | "file-archive" | "file-image" | "file-slides" | "file-edoc" | "file-pdf" | "file";
export function getDetails(advancedFile: any, base64String: any, texts: any, additionalIconAndType: any): {
    format: {
        label: any;
        value: any;
    };
    size: {
        label: any;
        value: string;
    };
    lastChanges: {
        label: any;
        value: string;
    };
} | {
    preview: any;
    mainData: {
        author: {
            label: any;
            value: any;
        };
        format: {
            label: any;
            value: any;
        };
        size: {
            label: any;
            value: string;
        };
        resolution: {
            label: any;
            value: string;
        };
        creationDate: {
            label: any;
            value: string;
        };
        lastChanges: {
            label: any;
            value: string;
        };
        additionalIconAndType: any;
    } | {
        author: {
            label: any;
            value: any;
        };
        format: {
            label: any;
            value: any;
        };
        size: {
            label: any;
            value: string;
        };
        creationDate: {
            label: any;
            value: string;
        };
        lastChanges: {
            label: any;
            value: string;
        };
        title: {
            label: any;
            value: any;
        };
        description: {
            label: any;
            value: any;
        };
    } | {
        author: {
            label: any;
            value: any;
        };
        format: {
            label: any;
            value: any;
        };
        size: {
            label: any;
            value: string;
        };
        creationDate: {
            label: any;
            value: string;
        };
        lastChanges: {
            label: any;
            value: string;
        };
        title: {
            label: any;
            value: any;
        };
        description: {
            label: any;
            value: any;
        };
    } | {
        format: {
            label: any;
            value: any;
        };
        size: {
            label: any;
            value: string;
        };
        lastChanges: {
            label: any;
            value: string;
        };
    };
    edocContentData: any;
    imageData: {
        width: {
            label: any;
            value: any;
        };
        height: {
            label: any;
            value: any;
        };
        XResolution: {
            label: any;
            value: any;
        };
        YResolution: {
            label: any;
            value: any;
        };
        cameraBrand: {
            label: any;
            value: any;
        };
        model: {
            label: any;
            value: any;
        };
        focus: {
            label: any;
            value: any;
        };
        FStop: {
            label: any;
            value: any;
        };
        exposure: {
            label: any;
            value: any;
        };
        ISO: {
            label: any;
            value: any;
        };
        exposureBias: {
            label: any;
            value: any;
        };
        flash: {
            label: any;
            value: any;
        };
        colorSpace: {
            label: any;
            value: any;
        };
        dateTime: {
            label: any;
            value: any;
        };
        copyright: {
            label: any;
            value: any;
        };
    };
    locationData: {
        lat: {
            label: any;
            value: any;
        };
        long: {
            label: any;
            value: any;
        };
    };
    additionalData: {};
    archiveContentData: any;
};
