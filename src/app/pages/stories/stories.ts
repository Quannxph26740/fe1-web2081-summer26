import { Component } from "@angular/core";

@Component({
  selector: "app-stories",
  standalone: true,
  imports: [], // CommonModule sẽ cần nếu bạn dùng *ngFor trong template
  templateUrl: "./stories.html",
  styleUrl: "./stories.css",
})
export class StoriesComponent {  
  stories = [
    {
      image: "https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_1.jpg",
      title: "One Piece",
      author: "Oda",
      views: 100000,
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/en/9/9a/Naruto_Uzumaki.png",
      title: "Naruto",
      author: "Kishimoto",
      views: 90000,
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/en/6/6f/Doraemon_character.png",
      title: "Doraemon",
      author: "Fujiko F Fujio",
      views: 70000,
    },
  ];
}
