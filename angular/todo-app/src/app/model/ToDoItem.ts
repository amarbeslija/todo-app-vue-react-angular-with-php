
class ToDoItem {

    id: string;
    content: string;
    date: Date;
    completed: boolean;

    constructor(content, date) {
        this.id = Math.random().toString(36).substring(7);
        this.content = content;
        this.date = date;
        this.completed = false;
    }


    static fromJSON(json) {
        let toDoItem = new ToDoItem(json.content, json.date);
        toDoItem.id = json.id;
        toDoItem.completed = json.completed;

        return toDoItem;
    }
}

export default ToDoItem;