import { Component, OnInit } from '@angular/core';

import { RemoteDataService } from 'src/app/services/remote-data.service';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {

  users :any = []

  constructor(private remoteData: RemoteDataService) { }

  //no-name/ghost function
  /*
  ngOnInit(): void {
    
    this.http.get("https://jsonplaceholder.typicode.com/users")
              .subscribe(function(response){
                console.log(response)
                this.users = response
                console.log(this.users);
              }, function(error){
                console.log(error)
              })
  } 
  */


//named function
/*
ngOnInit(): void {
  //no-name/ghost function
  this.http.get("https://jsonplaceholder.typicode.com/users")
            .subscribe(this.displayData, this.displayError)
} 

displayData = function(response){
  console.log(response);
  this.users = response
  console.log(this.users);
}

displayError = function(error){
  console.log(error);
} 
*/
//arrow function -> recommended
ngOnInit():void{
  this.remoteData.getUsers().subscribe((response)=>{
                                        console.log(response);
                                        this.users = response
                                        console.log(this.users);
                                      }, (error)=>{
                                        console.log(error);
                                      })
}

 
}
