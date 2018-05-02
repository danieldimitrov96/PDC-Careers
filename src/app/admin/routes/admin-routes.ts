import { Routes } from '@angular/router';
import { ButtonsResolver } from '../admin-core/resolvers/buttons.resolver';
import { ContactsAdminResolver } from '../admin-core/resolvers/contacts.resolver';
import {
    AppliedUsersForAJobComponent,
} from '../applied-users-for-a-job/applied-users-for-a-job.component';
import { ButtonsComponent } from '../buttons/buttons.component';
import { ContactsAdminComponent } from '../contacts-admin/contacts-admin.component';
import { CreateEditButtonsComponent } from '../create-edit-buttons/create-edit-buttons.component';
import {
    CreateEditContactsAdminComponent,
} from '../create-edit-contacts-admin/create-edit-contacts-admin.component';
import { CreateEditJobComponent } from '../job-ads/create-edit-job/create-edit-job.component';
import { JobAdsComponent } from '../job-ads/job-ads.component';
import { UsersComponent } from '../users/users.component';

export const ROUTES: Routes = [
    { path: 'buttons', component: ButtonsComponent, resolve: { buttons: ButtonsResolver } },
    { path: 'buttons/createOrEdit', component: CreateEditButtonsComponent, pathMatch: 'full' },
    { path: 'contacts', component: ContactsAdminComponent, resolve: { contacts: ContactsAdminResolver } },
    { path: 'contacts/createOrEdit', component: CreateEditContactsAdminComponent, pathMatch: 'full' },
    { path: 'users', component: UsersComponent },
    { path: 'jobs', component: JobAdsComponent },
    { path: 'jobs/createedit', component: CreateEditJobComponent },
    { path: 'jobs/createedit/:id', component: CreateEditJobComponent },
    { path: 'jobs/:id', component: AppliedUsersForAJobComponent },
];
