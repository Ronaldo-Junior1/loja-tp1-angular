import { Component, computed, inject, signal } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";
import { ProdutoService } from '../services/produto.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { CategoriaService } from '../services/categoria-service';

@Component({
  selector: 'lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css'
})
export class ListaProdutos {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  loading = signal(true);
  private produtoService = inject(ProdutoService);
  private categoriaService = inject(CategoriaService);
  categoriaSelecionada = signal<string>('todos');



  private produtos = toSignal<Produto[],Produto[]>(this.produtoService.listar().pipe(finalize(()=> this.loading.set(false))),{initialValue:[]})
  categorias = toSignal<string[], string[]>(this.categoriaService.listar().pipe(finalize(()=> this.loading.set(false))),{initialValue:[]});
  apenasPromo = signal(false);

  prodExibidos = computed(() => {
    let prods = this.produtos();
  
    if(this.categoriaSelecionada() !== 'todos') {
      prods = prods.filter(p => p.categoria === this.categoriaSelecionada());
    }
  
    if(this.apenasPromo()) {
      prods = prods.filter(p => p.promo);
    }
  
    return prods;
  });

  alternarPromo(){
    this.apenasPromo.update(p=>!p);
  }

  onAddProduct(produto:{id:number, quantity:number}){
    alert(`Produto: ${produto.id}, Quantidade: ${produto.quantity}`);
  }

  onViewProduct(id:number){
    this.router.navigate(['/produtos',id])
  }

  onCategoriaChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.categoriaSelecionada.set(target.value);
  }

  constructor() {
    this.route.queryParamMap.subscribe(params => {
      const promoParam = params.get('promo');
      const isPromo = promoParam === 'true';
      this.apenasPromo.set(isPromo);
    });
  }
  
}
