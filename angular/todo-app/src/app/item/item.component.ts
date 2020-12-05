import { Component, OnInit, Input } from '@angular/core';
import ToDoItem from '../model/ToDoItem';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: ToDoItem;

  constructor(public itemsService: ItemsService) { 

  }

  ngOnInit(): void {
  }

}
