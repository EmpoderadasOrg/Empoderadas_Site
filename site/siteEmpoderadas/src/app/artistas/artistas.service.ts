import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artistas } from '../models/Artistas';
import { Produtos } from '../models/produtos';

@Injectable({
  providedIn: 'root'
})
export class ArtistasService {

  constructor(private Http : HttpClient) { }

  getProdutosByUser(id :any): Observable<Produtos[]>{
    return this.Http.get<Produtos[]>('http://empoderadas.softadworks.com/admin/Api/GetProdutosByUser/'+ id);
  }

  getArtistasById(id : any): Observable<Artistas>{
    return this.Http.get<Artistas>('http://empoderadas.softadworks.com/admin/Api/GetUsuarioById/'+ id);
  }
}
