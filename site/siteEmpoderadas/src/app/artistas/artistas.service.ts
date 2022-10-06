import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artistas } from '../models/Artistas';
import { Produtos } from '../models/produtos';
import { Categorias} from '../models/Categorias';

@Injectable({
  providedIn: 'root'
})
export class ArtistasService {

  constructor(private Http : HttpClient) { }

  getProdutosByUser(id :any): Observable<Produtos[]>{
    return this.Http.get<Produtos[]>('https://empoderadas.softadworks.com/admin/Api/GetProdutosByUser/'+ id);
  }

  getArtistasById(id : any): Observable<Artistas>{
    return this.Http.get<Artistas>('https://empoderadas.softadworks.com/admin/Api/GetUsuarioById/'+ id);
  }

  getArtistas(): Observable<Artistas[]>{
    return this.Http.get<Artistas[]>('https://empoderadas.softadworks.com/admin/Api/GetUsuarios');
  }
  
  
  getCategorias(): Observable<Categorias[]>{
    return this.Http.get<Categorias[]>('https://empoderadas.softadworks.com/admin/Api/GetCategorias');
  }
}
