import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Tweet } from '../model/tweet';
import { UserService } from './user.service';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  public tweetSubject$ = new Subject();

  protected tweets: any[] = [];

  constructor(private userService: UserService) {

    let author:User | null = this.userService.getUser('@alvaro');

    let tweet = new Tweet(new Date(),"Tweet1",author,25,[],[],[]);
    this.tweets.push(tweet);
    tweet = new Tweet(new Date(),"Tweet2",author,25,[],[],[]);
    this.tweets.push(tweet);
    tweet = new Tweet(new Date(),"Tweet3",author,25,[],[],[]);
    this.tweets.push(tweet);
    tweet = new Tweet(new Date(),"Tweet4",author,25,[],[],[]);
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
