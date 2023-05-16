import {Injectable} from "@angular/core";
import {Tweet} from "../model/tweet";
import {Subject} from "rxjs";
import {UserService} from "./user.service";
import {User} from "../model/user";
import {Web3Service} from "../web3service/web3.service";

@Injectable()
export class TweetService {

    public newTweets$ = new Subject();

    protected tweets: any[] = [];

    public constructor(protected userService: UserService,
                       protected web3Service: Web3Service) {

        this.web3Service.newTweet$.subscribe(async () => {
            this.newTweets$.next(true);
        });

    }

    public async publishTweet(tweet: Tweet): Promise<void> {
        //append the tweet at the very beginning of this.tweet array:
        await this.web3Service.publishTweet(tweet);
    }

    public async getTweets(): Promise<Tweet[]> {

        let returnValue: Tweet[] = [];
        let tweets = await this.web3Service.getAllTweets();
        tweets.forEach( async (tweetData: any) => {
            let tweet = new Tweet();
            tweet.message = tweetData.tweetText;
            tweet.image = tweetData.tweetImage;
            tweet.date = new Date(tweetData.date * 1000);
            let authorAddress = tweetData.author;
            let user = await this.userService.getUser(authorAddress);
            tweet.author = user;
            returnValue.push(tweet);
        });
        return returnValue;

    }
    public async findTweetsFromUser(userName: string): Promise<Tweet[]> {
        let resultTweets: Tweet[] = [];
        let allTweets = await this.web3Service.getAllTweets();
        
        for (let i = 0; i < allTweets.length; i++) {
            let tweetInfo: any = allTweets[i];
            let singleTweet = new Tweet();
            singleTweet.message = tweetInfo.tweetText;
            singleTweet.image = tweetInfo.tweetImage;
            singleTweet.date = new Date(tweetInfo.date * 1000);
            let authorAddress = tweetInfo.author;
            let user = await this.userService.getUser(authorAddress);
            singleTweet.author = user;
            if (user.name === userName) {
                resultTweets.push(singleTweet);
            }
        }
        return resultTweets;
    }
    


}
