import {NgxMatTimepickerModule} from 'ngx-mat-timepicker';  
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgToggleModule } from 'ng-toggle-button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResourceComponent } from './resource/resource.component';
import { ResourceTimeComponent } from './resource-time/resource-time.component';
import { TranslateModule , TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule , HttpClient} from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


@NgModule({
  declarations: [
    AppComponent,
    ResourceComponent,
    ResourceTimeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    NgToggleModule,
    NgxMatTimepickerModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}