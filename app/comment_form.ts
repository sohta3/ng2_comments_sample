import {Component, Output, EventEmitter} from 'angular2/core';
import {CommentService} from './comment_service';
import {Comment} from './comment';

@Component({
	selector: 'comment-form',
	template: `
	<div class="commentForm">
	  <input type="text" [(ngModel)]="author" (change)="handleAuthorChange()" placeholder="Your name" />
	  <input type="text" [(ngModel)]="text" (change)="handleTextChange()" placeholder="Say something..." />
	  <input type="submit" value="Post" (click)="handleSubmit()" />
	</div>
	`,
	styles: [`
	.commentForm {
	  margin-top: 50px;
	}
  `],
})
export class CommentForm {
	@Output() addComment = new EventEmitter();

	author = "真田幸村";
	text   = "真田丸できました。";

	constructor(private _commentService: CommentService) {
	}

	handleAuthorChange(): void {
		console.log('[CommentForm] handleAuthorChange');
	}

	handleTextChange(): void {
		console.log('[CommentForm] handleTextChange');
	}

	handleSubmit(): void {
		console.log('[CommentForm] handleSubmit');

		if (!this.text || !this.author) {
			return;
		}

		this._commentService.add(new Comment({author: this.author, text: this.text}));
		this.text = '';
		this.author = '';

		this.addComment.emit("added");
	}
}

