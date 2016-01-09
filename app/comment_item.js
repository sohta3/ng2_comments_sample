System.register(['angular2/core', './comment'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, comment_1;
    var CommentItem;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (comment_1_1) {
                comment_1 = comment_1_1;
            }],
        execute: function() {
            CommentItem = (function () {
                function CommentItem() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', comment_1.Comment)
                ], CommentItem.prototype, "comment", void 0);
                CommentItem = __decorate([
                    core_1.Component({
                        selector: 'comment-item',
                        template: "\n    <div class=\"commentItem item\">\n      <div class=\"content\">\n\t\t  <div class=\"commentAuthor header\">{{ comment.author }}</div>\n\t\t  <div class=\"description\">{{ comment.text }}</div>\n      </div>\n    </div>\n    ",
                        styles: ["\n\t.commentItem {\n\t  margin-bottom: 20px;\n\t}\n  "],
                    }), 
                    __metadata('design:paramtypes', [])
                ], CommentItem);
                return CommentItem;
            })();
            exports_1("CommentItem", CommentItem);
        }
    }
});
//# sourceMappingURL=comment_item.js.map