import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structurengif',
  templateUrl: './structurengif.component.html',
  styleUrls: ['./structurengif.component.css']
})
export class StructurengifComponent implements OnInit {

  display: boolean = true

  toggle = function(){

    if(this.display){
        this.display = false
    }else{
      this.display=true
    }
    console.log("Current display value: " + this.display);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
