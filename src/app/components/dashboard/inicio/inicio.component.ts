import { Component,  Inject,  OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PostsService } from 'src/app/services/posts.service';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { Posts } from 'src/app/interfaces/post';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  title: string;
  comments: any[];
}

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
    this._postsServices.getPost().subscribe( data => {
        this.listPosts = data;
        this.dataSource = new  MatTableDataSource(this.listPosts);
        this.activateTable();
    });
  }

  openDialog(): void {
    let comments: any[];
    this._postsServices.getComments().subscribe(resp => comments = resp );
    setTimeout(() => {
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        width: '75%',
        data: {title: "Comentarios: ", comments: comments},
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }, 1000);
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: `
              <div>
                  <h1 mat-dialog-title>{{data.title}}</h1>
                  <p>{{data.comments}}</p>
                  <div mat-dialog-actions>
                    <button mat-button (click)="onNoClick()">Volver</button>
                  </div>
              </div>

              `,
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}