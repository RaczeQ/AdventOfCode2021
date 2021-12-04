import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelperModule } from '../helper/helper.module';
import { Day1Service } from './day1.service';
import { ISolutionService } from '../helper/services/isolution.service';

@NgModule({
  id: '2021',
  declarations: [],
  imports: [CommonModule, HelperModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [Day1Service],
      useFactory: (day1Service: ISolutionService) => () => null,
    },
  ],
})
export class Solutions2021Module {}