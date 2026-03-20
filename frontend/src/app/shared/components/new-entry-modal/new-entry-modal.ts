import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-entry-modal',
  standalone: true,
  templateUrl: './new-entry-modal.html'
})
export class NewEntryModalComponent {
  @Output() close = new EventEmitter<void>();
}