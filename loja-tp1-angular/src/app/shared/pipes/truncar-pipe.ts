import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncar'
})
export class TruncarPipe implements PipeTransform {

  transform(descricao: string): string {
    if (descricao.length > 20) {
      return descricao.substring(0, 20) + '...';
    } else {
      return descricao;
    }
  }

}