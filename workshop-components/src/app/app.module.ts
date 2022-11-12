import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ThemeComponent } from './theme/theme.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent
  ],
  imports: [
    BrowserModule,
    CoreModule//poneje httpclientmodule e vlu4en v coremodule, di conseguenza potremo usare v app componenta http
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
