import {Component} from 'angular2/core';
import {CommentItem} from './comment_item';
import {Comment} from './comment';

@Component({
	selector: 'comment-list',
	template: `
		<div class="commentList ui divided items">
		  <comment-item *ngFor="#comment of comments" [comment]="comment"></comment-item>
		</div>
	`,
	inputs: ['comments'],
	directives: [CommentItem]
})
export class CommentList {
	comments: Comment[];
}

