import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistasComponent } from './artistas/artistas.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { HomeComponent } from './home/home.component';
import { PecasComponent } from './pecas/pecas.component';
import { PrivacidadeComponent } from './privacidade/privacidade.component';
import { SobreComponent } from './sobre/sobre.component';
import { TermosComponent } from './termos/termos.component';

const routes: Routes = [
  {path: 'pecas', component: PecasComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'artistas/:id', component: ArtistasComponent},
  {path: 'categoria/:id', component: CategoriaComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'privacidade', component: PrivacidadeComponent},
  {path: 'termos', component: TermosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
