import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContactsComponent } from './contacts.component';
import { ContactsRoutingModule } from './contacts.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD9kOt3N8gGOYNE48xsLGocMaIpyKsZC1E',
    }),
  ],
  declarations: [
    ContactsComponent,
  ],
  exports: [
    ContactsComponent,
  ],
})
export class ContactsModule { }
