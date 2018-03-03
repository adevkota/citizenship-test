webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app-header/app-header.component.css":
/***/ (function(module, exports) {

module.exports = "header {\r\n    position: relative;\r\n    max-height: 60px;\r\n    overflow: hidden;\r\n    padding: 10px;\r\n    border-bottom: 1px solid #eee;\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n\r\nheader img {\r\n    height: 40px;\r\n    width: auto;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\nheader .quick-links {\r\n    /* position: absolute; */\r\n    bottom: 0;\r\n    right: 10px;\r\n}\r\n\r\n.header-text{\r\n    margin-right: 10px;\r\n}\r\n\r\n.contributor,\r\n.credits{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.contributor{\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n\r\n.contributor>a{\r\n    padding-right:10px;\r\n}\r\n\r\n@media only screen and (max-device-width: 480px) {\r\n    header .header-text {\r\n        display: none;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/app-header/app-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <img src=\"assets/favicon/favicon.png\">\r\n    <div class=\"credits\">\r\n      <span class=\"header-text\">Citizenship Test by</span>\r\n      <span>\r\n        <div class=\"contributor\">\r\n          <a href=\"https://www.twitter.com/bhagatparwinder\" target=\"_blank\">@bhagatparwinder</a>\r\n          <span class=\"quick-links\">\r\n            (\r\n            <a href=\"https://github.com/bhagatparwinder\" target=\"_blank\">Github</a> |\r\n            <a href=\"https://www.linkedin.com/in/bhagatparwinder\" target=\"_blank\">LinkedIn</a> \r\n            )\r\n          </span>\r\n        </div>\r\n        <div class=\"contributor\">\r\n          <span>tosh sharma</span> \r\n          <span class=\"quick-links\">\r\n            (\r\n            <a href=\"https://github.com/adevkota\" target=\"_blank\">Github</a> |\r\n            <a href=\"https://www.linkedin.com/in/tosh-sharma\" target=\"_blank\">LinkedIn</a> \r\n            )\r\n          </span>\r\n        </div>\r\n  \r\n      </span>\r\n    </div>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/app-header/app-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppHeaderComponent = (function () {
    function AppHeaderComponent() {
    }
    AppHeaderComponent.prototype.ngOnInit = function () {
    };
    return AppHeaderComponent;
}());
AppHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("./src/app/app-header/app-header.component.html"),
        styles: [__webpack_require__("./src/app/app-header/app-header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppHeaderComponent);

//# sourceMappingURL=app-header.component.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".app-meat {\r\n    width: 400px;\r\n    padding: 20px;\r\n    margin: 20px auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"app-meat\">\r\n    <app-question></app-question>\r\n    <app-feedback></app-feedback>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_header_app_header_component__ = __webpack_require__("./src/app/app-header/app-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feedback_feedback_component__ = __webpack_require__("./src/app/feedback/feedback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__question_question_component__ = __webpack_require__("./src/app/question/question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__score_score_component__ = __webpack_require__("./src/app/score/score.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_data_service_data_service__ = __webpack_require__("./src/app/shared/data-service/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_1__app_header_app_header_component__["a" /* AppHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_5__question_question_component__["a" /* QuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_3__feedback_feedback_component__["a" /* FeedbackComponent */],
            __WEBPACK_IMPORTED_MODULE_6__score_score_component__["a" /* ScoreComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__shared_data_service_data_service__["a" /* DataService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/feedback/feedback.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feedback/feedback.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  {{data.isCurrentSelectionTrue? 'Correct' : 'Incorrect'}} Answer\r\n  <app-score [tally]=\"data\"></app-score>\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/feedback/feedback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_service_data_service__ = __webpack_require__("./src/app/shared/data-service/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedbackComponent = (function () {
    function FeedbackComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.data = {};
        try {
            this.dataService.getResultSubject().subscribe(function (data) { return _this.handleResultUpdate(data); });
        }
        catch (err) {
            console.log(err);
        }
    }
    FeedbackComponent.prototype.ngOnInit = function () {
        this.dataService.sendNewResult();
    };
    FeedbackComponent.prototype.handleResultUpdate = function (data) {
        this.data = data;
    };
    return FeedbackComponent;
}());
FeedbackComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-feedback',
        template: __webpack_require__("./src/app/feedback/feedback.component.html"),
        styles: [__webpack_require__("./src/app/feedback/feedback.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_service_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_service_data_service__["a" /* DataService */]) === "function" && _a || Object])
], FeedbackComponent);

