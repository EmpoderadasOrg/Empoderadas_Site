import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorias } from '../models/Categorias';
import { Produtos } from '../models/produtos';
import { Artistas } from '../models/Artistas';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

constructor(private Http : HttpClient) { }

getProdutos(id : any): Observable<Produtos[]>{
  return this.Http.get<Produtos[]>('https://empoderadas.softadworks.com/admin/Api/GetProdutosByCategoria/'+id);
}

getArtistas(): Observable<Artistas[]>{
  return this.Http.get<Artistas[]>('https://empoderadas.softadworks.com/admin/Api/GetUsuarios');
}


getCategorias(): Observable<Categorias[]>{
  return this.Http.get<Categorias[]>('https://empoderadas.softadworks.com/admin/Api/GetCategorias');
}
}
