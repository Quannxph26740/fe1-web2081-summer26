import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home'; // Nhớ import cả HomeComponent nếu mày dùng ở bài trước

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class AppComponent {
  // Bài 3: Khai báo biến
  name = "Nguyen Van A";
  age = 25;

  // Bài 4: Hàm click
  handleClick() {
    alert("Bạn đã click button");
  }
}
export class App {
  title = 'Hello from App Component'; // property -> {{ title }}
  name = 'Angular';
  age = 30;

  // method -> event binding (click)
  sayHello() {
    alert('Hello from App Component');
    console.log('Hello from App Component');
  }

  delete() {
    console.log('Delete button clicked');
  }
}
