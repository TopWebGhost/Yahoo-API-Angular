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
var index_1 = require("../../../core/index");
var index_2 = require("./index");
require("rxjs/add/operator/let");
var HeaderStateService = (function (_super) {
    __extends(HeaderStateService, _super);
    function HeaderStateService(store$, actions) {
        var _this = _super.call(this, store$) || this;
        _this.store$ = store$;
        _this.actions = actions;
        _this.searchActive$ = store$.let(_this.getState('header', index_2.HeaderStateKeys.SearchActive));
        _this.search$ = store$.let(_this.getState('header', index_2.HeaderStateKeys.Search));
        _this.sidebar$ = store$.let(_this.getState('header', index_2.HeaderStateKeys.Sidebar));
        return _this;
    }
    HeaderStateService.prototype.changeSearchActive = function (searchActive) {
        this.store$.dispatch(this.actions.changeSearchActive(searchActive));
    };
    HeaderStateService.prototype.changeSearch = function (search) {
        this.store$.dispatch(this.actions.changeSearch(search));
    };
    HeaderStateService.prototype.changeSidebar = function (sidebar) {
        this.store$.dispatch(this.actions.changeSidebar(sidebar));
    };
    return HeaderStateService;
}(index_1.CoreStateService));
HeaderStateService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store,
        index_2.HeaderActions])
], HeaderStateService);
exports.HeaderStateService = HeaderStateService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvaGVhZGVyL3N0YXRlL2hlYWRlci1zdGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxxQ0FBb0M7QUFFcEMsNkNBQXVEO0FBQ3ZELGlDQUdpQjtBQUNqQixpQ0FBK0I7QUFHL0IsSUFBYSxrQkFBa0I7SUFBUyxzQ0FBZ0I7SUFLdEQsNEJBQW1CLE1BQWlCLEVBQ2hCLE9BQXNCO1FBRDFDLFlBRUUsa0JBQU0sTUFBTSxDQUFDLFNBSWQ7UUFOa0IsWUFBTSxHQUFOLE1BQU0sQ0FBVztRQUNoQixhQUFPLEdBQVAsT0FBTyxDQUFlO1FBRXhDLEtBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSx1QkFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDdkYsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLHVCQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMzRSxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsdUJBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOztJQUMvRSxDQUFDO0lBRUQsK0NBQWtCLEdBQWxCLFVBQW1CLFlBQW9CO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQseUNBQVksR0FBWixVQUFhLE1BQWE7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsMENBQWEsR0FBYixVQUFjLE9BQWU7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQXhCQSxBQXdCQyxDQXhCdUMsd0JBQWdCLEdBd0J2RDtBQXhCWSxrQkFBa0I7SUFEOUIsaUJBQVUsRUFBRTtxQ0FNZSxhQUFLO1FBQ0YscUJBQWE7R0FOL0Isa0JBQWtCLENBd0I5QjtBQXhCWSxnREFBa0IiLCJmaWxlIjoiYXBwL3NoYXJlZC9oZWFkZXIvc3RhdGUvaGVhZGVyLXN0YXRlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgQ29yZVN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvaW5kZXgnO1xuaW1wb3J0IHtcbiAgSGVhZGVyQWN0aW9ucyxcbiAgSGVhZGVyU3RhdGVLZXlzXG59IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9sZXQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSGVhZGVyU3RhdGVTZXJ2aWNlIGV4dGVuZHMgQ29yZVN0YXRlU2VydmljZSB7XG4gIHNlYXJjaEFjdGl2ZSQ6T2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgc2VhcmNoJDpPYnNlcnZhYmxlPHN0cmluZz47XG4gIHNpZGViYXIkOk9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IocHVibGljIHN0b3JlJDpTdG9yZTxhbnk+LFxuICAgICAgICAgICAgICBwcml2YXRlIGFjdGlvbnM6IEhlYWRlckFjdGlvbnMpIHtcbiAgICBzdXBlcihzdG9yZSQpO1xuICAgIHRoaXMuc2VhcmNoQWN0aXZlJCA9IHN0b3JlJC5sZXQodGhpcy5nZXRTdGF0ZSgnaGVhZGVyJywgSGVhZGVyU3RhdGVLZXlzLlNlYXJjaEFjdGl2ZSkpO1xuICAgIHRoaXMuc2VhcmNoJCA9IHN0b3JlJC5sZXQodGhpcy5nZXRTdGF0ZSgnaGVhZGVyJywgSGVhZGVyU3RhdGVLZXlzLlNlYXJjaCkpO1xuICAgIHRoaXMuc2lkZWJhciQgPSBzdG9yZSQubGV0KHRoaXMuZ2V0U3RhdGUoJ2hlYWRlcicsIEhlYWRlclN0YXRlS2V5cy5TaWRlYmFyKSk7XG4gIH1cblxuICBjaGFuZ2VTZWFyY2hBY3RpdmUoc2VhcmNoQWN0aXZlOmJvb2xlYW4pIHtcbiAgICB0aGlzLnN0b3JlJC5kaXNwYXRjaCh0aGlzLmFjdGlvbnMuY2hhbmdlU2VhcmNoQWN0aXZlKHNlYXJjaEFjdGl2ZSkpO1xuICB9XG5cbiAgY2hhbmdlU2VhcmNoKHNlYXJjaDpzdHJpbmcpIHtcbiAgICB0aGlzLnN0b3JlJC5kaXNwYXRjaCh0aGlzLmFjdGlvbnMuY2hhbmdlU2VhcmNoKHNlYXJjaCkpO1xuICB9XG5cbiAgY2hhbmdlU2lkZWJhcihzaWRlYmFyOmJvb2xlYW4pIHtcbiAgICB0aGlzLnN0b3JlJC5kaXNwYXRjaCh0aGlzLmFjdGlvbnMuY2hhbmdlU2lkZWJhcihzaWRlYmFyKSk7XG4gIH1cbn1cbiJdfQ==
