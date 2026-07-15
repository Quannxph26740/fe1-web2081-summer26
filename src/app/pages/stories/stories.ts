import { Component } from "@angular/core";
import { CommonModule, DecimalPipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";

// Định nghĩa một interface để có kiểu dữ liệu rõ ràng cho truyện
interface Story {
  id: number;
  title: string;
  author: string;
  views: number;
  image: string;
}

@Component({
  selector: "app-stories",
  standalone: true,
  imports: [CommonModule, DecimalPipe], // Thêm CommonModule để dùng *ngFor, *ngIf
  templateUrl: "./stories.html",
  styleUrl: "./stories.css",
})
export class StoriesComponent {
  stories: Story[] = []; // Sử dụng interface Story để định kiểu cho mảng

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getStories();
  }

  getStories() {
    this.http.get<Story[]>("http://localhost:3000/stories").subscribe({
      next: (data) => {
        this.stories = data;
      },
      error: () => {
        console.log("Không thể tải dữ liệu");
      },
    });
  }

  deleteStory(id: number) {
    const confirmDelete = confirm("Bạn có chắc muốn xóa không?");
    if (!confirmDelete) return;

    this.http.delete(`http://localhost:3000/stories/${id}`).subscribe({
      next: () => {
        alert("Xóa thành công");
        this.getStories(); // Tải lại danh sách truyện từ server sau khi xóa
      },
      error: () => {
        alert("Xóa thất bại");
      },
    });
  }
}
