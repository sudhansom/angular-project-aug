import { Component, Output,EventEmitter } from "@angular/core";

import { IPost } from "../post.modal";

@Component({
  selector: 'app-post-create',
  templateUrl:'./post-create.component.html',
  styleUrls:['./post-create.component.scss'],
})

export class PostCreateComponent {
  enteredTitle = '';
  enteredContent='';
  @Output() postCreated = new EventEmitter<IPost>();

  onAddPost(){
    const post: IPost = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    this.postCreated.emit(post);
  }

}
