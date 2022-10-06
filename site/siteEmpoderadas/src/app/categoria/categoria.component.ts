import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categorias } from '../models/Categorias';
import { Produtos } from '../models/produtos';
import { Artistas } from '../models/Artistas';
import { CategoriasService } from './categorias.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  constructor(private service : CategoriasService, private route : ActivatedRoute) { }

  public categoria : Categorias;
  public produtos : Produtos[];
  public categorias : Categorias[];
  public artistas : Artistas[];
  id : any;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.carregarProdutos(this.id);
    this.carregarArtistas();
    this.carregarCategorias();
  }

  carregarProdutos(id : any){
    this.service.getProdutos(id).subscribe(
      (produtos : Produtos[])=> {
        this.produtos = produtos;
        console.log(this.produtos);
      },
      (erro: any) =>{
        console.error(erro);
      }
    )
  };
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
  
  redirecionarShoope(linkUrl : string){
    var win = window.open(linkUrl, '_blank');
    win?.focus();
  }

}
