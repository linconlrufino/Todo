import { Component } from '@angular/core';
import { Todo } from 'src/model/Todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: string = "Minhas Tarefas"
  constructor() {
    this.todos.push(new Todo(1, "Estudar", false))
    this.todos.push(new Todo(2, "Dormir", false))
    this.todos.push(new Todo(3, "Comer", false))
    this.todos.push(new Todo(4, "Perder", true))
  }
}
