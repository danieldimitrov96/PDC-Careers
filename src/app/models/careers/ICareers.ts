export interface ICareers {
    allJobsAscending: {
        id: string;
        title: string;
        description: string;
        createdAt: Date;
    }[];
    allCategories: {
        id: string;
        type: string;
    }[];
}
