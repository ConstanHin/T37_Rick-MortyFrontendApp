import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CharactersViewComponent } from './characters/characters-view/characters-view.component';
import { HomeComponent } from './home/home.component';
import { HomeCompComponent } from './home-comp/home-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CharactersViewComponent,
    HomeComponent,
    HomeCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      // {path: '/', component: CrisisListComponent},
      {path: 'characters', component: CharactersViewComponent},
      // {path: 'about', component: HeroesListComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
