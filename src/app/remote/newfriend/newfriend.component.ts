import { Component, OnInit } from '@angular/core';
import { RemoteDataService } from 'src/app/services/remote-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newfriend',
  templateUrl: './newfriend.component.html',
  styleUrls: ['./newfriend.component.css']
})
export class NewfriendComponent implements OnInit {

  mylocation: string = ''
  myfullname: string = ''
  friends: any = null

  constructor(private remoteData: RemoteDataService, private router:Router) { }

  ngOnInit(): void {
  }

  addFriendViaRestApi = (ff) => {
    console.log(ff.value);
    this.remoteData.addFriend(ff.value).subscribe(res => {
      console.log(res);
      this.myfullname = ''
      this.mylocation = ''
      this.router.navigate(["/remote"])
                            .then(success =>{
                                console.log(success);
                              }, failure=>{
                                console.log(failure);
                              }) 
      
    }, err => {
      console.log(err);
    })
    //do not call getFriends here!
  }


}
