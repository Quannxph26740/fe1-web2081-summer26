import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet,RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // Thêm RouterLink để các thẻ <a routerLink="..."> hoạt động
  imports: [CommonModule, RouterOutlet, RouterLink],
  // Sử dụng template trực tiếp thay vì templateUrl để tránh lỗi đường dẫn
  template: `
    <nav>
      <ul>
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/about">About</a></li>
        <li><a routerLink="/contact">Contact</a></li>
        <li><a routerLink="/products">Products</a></li>
        <li><a routerLink="/stories">Stories</a></li>
      </ul>
    </nav>
    <hr />
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.css',
})
export class AppComponent {
  title = 'fe1-web2081-summer26';
}
