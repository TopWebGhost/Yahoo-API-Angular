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
var ChartStateService = (function (_super) {
    __extends(ChartStateService, _super);
    function ChartStateService(store$, actions) {
        var _this = _super.call(this, store$, 'chart', actions) || this;
        _this.store$ = store$;
        _this.actions = actions;
        _this.point$ = store$.let(_this.getState(_this.stateName, index_2.ChartStateKeys.Point));
        _this.range$ = store$.let(_this.getState(_this.stateName, index_2.ChartStateKeys.Range));
        return _this;
    }
    ChartStateService.prototype.changePoint = function (point) {
        this.store$.dispatch(this.actions.changePoint(point));
    };
    ChartStateService.prototype.changeRange = function (range) {
        this.store$.dispatch(this.actions.changeRange(range));
    };
    return ChartStateService;
}(index_1.CoreApiStateService));
ChartStateService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store,
        index_2.ChartActions])
], ChartStateService);
exports.ChartStateService = ChartStateService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3QvY29udGVudC9jaGFydC9zdGF0ZS9jaGFydC1zdGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxxQ0FBb0M7QUFFcEMsZ0RBQTZEO0FBQzdELGlDQUlpQjtBQUNqQixpQ0FBK0I7QUFHL0IsSUFBYSxpQkFBaUI7SUFBUyxxQ0FBbUI7SUFJeEQsMkJBQW1CLE1BQWlCLEVBQ2pCLE9BQW9CO1FBRHZDLFlBRUUsa0JBQU0sTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsU0FHaEM7UUFMa0IsWUFBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixhQUFPLEdBQVAsT0FBTyxDQUFhO1FBRXJDLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUUsc0JBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzlFLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUUsc0JBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOztJQUNoRixDQUFDO0lBRUQsdUNBQVcsR0FBWCxVQUFZLEtBQXdCO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELHVDQUFXLEdBQVgsVUFBWSxLQUFZO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FsQkEsQUFrQkMsQ0FsQnNDLDJCQUFtQixHQWtCekQ7QUFsQlksaUJBQWlCO0lBRDdCLGlCQUFVLEVBQUU7cUNBS2UsYUFBSztRQUNKLG9CQUFZO0dBTDVCLGlCQUFpQixDQWtCN0I7QUFsQlksOENBQWlCIiwiZmlsZSI6ImFwcC93YXRjaGxpc3QvY29udGVudC9jaGFydC9zdGF0ZS9jaGFydC1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IENvcmVBcGlTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2luZGV4JztcbmltcG9ydCB7XG4gIENoYXJ0QWN0aW9ucyxcbiAgQ2hhcnRTdGF0ZUtleXMsXG4gIENoYXJ0RGF0YUludGVyZmFjZVxufSBmcm9tICcuL2luZGV4JztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbGV0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENoYXJ0U3RhdGVTZXJ2aWNlIGV4dGVuZHMgQ29yZUFwaVN0YXRlU2VydmljZSB7XG4gIHBvaW50JDpPYnNlcnZhYmxlPENoYXJ0RGF0YUludGVyZmFjZT47XG4gIHJhbmdlJDpPYnNlcnZhYmxlPHN0cmluZz47XG5cbiAgY29uc3RydWN0b3IocHVibGljIHN0b3JlJDpTdG9yZTxhbnk+LFxuICAgICAgICAgICAgICBwdWJsaWMgYWN0aW9uczpDaGFydEFjdGlvbnMpIHtcbiAgICBzdXBlcihzdG9yZSQsICdjaGFydCcsIGFjdGlvbnMpO1xuICAgIHRoaXMucG9pbnQkID0gc3RvcmUkLmxldCh0aGlzLmdldFN0YXRlKHRoaXMuc3RhdGVOYW1lLCBDaGFydFN0YXRlS2V5cy5Qb2ludCkpO1xuICAgIHRoaXMucmFuZ2UkID0gc3RvcmUkLmxldCh0aGlzLmdldFN0YXRlKHRoaXMuc3RhdGVOYW1lLCBDaGFydFN0YXRlS2V5cy5SYW5nZSkpO1xuICB9XG5cbiAgY2hhbmdlUG9pbnQocG9pbnQ6Q2hhcnREYXRhSW50ZXJmYWNlKSB7XG4gICAgdGhpcy5zdG9yZSQuZGlzcGF0Y2godGhpcy5hY3Rpb25zLmNoYW5nZVBvaW50KHBvaW50KSk7XG4gIH1cblxuICBjaGFuZ2VSYW5nZShyYW5nZTpzdHJpbmcpIHtcbiAgICB0aGlzLnN0b3JlJC5kaXNwYXRjaCh0aGlzLmFjdGlvbnMuY2hhbmdlUmFuZ2UocmFuZ2UpKTtcbiAgfVxufVxuIl19
