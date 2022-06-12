export interface GetAssetResponseType {
    collection: Collection;
}

export interface Collection {
    version: string;
    href:    string;
    items:   Item[];
}

export interface Item {
    href: string;
}
