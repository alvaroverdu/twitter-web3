import { Component } from '@angular/core';
import { Tweet } from '../share/model/tweet';
import { TweetService } from '../share/tweetservice/tweet.service';
import { UserService } from '../share/tweetservice/user.service'
import { User } from '../share/model/user';
 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

    public tweets: Tweet[] = [];
    public user: User|null = null;
    public edit = 0;
    public constructor(public tweetService: TweetService, public userService: UserService){

    }

    ngOnInit(){
        this.user = this.userService.getUserInSession();
        
        this.tweetService.findTweetsFromUser(this.user?.name).then((tweets: Tweet[]) => {
            this.tweets = tweets;
        })
    }

    show(){
        this.edit = 1;
    }
}
