import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PecasComponent } from './pecas/pecas.component';
import { HomeComponent } from './home/home.component';
import { ArtistasComponent } from './artistas/artistas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CategoriaComponent } from './categoria/categoria.component';
import { PrivacidadeComponent } from './privacidade/privacidade.component';
import { SobreComponent } from './sobre/sobre.component';
import { TermosComponent } from './termos/termos.component';

@NgModule({
  declarations: [							
    AppComponent,
      PecasComponent,
      HomeComponent,
      ArtistasComponent,
      CategoriaComponent,
      PrivacidadeComponent,
      SobreComponent,
      TermosComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
