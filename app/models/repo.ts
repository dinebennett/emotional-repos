import {Owner} from "./owner.model";

export interface Repo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    owner: Owner;
    updated_at: string;
}