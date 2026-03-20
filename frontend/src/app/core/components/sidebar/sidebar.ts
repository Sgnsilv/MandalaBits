import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  isExpanded = true;

  @Output() openModal = new EventEmitter<void>();

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}