import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersViewComponent } from './characters-view/characters-view.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    CharactersViewComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CharactersViewComponent
  ]
})
export class CharactersModule { }
