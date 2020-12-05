import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-item-active',
  templateUrl: './item-active.component.html',
  styleUrls: ['./item-active.component.css']
})
export class ItemActiveComponent implements OnInit {

  completedItem: boolean;

  constructor(public itemsService: ItemsService) {
    this.completedItem = false;
   }

  ngOnInit(): void {
  }

}
