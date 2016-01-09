import {Component, Input} from 'angular2/core';
import {Comment} from './comment';

@Component({
    selector: 'comment-item',
    template: `
    <div class="commentItem item">
      <div class="content">
		  <div class="commentAuthor header">{{ comment.author }}</div>
		  <div class="description">{{ comment.text }}</div>
      </div>
    </div>
    `,
    styles: [`
	.commentItem {
	  margin-bottom: 20px;
	}
  `],
})
export class CommentItem {
	@Input() comment:Comment;
	public children: string;
}
