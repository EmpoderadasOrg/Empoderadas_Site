import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorias } from '../models/Categorias';
import { Produtos } from '../models/produtos';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

constructor(private Http : HttpClient) { }

getProdutos(id : any): Observable<Produtos[]>{
  return this.Http.get<Produtos[]>('http://empoderadas.softadworks.com/admin/Api/GetProdutosByCategoria/'+id);
}

}
