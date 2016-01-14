import {bootstrap} from 'angular2/platform/browser';
import {RepoListComponent} from './components/repo-list.component';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(RepoListComponent, [HTTP_PROVIDERS]);
