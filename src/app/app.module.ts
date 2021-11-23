import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './COMPONENTS/home/home.component';
import { HttpService } from './SERVICES/http.service'
import { HttpClientModule } from '@angular/common/http';
import { FlagEnumPipe } from './PIPES/flag-enum.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlagEnumPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
