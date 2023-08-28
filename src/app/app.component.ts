import { Component } from '@angular/core';

import { IPost } from './posts/post.modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: IPost[] = [];

  onPostAdded(post: IPost){
    this.posts = [...this.posts, post];
  }
}
