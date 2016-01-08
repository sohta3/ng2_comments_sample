System.register(['angular2/platform/browser', './comment_box'], function(exports_1) {
    var browser_1, comment_box_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (comment_box_1_1) {
                comment_box_1 = comment_box_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(comment_box_1.CommentBox);
        }
    }
});
//# sourceMappingURL=boot.js.map