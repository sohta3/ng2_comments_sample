System.register([], function(exports_1) {
    var CommentBox;
    return {
        setters:[],
        execute: function() {
            ;
            CommentBox = (function () {
                function CommentBox(_commentService) {
                    this._commentService = _commentService;
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
                return CommentBox;
            })();
            exports_1("CommentBox", CommentBox);
        }
    }
});
//# sourceMappingURL=comment_box.js.map