import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { AppliComponent } from './home/appli/appli.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    WorkComponent,
    AppliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
