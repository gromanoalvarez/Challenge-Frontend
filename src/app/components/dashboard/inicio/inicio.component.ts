import { Component,  OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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
  dataSource = new MatTableDataSource(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _postsServices: PostsService) {
    this.cargarPosts();
   }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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
