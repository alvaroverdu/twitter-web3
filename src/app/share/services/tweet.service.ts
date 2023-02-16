import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Tweet } from '../model/tweet';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  public tweetSubject$ = new Subject();

  protected tweets: any[] = [];

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

  public publishTweet(tweet: Tweet): void {
    this.tweets.unshift(tweet);
    this.tweetSubject$.next(true);
  }

  public getTweets(){
    let returnValue: Tweet[] = [];
    this.tweets.forEach(tweet => {
      returnValue.push(tweet);
    });

    return returnValue;
  }







}
