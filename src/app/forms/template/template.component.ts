import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  fname:string =''
  lname:string =''
  hobby:string=''
  
  constructor() { }

  ngOnInit(): void {
  }

  getFormData = function(mf){
    console.log("Form submitted!!!!");
    console.log(mf);
    console.log(mf.value);
  }

}
