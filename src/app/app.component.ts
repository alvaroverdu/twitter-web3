import { Component } from '@angular/core';
import { Tweet } from './share/model/tweet';
import { TweetComponent } from './share/tweet/tweet.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'twitter-web3';

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
