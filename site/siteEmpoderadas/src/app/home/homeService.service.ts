import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produtos } from '../models/produtos';
import { Artistas } from '../models/Artistas';
import { Categorias } from '../models/Categorias';
@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

constructor(private Http : HttpClient) { }

getProdutos(): Observable<Produtos[]>{
  return this.Http.get<Produtos[]>('http://empoderadas.softadworks.com/admin/Api/GetProdutos');
}

getArtistas(): Observable<Artistas[]>{
  return this.Http.get<Artistas[]>('http://empoderadas.softadworks.com/admin/Api/GetUsuarios');
}


getCategorias(): Observable<Categorias[]>{
  return this.Http.get<Categorias[]>('http://empoderadas.softadworks.com/admin/Api/GetCategorias');
}

}
