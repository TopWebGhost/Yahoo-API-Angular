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
var api_state_1 = require("./api.state");
var state_service_1 = require("./state.service");
require("rxjs/add/operator/let");
require("rxjs/add/operator/map");
require("rxjs/add/operator/distinctUntilChanged");
var CoreApiStateService = (function (_super) {
    __extends(CoreApiStateService, _super);
    function CoreApiStateService(store$, stateName, actions) {
        var _this = _super.call(this, store$) || this;
        _this.store$ = store$;
        _this.stateName = stateName;
        _this.actions = actions;
        _this.data$ = store$.let(_this.getState(stateName, api_state_1.CoreApiStateKeys.Data));
        _this.loader$ = store$.let(_this.getState(stateName, api_state_1.CoreApiStateKeys.Loader));
        _this.error$ = store$.let(_this.getState(stateName, api_state_1.CoreApiStateKeys.Error));
        return _this;
    }
    CoreApiStateService.prototype.fetchFulfilled = function (data) {
        this.store$.dispatch(this.actions.fetchFulfilled(data));
    };
    CoreApiStateService.prototype.fetchLoader = function (loader) {
        this.store$.dispatch(this.actions.fetchLoader(loader));
    };
    CoreApiStateService.prototype.fetchError = function (error) {
        this.store$.dispatch(this.actions.fetchError(error));
    };
    return CoreApiStateService;
}(state_service_1.CoreStateService));
CoreApiStateService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store, String, Object])
], CoreApiStateService);
exports.CoreApiStateService = CoreApiStateService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL3N0YXRlL2FwaS1zdGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxxQ0FBb0M7QUFFcEMseUNBQStEO0FBQy9ELGlEQUFtRDtBQUNuRCxpQ0FBK0I7QUFDL0IsaUNBQStCO0FBQy9CLGtEQUFnRDtBQUdoRCxJQUFhLG1CQUFtQjtJQUFTLHVDQUFnQjtJQUt2RCw2QkFBc0IsTUFBaUIsRUFDakIsU0FBZ0IsRUFDaEIsT0FBVztRQUZqQyxZQUdFLGtCQUFNLE1BQU0sQ0FBQyxTQUlkO1FBUHFCLFlBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsZUFBUyxHQUFULFNBQVMsQ0FBTztRQUNoQixhQUFPLEdBQVAsT0FBTyxDQUFJO1FBRS9CLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSw0QkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLEtBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSw0QkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzdFLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSw0QkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOztJQUM3RSxDQUFDO0lBRUQsNENBQWMsR0FBZCxVQUFlLElBQVU7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQseUNBQVcsR0FBWCxVQUFZLE1BQWM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsd0NBQVUsR0FBVixVQUFXLEtBQW9CO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0F6QkEsQUF5QkMsQ0F6QndDLGdDQUFnQixHQXlCeEQ7QUF6QlksbUJBQW1CO0lBRC9CLGlCQUFVLEVBQUU7cUNBTWtCLGFBQUs7R0FMdkIsbUJBQW1CLENBeUIvQjtBQXpCWSxrREFBbUIiLCJmaWxlIjoiYXBwL2NvcmUvc3RhdGUvYXBpLXN0YXRlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgQ29yZUFwaVN0YXRlS2V5cywgRXJyb3JJbnRlcmZhY2UgfSBmcm9tICcuL2FwaS5zdGF0ZSc7XG5pbXBvcnQgeyBDb3JlU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi9zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbGV0JztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGlzdGluY3RVbnRpbENoYW5nZWQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29yZUFwaVN0YXRlU2VydmljZSBleHRlbmRzIENvcmVTdGF0ZVNlcnZpY2Uge1xuICBkYXRhJDpPYnNlcnZhYmxlPGFueVtdPjtcbiAgbG9hZGVyJDpPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBlcnJvciQ6T2JzZXJ2YWJsZTxFcnJvckludGVyZmFjZT47XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlJDpTdG9yZTxhbnk+LFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgc3RhdGVOYW1lOnN0cmluZyxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIGFjdGlvbnM6YW55KSB7XG4gICAgc3VwZXIoc3RvcmUkKTtcbiAgICB0aGlzLmRhdGEkID0gc3RvcmUkLmxldCh0aGlzLmdldFN0YXRlKHN0YXRlTmFtZSwgQ29yZUFwaVN0YXRlS2V5cy5EYXRhKSk7XG4gICAgdGhpcy5sb2FkZXIkID0gc3RvcmUkLmxldCh0aGlzLmdldFN0YXRlKHN0YXRlTmFtZSwgQ29yZUFwaVN0YXRlS2V5cy5Mb2FkZXIpKTtcbiAgICB0aGlzLmVycm9yJCA9IHN0b3JlJC5sZXQodGhpcy5nZXRTdGF0ZShzdGF0ZU5hbWUsIENvcmVBcGlTdGF0ZUtleXMuRXJyb3IpKTtcbiAgfVxuXG4gIGZldGNoRnVsZmlsbGVkKGRhdGE6YW55W10pIHtcbiAgICB0aGlzLnN0b3JlJC5kaXNwYXRjaCh0aGlzLmFjdGlvbnMuZmV0Y2hGdWxmaWxsZWQoZGF0YSkpO1xuICB9XG5cbiAgZmV0Y2hMb2FkZXIobG9hZGVyOmJvb2xlYW4pIHtcbiAgICB0aGlzLnN0b3JlJC5kaXNwYXRjaCh0aGlzLmFjdGlvbnMuZmV0Y2hMb2FkZXIobG9hZGVyKSk7XG4gIH1cblxuICBmZXRjaEVycm9yKGVycm9yOkVycm9ySW50ZXJmYWNlKSB7XG4gICAgdGhpcy5zdG9yZSQuZGlzcGF0Y2godGhpcy5hY3Rpb25zLmZldGNoRXJyb3IoZXJyb3IpKTtcbiAgfVxufVxuIl19
