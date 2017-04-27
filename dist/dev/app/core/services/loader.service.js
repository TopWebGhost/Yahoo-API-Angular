"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var LoaderService = (function () {
    function LoaderService(http) {
        this.http = http;
        this.options = new http_1.RequestOptions({
            headers: new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' })
        });
    }
    LoaderService.prototype.get = function (url) {
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error); });
    };
    LoaderService.prototype.post = function (url, params) {
        return this.http.post(url, params, this.options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error); });
    };
    return LoaderService;
}());
LoaderService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LoaderService);
exports.LoaderService = LoaderService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL3NlcnZpY2VzL2xvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUt1QjtBQUN2Qiw4Q0FBNkM7QUFDN0MsaUNBQStCO0FBQy9CLG1DQUFpQztBQUNqQyxxQ0FBbUM7QUFHbkMsSUFBYSxhQUFhO0lBR3hCLHVCQUFzQixJQUFTO1FBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQztZQUNoQyxPQUFPLEVBQUUsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUUsbUNBQW1DLEVBQUMsQ0FBQztTQUM1RSxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsMkJBQUcsR0FBSCxVQUFJLEdBQVU7UUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO2FBQ3RCLEdBQUcsQ0FBQyxVQUFDLEdBQVksSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDakMsS0FBSyxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsNEJBQUksR0FBSixVQUFLLEdBQVUsRUFBRSxNQUFVO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDN0MsR0FBRyxDQUFDLFVBQUMsR0FBWSxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUNqQyxLQUFLLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDSCxvQkFBQztBQUFELENBcEJBLEFBb0JDLElBQUE7QUFwQlksYUFBYTtJQUR6QixpQkFBVSxFQUFFO3FDQUlnQixXQUFJO0dBSHBCLGFBQWEsQ0FvQnpCO0FBcEJZLHNDQUFhIiwiZmlsZSI6ImFwcC9jb3JlL3NlcnZpY2VzL2xvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cCxcbiAgUmVzcG9uc2UsXG4gIEhlYWRlcnMsXG4gIFJlcXVlc3RPcHRpb25zXG59IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2FkZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBvcHRpb25zOlJlcXVlc3RPcHRpb25zO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBodHRwOkh0dHApIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe1xuICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ30pXG4gICAgfSk7XG4gIH1cblxuICBnZXQodXJsOnN0cmluZyk6T2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybClcbiAgICAgIC5tYXAoKHJlczpSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IpKTtcbiAgfVxuXG4gIHBvc3QodXJsOnN0cmluZywgcGFyYW1zOmFueSk6T2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIHBhcmFtcywgdGhpcy5vcHRpb25zKVxuICAgICAgLm1hcCgocmVzOlJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpO1xuICB9XG59XG4iXX0=
