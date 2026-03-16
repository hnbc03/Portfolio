import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {
  // Có thể thêm data động sau, hiện tại hard-code trước
  stats = [
    { label: 'Internship', value: '4 months' },
    { label: 'Academic Projects', value: '3+' },
    { label: 'English', value: 'TOEIC 800+' },
  ];
}