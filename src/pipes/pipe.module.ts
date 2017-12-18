import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { clientTypePipe, clientRankPipe, clientNeedPipe, clientSourePipe, clientStatusPipe, timePipe } from './clientTypeTransfrom';
@NgModule({
  declarations: [
    clientTypePipe,
    clientRankPipe,
    clientNeedPipe,
    clientSourePipe,
    clientStatusPipe,
    timePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    clientTypePipe,
    clientRankPipe,
    clientNeedPipe,
    clientSourePipe,
    clientStatusPipe,
    timePipe,
  ]
})
export class PipesModule { }
