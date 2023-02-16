import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Tweet } from '../model/tweet';
import { TweetService } from '../services/tweet.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-new-tweet',
  templateUrl: './new-tweet.component.html',
  styleUrls: ['./new-tweet.component.scss']
})
export class NewTweetComponent {

  public form: FormGroup;

  public constructor(private formBuilder:FormBuilder, private tweetService: TweetService,public userService: UserService){
    this.form = this.formBuilder.group({
      tweetContent: [null,[
        Validators.maxLength(140)]]
    });
  }

  submit(){
    if(this.form.valid){
      let user = this.userService.getUser('@alvaro')
     let tweeetContent = this.form.get('tweetContent')?.value;
     let tweet = new Tweet(new Date(),tweeetContent,user,0);
      this.tweetService.publishTweet(tweet);
      console.log(tweet);
    }
  }



}
