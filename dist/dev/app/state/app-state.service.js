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
var index_1 = require("../core/index");
var index_2 = require("./index");
require("rxjs/add/operator/let");
var AppStateService = (function (_super) {
    __extends(AppStateService, _super);
    function AppStateService(store$, actions) {
        var _this = _super.call(this, store$) || this;
        _this.store$ = store$;
        _this.actions = actions;
        _this.preloader$ = store$.let(_this.getState('app', index_2.AppStateKeys.Preloader));
        return _this;
    }
    AppStateService.prototype.changePreloader = function (preloader) {
        this.store$.dispatch(this.actions.changePreloader(preloader));
    };
    return AppStateService;
}(index_1.CoreStateService));
AppStateService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store,
        index_2.AppActions])
], AppStateService);
exports.AppStateService = AppStateService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdGF0ZS9hcHAtc3RhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MscUNBQW9DO0FBRXBDLHVDQUFpRDtBQUNqRCxpQ0FHaUI7QUFDakIsaUNBQStCO0FBRy9CLElBQWEsZUFBZTtJQUFTLG1DQUFnQjtJQUduRCx5QkFBbUIsTUFBaUIsRUFDaEIsT0FBbUI7UUFEdkMsWUFFRSxrQkFBTSxNQUFNLENBQUMsU0FFZDtRQUprQixZQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2hCLGFBQU8sR0FBUCxPQUFPLENBQVk7UUFFckMsS0FBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLG9CQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs7SUFDN0UsQ0FBQztJQUVELHlDQUFlLEdBQWYsVUFBZ0IsU0FBaUI7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQVpBLEFBWUMsQ0Fab0Msd0JBQWdCLEdBWXBEO0FBWlksZUFBZTtJQUQzQixpQkFBVSxFQUFFO3FDQUllLGFBQUs7UUFDRixrQkFBVTtHQUo1QixlQUFlLENBWTNCO0FBWlksMENBQWUiLCJmaWxlIjoiYXBwL3N0YXRlL2FwcC1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IENvcmVTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcbmltcG9ydCB7XG4gIEFwcEFjdGlvbnMsXG4gIEFwcFN0YXRlS2V5c1xufSBmcm9tICcuL2luZGV4JztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbGV0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwcFN0YXRlU2VydmljZSBleHRlbmRzIENvcmVTdGF0ZVNlcnZpY2Uge1xuICBwcmVsb2FkZXIkOk9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IocHVibGljIHN0b3JlJDpTdG9yZTxhbnk+LFxuICAgICAgICAgICAgICBwcml2YXRlIGFjdGlvbnM6IEFwcEFjdGlvbnMpIHtcbiAgICBzdXBlcihzdG9yZSQpO1xuICAgIHRoaXMucHJlbG9hZGVyJCA9IHN0b3JlJC5sZXQodGhpcy5nZXRTdGF0ZSgnYXBwJywgQXBwU3RhdGVLZXlzLlByZWxvYWRlcikpO1xuICB9XG5cbiAgY2hhbmdlUHJlbG9hZGVyKHByZWxvYWRlcjpib29sZWFuKSB7XG4gICAgdGhpcy5zdG9yZSQuZGlzcGF0Y2godGhpcy5hY3Rpb25zLmNoYW5nZVByZWxvYWRlcihwcmVsb2FkZXIpKTtcbiAgfVxufVxuIl19
