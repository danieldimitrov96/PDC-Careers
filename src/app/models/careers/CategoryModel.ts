import { JobModel } from './JobModel';

export class CategoryModel {
    public id: string;
    public type: string;
    public job: JobModel[];
}
