import { inject, Injectable } from '@angular/core';
import { ProdutoService } from './produto.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private produtoService = inject(ProdutoService);

  listar(): Observable<string[]> {
    return this.produtoService.listar().pipe(
      map(produtos => {
        const categorias = produtos.map(p => p.categoria);
        return [...new Set(categorias)]; 
      })
    );
  }
  
}
