System.register([], function(exports_1) {
    var Comment;
    return {
        setters:[],
        execute: function() {
            Comment = (function () {
                function Comment(params) {
                    this.id = params.id;
                    this.author = params.author;
                    this.text = params.text;
                }
                return Comment;
            })();
            exports_1("Comment", Comment);
        }
    }
});
//# sourceMappingURL=comment.js.map