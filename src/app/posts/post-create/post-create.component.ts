import { Component, Output,EventEmitter } from "@angular/core";

import { IPost } from "../post.modal";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-post-create',
  templateUrl:'./post-create.component.html',
  styleUrls:['./post-create.component.scss'],
})

export class PostCreateComponent {
  enteredTitle = '';
  enteredContent='';
  @Output() postCreated = new EventEmitter<IPost>();

  onAddPost(form: NgForm){
    const post: IPost = {
      title: form.value.title,
      content: form.value.content
    };
    this.enteredContent = '';
    this.enteredContent = '';
    this.postCreated.emit(post);
  }

}
