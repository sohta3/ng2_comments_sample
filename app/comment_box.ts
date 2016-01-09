import {bootstrap} from 'angular2/platform/browser';
import {Component, Injectable, OnInit} from 'angular2/core';
import {CommentList} from './comment_list';
import {CommentForm} from './comment_form';
import {Comment} from './comment';
import {CommentService} from './comment_service';

@Component({
	selector: 'comment-box',
	template: `
		<div class="commentBox ui container">
			<h1>Comments</h1>
			<comment-list [comments]="comments"></comment-list>
			<comment-form (addComment)="onAddComment()"></comment-form>
		</div>
	`,
	directives: [CommentList, CommentForm],
	providers: [CommentService]
})
export class CommentBox implements OnInit {
	comments = [];

	constructor(private _commentService: CommentService) {
	}

	fetchComments() {
		this._commentService.fetchComments().then(comments => this.comments = comments);
	}

	ngOnInit() {
		this.fetchComments();
	}

	onAddComment(params: any) {
		console.log('[CommentBox] onAddComment')
		console.log(params);
		this.fetchComments();
		console.log(this.comments);
	}
}

