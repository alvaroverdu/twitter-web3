import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  protected users: User[] = []

  constructor() {
    let user = new User('@alvaro','Alvaro','//pbs.twimg.com/profile_images/1481281375835725825/rZzCEFm3_400x400.jpg',[],[],[]);
    this.users.push(user);
   }

   getUser(id: string){
    return this.users.filter(user => user.id ===id)[0];
   }



}
