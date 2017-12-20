import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonSetingNamePage } from './person-seting-name';

@NgModule({
  declarations: [
    PersonSetingNamePage,
  ],
  imports: [
    IonicPageModule.forChild(PersonSetingNamePage),
  ],
})
export class PersonSetingNamePageModule {}
