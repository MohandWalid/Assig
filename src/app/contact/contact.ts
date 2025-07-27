import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  onKeydown(): void {
    const labelElement = document.getElementById('myLabel') as HTMLElement;

    if (labelElement) {
      labelElement.style.opacity = '1';
      labelElement.style.transform = 'translateY(0)';
      labelElement.style.transition = 'all 0.3s ease';
    }
  }
}
