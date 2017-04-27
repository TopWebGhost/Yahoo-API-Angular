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
var router_1 = require("@angular/router");
var Subject_1 = require("rxjs/Subject");
var index_1 = require("./state/index");
var favorites_api_service_1 = require("./favorites-api.service");
var watchlist_state_service_1 = require("../state/watchlist-state.service");
var watchlist_state_1 = require("../state/watchlist.state");
var header_state_service_1 = require("../../shared/header/state/header-state.service");
var index_2 = require("../../core/index");
require("rxjs/add/operator/pluck");
require("rxjs/add/operator/takeUntil");
var SidebarComponent = (function (_super) {
    __extends(SidebarComponent, _super);
    function SidebarComponent(sidebarState, route, favoritesApiService, watchlistState, headerState) {
        var _this = _super.call(this) || this;
        _this.sidebarState = sidebarState;
        _this.route = route;
        _this.favoritesApiService = favoritesApiService;
        _this.watchlistState = watchlistState;
        _this.headerState = headerState;
        _this.ngOnDestroy$ = new Subject_1.Subject();
        _this.favorites = [];
        _this.subscriptions.push(watchlistState.favorites$.subscribe(function (favorites) { return _this.updateFavorites(favorites); }));
        _this.subscriptions.push(watchlistState.stock$.subscribe(function (stock) { return _this.updateStock(stock); }));
        _this.subscriptions.push(headerState.searchActive$.subscribe(function (searchActive) { return searchActive ? sidebarState.changeType(index_1.SidebarTypeEnum.Add) : sidebarState.changeType(index_1.SidebarTypeEnum.List); }));
        route.params
            .takeUntil(_this.ngOnDestroy$)
            .pluck('id')
            .distinctUntilChanged()
            .subscribe(function (id) { return watchlistState.changeStock(id); });
        return _this;
    }
    SidebarComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        this.ngOnDestroy$.next(true);
    };
    SidebarComponent.prototype.updateFavorites = function (favorites) {
        index_2.localStorageAdapter.setItem(watchlist_state_1.WatchlistStateKeys.Favorites, favorites);
        this.favorites = favorites.slice();
        this.loadFavoritesData();
    };
    SidebarComponent.prototype.updateStock = function (stock) {
        this.stock = stock;
        if (this.favorites.indexOf(this.stock) === -1) {
            this.loadFavoritesData();
        }
    };
    SidebarComponent.prototype.loadFavoritesData = function () {
        if (this.stock) {
            if (this.favorites.indexOf(this.stock) === -1) {
                this.favorites.push(this.stock);
            }
        }
        this.favoritesApiService.load(this.favorites);
    };
    return SidebarComponent;
}(index_2.Subscriptions));
SidebarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'mp-sidebar',
        templateUrl: 'sidebar.component.html',
        styleUrls: ['sidebar.component.css'],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [index_1.SidebarStateService,
        router_1.ActivatedRoute,
        favorites_api_service_1.FavoritesApiService,
        watchlist_state_service_1.WatchlistStateService,
        header_state_service_1.HeaderStateService])
], SidebarComponent);
exports.SidebarComponent = SidebarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3Qvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBd0U7QUFDeEUsMENBQWlEO0FBQ2pELHdDQUF1QztBQUN2Qyx1Q0FHdUI7QUFDdkIsaUVBQThEO0FBQzlELDRFQUF5RTtBQUN6RSw0REFBOEQ7QUFDOUQsdUZBQW9GO0FBQ3BGLDBDQUFzRTtBQUN0RSxtQ0FBaUM7QUFDakMsdUNBQXFDO0FBVXJDLElBQWEsZ0JBQWdCO0lBQVMsb0NBQWE7SUFLakQsMEJBQW1CLFlBQWdDLEVBQy9CLEtBQW9CLEVBQ3BCLG1CQUF1QyxFQUN2QyxjQUFvQyxFQUNwQyxXQUE4QjtRQUpsRCxZQUtFLGlCQUFPLFNBa0JSO1FBdkJrQixrQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDL0IsV0FBSyxHQUFMLEtBQUssQ0FBZTtRQUNwQix5QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO1FBQ3ZDLG9CQUFjLEdBQWQsY0FBYyxDQUFzQjtRQUNwQyxpQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFSMUMsa0JBQVksR0FBRyxJQUFJLGlCQUFPLEVBQVcsQ0FBQztRQUN0QyxlQUFTLEdBQVksRUFBRSxDQUFDO1FBUzlCLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUN6RCxVQUFBLFNBQVMsSUFBSSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLEVBQS9CLENBQStCLENBQzdDLENBQUMsQ0FBQztRQUVILEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUNyRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXZCLENBQXVCLENBQ2pDLENBQUMsQ0FBQztRQUVILEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUN6RCxVQUFBLFlBQVksSUFBSSxPQUFBLFlBQVksR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDLHVCQUFlLENBQUMsR0FBRyxDQUFDLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyx1QkFBZSxDQUFDLElBQUksQ0FBQyxFQUEzRyxDQUEyRyxDQUM1SCxDQUFDLENBQUM7UUFFSCxLQUFLLENBQUMsTUFBTTthQUNULFNBQVMsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDO2FBQzVCLEtBQUssQ0FBQyxJQUFJLENBQUM7YUFDWCxvQkFBb0IsRUFBRTthQUN0QixTQUFTLENBQUMsVUFBQyxFQUFTLElBQUssT0FBQSxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUM7O0lBQzlELENBQUM7SUFFRCxzQ0FBVyxHQUFYO1FBQ0UsaUJBQU0sV0FBVyxXQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVPLDBDQUFlLEdBQXZCLFVBQXdCLFNBQWtCO1FBQ3hDLDJCQUFtQixDQUFDLE9BQU8sQ0FBQyxvQ0FBa0IsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVPLHNDQUFXLEdBQW5CLFVBQW9CLEtBQVk7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMzQixDQUFDO0lBQ0gsQ0FBQztJQUVPLDRDQUFpQixHQUF6QjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2YsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLENBQUM7UUFDSCxDQUFDO1FBQ0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0F4REEsQUF3REMsQ0F4RHFDLHFCQUFhLEdBd0RsRDtBQXhEWSxnQkFBZ0I7SUFSNUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsWUFBWTtRQUN0QixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1FBQ3BDLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO0tBQ3RDLENBQUM7cUNBT2dDLDJCQUFtQjtRQUN6Qix1QkFBYztRQUNBLDJDQUFtQjtRQUN4QiwrQ0FBcUI7UUFDeEIseUNBQWtCO0dBVHZDLGdCQUFnQixDQXdENUI7QUF4RFksNENBQWdCIiwiZmlsZSI6ImFwcC93YXRjaGxpc3Qvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XG5pbXBvcnQge1xuICBTaWRlYmFyU3RhdGVTZXJ2aWNlLFxuICBTaWRlYmFyVHlwZUVudW1cbn0gZnJvbSAnLi9zdGF0ZS9pbmRleCc7XG5pbXBvcnQgeyBGYXZvcml0ZXNBcGlTZXJ2aWNlIH0gZnJvbSAnLi9mYXZvcml0ZXMtYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgV2F0Y2hsaXN0U3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vc3RhdGUvd2F0Y2hsaXN0LXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgV2F0Y2hsaXN0U3RhdGVLZXlzIH0gZnJvbSAnLi4vc3RhdGUvd2F0Y2hsaXN0LnN0YXRlJztcbmltcG9ydCB7IEhlYWRlclN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9oZWFkZXIvc3RhdGUvaGVhZGVyLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9ucywgbG9jYWxTdG9yYWdlQWRhcHRlciB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9wbHVjayc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3Rha2VVbnRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ21wLXNpZGViYXInLFxuICB0ZW1wbGF0ZVVybDogJ3NpZGViYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2lkZWJhci5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5cbmV4cG9ydCBjbGFzcyBTaWRlYmFyQ29tcG9uZW50IGV4dGVuZHMgU3Vic2NyaXB0aW9ucyBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgbmdPbkRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgcHJpdmF0ZSBmYXZvcml0ZXM6c3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBzdG9jazpzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHNpZGViYXJTdGF0ZTpTaWRlYmFyU3RhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOkFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICBwcml2YXRlIGZhdm9yaXRlc0FwaVNlcnZpY2U6RmF2b3JpdGVzQXBpU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSB3YXRjaGxpc3RTdGF0ZTpXYXRjaGxpc3RTdGF0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgaGVhZGVyU3RhdGU6SGVhZGVyU3RhdGVTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh3YXRjaGxpc3RTdGF0ZS5mYXZvcml0ZXMkLnN1YnNjcmliZShcbiAgICAgIGZhdm9yaXRlcyA9PiB0aGlzLnVwZGF0ZUZhdm9yaXRlcyhmYXZvcml0ZXMpXG4gICAgKSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh3YXRjaGxpc3RTdGF0ZS5zdG9jayQuc3Vic2NyaWJlKFxuICAgICAgc3RvY2sgPT4gdGhpcy51cGRhdGVTdG9jayhzdG9jaylcbiAgICApKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKGhlYWRlclN0YXRlLnNlYXJjaEFjdGl2ZSQuc3Vic2NyaWJlKFxuICAgICAgc2VhcmNoQWN0aXZlID0+IHNlYXJjaEFjdGl2ZSA/IHNpZGViYXJTdGF0ZS5jaGFuZ2VUeXBlKFNpZGViYXJUeXBlRW51bS5BZGQpIDogc2lkZWJhclN0YXRlLmNoYW5nZVR5cGUoU2lkZWJhclR5cGVFbnVtLkxpc3QpXG4gICAgKSk7XG5cbiAgICByb3V0ZS5wYXJhbXNcbiAgICAgIC50YWtlVW50aWwodGhpcy5uZ09uRGVzdHJveSQpXG4gICAgICAucGx1Y2soJ2lkJylcbiAgICAgIC5kaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgICAuc3Vic2NyaWJlKChpZDpzdHJpbmcpID0+IHdhdGNobGlzdFN0YXRlLmNoYW5nZVN0b2NrKGlkKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICAgIHRoaXMubmdPbkRlc3Ryb3kkLm5leHQodHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUZhdm9yaXRlcyhmYXZvcml0ZXM6c3RyaW5nW10pIHtcbiAgICBsb2NhbFN0b3JhZ2VBZGFwdGVyLnNldEl0ZW0oV2F0Y2hsaXN0U3RhdGVLZXlzLkZhdm9yaXRlcywgZmF2b3JpdGVzKTtcbiAgICB0aGlzLmZhdm9yaXRlcyA9IGZhdm9yaXRlcy5zbGljZSgpO1xuICAgIHRoaXMubG9hZEZhdm9yaXRlc0RhdGEoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU3RvY2soc3RvY2s6c3RyaW5nKSB7XG4gICAgdGhpcy5zdG9jayA9IHN0b2NrO1xuICAgIGlmICh0aGlzLmZhdm9yaXRlcy5pbmRleE9mKHRoaXMuc3RvY2spID09PSAtMSkge1xuICAgICAgdGhpcy5sb2FkRmF2b3JpdGVzRGF0YSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9hZEZhdm9yaXRlc0RhdGEoKSB7XG4gICAgaWYgKHRoaXMuc3RvY2spIHtcbiAgICAgIGlmICh0aGlzLmZhdm9yaXRlcy5pbmRleE9mKHRoaXMuc3RvY2spID09PSAtMSkge1xuICAgICAgICB0aGlzLmZhdm9yaXRlcy5wdXNoKHRoaXMuc3RvY2spO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmZhdm9yaXRlc0FwaVNlcnZpY2UubG9hZCh0aGlzLmZhdm9yaXRlcyk7XG4gIH1cbn1cbiJdfQ==
