import { Injectable } from '@angular/core';
import ToDo from '../model/ToDo';
import ToDoItem from '../model/ToDoItem';



@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  todo: ToDo;

  constructor() {
    this.todo = new ToDo;
  }


  addItem(content) {
    let item = new ToDoItem(content, new Date());
    this.todo.add(item);
  }


  deleteItem(item) {
    this.todo.delete(item);
  }


  changeItemStatus(item) {
    this.todo.changeState(item);
  }


}
