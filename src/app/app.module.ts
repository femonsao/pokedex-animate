import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screen/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { PokedexBaseComponent } from './components/pokedex-base/pokedex-base.component';
import { ImgPokemonComponent } from './components/img-pokemon/img-pokemon.component';
import { ActionComponentComponent } from './components/action-component/action-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MenuComponent,
    PokedexBaseComponent,
    ImgPokemonComponent,
    ActionComponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
