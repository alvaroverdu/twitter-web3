import { Tweet } from "./tweet";

export class User {

    protected _id: string;
    set id(value:any){
        this._id = value;
    }

    get id(): any {
        return this._id
    }

    protected _name: string;
    set name(value:any){
        this._name = value;
    }

    get name(): any {
        return this._name
    }

    protected _picture: string;
    set picture(value:any){
        this._picture = value;
    }

    get picture(): any {
        return this._picture
    }

    protected _tweets: Tweet[];
    set tweets(value:any){
        this._tweets = value;
    }

    get tweets(): any {
        return this._tweets
    }

    protected _followers: User[];
    set followers(value:any){
        this._followers = value;
    }

    get followers(): any {
        return this._followers
    }

    protected _following: User[];
    set following(value:any){
        this._following = value;
    }

    get following(): any {
        return this._following
    }



    constructor(_id: string, name: string, picture: string, tweets: Tweet[], followers: User[], following: User[]) {
        this._id = _id;
        this._name = name;
        this._picture = picture;
        this._tweets = tweets;
        this._followers = followers;
        this._following = following;
      
    }
}