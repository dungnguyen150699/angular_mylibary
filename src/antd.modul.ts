import { NgModule } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  exports: [
    // NzButtonModule,
    NzFormModule,
    NzLayoutModule,
    NzInputModule
  ]
})
export class NgZorroAntdModule {

}
