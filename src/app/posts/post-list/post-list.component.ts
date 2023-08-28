import { Component } from "@angular/core";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent {
  posts = [
    {
      title: 'first-post',
      content: 'this the first post\'s content'
    },
    {
      title: 'second-post',
      content: 'this the second post\'s content'
    },
    {
      title: 'third-post',
      content: 'this the third post\'s content'
    },
    {
      title: 'fourth-post',
      content: 'this the fourth post\'s content'
    },
  ]
}
