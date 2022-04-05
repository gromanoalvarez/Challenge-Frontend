import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const ELEMENT_DATA: Posts[] = [];

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  displayedColumns: string[] = ['userId', 'id', 'title', 'body', 'comments'];
  dataSource = ELEMENT_DATA;

  constructor(private _postsServices: PostsService) { }

  ngOnInit(): void {
    this.cargarPosts();
  }

  cargarPosts(){
      // console.log(data);
      //   body: "ea velit perferendis earum ut voluptatem voluptate itaque iusto\ntotam pariatur in\nnemo voluptatem voluptatem autem magni tempora minima in\nest distinctio qui assumenda accusamus dignissimos officia nesciunt nobis"
      //   id: 34
      //   title: "magnam ut rerum iure"
      //   userId: 4
    this._postsServices.getPost().subscribe( data => {
      this.dataSource = data;
    });
  }

}
