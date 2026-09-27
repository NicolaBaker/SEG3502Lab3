import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  imports: [FormsModule],
  templateUrl: './add-item.html',
  styleUrl: './add-item.css'
})
export class AddItem {


  item: string = '';

  @Output() addItemEvent = new EventEmitter<string>();

  addItem(): void {
    if (this.item.trim() !== '') {
      this.addItemEvent.emit(this.item);
      this.item = '';

      
    }
  }
}