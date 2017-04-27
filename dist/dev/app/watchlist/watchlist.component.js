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
var header_state_service_1 = require("../shared/header/state/header-state.service");
var subscriptions_1 = require("../core/subscriptions");
var WatchlistComponent = (function (_super) {
    __extends(WatchlistComponent, _super);
    function WatchlistComponent(headerState) {
        var _this = _super.call(this) || this;
        _this.headerState = headerState;
        _this.subscriptions.push(headerState.sidebar$.subscribe(function (sidebar) { return _this.sidebar = sidebar; }));
        return _this;
    }
    return WatchlistComponent;
}(subscriptions_1.Subscriptions));
WatchlistComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'mp-watchlist',
        templateUrl: 'watchlist.component.html',
        styleUrls: ['watchlist.component.css']
    }),
    __metadata("design:paramtypes", [header_state_service_1.HeaderStateService])
], WatchlistComponent);
exports.WatchlistComponent = WatchlistComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3Qvd2F0Y2hsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFDMUMsb0ZBQWlGO0FBQ2pGLHVEQUFzRDtBQVN0RCxJQUFhLGtCQUFrQjtJQUFTLHNDQUFhO0lBR25ELDRCQUFvQixXQUE4QjtRQUFsRCxZQUNFLGlCQUFPLFNBSVI7UUFMbUIsaUJBQVcsR0FBWCxXQUFXLENBQW1CO1FBRWhELEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUNwRCxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUF0QixDQUFzQixDQUNsQyxDQUFDLENBQUM7O0lBQ0wsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FUQSxBQVNDLENBVHVDLDZCQUFhLEdBU3BEO0FBVFksa0JBQWtCO0lBUDlCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGNBQWM7UUFDeEIsV0FBVyxFQUFFLDBCQUEwQjtRQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztLQUN2QyxDQUFDO3FDQUtnQyx5Q0FBa0I7R0FIdkMsa0JBQWtCLENBUzlCO0FBVFksZ0RBQWtCIiwiZmlsZSI6ImFwcC93YXRjaGxpc3Qvd2F0Y2hsaXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVhZGVyU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2hlYWRlci9zdGF0ZS9oZWFkZXItc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb25zIH0gZnJvbSAnLi4vY29yZS9zdWJzY3JpcHRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbXAtd2F0Y2hsaXN0JyxcbiAgdGVtcGxhdGVVcmw6ICd3YXRjaGxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnd2F0Y2hsaXN0LmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFdhdGNobGlzdENvbXBvbmVudCBleHRlbmRzIFN1YnNjcmlwdGlvbnMge1xuICBzaWRlYmFyOmJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBoZWFkZXJTdGF0ZTpIZWFkZXJTdGF0ZVNlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKGhlYWRlclN0YXRlLnNpZGViYXIkLnN1YnNjcmliZShcbiAgICAgIHNpZGViYXIgPT4gdGhpcy5zaWRlYmFyID0gc2lkZWJhclxuICAgICkpO1xuICB9XG59XG4iXX0=
