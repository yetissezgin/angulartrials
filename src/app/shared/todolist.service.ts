import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { TodoModel } from '../main-page/model/TodoModel';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  env = environment;
  constructor(private http: HttpClient) { }

  getTodoList() {
    const params2: HttpParams = new HttpParams();
    params2.set('page', '1');
    return this.http.get<TodoModel[]>(this.env.endpoint).toPromise()
  };

}
