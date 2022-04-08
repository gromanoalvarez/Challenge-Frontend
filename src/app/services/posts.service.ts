import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})

//Utilizacion de servicios: 1. Para hacer peticion http al backend 2. Para reutilizacion de codigo 3. Para comunicacion entre componentes
export class PostsService {

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

  endpoint:string;

  constructor(private http: HttpClient) { 
    this.endpoint = 'https://jsonplaceholder.typicode.com/posts';
  }

  getPost(): Observable<any> {
    return this.http.get(this.endpoint);
  }
  // getPosts(){
  //   return this.posts.slice();
  // }

  // createPost(post: Posts){
  //   this.posts.unshift(post);
  // }

  createPost(post: Posts){
    return this.http.post(this.endpoint, post);
  }

  getComments():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts/3/comments');
  }

}
