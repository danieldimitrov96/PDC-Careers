export interface IApplicationData {
    context: IApplication[];
    title: string;
}

export interface IApplication {
    firstName: string;
    lastName: string;
    comment: string;
    CV: string;
    CoverLetter: string;
    createdAt: string;
    _id: string;
}
