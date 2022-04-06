import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Posts } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  form: FormGroup;
  id:number = 101;

  constructor(private fb: FormBuilder, private _postsService: PostsService, private router: Router) {
    this.form = this.fb.group({
      userId: ['', Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required],
    })
   }

  agregarArticulo(){
    // console.log(this.form);

    const post: Posts = {
      userId: this.form.value.userId,
      id: this.id,
      title: this.form.value.title,
      body: this.form.value.body,
    }
    this.id++;

    // console.log(post);
    this._postsService.createPost(post);
    this.router.navigate(['/dashboard/home']);
  }
}
