export interface IJobModelAdmin {
     id: string;
     title: string;
     description: string;
     category: string;
     createdAt: number;
     usersApplied: IAppliedUsers[];
}

export interface IAppliedUsers {
    _id: string;
    user: string;
    application: string;

}
