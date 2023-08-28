import { Component } from "@angular/core";

import { IPost } from "../post.modal";
import { NgForm } from "@angular/forms";
import { PostsService } from "../posts.service";

@Component({
  selector: 'app-post-create',
  templateUrl:'./post-create.component.html',
  styleUrls:['./post-create.component.scss'],
})

export class PostCreateComponent {
  enteredTitle = '';
  enteredContent='';

  onAddPost(form: NgForm){
    this.postService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }

  constructor(private postService: PostsService){}

}
