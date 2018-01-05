import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { clientTypePipe, clientRankPipe, clientNeedPipe, clientSourePipe, clientStatusPipe, timePipe, privateClientStatusSort, privateClientStatus } from './clientTypeTransfrom';
@NgModule({
  declarations: [
    clientTypePipe,
    clientRankPipe,
    clientNeedPipe,
    clientSourePipe,
    clientStatusPipe,
    timePipe,
    privateClientStatusSort,
    privateClientStatus
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
    privateClientStatusSort,
    privateClientStatus
  ]
})
export class PipesModule { }
