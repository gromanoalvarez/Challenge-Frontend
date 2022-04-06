import { Component,  OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PostsService } from 'src/app/services/posts.service';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { Posts } from 'src/app/interfaces/post';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  listPosts: Posts[]= [];

  displayedColumns: string[] = ['userId', 'id', 'title', 'body', 'comments'];
  dataSource!: MatTableDataSource<any>;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;


  constructor(private _postsServices: PostsService, private _liveAnnouncer: LiveAnnouncer) {}

  ngOnInit(): void {
    this.cargarPosts();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  // cargarPosts(){
  //     // console.log(data);
  //     //   body: "ea velit perferendis earum ut voluptatem voluptate itaque iusto\ntotam pariatur in\nnemo voluptatem voluptatem autem magni tempora minima in\nest distinctio qui assumenda accusamus dignissimos officia nesciunt nobis"
  //     //   id: 34
  //     //   title: "magnam ut rerum iure"
  //     //   userId: 4
  //   this._postsServices.getPost().subscribe( data => {
  //     this.dataSource = data;
  //   });
  // }

  cargarPosts(){
    this.listPosts = this._postsServices.getPosts();
    this.dataSource = new  MatTableDataSource(this.listPosts);
  }

}
