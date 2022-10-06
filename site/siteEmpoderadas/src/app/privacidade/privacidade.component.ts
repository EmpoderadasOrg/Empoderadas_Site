import { Component, OnInit } from '@angular/core';
import { Artistas } from '../models/Artistas';
import { Categorias } from '../models/Categorias';
import { Termos } from '../models/Termos';
import { PrivacidadeService } from './privacidadeService.service';

@Component({
  selector: 'app-privacidade',
  templateUrl: './privacidade.component.html',
  styleUrls: ['./privacidade.component.css']
})
export class PrivacidadeComponent implements OnInit {

  constructor(private service : PrivacidadeService) { }

  public categorias : Categorias[];
  public artistas : Artistas[];
  public sobre : Termos;
  ngOnInit() {
    this.carregarPrivacidade();
    this.carregarArtistas();
    this.carregarCategorias();
  }


  carregarArtistas(){
    this.service.getArtistas().subscribe(
      (artistas : Artistas[])=> {
        this.artistas = artistas;
        console.log(this.artistas);
      },
      (erro: any) =>{
        console.error(erro);
      }
    )
  };


  carregarCategorias(){
    this.service.getCategorias().subscribe(
      (categorias : Categorias[])=> {
        this.categorias = categorias;
        console.log(this.categorias);
      },
      (erro: any) =>{
        console.error(erro);
      }
    )
  };

  carregarPrivacidade(){
    this.service.getPrivacidade().subscribe(
      (termo : Termos)=> {
        this.sobre = termo;
        console.log(this.sobre);
      },
      (erro: any) =>{
        console.error(erro);
      }
    )
  };
}
