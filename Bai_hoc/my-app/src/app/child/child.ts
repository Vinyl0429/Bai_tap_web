import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class ChildComponent {

  @Input() receivedData: string = '';

  @Output() notifyParent = new EventEmitter<string>();

  sendToParent(): void {
    this.notifyParent.emit('Hello from Child');
  }

}