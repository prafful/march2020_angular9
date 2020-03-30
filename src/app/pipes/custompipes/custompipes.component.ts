import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipes',
  templateUrl: './custompipes.component.html',
  styleUrls: ['./custompipes.component.css']
})
export class CustompipesComponent implements OnInit {

  scores: number[] =[20, 1, 45, 3, 15, 12, 17, 100, 88]

  constructor() { }

  ngOnInit(): void {
  }

}
