import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrlikesPipe } from 'src/app/pipes/strlikes.pipe';
import {TimeAgoPipe} from 'time-ago-pipe';


@NgModule({
  declarations: [StrlikesPipe, TimeAgoPipe],
  imports: [
    CommonModule
  ],
  exports: [StrlikesPipe, TimeAgoPipe]
})
export class PipesModule { }
