import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true, // Thêm dòng này
  imports: [], // Giữ lại mảng imports
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {}
