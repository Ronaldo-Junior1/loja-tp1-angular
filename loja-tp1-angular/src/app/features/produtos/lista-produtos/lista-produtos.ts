import { Component, computed, inject, signal } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";
import { ProdutoService } from '../services/produto.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CategoriaService } from '../services/categoria.service';

@Component({
  selector: 'lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css'
})
export class ListaProdutos {

  private produtoService = inject(ProdutoService);
  private categoriaService = inject(CategoriaService);

  private produtos = toSignal<Produto[],Produto[]>(this.produtoService.listar(),{initialValue:[]})

  categorias = toSignal<string[], string[]>(this.categoriaService.listar(),{initialValue:[]});
  

  apenasPromo = signal(false);
  categoriaSelecionada = signal<string>('todos');

  prodExibidos = computed(() => {
    let produtosFiltrados = this.produtos();

    if (this.apenasPromo()) {
      produtosFiltrados = produtosFiltrados.filter(p => p.promo);
    }

    if (this.categoriaSelecionada() !== 'todos') {
      produtosFiltrados = produtosFiltrados.filter(p => p.categoria === this.categoriaSelecionada());
    }

    return produtosFiltrados;
  });


  onCategoriaChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.categoriaSelecionada.set(target.value);
  }


  alternarPromo(){
    this.apenasPromo.update(p=>!p);
  }
  onAddProduct(produto:{id:number, quantity:number}){
    alert(`Produto: ${produto.id}, Quantidade: ${produto.quantity}`);
  }

  onViewProduct(id:number){
    alert(`Id do produto: ${id}`);
  }
}
