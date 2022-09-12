import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produtos } from '../models/produtos';
@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

constructor(private Http : HttpClient) { }

getProdutos(): Observable<Produtos[]>{
  return this.Http.get<Produtos[]>('http://henriqu3-001-site1.itempurl.com/Api/GetProdutos');
}

}
