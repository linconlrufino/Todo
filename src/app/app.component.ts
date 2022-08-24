import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/model/Todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: string = "Minhas Tarefas";
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.max(60),
        Validators.required
      ])]
    });

    this.todos.push(new Todo(1, "Estudar", false))
    this.todos.push(new Todo(2, "Dormir", false))
    this.todos.push(new Todo(3, "Comer", false))
    this.todos.push(new Todo(4, "Perder no CS", false))
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);

    if (index !== -1)
      this.todos.splice(index, 1);
  }

  markAsDone(todo: Todo) {
    todo.done = true;
  }

  markAsUndone(todo: Todo) {
    todo.done = false;
  }
}
