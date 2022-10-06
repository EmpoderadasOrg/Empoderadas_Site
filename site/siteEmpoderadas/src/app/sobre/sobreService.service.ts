import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Artistas } from '../models/Artistas';
import { Categorias } from '../models/Categorias';
import { Termos } from '../models/Termos';
@Injectable({
  providedIn: 'root'
})
export class SobreService {

constructor(private Http : HttpClient) { }

getArtistas(): Observable<Artistas[]>{
  return this.Http.get<Artistas[]>('https://empoderadas.softadworks.com/admin/Api/GetUsuarios');
}


getCategorias(): Observable<Categorias[]>{
  return this.Http.get<Categorias[]>('https://empoderadas.softadworks.com/admin/Api/GetCategorias');
}

getSobre(): Observable<Termos>{
    return this.Http.get<Termos>('https://empoderadas.softadworks.com/admin/Api/GetSobre');
}

}