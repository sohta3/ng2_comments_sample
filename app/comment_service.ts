import {Injectable} from 'angular2/core';
import {Comment} from './comment';

@Injectable()
export class CommentService {
	comments = [
		new Comment({id: 1, author: "Pete Hunt", text: "This is one comment"}),
		new Comment({id: 2, author: "Jordan Walke", text: "This is *another* comment"})
	];

	constructor() {
	}

	fetchComments() {
		console.log('[CommentService] fetchComments');
		return Promise.resolve(this.comments);
	}

	add(comment:Comment) {
		this.comments.push(comment);
		console.log(this.comments)
	}
}