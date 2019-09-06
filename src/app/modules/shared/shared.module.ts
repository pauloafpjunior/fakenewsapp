import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeAgoStringPipe } from 'src/app/pipes/time-ago-string.pipe';
import { LikesToStringPipe } from 'src/app/pipes/likes-to-string.pipe';



@NgModule({
  declarations: [TimeAgoStringPipe, LikesToStringPipe],
  imports: [
    CommonModule
  ],
  exports: [TimeAgoStringPipe, LikesToStringPipe]
})
export class SharedModule { }
