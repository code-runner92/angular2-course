System.register(['angular2/core', './article'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, article_1;
    var AppComponent, ARTICLES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (article_1_1) {
                article_1 = article_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'articles',
                        templateUrl: 'app/app.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            ARTICLES = [
                new article_1.Article('Bootstrap', 'http://getbootstrap.com/', 'Foundation is a family of responsive front-end frameworks that make it easy to design.', 'http://bower.io/img/bower-logo.png'),
                new article_1.Article('Bootstrap', 'http://getbootstrap.com/', 'Foundation is a family of responsive front-end frameworks that make it easy to design.', 'http://bower.io/img/bower-logo.png'),
                new article_1.Article('Bootstrap', 'http://getbootstrap.com/', 'Foundation is a family of responsive front-end frameworks that make it easy to design.', 'http://bower.io/img/bower-logo.png'),
            ];
        }
    }
});
//# sourceMappingURL=app.component.js.map