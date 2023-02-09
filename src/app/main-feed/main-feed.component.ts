import { Component } from '@angular/core';
import { Tweet } from '../share/model/tweet';

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.scss']
})
export class MainFeedComponent {
  public tweets : Tweet[] = [];

  constructor() {
    let tweet = new Tweet(new Date(),"Tweet1","Miguel",25,[],[],[]);
    this.tweets.push(tweet);
    tweet = new Tweet(new Date(),"Tweet2","Juan",25,[],[],[]);
    this.tweets.push(tweet);
    tweet = new Tweet(new Date(),"Tweet3","Pedro",25,[],[],[]);
    this.tweets.push(tweet);
    tweet = new Tweet(new Date(),"Tweet4","Ramon",25,[],[],[]);
    this.tweets.push(tweet);
  }
}
