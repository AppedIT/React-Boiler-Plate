export type Law = {
    id: number,
    parentLawId: number | null,
    text: string,
    book: string,
    chapter: number,
    startVerse: number,
    endVerse: number,
    tags: Array<Tag>,
    relatedLaws: Array<RelatedLaw>
}

export interface Tag {
    id: number;
    name: string;
    description: string;
}

export interface Book {
    id: number;
    name: string;
    numberOfChapters: number;
}

export interface RelatedLaw {
    note: string;
    lawLeftID: number;
    lawRightID: number;
}

export interface BookDropDownOptions extends Array<{
    value: string;
    label: string;
}> { };

export interface NumberDropDownOptions extends Array<{
    value: number;
    label: number;
}> { };

export interface TagDropDownOptions extends Array<{
    value: Tag;
    label: string;
}> { };

export interface RelatedLawsDropDownOptions extends Array<{
    value: number;
    label: string;
}> { };