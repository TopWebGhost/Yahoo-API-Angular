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
var http_1 = require("@angular/http");
var index_1 = require("../../../core/index");
var index_2 = require("./state/index");
var SearchApiService = (function (_super) {
    __extends(SearchApiService, _super);
    function SearchApiService(http, searchState) {
        var _this = _super.call(this, http, searchState) || this;
        _this.http = http;
        _this.searchState = searchState;
        return _this;
    }
    SearchApiService.prototype.load = function (stock, config) {
        var _this = this;
        if (config === void 0) { config = index_1.Config; }
        this.stock = stock;
        this.toggleLoader(true);
        if (config.env === 'PROD') {
            this.post(config.paths.proxy, 'url=' + encodeURIComponent(config.paths.search.replace('$stock', encodeURIComponent(stock))))
                .subscribe(function (data) { return _this.complete(_this.transform(data)); }, function () { return _this.failed(); });
        }
        else {
            this.get(config.paths.search)
                .subscribe(function (data) { return _this.complete(_this.transform(data)); }, function () { return _this.failed(); });
        }
    };
    SearchApiService.prototype.reload = function () {
        this.load(this.stock);
    };
    SearchApiService.prototype.transform = function (data) {
        return _.get(data, 'data.items', []);
    };
    return SearchApiService;
}(index_1.CoreApiResponseService));
SearchApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        index_2.SearchStateService])
], SearchApiService);
exports.SearchApiService = SearchApiService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3Qvc2lkZWJhci9zZWFyY2gvc2VhcmNoLWFwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBcUM7QUFDckMsNkNBSTZCO0FBQzdCLHVDQUFtRDtBQUluRCxJQUFhLGdCQUFnQjtJQUFTLG9DQUFzQjtJQUcxRCwwQkFBbUIsSUFBUyxFQUNSLFdBQThCO1FBRGxELFlBRUUsa0JBQU0sSUFBSSxFQUFFLFdBQVcsQ0FBQyxTQUN6QjtRQUhrQixVQUFJLEdBQUosSUFBSSxDQUFLO1FBQ1IsaUJBQVcsR0FBWCxXQUFXLENBQW1COztJQUVsRCxDQUFDO0lBRUQsK0JBQUksR0FBSixVQUFLLEtBQVksRUFBRSxNQUErQjtRQUFsRCxpQkFnQkM7UUFoQmtCLHVCQUFBLEVBQUEsdUJBQStCO1FBQ2hELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN6SCxTQUFTLENBQ1IsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBbkMsQ0FBbUMsRUFDM0MsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLEVBQUUsRUFBYixDQUFhLENBQ3BCLENBQUM7UUFDTixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2lCQUMxQixTQUFTLENBQ1IsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBbkMsQ0FBbUMsRUFDM0MsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLEVBQUUsRUFBYixDQUFhLENBQ3BCLENBQUM7UUFDTixDQUFDO0lBQ0gsQ0FBQztJQUVELGlDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRU8sb0NBQVMsR0FBakIsVUFBa0IsSUFBUTtRQUN4QixNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDSCx1QkFBQztBQUFELENBakNBLEFBaUNDLENBakNxQyw4QkFBc0IsR0FpQzNEO0FBakNZLGdCQUFnQjtJQUQ1QixpQkFBVSxFQUFFO3FDQUlhLFdBQUk7UUFDSSwwQkFBa0I7R0FKdkMsZ0JBQWdCLENBaUM1QjtBQWpDWSw0Q0FBZ0IiLCJmaWxlIjoiYXBwL3dhdGNobGlzdC9zaWRlYmFyL3NlYXJjaC9zZWFyY2gtYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQge1xuICBDb25maWcsXG4gIENvbmZpZ0ludGVyZmFjZSxcbiAgQ29yZUFwaVJlc3BvbnNlU2VydmljZVxufSBmcm9tICcuLi8uLi8uLi9jb3JlL2luZGV4JztcbmltcG9ydCB7IFNlYXJjaFN0YXRlU2VydmljZSB9IGZyb20gJy4vc3RhdGUvaW5kZXgnO1xuZGVjbGFyZSBsZXQgXzphbnk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWFyY2hBcGlTZXJ2aWNlIGV4dGVuZHMgQ29yZUFwaVJlc3BvbnNlU2VydmljZSB7XG4gIHByaXZhdGUgc3RvY2s6c3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOkh0dHAsXG4gICAgICAgICAgICAgIHByaXZhdGUgc2VhcmNoU3RhdGU6U2VhcmNoU3RhdGVTZXJ2aWNlKSB7XG4gICAgc3VwZXIoaHR0cCwgc2VhcmNoU3RhdGUpO1xuICB9XG5cbiAgbG9hZChzdG9jazpzdHJpbmcsIGNvbmZpZzpDb25maWdJbnRlcmZhY2UgPSBDb25maWcpIHtcbiAgICB0aGlzLnN0b2NrID0gc3RvY2s7XG4gICAgdGhpcy50b2dnbGVMb2FkZXIodHJ1ZSk7XG4gICAgaWYgKGNvbmZpZy5lbnYgPT09ICdQUk9EJykge1xuICAgICAgdGhpcy5wb3N0KGNvbmZpZy5wYXRocy5wcm94eSwgJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGNvbmZpZy5wYXRocy5zZWFyY2gucmVwbGFjZSgnJHN0b2NrJywgZW5jb2RlVVJJQ29tcG9uZW50KHN0b2NrKSkpKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIGRhdGEgPT4gdGhpcy5jb21wbGV0ZSh0aGlzLnRyYW5zZm9ybShkYXRhKSksXG4gICAgICAgICAgKCkgPT4gdGhpcy5mYWlsZWQoKVxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdldChjb25maWcucGF0aHMuc2VhcmNoKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIGRhdGEgPT4gdGhpcy5jb21wbGV0ZSh0aGlzLnRyYW5zZm9ybShkYXRhKSksXG4gICAgICAgICAgKCkgPT4gdGhpcy5mYWlsZWQoKVxuICAgICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpIHtcbiAgICB0aGlzLmxvYWQodGhpcy5zdG9jayk7XG4gIH1cblxuICBwcml2YXRlIHRyYW5zZm9ybShkYXRhOmFueSk6YW55W10ge1xuICAgIHJldHVybiBfLmdldChkYXRhLCAnZGF0YS5pdGVtcycsIFtdKTtcbiAgfVxufVxuIl19
