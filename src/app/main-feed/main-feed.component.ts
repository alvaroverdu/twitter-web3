import { Component } from '@angular/core';
import { Tweet } from '../share/model/tweet';
import { TweetService } from '../share/services/tweet.service';

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.scss']
})
export class MainFeedComponent {

  public tweets : Tweet[] = [];

  constructor(private TweetService: TweetService){
    this.tweets = this.TweetService.getTweets();
  }

}
