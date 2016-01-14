import {Component} from "angular2/core";
import {OnInit} from 'angular2/core';
import {Repo} from '../models/repo';
import {GithubService} from '../services/github.service';
import {NgClass} from 'angular2/common';
import {RepoItem} from './repo-item'

@Component({
    selector: 'repo-list',
    styleUrls: ['app/components/repo-list.css'],
    providers: [GithubService],
    templateUrl: 'app/components/repo-list.html',
    directives: [RepoItem]
})

export class RepoListComponent implements OnInit {

    public hateRepos:Repo[];
    public loveRepos:Repo[];
    public page:number;
    public toggle:boolean;
    public loading:boolean;

    constructor(private _githubService:GithubService) {

    }

    ngOnInit() {
        this.page = 1;
        this.toggle = true;
        this.loading = true;
        this._githubService.getHateRepos(1).subscribe(data => {
            if (data.status === 200) {
                this.hateRepos = JSON.parse(data._body).items;
            }
        });
        this._githubService.getLoveRepos(1).subscribe(data => {
            this.loading = false;
            if (data.status === 200) {
                this.loveRepos = JSON.parse(data._body).items;
            }
        });
    }

    onToggle() {
        this.toggle = !this.toggle;
    }

    onMore() {
        var self = this;
        this.page = this.page + 1;
        this.loading = true;
        this._githubService.getHateRepos(this.page).subscribe(data => {
            if (data.status === 200) {
                var newRepos:Repo[] = JSON.parse(data._body).items;
                self.hateRepos = self.hateRepos.concat(newRepos);
            }
        });
        this._githubService.getLoveRepos(this.page).subscribe(data => {
            if (data.status === 200) {
                var newRepos:Repo[] = JSON.parse(data._body).items;
                self.loveRepos = self.loveRepos.concat(newRepos);
            }
            this.loading = false;
        });
    }

}