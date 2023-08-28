import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: {title: string, content: string}[] = [];

  onPostAdded(post: any){
    this.posts = [...this.posts, post];
  }
}
