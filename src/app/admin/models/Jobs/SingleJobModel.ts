import { UsersAppliedModel } from './UsersAppliedModel';

export class SingleJobModel {
    public id: string;
    public title: string;
    public description?: string;
    public category?: string;
    public status: string;
    public createdAt: number;
    public usersApplied?: UsersAppliedModel[];
}
