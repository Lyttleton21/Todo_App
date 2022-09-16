import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
 todo: any = '';

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }
  save(){
    //console.log(this.todo);
    this.todoService.addTodo(this.todo);
    alert(`${this.todo} Task Added Successfully`);
    this.todo = '';

   /* this.todoService.todo.unshift(this.todo);
    //console.log(this.todoService.todo);
    localStorage.setItem("newTodo", JSON.stringify(this.todoService.todo))
    alert(`${this.todo} Task Added Successfully`);
    this.todo = '';*/
  }

}
