import { Component,  Inject,  Input,  OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PostsService } from 'src/app/services/posts.service';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { PostsI } from 'src/app/interfaces/posts';
import { CommentsI } from 'src/app/interfaces/comments';
import {MatDialog} from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from './dialog/dialog.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  listPosts: PostsI[]= [];
  comments: CommentsI[] = [];

  displayedColumns: string[] = ['userId', 'id', 'title', 'body', 'comments'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _postsServices: PostsService, private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) {}

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
    this._postsServices.getPost().subscribe( response => {
        this.listPosts = response;
        this.dataSource = new  MatTableDataSource(this.listPosts);
        this.activateTable();
    });
  }

  openDialog(id:number): void {

    this._postsServices.getComments(id).subscribe( resp => {
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        width: '75%',
        data: { comments : resp } 
        });
    });
  }


}

