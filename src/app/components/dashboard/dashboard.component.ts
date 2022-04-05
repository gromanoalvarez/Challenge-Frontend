import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _postsServices: PostsService ) { }

  ngOnInit(): void {
    this.cargarPosts();
  }

  cargarPosts(){
    this._postsServices.getPost().subscribe( data => {
      console.log(data);
    });
  }

}
