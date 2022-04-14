import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PostsI } from 'src/app/interfaces/posts';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  public form: FormGroup;
  public numberRandom!: number;

  constructor(
    private fb: FormBuilder,
    private _postsService: PostsService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  createNewArticle() {
    let userId = this.generateRandomId();
    const post: PostsI = {
      userId: userId,
      id: 0,
      title: this.form.value.title,
      body: this.form.value.body,
    };
    console.log(post);
    this._postsService.createPost(post).subscribe((resp) => {
      this._snackBar.open("Publicación exitosa nro.: " + resp.id, "Cerrar");
      this.router.navigate(['/dashboard/home']);
    });
  }

  generateRandomId(): number {
    this.numberRandom = Math.floor(Math.random() * (1000 - 1)) + 1;
    return this.numberRandom;
  }
}


