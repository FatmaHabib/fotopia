import Search from '../models/search.model';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';


import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

  api_url = 'http://localhost:4000';
  searchUrl = `${this.api_url}/products`;

  constructor(
    private http: HttpClient
  ) { }


  search_this_stringSearch(search: Search): Observable<any>{
    return this.http.post(`${this.searchUrl}/search`, {search:search.search_string});
  }

  // getSearchs(): Observable<Search[]>{
  //   return this.http.get(this.productUrl)
  //   .map(res  => {
  //     return res["data"].docs as Search[];
  //   })
  // }

  // editTodo(todo:ToDo){
  //   let editUrl = `${this.todoUrl}`
  //   return this.http.put(editUrl, todo);
  // }

  // deleteTodo(id:string):any{
  //   let deleteUrl = `${this.todoUrl}/${id}`
  //   return this.http.delete(deleteUrl)
  //   .map(res  => {
  //     return res;
  //   })
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
