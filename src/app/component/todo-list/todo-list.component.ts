import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  allTodo:any = [];
  viewList: boolean = false;

  constructor(private todoService:TodoService,
    private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.url.subscribe(data => {
      if(data[0].path == 'list'){
        this.viewList = true;
        this.allTodo = this.todoService.todoList
        console.log(this.allTodo);
      }else{
        this.viewList = false;
        this.allTodo = this.todoService.updateFavourite()
      }
    })
  }

}
