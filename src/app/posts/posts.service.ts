import { Injectable } from "@angular/core";
import { Subject, of } from "rxjs";

import { IPost } from "./post.modal";


@Injectable({
  providedIn:'root'
})
export class PostsService {
  private posts: IPost[] = [];
  private updatedPosts = new Subject<IPost[]>();

  getPosts() {
    return [...this.posts];
  }

  getUpdatedPosts(){
    return this.updatedPosts.asObservable();
  }

  addPost(title: string, content: string){
    const post: IPost = { title: title, content: content};
    this.posts.push(post);
    this.updatedPosts.next([...this.posts]);
  }
}
