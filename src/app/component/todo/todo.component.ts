import { Component, OnInit, Input} from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todoInput!: Todo;

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  updateFavourite(){
    this.todoInput.isFavourite = !this.todoInput.isFavourite
    if(this.todoInput.isFavourite){
      this.todoService.fav.unshift(this.todoInput);
      //console.log(this.todoService.fav);
      localStorage.setItem("favourite", JSON.stringify(this.todoService.fav));
      alert(`${this.todoInput.title} added to favourite successfully`);
    }else{
      let index = this.todoService.todoList.indexOf(this.todoInput);
      this.todoService.fav.splice(index, 1)
      localStorage.setItem("favourite", JSON.stringify(this.todoService.fav));
      alert(`${this.todoInput.title} has been remove from favourite`);
    }
  }

}
