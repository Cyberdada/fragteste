import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {

     return  this.http.get('../assets/list.json');
  }

  getFile(uri: string): Observable<string> {
    return  this.http.get('../assets/' + uri, {responseType: 'text'});
  }
}
