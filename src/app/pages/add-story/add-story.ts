import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-story',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-story.html',
})
export class AddStoryComponent {
  addForm: FormGroup;
  imagePreview: string | null = null; // Biến để chứa ảnh xem trước

  constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      views: [0, [Validators.required, Validators.min(0)]],
      image: [''] // Trường lưu dữ liệu ảnh
    });
  }

  // Hàm xử lý khi chọn file ảnh từ máy tính
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string; // Hiển thị ảnh xem trước
        this.addForm.patchValue({ image: reader.result }); // Lưu dữ liệu ảnh vào form
      };
      reader.readAsDataURL(file);
    }
  }

  submitForm() {
    if (this.addForm.valid) {
      console.log("Dữ liệu truyện mới:", this.addForm.value);
      alert("Đã thêm truyện thành công! (Xem log ở Console)");
      // Sau này mày sẽ đẩy dữ liệu này vào mảng stories hoặc gửi lên Server
    }
  }
}