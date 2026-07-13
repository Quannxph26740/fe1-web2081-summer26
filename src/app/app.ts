import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet,RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // Thêm RouterLink để các thẻ <a routerLink="..."> hoạt động
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  // Sử dụng template trực tiếp thay vì templateUrl để tránh lỗi đường dẫn
  template: `
    <nav class="bg-white shadow-md">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-7">
            <div>
              <!-- Website Logo -->
              <a routerLink="/" class="flex items-center py-4 px-2">
                <span class="font-semibold text-gray-500 text-lg">MyWebApp</span>
              </a>
            </div>
            <!-- Primary Navbar items -->
            <div class="hidden md:flex items-center space-x-1">
              <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Home</a>
              <a routerLink="/about" routerLinkActive="active" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</a>
              <a routerLink="/contact" routerLinkActive="active" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact</a>
              <a routerLink="/products" routerLinkActive="active" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Products</a>
              <a routerLink="/stories" routerLinkActive="active" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Stories</a>
              <a routerLink="/add-story" routerLinkActive="active" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Add Story</a>
            </div>
          </div>
          <!-- Secondary Navbar items -->
          <div class="hidden md:flex items-center space-x-3 ">
            <a href="" class="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</a>
            <a href="" class="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</a>
          </div>
          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center">
            <button class="outline-none mobile-menu-button">
            <svg class=" w-6 h-6 text-gray-500 hover:text-green-500 "
              x-show="!showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          </div>
        </div>
      </div>
    </nav>
    <main class="max-w-6xl mx-auto p-4">
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrl: './app.css',
})
export class AppComponent {
  title = 'fe1-web2081-summer26';
}
