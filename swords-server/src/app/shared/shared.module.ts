import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    MessageComponent
  ]
})
export class SharedModule { }
