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

  deleteFriendById(id){
    return this.http.delete("http://localhost:3000/allfriends/" + id)
  }

  getFriendById(id){
    return this.http.get("http://localhost:3000/allfriends/" + id)
  }

  editFriend(friend){
    console.log(friend.id);
    var body = {
      name:friend.name,
      location:friend.location
    }
    return this.http.put("http://localhost:3000/allfriends/" + friend.id, body)
  }
}
