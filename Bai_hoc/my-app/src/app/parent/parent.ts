import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})

export class ParentComponent {
  public parentMessage: string = 'Hello từ Parent';

  messageFromChild: string = '';

  handleMessage(message: string): void {
    this.messageFromChild = message;
  }
}