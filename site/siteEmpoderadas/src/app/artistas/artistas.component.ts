import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artistas } from '../models/Artistas';
import { Produtos } from '../models/produtos';
import { Categorias } from '../models/Categorias';
import { ArtistasService } from './artistas.service';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.css']
})
export class ArtistasComponent implements OnInit {

  constructor(private service : ArtistasService, private route: ActivatedRoute) { }

  artista : Artistas;
  produtos: Produtos[];
  public categorias : Categorias[];
  public artistas : Artistas[];
  id : any;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.carregarArtistasById(this.id);
    this.carregarProdutoByArtista(this.id);
    this.carregarArtistas();
    this.carregarCategorias();
  }

  carregarArtistasById(id : any){
    this.service.getArtistasById(id).subscribe(
      (artistas : Artistas)=> {
        this.artista = artistas;
        console.log(this.artistas);
      },
      (erro: any) =>{
        console.error(erro);
      }
    )
  };


  carregarProdutoByArtista(id : any){
    this.service.getProdutosByUser(id).subscribe(
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
