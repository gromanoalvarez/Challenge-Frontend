import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css'],
})
export class PresentationComponent implements OnDestroy{
  loading: boolean;

  constructor(private router: Router) {
    this.loading = false;
  }

  changeTemplate(): void {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['dashboard']);
    }, 500);
  }

  ngOnDestroy(): void {
    this.loading = false;
  }

}
