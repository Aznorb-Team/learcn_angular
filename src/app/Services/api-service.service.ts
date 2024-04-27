import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../Models/post.photos';
import { Observable, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  private posts = new Subject<Post[]>();

    public get(): Observable<any>{
      return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }
}
