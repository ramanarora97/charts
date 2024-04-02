import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SystemStatsComponent } from './system-stats/system-stats.component';
import { CompleteSystemComponent } from './complete-system/complete-system.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActComponent } from './act/act.component';
import { AspComponent } from './asp/asp.component';
import { DafComponent } from './daf/daf.component';
import { TanksComponent } from './tanks/tanks.component';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    SystemStatsComponent,
    CompleteSystemComponent,
    TanksComponent,
    DafComponent,
    AspComponent,
    ActComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ModalModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts' as 'echarts')
  })

  ],
  exports:[
    SystemStatsComponent,
    CompleteSystemComponent,
    TanksComponent,
    DafComponent,
    AspComponent,
    ActComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [BsModalService]

})
export class DashboardModule { }
