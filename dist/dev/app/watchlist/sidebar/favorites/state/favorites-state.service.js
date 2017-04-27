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
var index_1 = require("../../../../core/index");
var index_2 = require("./index");
require("rxjs/add/operator/let");
var FavoritesStateService = (function (_super) {
    __extends(FavoritesStateService, _super);
    function FavoritesStateService(store$, actions) {
        var _this = _super.call(this, store$, 'favorites', actions) || this;
        _this.store$ = store$;
        _this.actions = actions;
        _this.order$ = store$.let(_this.getState(_this.stateName, index_2.FavoritesStateKeys.Order));
        return _this;
    }
    FavoritesStateService.prototype.changeOrder = function (order) {
        this.store$.dispatch(this.actions.changeOrder(order));
    };
    FavoritesStateService.prototype.sortData = function () {
        this.store$.dispatch(this.actions.sortData());
    };
    return FavoritesStateService;
}(index_1.CoreApiStateService));
FavoritesStateService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store,
        index_2.FavoritesActions])
], FavoritesStateService);
exports.FavoritesStateService = FavoritesStateService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3Qvc2lkZWJhci9mYXZvcml0ZXMvc3RhdGUvZmF2b3JpdGVzLXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLHFDQUFvQztBQUVwQyxnREFBNkQ7QUFDN0QsaUNBR2lCO0FBQ2pCLGlDQUErQjtBQUcvQixJQUFhLHFCQUFxQjtJQUFTLHlDQUFtQjtJQUc1RCwrQkFBbUIsTUFBaUIsRUFDakIsT0FBeUI7UUFENUMsWUFFRSxrQkFBTSxNQUFNLEVBQUUsV0FBVyxFQUFFLE9BQU8sQ0FBQyxTQUVwQztRQUprQixZQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLGFBQU8sR0FBUCxPQUFPLENBQWtCO1FBRTFDLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUUsMEJBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7SUFDcEYsQ0FBQztJQUVELDJDQUFXLEdBQVgsVUFBWSxLQUFjO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsQ0FoQjBDLDJCQUFtQixHQWdCN0Q7QUFoQlkscUJBQXFCO0lBRGpDLGlCQUFVLEVBQUU7cUNBSWUsYUFBSztRQUNILHdCQUFnQjtHQUpqQyxxQkFBcUIsQ0FnQmpDO0FBaEJZLHNEQUFxQiIsImZpbGUiOiJhcHAvd2F0Y2hsaXN0L3NpZGViYXIvZmF2b3JpdGVzL3N0YXRlL2Zhdm9yaXRlcy1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IENvcmVBcGlTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2luZGV4JztcbmltcG9ydCB7XG4gIEZhdm9yaXRlc0FjdGlvbnMsXG4gIEZhdm9yaXRlc1N0YXRlS2V5c1xufSBmcm9tICcuL2luZGV4JztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbGV0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhdm9yaXRlc1N0YXRlU2VydmljZSBleHRlbmRzIENvcmVBcGlTdGF0ZVNlcnZpY2Uge1xuICBvcmRlciQ6T2JzZXJ2YWJsZTxzdHJpbmdbXT47XG5cbiAgY29uc3RydWN0b3IocHVibGljIHN0b3JlJDpTdG9yZTxhbnk+LFxuICAgICAgICAgICAgICBwdWJsaWMgYWN0aW9uczogRmF2b3JpdGVzQWN0aW9ucykge1xuICAgIHN1cGVyKHN0b3JlJCwgJ2Zhdm9yaXRlcycsIGFjdGlvbnMpO1xuICAgIHRoaXMub3JkZXIkID0gc3RvcmUkLmxldCh0aGlzLmdldFN0YXRlKHRoaXMuc3RhdGVOYW1lLCBGYXZvcml0ZXNTdGF0ZUtleXMuT3JkZXIpKTtcbiAgfVxuXG4gIGNoYW5nZU9yZGVyKG9yZGVyOnN0cmluZ1tdKSB7XG4gICAgdGhpcy5zdG9yZSQuZGlzcGF0Y2godGhpcy5hY3Rpb25zLmNoYW5nZU9yZGVyKG9yZGVyKSk7XG4gIH1cblxuICBzb3J0RGF0YSgpIHtcbiAgICB0aGlzLnN0b3JlJC5kaXNwYXRjaCh0aGlzLmFjdGlvbnMuc29ydERhdGEoKSk7XG4gIH1cbn1cbiJdfQ==
