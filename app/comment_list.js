System.register(['angular2/core', './comment_item'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, comment_item_1;
    var CommentList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (comment_item_1_1) {
                comment_item_1 = comment_item_1_1;
            }],
        execute: function() {
            CommentList = (function () {
                function CommentList() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], CommentList.prototype, "comments", void 0);
                CommentList = __decorate([
                    core_1.Component({
                        selector: 'comment-list',
                        template: "\n\t\t<div class=\"commentList ui divided items\">\n\t\t  <comment-item *ngFor=\"#comment of comments\" [comment]=\"comment\"></comment-item>\n\t\t</div>\n\t",
                        directives: [comment_item_1.CommentItem]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CommentList);
                return CommentList;
            })();
            exports_1("CommentList", CommentList);
        }
    }
});
//# sourceMappingURL=comment_list.js.map