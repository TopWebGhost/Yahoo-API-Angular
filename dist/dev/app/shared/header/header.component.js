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
var header_state_service_1 = require("./state/header-state.service");
var subscriptions_1 = require("../../core/subscriptions");
var HeaderComponent = (function (_super) {
    __extends(HeaderComponent, _super);
    function HeaderComponent(headerState) {
        var _this = _super.call(this) || this;
        _this.headerState = headerState;
        _this.subscriptions.push(headerState.searchActive$.subscribe(function (searchActive) { return _this.searchActiveChange(searchActive); }));
        _this.subscriptions.push(headerState.sidebar$.subscribe(function (sidebar) { return _this.sidebar = sidebar; }));
        return _this;
    }
    HeaderComponent.prototype.updateSearch = function (value) {
        this.headerState.changeSearch(value);
    };
    HeaderComponent.prototype.activateSearch = function (active) {
        this.headerState.changeSearchActive(active);
    };
    HeaderComponent.prototype.showSidebar = function () {
        this.headerState.changeSidebar(true);
    };
    HeaderComponent.prototype.toggleSearch = function (active) {
        this.headerState.changeSearchActive(active);
    };
    HeaderComponent.prototype.searchActiveChange = function (searchActive) {
        this.active = searchActive;
        if (searchActive && !this.sidebar) {
            this.searchFromContent = true;
            this.headerState.changeSidebar(true);
        }
        else if (!searchActive && this.searchFromContent) {
            this.searchFromContent = false;
            if (this.sidebar) {
                this.headerState.changeSidebar(false);
            }
        }
    };
    return HeaderComponent;
}(subscriptions_1.Subscriptions));
HeaderComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'mp-header',
        templateUrl: 'header.component.html',
        styleUrls: ['header.component.css'],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [header_state_service_1.HeaderStateService])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTZEO0FBQzdELHFFQUFrRTtBQUNsRSwwREFBeUQ7QUFVekQsSUFBYSxlQUFlO0lBQVMsbUNBQWE7SUFLaEQseUJBQW9CLFdBQThCO1FBQWxELFlBQ0UsaUJBQU8sU0FRUjtRQVRtQixpQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFFaEQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQ3pELFVBQUEsWUFBWSxJQUFJLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxFQUFyQyxDQUFxQyxDQUN0RCxDQUFDLENBQUM7UUFFSCxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FDcEQsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBdEIsQ0FBc0IsQ0FDbEMsQ0FBQyxDQUFDOztJQUNMLENBQUM7SUFFRCxzQ0FBWSxHQUFaLFVBQWEsS0FBWTtRQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsd0NBQWMsR0FBZCxVQUFlLE1BQWM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQscUNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxzQ0FBWSxHQUFaLFVBQWEsTUFBYztRQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFTyw0Q0FBa0IsR0FBMUIsVUFBMkIsWUFBb0I7UUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7UUFFM0IsRUFBRSxDQUFDLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztZQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztZQUMvQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQTdDQSxBQTZDQyxDQTdDb0MsNkJBQWEsR0E2Q2pEO0FBN0NZLGVBQWU7SUFSM0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUUsdUJBQXVCO1FBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1FBQ25DLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO0tBQ3RDLENBQUM7cUNBT2dDLHlDQUFrQjtHQUx2QyxlQUFlLENBNkMzQjtBQTdDWSwwQ0FBZSIsImZpbGUiOiJhcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVhZGVyU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi9zdGF0ZS9oZWFkZXItc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb25zIH0gZnJvbSAnLi4vLi4vY29yZS9zdWJzY3JpcHRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbXAtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICdoZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnaGVhZGVyLmNvbXBvbmVudC5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcblxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCBleHRlbmRzIFN1YnNjcmlwdGlvbnMge1xuICBhY3RpdmU6Ym9vbGVhbjtcbiAgc2lkZWJhcjpib29sZWFuO1xuICBwcml2YXRlIHNlYXJjaEZyb21Db250ZW50OmJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBoZWFkZXJTdGF0ZTpIZWFkZXJTdGF0ZVNlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKGhlYWRlclN0YXRlLnNlYXJjaEFjdGl2ZSQuc3Vic2NyaWJlKFxuICAgICAgc2VhcmNoQWN0aXZlID0+IHRoaXMuc2VhcmNoQWN0aXZlQ2hhbmdlKHNlYXJjaEFjdGl2ZSlcbiAgICApKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKGhlYWRlclN0YXRlLnNpZGViYXIkLnN1YnNjcmliZShcbiAgICAgIHNpZGViYXIgPT4gdGhpcy5zaWRlYmFyID0gc2lkZWJhclxuICAgICkpO1xuICB9XG5cbiAgdXBkYXRlU2VhcmNoKHZhbHVlOnN0cmluZykge1xuICAgIHRoaXMuaGVhZGVyU3RhdGUuY2hhbmdlU2VhcmNoKHZhbHVlKTtcbiAgfVxuXG4gIGFjdGl2YXRlU2VhcmNoKGFjdGl2ZTpib29sZWFuKSB7XG4gICAgdGhpcy5oZWFkZXJTdGF0ZS5jaGFuZ2VTZWFyY2hBY3RpdmUoYWN0aXZlKTtcbiAgfVxuXG4gIHNob3dTaWRlYmFyKCkge1xuICAgIHRoaXMuaGVhZGVyU3RhdGUuY2hhbmdlU2lkZWJhcih0cnVlKTtcbiAgfVxuXG4gIHRvZ2dsZVNlYXJjaChhY3RpdmU6Ym9vbGVhbikge1xuICAgIHRoaXMuaGVhZGVyU3RhdGUuY2hhbmdlU2VhcmNoQWN0aXZlKGFjdGl2ZSk7XG4gIH1cblxuICBwcml2YXRlIHNlYXJjaEFjdGl2ZUNoYW5nZShzZWFyY2hBY3RpdmU6Ym9vbGVhbikge1xuICAgIHRoaXMuYWN0aXZlID0gc2VhcmNoQWN0aXZlO1xuXG4gICAgaWYgKHNlYXJjaEFjdGl2ZSAmJiAhdGhpcy5zaWRlYmFyKSB7XG4gICAgICB0aGlzLnNlYXJjaEZyb21Db250ZW50ID0gdHJ1ZTtcbiAgICAgIHRoaXMuaGVhZGVyU3RhdGUuY2hhbmdlU2lkZWJhcih0cnVlKTtcbiAgICB9IGVsc2UgaWYgKCFzZWFyY2hBY3RpdmUgJiYgdGhpcy5zZWFyY2hGcm9tQ29udGVudCkge1xuICAgICAgdGhpcy5zZWFyY2hGcm9tQ29udGVudCA9IGZhbHNlO1xuICAgICAgaWYgKHRoaXMuc2lkZWJhcikge1xuICAgICAgICB0aGlzLmhlYWRlclN0YXRlLmNoYW5nZVNpZGViYXIoZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19
