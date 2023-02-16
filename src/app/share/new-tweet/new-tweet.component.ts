import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Tweet } from '../model/tweet';
import { TweetService } from '../services/tweet.service';

@Component({
  selector: 'app-new-tweet',
  templateUrl: './new-tweet.component.html',
  styleUrls: ['./new-tweet.component.scss']
})
export class NewTweetComponent {

  public form: FormGroup;

  public constructor(private formBuilder:FormBuilder, private tweetService: TweetService){
    this.form = this.formBuilder.group({
      tweetContent: [null,[
        Validators.maxLength(140)]]
    });
  }

  submit(){
    if(this.form.valid){
     let tweeetContent = this.form.get('tweetContent')?.value;
     let tweet = new Tweet(new Date(),tweeetContent,'Alvaro',0);
      this.tweetService.publishTweet(tweet);
      console.log(tweet);
    }
  }



}
