import { Component, OnInit } from '@angular/core';
import * as all from 'src/environments/environment';
import { TodolistService } from '../shared/todolist.service';
import {TodoModel} from "./model/TodoModel";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  todo:string="";
  todoList: TodoModel[] = [];

  constructor(private todolistService: TodolistService) {
  }

  deleteTodo(todo:TodoModel){
    this.todoList=this.todoList.filter(x=>x.title==todo.title?false:true);
  }
  addTodo(){
    if (this.todo=="") return;
    this.todoList.push({
      "userId": this.todoList.length,
      "id": this.todoList.length,
      "title": this.todo,
      "completed": false
    })
    this.todo="";
  }

  async getTodolist() {
    try {
      this.todoList = await this.todolistService.getTodoList();
    } catch(err) {
      console.log(err.status);
    }
  }


  ngOnInit(){
    this.getTodolist();
  }
}
