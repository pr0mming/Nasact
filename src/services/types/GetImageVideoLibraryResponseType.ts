export interface GetImageVideoLibraryResponseType {
    collection: Collection;
}

export interface Collection {
    version:  string;
    href:     string;
    items:    Item[];
    metadata: Metadata;
    links:    CollectionLink[];
}

export interface Item {
    href:   string;
    data:   Datum[];
    links?: ItemLink[];
}

export interface Datum {
    description?:       string;
    title:              string;
    nasa_id:            string;
    date_created:       Date;
    keywords?:          string[];
    media_type:         string;
    description_508?:   string;
    center:             string;
    photographer?:      string;
    location?:          string;
    album?:             string[];
    secondary_creator?: string;
}

export interface ItemLink {
    href:    string;
    rel:     string;
    render?: string;
}

export interface CollectionLink {
    rel:    string;
    prompt: string;
    href:   string;
}

export interface Metadata {
    total_hits: number;
}
