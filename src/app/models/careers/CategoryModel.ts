import { JobModel } from './JobModel';

export class CategoryModel {
    public _id: string;
    public type: string;
    public job: JobModel[];
}
