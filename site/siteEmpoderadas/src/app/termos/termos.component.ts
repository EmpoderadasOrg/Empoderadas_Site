import { Component, OnInit } from '@angular/core';
import { Artistas } from '../models/Artistas';
import { Categorias } from '../models/Categorias';
import { Termos } from '../models/Termos';
import { TermosService } from './termosService.service';

@Component({
  selector: 'app-termos',
  templateUrl: './termos.component.html',
  styleUrls: ['./termos.component.css']
})
export class TermosComponent implements OnInit {

  constructor(private service : TermosService) { }

  public categorias : Categorias[];
  public artistas : Artistas[];
  public sobre : Termos;
  ngOnInit() {
    this.carregarTermos();
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

  carregarTermos(){
    this.service.getTermos().subscribe(
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
