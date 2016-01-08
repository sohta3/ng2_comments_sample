export class Comment {
	id: number;
	author: string;
	text: string;

	constructor(params: any) {
		this.id     = params.id;
		this.author = params.author;
		this.text   = params.text;
	}
}
