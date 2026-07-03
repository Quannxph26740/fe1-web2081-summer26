import { Component } from "@angular/core";

@Component({
  selector: "app-stories",
  imports: [],
  templateUrl: "./stories.html",
  styleUrl: "./stories.css",
})
export class StoriesComponent {  
  stories = [
    {
      image: "https://www.google.com/imgres?q=one%20piece&imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fonepiece%2Fimages%2F8%2F87%2FOne_Piece_Anime_Logo.png%2Frevision%2Flatest%2Fscale-to-width-down%2F1200%3Fcb%3D20250813015436&imgrefurl=https%3A%2F%2Fonepiece.fandom.com%2Fwiki%2FOne_Piece_(Anime)&docid=Eyx7S9sDSKD6xM&tbnid=rSw2_KD6YL9alM&vet=12ahUKEwjq5smcwbaVAxXoa_UHHch4EVMQnPAOegUIhwEQAA..i&w=1200&h=675&hcb=2&ved=2ahUKEwjq5smcwbaVAxXoa_UHHch4EVMQnPAOegUIhwEQAA",
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
