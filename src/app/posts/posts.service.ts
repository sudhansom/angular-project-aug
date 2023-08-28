import { Injectable } from "@angular/core";
import { of } from "rxjs";

import { IPost } from "./post.modal";


@Injectable({
  providedIn:'root'
})
export class PostsService {
  private posts: IPost[] = [];

  getPosts() {
    return this.posts;
  }

  addPost(title: string, content: string){
    const post: IPost = { title: title, content: content};
    this.posts.push(post);
  }
}
