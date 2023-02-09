import { Injectable } from '@angular/core';
import { Tweet } from '../model/tweet';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  

  constructor() {
    
  }
  public getTweets(){
    let tweets : Tweet[] = [];
    let tweet = new Tweet(new Date(),"Tweet1","Miguel",25,[],[],[]);
    tweets.push(tweet);
    tweet = new Tweet(new Date(),"Tweet2","Juan",25,[],[],[]);
    tweets.push(tweet);
    tweet = new Tweet(new Date(),"Tweet3","Pedro",25,[],[],[]);
    tweets.push(tweet);
    tweet = new Tweet(new Date(),"Tweet4","Ramon",25,[],[],[]);
    tweets.push(tweet);
    return tweets;
  }
}
