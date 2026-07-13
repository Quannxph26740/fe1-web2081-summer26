import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1 class="text-2xl font-bold">Products Page</h1>
    <p>This is where the products will be displayed.</p>
  `,
  styles: ``,
})
export class ProductsComponent {}