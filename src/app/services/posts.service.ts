import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentsI } from '../interfaces/comments';
import { PostsI } from '../interfaces/posts';

@Injectable({
  providedIn: 'root',
})

//Utilizacion de servicios: 1. Para hacer peticion http al backend 2. Para reutilizacion de codigo 3. Para comunicacion entre componentes
export class PostsService {
  endpoint: string;
  urlAPI: string;

  constructor(private http: HttpClient) {
    this.urlAPI = 'https://jsonplaceholder.typicode.com/';
    this.endpoint = this.urlAPI + 'posts/';
  }

  getPost(): Observable<PostsI[]> {
    return this.http.get<PostsI[]>(this.endpoint);
  }

  createPost(post: PostsI): Observable<PostsI> {
    return this.http.post<PostsI>(this.endpoint, post);
  }

  getComments(id: number): Observable<CommentsI[]> {
    return this.http.get<CommentsI[]>(this.endpoint + id + '/comments');
  }

  //Probando...
  // posts: Posts[] = [
  //   { id:1, body: 'aaaaaaaaaa',title:'aaaaaaa',userId:1},
  //   { id:2, body: 'bbbbbbb',title:'bbbbbb',userId:2},
  //   { id:3, body: 'ccc',title:'cc',userId:3},
  //   { id:4, body: 'dd',title:'d',userId:4},
  //   { id:5, body: 'e',title:'e',userId:5},
  //   { id:6, body: 'f',title:'f',userId:6},
  //   { id:7, body: 'g',title:'g',userId:7},
  //   { id:8, body: 'h',title:'h',userId:8},
  //   { id:9, body: 'i',title:'i',userId:9},
  //   { id:10, body: 'j',title:'j',userId:10},
  //   { id:11, body: 'k',title:'k',userId:11},
  // ];

  // getPosts(){
  //   return this.posts.slice();
  // }

  // createPost(post: Posts){
  //   this.posts.unshift(post);
  // }
}