var _a;
//# sourceMappingURL=feedback.component.js.map

/***/ }),

/***/ "./src/app/question/question.component.css":
/***/ (function(module, exports) {

module.exports = ".question {\r\n    overflow: hidden;\r\n}\r\n\r\n.question-container {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.question-desc {\r\n    font-weight: bold;\r\n}\r\n\r\n.answer {\r\n    border-bottom: 1px solid #eee;\r\n    padding: 20px;\r\n    cursor: pointer;\r\n    background-image: -webkit-gradient(linear, right top, left top, from(transparent), color-stop(50%, transparent), color-stop(50%, #00c6ff), to(#00c6ff));\r\n    background-image: linear-gradient(to left, transparent, transparent 50%, #00c6ff 50%, #00c6ff);\r\n    background-position: 100% 0;\r\n    background-size: 200% 100%;\r\n    /* transition: all .15s ease-in; */\r\n}\r\n\r\n.answer:hover {\r\n    background-position: 0 0;\r\n    color: #ffffff;\r\n}\r\n\r\n.answer-id {\r\n    border: 2px solid #eee;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    height: 30px;\r\n    width: 30px;\r\n    padding: 3px;\r\n    text-align: center;\r\n    display: inline-block;\r\n    margin-right: 10px;\r\n}\r\n\r\nbutton {\r\n    background: #00c6ff;\r\n    color: #ffffff;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    margin-top: 10px;\r\n    border: none;\r\n}\r\n\r\n.button-group{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\nbutton.right{\r\n    margin-left: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/question/question.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"question\">\r\n    <div class=\"question-container\">Question {{question.id}}:\r\n        <span class=\"question-desc\">{{question.desc}}</span>\r\n    </div>\r\n    <div (click)=\"handleAnswerClick($event)\">\r\n        <div  class=\"answer\" *ngFor=\"let answer of question.choices\" [attr.data-answer-id]=\"answer.id\">\r\n            <span class=\"answer-id\">{{answer.id}}</span>\r\n            <span class=\"answer-desc\">{{answer.desc}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"button-group\">\r\n        <button *ngIf=\"question.id > 1\" (click)=\"prevQuestion()\">< Prev </button>\r\n        <button class=\"right\" *ngIf=\"!isLast\" (click)=\"nextQuestion()\">Next ></button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/question/question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_service_data_service__ = __webpack_require__("./src/app/shared/data-service/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionComponent = (function () {
    function QuestionComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.question = {};
        try {
            this.dataService.getQuestionSubject().subscribe(function (data) { return _this.handleQuestions(data); });
        }
        catch (err) {
            console.log(err);
        }
    }
    QuestionComponent.prototype.ngOnInit = function () {
        this.dataService.sendQuestion({ next: true });
    };
    QuestionComponent.prototype.handleQuestions = function (data) {
        this.question = data.question || {};
        this.isLast = data.isLast;
    };
    QuestionComponent.prototype.nextQuestion = function () {
        this.dataService.sendQuestion({ next: true });
    };
    QuestionComponent.prototype.prevQuestion = function () {
        this.dataService.sendQuestion({ next: false });
    };
    QuestionComponent.prototype.handleAnswerClick = function ($event) {
        var selectedChoice = $event.target.closest('.answer').dataset['answerId'];
        var isCorrectAnswer = this.question.correctChoices.indexOf(selectedChoice) >= 0;
        this.dataService.updateResults({ id: this.question.id, isCorrectAnswer: isCorrectAnswer });
    };
    return QuestionComponent;
}());
QuestionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-question',
        template: __webpack_require__("./src/app/question/question.component.html"),
        styles: [__webpack_require__("./src/app/question/question.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_service_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_service_data_service__["a" /* DataService */]) === "function" && _a || Object])
], QuestionComponent);

var _a;
//# sourceMappingURL=question.component.js.map

/***/ }),

