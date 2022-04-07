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

  activateTable() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  cargarPosts(){
    this._postsServices.getPost().subscribe( data => {
        this.listPosts = data;
        this.dataSource = new  MatTableDataSource(this.listPosts);
        this.activateTable();
    });
  }

}
