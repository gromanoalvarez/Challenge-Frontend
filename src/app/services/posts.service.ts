import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//Utilizacion de servicios: 1. Para hacer peticion http al backend 2. Para reutilizacion de codigo 3. Para comunicacion entre componentes
export class PostsService {

  endpoint:string;

  constructor(private http: HttpClient) { 
    this.endpoint = 'https://jsonplaceholder.typicode.com/posts';
  }

  getPost(): Observable<any> {
    return this.http.get(this.endpoint);
  }
}
