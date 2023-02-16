import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tweet } from '../share/model/tweet';
import { TweetService } from '../share/services/tweet.service';

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.scss']
})
export class MainFeedComponent implements OnDestroy {

  public tweets : Tweet[] = [];
  public subscriptions: Subscription[] = [];

  constructor(private TweetService: TweetService){
    this.tweets = this.TweetService.getTweets();

    this.subscriptions.push(this.TweetService.tweetSubject$.subscribe(() => {
      this.tweets = this.TweetService.getTweets()
    }));
  }


  public ngOnDestroy(){
    this.subscriptions.forEach( subscription => {subscription.unsubscribe;})

  }

}
