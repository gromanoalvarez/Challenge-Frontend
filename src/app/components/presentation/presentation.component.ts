import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css'],
})
export class PresentationComponent implements OnDestroy{
  loading: boolean;

  constructor() {
    this.loading = false;
  }

  changeTemplate(): void {
    this.loading = true;
    setTimeout(() => {
      alert("redireccion");
    }, 1000);
  }

  ngOnDestroy(): void {
    this.loading = false;
  }

}
