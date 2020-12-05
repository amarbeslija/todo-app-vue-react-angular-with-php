import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-items-completed',
  templateUrl: './items-completed.component.html',
  styleUrls: ['./items-completed.component.css']
})
export class ItemsCompletedComponent implements OnInit {

  completedItem: boolean;

  constructor(public itemsService: ItemsService) { 

    this.completedItem = true;
  }

  ngOnInit(): void {
  }

}
