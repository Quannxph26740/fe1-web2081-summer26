import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  name = "Nguyen Van A";
  age = 25;

  handleClick() {
    alert("Bạn đã click button thành công!");
  }
}

