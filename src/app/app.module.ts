import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Inject } from '@angular/core';
import { Http ,Headers } from '@angular/http';

import { AppComponent } from './app.component';
import { MovieAppComponent } from './movie-app/movie-app.component';
import { GameAppComponent } from './game-app/game-app.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieAppComponent,
    GameAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
