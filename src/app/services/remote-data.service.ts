import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RemoteDataService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

  getFriends(){
    return this.http.get("http://localhost:3000/allfriends")
  }

  addFriend(friend){
    return this.http.post("http://localhost:3000/allfriends", friend)
  }

}
