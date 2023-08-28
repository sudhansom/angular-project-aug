import { Component, Input, OnInit } from "@angular/core";

import { IPost } from "../post.modal";
import { PostsService } from "../posts.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {
  posts: IPost[] = [];

  constructor(private postService: PostsService){}

  ngOnInit(): void {
    //this.posts = this.postService.getPosts();
    this.postService.getUpdatedPosts().subscribe(data => this.posts = data);
  }
}
