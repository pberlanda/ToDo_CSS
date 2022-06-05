import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Item } from "../item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  constructor() {
  }

  editable = false;

  @Input() item!: Item;
  @Input() newItem: string = '';
  @Output() remove = new EventEmitter<Item>();

  saveItem(description?: any) {
    // la descrizione deve essere immessa
    if (!description) return;
    
    // imposta l'elemento come non modificabile e salva la descrizione
    this.editable = false;
    this.item.description = description;
  }
}
