import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewvotePage } from './newvote';

@NgModule({
  declarations: [
    NewvotePage,
  ],
  imports: [
    IonicPageModule.forChild(NewvotePage),
  ],
})
export class NewvotePageModule {}
