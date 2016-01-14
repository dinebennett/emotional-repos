import {Component} from "angular2/core";
import {Repo} from '../models/repo';
import {NgClass} from 'angular2/common';

@Component({
    selector: 'repo-item',
    styleUrls: ['app/components/repo-item.css'],
    templateUrl: 'app/components/repo-item.html',
    inputs: ['repo']
})

export class RepoItem {
    public repo:Repo;
}