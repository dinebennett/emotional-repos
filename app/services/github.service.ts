import {Injectable} from 'angular2/core';
import {Repo} from '../models/repo';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Observable, Subject, ReplaySubject} from 'rxjs/Rx';

@Injectable()
export class GithubService {

    constructor(public http:Http) {

    }

    getHateRepos(page) {
        var URL = 'https://api.github.com/search/repositories?q="i hate"+in:description&sort=updated';
        return this.http.get(URL + "&page=" + page);
    }

    getLoveRepos(page) {
        var URL = 'https://api.github.com/search/repositories?q="i love"+in:description&sort=updated';
        return this.http.get(URL + "&page=" + page);
    }

}