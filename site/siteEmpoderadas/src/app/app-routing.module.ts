import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistasComponent } from './artistas/artistas.component';
import { HomeComponent } from './home/home.component';
import { PecasComponent } from './pecas/pecas.component';

const routes: Routes = [
  {path: 'pecas', component: PecasComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'artistas', component: ArtistasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
