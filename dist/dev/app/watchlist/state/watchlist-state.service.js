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
var index_1 = require("../../core/index");
var index_2 = require("./index");
require("rxjs/add/operator/let");
var WatchlistStateService = (function (_super) {
    __extends(WatchlistStateService, _super);
    function WatchlistStateService(store$, actions) {
        var _this = _super.call(this, store$) || this;
        _this.store$ = store$;
        _this.actions = actions;
        _this.stockData$ = store$.let(_this.getState('watchlist', index_2.WatchlistStateKeys.StockData));
        _this.stock$ = store$.let(_this.getState('watchlist', index_2.WatchlistStateKeys.Stock));
        _this.favorites$ = store$.let(_this.getState('watchlist', index_2.WatchlistStateKeys.Favorites));
        _this.highlights$ = store$.let(_this.getState('watchlist', index_2.WatchlistStateKeys.Highlights));
        return _this;
    }
    WatchlistStateService.prototype.changeStockData = function (data) {
        this.store$.dispatch(this.actions.changeStockData(data));
    };
    WatchlistStateService.prototype.changeStock = function (stock) {
        this.store$.dispatch(this.actions.changeStock(stock));
    };
    WatchlistStateService.prototype.addFavorite = function (favorite) {
        this.store$.dispatch(this.actions.addFavorite(favorite));
    };
    WatchlistStateService.prototype.deleteFavorites = function (favorites) {
        this.store$.dispatch(this.actions.deleteFavorites(favorites));
    };
    WatchlistStateService.prototype.changeHighlights = function (highlights) {
        this.store$.dispatch(this.actions.changeHighlights(highlights));
    };
    return WatchlistStateService;
}(index_1.CoreStateService));
WatchlistStateService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store,
        index_2.WatchlistActions])
], WatchlistStateService);
exports.WatchlistStateService = WatchlistStateService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3Qvc3RhdGUvd2F0Y2hsaXN0LXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLHFDQUFvQztBQUVwQywwQ0FBb0Q7QUFDcEQsaUNBSWlCO0FBQ2pCLGlDQUErQjtBQUcvQixJQUFhLHFCQUFxQjtJQUFTLHlDQUFnQjtJQU16RCwrQkFBc0IsTUFBaUIsRUFDbkIsT0FBd0I7UUFENUMsWUFFRSxrQkFBTSxNQUFNLENBQUMsU0FLZDtRQVBxQixZQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ25CLGFBQU8sR0FBUCxPQUFPLENBQWlCO1FBRTFDLEtBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSwwQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSwwQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQy9FLEtBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSwwQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLEtBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSwwQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOztJQUMzRixDQUFDO0lBRUQsK0NBQWUsR0FBZixVQUFnQixJQUF1QjtRQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCwyQ0FBVyxHQUFYLFVBQVksS0FBWTtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCwyQ0FBVyxHQUFYLFVBQVksUUFBZTtRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCwrQ0FBZSxHQUFmLFVBQWdCLFNBQWtCO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELGdEQUFnQixHQUFoQixVQUFpQixVQUFjO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQWxDQSxBQWtDQyxDQWxDMEMsd0JBQWdCLEdBa0MxRDtBQWxDWSxxQkFBcUI7SUFEakMsaUJBQVUsRUFBRTtxQ0FPa0IsYUFBSztRQUNOLHdCQUFnQjtHQVBqQyxxQkFBcUIsQ0FrQ2pDO0FBbENZLHNEQUFxQiIsImZpbGUiOiJhcHAvd2F0Y2hsaXN0L3N0YXRlL3dhdGNobGlzdC1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IENvcmVTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcbmltcG9ydCB7XG4gIFdhdGNobGlzdEFjdGlvbnMsXG4gIFdhdGNobGlzdFN0YXRlS2V5cyxcbiAgU3RvY2tEYXRhSW50ZXJmYWNlXG59IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9sZXQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2F0Y2hsaXN0U3RhdGVTZXJ2aWNlIGV4dGVuZHMgQ29yZVN0YXRlU2VydmljZSB7XG4gIHN0b2NrRGF0YSQ6T2JzZXJ2YWJsZTxTdG9ja0RhdGFJbnRlcmZhY2U+O1xuICBzdG9jayQ6T2JzZXJ2YWJsZTxzdHJpbmc+O1xuICBmYXZvcml0ZXMkOk9ic2VydmFibGU8c3RyaW5nW10+O1xuICBoaWdobGlnaHRzJDpPYnNlcnZhYmxlPGFueT47XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlJDpTdG9yZTxhbnk+LFxuICAgICAgICAgICAgICBwcml2YXRlIGFjdGlvbnM6V2F0Y2hsaXN0QWN0aW9ucykge1xuICAgIHN1cGVyKHN0b3JlJCk7XG4gICAgdGhpcy5zdG9ja0RhdGEkID0gc3RvcmUkLmxldCh0aGlzLmdldFN0YXRlKCd3YXRjaGxpc3QnLCBXYXRjaGxpc3RTdGF0ZUtleXMuU3RvY2tEYXRhKSk7XG4gICAgdGhpcy5zdG9jayQgPSBzdG9yZSQubGV0KHRoaXMuZ2V0U3RhdGUoJ3dhdGNobGlzdCcsIFdhdGNobGlzdFN0YXRlS2V5cy5TdG9jaykpO1xuICAgIHRoaXMuZmF2b3JpdGVzJCA9IHN0b3JlJC5sZXQodGhpcy5nZXRTdGF0ZSgnd2F0Y2hsaXN0JywgV2F0Y2hsaXN0U3RhdGVLZXlzLkZhdm9yaXRlcykpO1xuICAgIHRoaXMuaGlnaGxpZ2h0cyQgPSBzdG9yZSQubGV0KHRoaXMuZ2V0U3RhdGUoJ3dhdGNobGlzdCcsIFdhdGNobGlzdFN0YXRlS2V5cy5IaWdobGlnaHRzKSk7XG4gIH1cblxuICBjaGFuZ2VTdG9ja0RhdGEoZGF0YTpTdG9ja0RhdGFJbnRlcmZhY2UpIHtcbiAgICB0aGlzLnN0b3JlJC5kaXNwYXRjaCh0aGlzLmFjdGlvbnMuY2hhbmdlU3RvY2tEYXRhKGRhdGEpKTtcbiAgfVxuXG4gIGNoYW5nZVN0b2NrKHN0b2NrOnN0cmluZykge1xuICAgIHRoaXMuc3RvcmUkLmRpc3BhdGNoKHRoaXMuYWN0aW9ucy5jaGFuZ2VTdG9jayhzdG9jaykpO1xuICB9XG5cbiAgYWRkRmF2b3JpdGUoZmF2b3JpdGU6c3RyaW5nKSB7XG4gICAgdGhpcy5zdG9yZSQuZGlzcGF0Y2godGhpcy5hY3Rpb25zLmFkZEZhdm9yaXRlKGZhdm9yaXRlKSk7XG4gIH1cblxuICBkZWxldGVGYXZvcml0ZXMoZmF2b3JpdGVzOnN0cmluZ1tdKSB7XG4gICAgdGhpcy5zdG9yZSQuZGlzcGF0Y2godGhpcy5hY3Rpb25zLmRlbGV0ZUZhdm9yaXRlcyhmYXZvcml0ZXMpKTtcbiAgfVxuXG4gIGNoYW5nZUhpZ2hsaWdodHMoaGlnaGxpZ2h0czphbnkpIHtcbiAgICB0aGlzLnN0b3JlJC5kaXNwYXRjaCh0aGlzLmFjdGlvbnMuY2hhbmdlSGlnaGxpZ2h0cyhoaWdobGlnaHRzKSk7XG4gIH1cbn1cbiJdfQ==
