import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  imports: [],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css'
})
export class Sobre {

  private router = inject(Router);

  promocao(){
    this.router.navigate(['/produtos'], {queryParams: {promo: true} });
  }
}
