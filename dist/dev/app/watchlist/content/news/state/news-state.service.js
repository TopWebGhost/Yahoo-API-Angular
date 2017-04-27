"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var store_1 = require("@ngrx/store");
var news_actions_1 = require("./news.actions");
var index_1 = require("../../../../core/index");
var NewsStateService = (function (_super) {
    __extends(NewsStateService, _super);
    function NewsStateService(store$, actions) {
        var _this = _super.call(this, store$, 'news', actions) || this;
        _this.store$ = store$;
        _this.actions = actions;
        return _this;
    }
    return NewsStateService;
}(index_1.CoreApiStateService));
NewsStateService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store,
        news_actions_1.NewsActions])
], NewsStateService);
exports.NewsStateService = NewsStateService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3QvY29udGVudC9uZXdzL3N0YXRlL25ld3Mtc3RhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MscUNBQW9DO0FBQ3BDLCtDQUE2QztBQUM3QyxnREFBNkQ7QUFHN0QsSUFBYSxnQkFBZ0I7SUFBUyxvQ0FBbUI7SUFDdkQsMEJBQW1CLE1BQWlCLEVBQ2pCLE9BQW9CO1FBRHZDLFlBRUUsa0JBQU0sTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsU0FDL0I7UUFIa0IsWUFBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixhQUFPLEdBQVAsT0FBTyxDQUFhOztJQUV2QyxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUxBLEFBS0MsQ0FMcUMsMkJBQW1CLEdBS3hEO0FBTFksZ0JBQWdCO0lBRDVCLGlCQUFVLEVBQUU7cUNBRWUsYUFBSztRQUNILDBCQUFXO0dBRjVCLGdCQUFnQixDQUs1QjtBQUxZLDRDQUFnQiIsImZpbGUiOiJhcHAvd2F0Y2hsaXN0L2NvbnRlbnQvbmV3cy9zdGF0ZS9uZXdzLXN0YXRlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE5ld3NBY3Rpb25zIH0gZnJvbSAnLi9uZXdzLmFjdGlvbnMnO1xuaW1wb3J0IHsgQ29yZUFwaVN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmV3c1N0YXRlU2VydmljZSBleHRlbmRzIENvcmVBcGlTdGF0ZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RvcmUkOlN0b3JlPGFueT4sXG4gICAgICAgICAgICAgIHB1YmxpYyBhY3Rpb25zOiBOZXdzQWN0aW9ucykge1xuICAgIHN1cGVyKHN0b3JlJCwgJ25ld3MnLCBhY3Rpb25zKTtcbiAgfVxufVxuIl19
