import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  myReactiveForm: any

  constructor() { }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      firstName: new FormControl("", Validators.compose([
                                                Validators.required, 
                                                Validators.minLength(2),
                                                Validators.pattern('^[a-zA-Z]+$')
                                                ])),
      lastName: new FormControl("", this.myCustomValidator ),
      myHobby: new FormControl()
    })
  }

  myCustomValidator = function(formControl){
    console.log(formControl);
    if(formControl.value.length < 3){
      return {lastName:false}
    }
    
  }

  getFormData = function(mrf){
    console.log(mrf);
    console.log(mrf.value);
  }




}
