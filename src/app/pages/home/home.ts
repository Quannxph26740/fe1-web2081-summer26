import { Component } from '@angular/core';
import { AboutComponent } from '../about/about';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent], // Tí nữa sẽ thêm AboutComponent vào đây ở Bài 2
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  // Bài 3: Khai báo biến
  name = "Nguyen Van A";
  age = 25;

  // Bài 4: Hàm xử lý click
  handleClick() {
    alert("Bạn đã click button");
  }
}