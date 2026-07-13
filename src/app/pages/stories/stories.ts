import { Component } from "@angular/core";
import { DecimalPipe } from "@angular/common";

@Component({
  selector: "app-stories",
  standalone: true,
  imports: [DecimalPipe], // CommonModule sẽ cần nếu bạn dùng *ngFor trong template
  templateUrl: "./stories.html",
  styleUrl: "./stories.css",
})
export class StoriesComponent {  
  stories = [
  {
    image: "https://images2.alphacoders.com/516/516664.jpg",
    title: "One Piece",
    author: "Eiichiro Oda",
    views: 125000,
  },
  {
    image: "https://images-cdn.ubuy.co.in/6550cb21923c78353a2e2959-naruto-vol-1-1-paperback-september.jpg",
    title: "Naruto",
    author: "Masashi Kishimoto",
    views: 95000,
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/en/c/c8/Doraemon_volume_1_cover.jpg",
    title: "Doraemon",
    author: "Fujiko F. Fujio",
    views: 80000,
  },
];
}
