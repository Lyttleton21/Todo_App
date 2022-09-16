import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { TodoFormComponent } from './component/todo-form/todo-form.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: '/list',
    pathMatch: 'full'
  },
  {
    path:'add',
    component: TodoFormComponent
  },
  {
    path:'list',
    component: TodoListComponent
  },
  {
    path:'favourite',
    component:TodoListComponent
  },
  {
    path:'**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