/***/ "./src/app/score/score.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/score/score.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n    {{tally.correctTotal}} correct answers\r\n    <br> {{tally.incorrectTotal}} incorrect answers\r\n    <br> Total score: {{tally.correctTotal}}/{{tally.total}} ({{tally.correctTotal*100/tally.total}}%)\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/score/score.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScoreComponent = (function () {
    function ScoreComponent() {
    }
    ScoreComponent.prototype.ngOnInit = function () {
    };
    return ScoreComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ScoreComponent.prototype, "tally", void 0);
ScoreComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-score',
        template: __webpack_require__("./src/app/score/score.component.html"),
        styles: [__webpack_require__("./src/app/score/score.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ScoreComponent);

//# sourceMappingURL=score.component.js.map

/***/ }),

/***/ "./src/app/shared/data-service/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataService = (function () {
    function DataService() {
        this.questionsSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.resultSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.currentQuestion = -1;
        this.correctTotal = 0;
        this.incorrectTotal = 0;
        this.questions = this.initQuestions();
        this.attemptedQuestions = {};
    }
    DataService.prototype.getQuestionSubject = function () {
        return this.questionsSubject.asObservable();
    };
    DataService.prototype.sendQuestion = function (_a) {
        var next = _a.next;
        if (!!next) {
            this.currentQuestion++;
        }
        else {
            this.currentQuestion--;
        }
        this.questionsSubject.next({
            question: this.questions[this.currentQuestion],
            isLast: this.currentQuestion === this.questions.length - 1
        });
    };
    DataService.prototype.getResultSubject = function () {
        return this.resultSubject.asObservable();
    };
    DataService.prototype.sendNewResult = function () {
        this.resultSubject.next({
            isCurrentSelectionTrue: this.isCurrentSelectionTrue,
            correctTotal: this.correctTotal,
            incorrectTotal: this.incorrectTotal,
            total: this.questions.length
        });
    };
    DataService.prototype.updateResults = function (_a) {
        var _this = this;
        var id = _a.id, isCorrectAnswer = _a.isCorrectAnswer;
        this.attemptedQuestions[id] = isCorrectAnswer;
        this.isCurrentSelectionTrue = isCorrectAnswer;
        this.correctTotal = Object.keys(this.attemptedQuestions)
            .filter(function (key) {
            return _this.attemptedQuestions[key] === true;
        })
            .length;
        this.incorrectTotal = Object.keys(this.attemptedQuestions).length - this.correctTotal;
        this.sendNewResult();
    };
    DataService.prototype.initQuestions = function () {
        return [
            {
                id: 1,
                desc: 'Name one U.S. territory?',
                choices: [{
                        id: 'A',
                        desc: 'Bermuda'
                    },
                    {
                        id: 'B',
                        desc: 'Guam'
                    },
                    {
                        id: 'C',
                        desc: 'Cayman Islands'
                    },
                    {
                        id: 'D',
                        desc: 'Haiti'
                    }
                ],
                correctChoices: 'B'
            },
            {
                id: 2,
                desc: 'What is the supreme law of the land?',
                choices: [{
                        id: 'A',
                        desc: 'Constitution'
                    },
                    {
                        id: 'B',
                        desc: 'Bill Of Rights'
                    },
                    {
                        id: 'C',
                        desc: 'Supreme Court'
                    },
                    {
                        id: 'D',
                        desc: 'Declaration of Independence'
                    }
                ],
                correctChoices: 'A'
            },
            {
                id: 3,
                desc: ' What does the Constitution do?',
                choices: [{
                        id: 'A',
                        desc: 'Sets up the government'
                    },
                    {
                        id: 'B',
                        desc: 'Defines the government'
                    },
                    {
                        id: 'C',
                        desc: 'Protects basic rights of Americans'
                    },
                    {
                        id: 'D',
                        desc: 'Declaration of Independence'
                    }
                ],
                correctChoices: 'ABC'
            },
        ];
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], DataService);

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map