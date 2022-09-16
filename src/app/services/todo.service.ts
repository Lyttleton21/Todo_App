import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  fav: any = [];
  todo: any = [];

  todoList: Todo[] = [
    {
      id: 1,
      title: "first todo",
      isCompleted: false,
      isFavourite: false,
      createdAt: new Date('3-5-1999')
    },
    {
      id: 2,
      title: "second todo",
      isCompleted: false,
      isFavourite: false,
      createdAt: new Date('4-2-2020')
    },
    {
      id: 3,
      title: "third todo",
      isCompleted: false,
      isFavourite: false,
      createdAt: new Date('7-9-2022')
    },
    {
      id: 4,
      title: "forth todo",
      isCompleted: false,
      isFavourite: false,
      createdAt: new Date('3-5-2001')
    },
    {
      id: 5,
      title: "fifth todo",
      isCompleted: false,
      isFavourite: false,
      createdAt: new Date('12-3-2005')
    },
  ]

  constructor() { }
  fetchAllTodos(){
    this.todo = JSON.parse(localStorage.getItem('newTodo') || `{}`);
    return this.todo;
  }

  deleteTodo(item:Todo){
    let index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
  }

  addTodo(title:any){
    let id = this.todoList.length + 2;

    const item: Todo = {
      id: id,
      isCompleted: false,
      isFavourite: false,
      createdAt: new Date(),
      title: title
    }
    this.todoList.unshift(item);
  }

  updateFavourite(){
    this.fav
  }
  

}
