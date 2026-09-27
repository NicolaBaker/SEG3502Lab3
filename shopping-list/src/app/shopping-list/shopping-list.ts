import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  imports: [],
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.css'
})


export class ShoppingList {

  @Input() items: string[] = [];

  @Output() deleteItemEvent = new EventEmitter<number>();

  deleteItem(index: number): void {
    
    
    this.deleteItemEvent.emit(index);
  }
}