import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { HelloWorldComponent } from './hello-world.component';
import { WithCustomElementComponent } from '../element-registry';

@NgModule({
  imports: [ CommonModule, SharedModule, HttpClientModule ],
  declarations: [ HelloWorldComponent ],
  entryComponents: [ HelloWorldComponent ],
})
export class HelloWorldModule implements WithCustomElementComponent {
  customElementComponent: Type<any> = HelloWorldComponent;
}
