import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  titles: any[] =[
    {text: "one", cols:3, rows:1, color: "lightblue"},
    {text: "two", cols:1, rows:2, color: "lightgreen"},
    {text: "three", cols:1, rows:1, color: "lightpink"},
    {text: "four", cols:2, rows:1, color: "#dh3dh3"},


  ];

  constructor() { }

  ngOnInit(): void {
  }

}
