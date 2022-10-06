import { Component, OnInit } from '@angular/core';
import { Artistas } from '../models/Artistas';
import { Categorias } from '../models/Categorias';
import { Termos } from '../models/Termos';
import { SobreService } from './sobreService.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  constructor(private service : SobreService) { }

  public categorias : Categorias[];
  public artistas : Artistas[];
  public sobre : Termos;
  ngOnInit() {
    this.carregarSobre();
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

  carregarSobre(){
    this.service.getSobre().subscribe(
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
