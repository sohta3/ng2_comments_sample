System.register(['angular2/core', './comment_service', './comment'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, comment_service_1, comment_1;
    var CommentForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (comment_service_1_1) {
                comment_service_1 = comment_service_1_1;
            },
            function (comment_1_1) {
                comment_1 = comment_1_1;
            }],
        execute: function() {
            CommentForm = (function () {
                function CommentForm(_commentService) {
                    this._commentService = _commentService;
                    this.addComment = new core_1.EventEmitter();
                    this.author = "真田幸村";
                    this.text = "真田丸できました。";
                }
                CommentForm.prototype.handleAuthorChange = function () {
                    console.log('[CommentForm] handleAuthorChange');
                };
                CommentForm.prototype.handleTextChange = function () {
                    console.log('[CommentForm] handleTextChange');
                };
                CommentForm.prototype.handleSubmit = function () {
                    console.log('[CommentForm] handleSubmit');
                    if (!this.text || !this.author) {
                        return;
                    }
                    this._commentService.add(new comment_1.Comment({ author: this.author, text: this.text }));
                    this.text = '';
                    this.author = '';
                    this.addComment.emit("added");
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], CommentForm.prototype, "addComment", void 0);
                CommentForm = __decorate([
                    core_1.Component({
                        selector: 'comment-form',
                        template: "\n\t<div class=\"commentForm\">\n\t  <input type=\"text\" [(ngModel)]=\"author\" (change)=\"handleAuthorChange()\" placeholder=\"Your name\" />\n\t  <input type=\"text\" [(ngModel)]=\"text\" (change)=\"handleTextChange()\" placeholder=\"Say something...\" />\n\t  <input type=\"submit\" value=\"Post\" (click)=\"handleSubmit()\" />\n\t</div>\n\t",
                        styles: ["\n\t.commentForm {\n\t  margin-top: 50px;\n\t}\n  "],
                    }), 
                    __metadata('design:paramtypes', [comment_service_1.CommentService])
                ], CommentForm);
                return CommentForm;
            })();
            exports_1("CommentForm", CommentForm);
        }
    }
});
//# sourceMappingURL=comment_form.js.map