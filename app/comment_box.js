System.register(['angular2/core', './comment_list', './comment_form', './comment_service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, comment_list_1, comment_form_1, comment_service_1;
    var CommentBox;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (comment_list_1_1) {
                comment_list_1 = comment_list_1_1;
            },
            function (comment_form_1_1) {
                comment_form_1 = comment_form_1_1;
            },
            function (comment_service_1_1) {
                comment_service_1 = comment_service_1_1;
            }],
        execute: function() {
            CommentBox = (function () {
                function CommentBox(_commentService) {
                    this._commentService = _commentService;
                    //comments = [
                    //	new Comment({id: 1, author: "Pete Hunt", text: "This is one comment"}),
                    //	new Comment({id: 2, author: "Jordan Walke", text: "This is *another* comment"})
                    //];
                    this.comments = [];
                }
                CommentBox.prototype.fetchComments = function () {
                    var _this = this;
                    this._commentService.fetchComments().then(function (comments) { return _this.comments = comments; });
                };
                CommentBox.prototype.ngOnInit = function () {
                    this.fetchComments();
                };
                CommentBox.prototype.onAddComment = function (params) {
                    console.log('[CommentBox] onAddComment');
                    console.log(params);
                    this.fetchComments();
                    console.log(this.comments);
                };
                CommentBox = __decorate([
                    core_1.Component({
                        selector: 'comment-box',
                        template: "\n\t\t<div class=\"commentBox ui container\">\n\t\t\t<h1>Comments</h1>\n\t\t\t<comment-list [comments]=\"comments\"></comment-list>\n\t\t\t<comment-form (addComment)=\"onAddComment()\"></comment-form>\n\t\t</div>\n\t",
                        directives: [comment_list_1.CommentList, comment_form_1.CommentForm],
                        providers: [comment_service_1.CommentService]
                    }), 
                    __metadata('design:paramtypes', [comment_service_1.CommentService])
                ], CommentBox);
                return CommentBox;
            })();
            exports_1("CommentBox", CommentBox);
        }
    }
});
//# sourceMappingURL=comment_box.js.map