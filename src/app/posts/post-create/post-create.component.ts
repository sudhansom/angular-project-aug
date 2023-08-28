import { Component, Output,EventEmitter } from "@angular/core";

@Component({
  selector: 'app-post-create',
  templateUrl:'./post-create.component.html',
  styleUrls:['./post-create.component.scss'],
})

export class PostCreateComponent {
  enteredTitle = '';
  enteredContent='';
  @Output() postCreated = new EventEmitter<{title: string, content: string}>();

  onAddPost(){
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    console.log(post)
    this.postCreated.emit(post);
  }

}
