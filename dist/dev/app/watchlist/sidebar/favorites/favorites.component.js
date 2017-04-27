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
var angular2_mdl_1 = require("angular2-mdl");
var watchlist_state_service_1 = require("../../state/watchlist-state.service");
var favorites_state_service_1 = require("./state/favorites-state.service");
var favorites_state_1 = require("./state/favorites.state");
var index_1 = require("../state/index");
var index_2 = require("../../../shared/index");
var index_3 = require("../../../core/index");
var favorites_api_service_1 = require("../favorites-api.service");
var favorites_highlight_service_1 = require("./favorites-highlight.service");
var header_state_service_1 = require("../../../shared/header/state/header-state.service");
var FavoritesComponent = (function (_super) {
    __extends(FavoritesComponent, _super);
    function FavoritesComponent(watchlistState, favoritesState, favoritesApiService, favoritesHighlightService, sidebarState, headerState, router) {
        var _this = _super.call(this, favoritesState, favoritesApiService) || this;
        _this.watchlistState = watchlistState;
        _this.favoritesState = favoritesState;
        _this.favoritesApiService = favoritesApiService;
        _this.favoritesHighlightService = favoritesHighlightService;
        _this.sidebarState = sidebarState;
        _this.headerState = headerState;
        _this.router = router;
        _this.favoritesData = [];
        _this.pillType = PillEnum[PillEnum.change];
        _this.pillIndex = PillEnum.change;
        _this.lastLoadedData = {};
        _this.favorites = [];
        _this.data = [];
        _this.subscriptions.push(watchlistState.favorites$.subscribe(function (favorites) { return _this.favorites = favorites; }));
        _this.subscriptions.push(watchlistState.stock$.subscribe(function (stock) { return _this.changeStock(stock); }));
        _this.subscriptions.push(favoritesState.data$.subscribe(function (data) { return _this.updateFavorites(data); }));
        _this.subscriptions.push(headerState.sidebar$.subscribe(function (sidebar) { return _this.sidebar = sidebar; }));
        _this.subscriptions.push(favoritesState.order$.subscribe(function (order) { return index_3.localStorageAdapter.setItem(favorites_state_1.FavoritesStateKeys.Order, order); }));
        favoritesState.sortData();
        return _this;
    }
    FavoritesComponent.prototype.add = function () {
        this.headerState.changeSearchActive(true);
    };
    FavoritesComponent.prototype.edit = function () {
        this.sidebarState.changeType(index_1.SidebarTypeEnum.Edit);
    };
    FavoritesComponent.prototype.reload = function () {
        this.cancelTimeout();
        this.favoritesApiService.reload();
    };
    FavoritesComponent.prototype.select = function (stock) {
        if (this.sidebar) {
            this.headerState.changeSidebar(false);
        }
        this.router.navigate(['/watchlist', stock]);
    };
    FavoritesComponent.prototype.togglePill = function () {
        this.pillIndex++;
        if (this.pillIndex > PillEnum.percentage) {
            this.pillIndex = PillEnum.change;
        }
        this.pillType = PillEnum[this.pillIndex];
    };
    FavoritesComponent.prototype.notificationAction = function (type) {
        _super.prototype.notificationAction.call(this, type);
        if (type === FavoriteNotificationActions.Add) {
            this.add();
        }
    };
    FavoritesComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        this.cancelTimeout();
    };
    FavoritesComponent.prototype.updateFavorites = function (data) {
        var _this = this;
        this.data = data;
        this.favoritesData = data.filter(function (item) {
            return _this.favorites.indexOf(item.symbol) !== -1;
        });
        this.watchlistState.changeHighlights(this.favoritesHighlightService.getHighlights(data, this.lastLoadedData));
        this.lastLoadedData = this.favoritesHighlightService.getLastLoadedData(data);
        setTimeout(function () {
            _this.watchlistState.changeHighlights({});
        }, 500);
        this.watchlistState.changeStockData(_.find(data, ['symbol', this.stock]) || {});
        if (this.favoritesData.length === 0) {
            this.updateNotification(index_2.NotificationTypeEnum.Notification, 'Your favorites is empty!', {
                icon: 'add',
                text: 'Add symbol',
                action: FavoriteNotificationActions.Add
            });
        }
        else {
            this.startRefresh();
        }
    };
    FavoritesComponent.prototype.changeStock = function (stock) {
        this.stock = stock;
        this.watchlistState.changeStockData(_.find(this.data, ['symbol', stock]) || {});
    };
    FavoritesComponent.prototype.cancelTimeout = function () {
        if (this.refreshTimeout) {
            clearTimeout(this.refreshTimeout);
        }
    };
    FavoritesComponent.prototype.startRefresh = function () {
        var _this = this;
        this.cancelTimeout();
        this.refreshTimeout = setTimeout(function () {
            _this.favoritesApiService.disableLoader = true;
            _this.favoritesApiService.reload();
        }, 10000);
    };
    return FavoritesComponent;
}(index_3.CoreApiNotification));
__decorate([
    core_1.ViewChild('mdlMenu'),
    __metadata("design:type", angular2_mdl_1.MdlMenuComponent)
], FavoritesComponent.prototype, "mdlMenu", void 0);
FavoritesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'mp-favorites',
        templateUrl: 'favorites.component.html',
        styleUrls: ['favorites.component.css']
    }),
    __metadata("design:paramtypes", [watchlist_state_service_1.WatchlistStateService,
        favorites_state_service_1.FavoritesStateService,
        favorites_api_service_1.FavoritesApiService,
        favorites_highlight_service_1.FavoritesHighlightService,
        index_1.SidebarStateService,
        header_state_service_1.HeaderStateService,
        router_1.Router])
], FavoritesComponent);
exports.FavoritesComponent = FavoritesComponent;
var PillEnum;
(function (PillEnum) {
    PillEnum[PillEnum["change"] = 0] = "change";
    PillEnum[PillEnum["percentage"] = 1] = "percentage";
})(PillEnum || (PillEnum = {}));
var FavoriteNotificationActions = (function () {
    function FavoriteNotificationActions() {
    }
    return FavoriteNotificationActions;
}());
FavoriteNotificationActions.Add = 'add';
exports.FavoriteNotificationActions = FavoriteNotificationActions;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3Qvc2lkZWJhci9mYXZvcml0ZXMvZmF2b3JpdGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBZ0U7QUFDaEUsMENBQXlDO0FBQ3pDLDZDQUFnRDtBQUNoRCwrRUFBNEU7QUFFNUUsMkVBQXdFO0FBQ3hFLDJEQUE2RDtBQUM3RCx3Q0FBc0U7QUFDdEUsK0NBQTZEO0FBQzdELDZDQUc2QjtBQUM3QixrRUFBK0Q7QUFDL0QsNkVBQTBFO0FBQzFFLDBGQUF1RjtBQVV2RixJQUFhLGtCQUFrQjtJQUFTLHNDQUFtQjtJQVl6RCw0QkFBbUIsY0FBb0MsRUFDcEMsY0FBb0MsRUFDbkMsbUJBQXVDLEVBQ3ZDLHlCQUFtRCxFQUNuRCxZQUFnQyxFQUNoQyxXQUE4QixFQUM5QixNQUFhO1FBTmpDLFlBT0Usa0JBQU0sY0FBYyxFQUFFLG1CQUFtQixDQUFDLFNBdUIzQztRQTlCa0Isb0JBQWMsR0FBZCxjQUFjLENBQXNCO1FBQ3BDLG9CQUFjLEdBQWQsY0FBYyxDQUFzQjtRQUNuQyx5QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO1FBQ3ZDLCtCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMEI7UUFDbkQsa0JBQVksR0FBWixZQUFZLENBQW9CO1FBQ2hDLGlCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQUM5QixZQUFNLEdBQU4sTUFBTSxDQUFPO1FBaEJqQyxtQkFBYSxHQUF3QixFQUFFLENBQUM7UUFFeEMsY0FBUSxHQUFVLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsZUFBUyxHQUFVLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFHbkMsb0JBQWMsR0FBTyxFQUFFLENBQUM7UUFDeEIsZUFBUyxHQUFZLEVBQUUsQ0FBQztRQUN4QixVQUFJLEdBQXdCLEVBQUUsQ0FBQztRQVdyQyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxD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SVksZ0RBQWtCO0FBcUkvQixJQUFLLFFBR0o7QUFIRCxXQUFLLFFBQVE7SUFDWCwyQ0FBTSxDQUFBO0lBQ04sbURBQVUsQ0FBQTtBQUNaLENBQUMsRUFISSxRQUFRLEtBQVIsUUFBUSxRQUdaO0FBRUQ7SUFBQTtJQUVBLENBQUM7SUFBRCxrQ0FBQztBQUFELENBRkEsQUFFQztBQURRLCtCQUFHLEdBQUcsS0FBSyxDQUFDO0FBRFIsa0VBQTJCIiwiZmlsZSI6ImFwcC93YXRjaGxpc3Qvc2lkZWJhci9mYXZvcml0ZXMvZmF2b3JpdGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNZGxNZW51Q29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjItbWRsJztcbmltcG9ydCB7IFdhdGNobGlzdFN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3N0YXRlL3dhdGNobGlzdC1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IFN0b2NrRGF0YUludGVyZmFjZSB9IGZyb20gJy4uLy4uL3N0YXRlL3dhdGNobGlzdC5zdGF0ZSc7XG5pbXBvcnQgeyBGYXZvcml0ZXNTdGF0ZVNlcnZpY2UgfSBmcm9tICcuL3N0YXRlL2Zhdm9yaXRlcy1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IEZhdm9yaXRlc1N0YXRlS2V5cyB9IGZyb20gJy4vc3RhdGUvZmF2b3JpdGVzLnN0YXRlJztcbmltcG9ydCB7IFNpZGViYXJTdGF0ZVNlcnZpY2UsIFNpZGViYXJUeXBlRW51bSB9IGZyb20gJy4uL3N0YXRlL2luZGV4JztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblR5cGVFbnVtIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7XG4gIENvcmVBcGlOb3RpZmljYXRpb24sXG4gIGxvY2FsU3RvcmFnZUFkYXB0ZXJcbn0gZnJvbSAnLi4vLi4vLi4vY29yZS9pbmRleCc7XG5pbXBvcnQgeyBGYXZvcml0ZXNBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vZmF2b3JpdGVzLWFwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEZhdm9yaXRlc0hpZ2hsaWdodFNlcnZpY2UgfSBmcm9tICcuL2Zhdm9yaXRlcy1oaWdobGlnaHQuc2VydmljZSc7XG5pbXBvcnQgeyBIZWFkZXJTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaGVhZGVyL3N0YXRlL2hlYWRlci1zdGF0ZS5zZXJ2aWNlJztcbmRlY2xhcmUgbGV0IF86YW55O1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdtcC1mYXZvcml0ZXMnLFxuICB0ZW1wbGF0ZVVybDogJ2Zhdm9yaXRlcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmYXZvcml0ZXMuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgRmF2b3JpdGVzQ29tcG9uZW50IGV4dGVuZHMgQ29yZUFwaU5vdGlmaWNhdGlvbiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoJ21kbE1lbnUnKW1kbE1lbnU6TWRsTWVudUNvbXBvbmVudDtcbiAgZmF2b3JpdGVzRGF0YTpTdG9ja0RhdGFJbnRlcmZhY2VbXSA9IFtdO1xuICBzdG9jazpzdHJpbmc7XG4gIHBpbGxUeXBlOnN0cmluZyA9IFBpbGxFbnVtW1BpbGxFbnVtLmNoYW5nZV07XG4gIHByaXZhdGUgcGlsbEluZGV4Om51bWJlciA9IFBpbGxFbnVtLmNoYW5nZTtcbiAgcHJpdmF0ZSBzaWRlYmFyOmJvb2xlYW47XG4gIHByaXZhdGUgcmVmcmVzaFRpbWVvdXQ6YW55O1xuICBwcml2YXRlIGxhc3RMb2FkZWREYXRhOmFueSA9IHt9O1xuICBwcml2YXRlIGZhdm9yaXRlczpzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIGRhdGE6U3RvY2tEYXRhSW50ZXJmYWNlW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgd2F0Y2hsaXN0U3RhdGU6V2F0Y2hsaXN0U3RhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwdWJsaWMgZmF2b3JpdGVzU3RhdGU6RmF2b3JpdGVzU3RhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGZhdm9yaXRlc0FwaVNlcnZpY2U6RmF2b3JpdGVzQXBpU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBmYXZvcml0ZXNIaWdobGlnaHRTZXJ2aWNlOkZhdm9yaXRlc0hpZ2hsaWdodFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgc2lkZWJhclN0YXRlOlNpZGViYXJTdGF0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgaGVhZGVyU3RhdGU6SGVhZGVyU3RhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjpSb3V0ZXIpIHtcbiAgICBzdXBlcihmYXZvcml0ZXNTdGF0ZSwgZmF2b3JpdGVzQXBpU2VydmljZSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh3YXRjaGxpc3RTdGF0ZS5mYXZvcml0ZXMkLnN1YnNjcmliZShcbiAgICAgIGZhdm9yaXRlcyA9PiB0aGlzLmZhdm9yaXRlcyA9IGZhdm9yaXRlc1xuICAgICkpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2god2F0Y2hsaXN0U3RhdGUuc3RvY2skLnN1YnNjcmliZShcbiAgICAgIHN0b2NrID0+IHRoaXMuY2hhbmdlU3RvY2soc3RvY2spXG4gICAgKSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChmYXZvcml0ZXNTdGF0ZS5kYXRhJC5zdWJzY3JpYmUoXG4gICAgICBkYXRhID0+IHRoaXMudXBkYXRlRmF2b3JpdGVzKGRhdGEpXG4gICAgKSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChoZWFkZXJTdGF0ZS5zaWRlYmFyJC5zdWJzY3JpYmUoXG4gICAgICBzaWRlYmFyID0+IHRoaXMuc2lkZWJhciA9IHNpZGViYXJcbiAgICApKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKGZhdm9yaXRlc1N0YXRlLm9yZGVyJC5zdWJzY3JpYmUoXG4gICAgICBvcmRlciA9PiBsb2NhbFN0b3JhZ2VBZGFwdGVyLnNldEl0ZW0oRmF2b3JpdGVzU3RhdGVLZXlzLk9yZGVyLCBvcmRlcilcbiAgICApKTtcblxuICAgIGZhdm9yaXRlc1N0YXRlLnNvcnREYXRhKCk7XG4gIH1cblxuICBhZGQoKSB7XG4gICAgdGhpcy5oZWFkZXJTdGF0ZS5jaGFuZ2VTZWFyY2hBY3RpdmUodHJ1ZSk7XG4gIH1cblxuICBlZGl0KCkge1xuICAgIHRoaXMuc2lkZWJhclN0YXRlLmNoYW5nZVR5cGUoU2lkZWJhclR5cGVFbnVtLkVkaXQpO1xuICB9XG5cbiAgcmVsb2FkKCkge1xuICAgIHRoaXMuY2FuY2VsVGltZW91dCgpO1xuICAgIHRoaXMuZmF2b3JpdGVzQXBpU2VydmljZS5yZWxvYWQoKTtcbiAgfVxuXG4gIHNlbGVjdChzdG9jazpzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5zaWRlYmFyKSB7XG4gICAgICB0aGlzLmhlYWRlclN0YXRlLmNoYW5nZVNpZGViYXIoZmFsc2UpO1xuICAgIH1cblxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3dhdGNobGlzdCcsIHN0b2NrXSk7XG4gIH1cblxuICB0b2dnbGVQaWxsKCkge1xuICAgIHRoaXMucGlsbEluZGV4Kys7XG4gICAgaWYgKHRoaXMucGlsbEluZGV4ID4gUGlsbEVudW0ucGVyY2VudGFnZSkge1xuICAgICAgdGhpcy5waWxsSW5kZXggPSBQaWxsRW51bS5jaGFuZ2U7XG4gICAgfVxuXG4gICAgdGhpcy5waWxsVHlwZSA9IFBpbGxFbnVtW3RoaXMucGlsbEluZGV4XTtcbiAgfVxuXG4gIG5vdGlmaWNhdGlvbkFjdGlvbih0eXBlOnN0cmluZykge1xuICAgIHN1cGVyLm5vdGlmaWNhdGlvbkFjdGlvbih0eXBlKTtcbiAgICBpZiAodHlwZSA9PT0gRmF2b3JpdGVOb3RpZmljYXRpb25BY3Rpb25zLkFkZCkge1xuICAgICAgdGhpcy5hZGQoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICAgIHRoaXMuY2FuY2VsVGltZW91dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVGYXZvcml0ZXMoZGF0YTpTdG9ja0RhdGFJbnRlcmZhY2VbXSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5mYXZvcml0ZXNEYXRhID0gZGF0YS5maWx0ZXIoKGl0ZW06U3RvY2tEYXRhSW50ZXJmYWNlKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5mYXZvcml0ZXMuaW5kZXhPZihpdGVtLnN5bWJvbCkgIT09IC0xO1xuICAgIH0pO1xuICAgIHRoaXMud2F0Y2hsaXN0U3RhdGUuY2hhbmdlSGlnaGxpZ2h0cyh0aGlzLmZhdm9yaXRlc0hpZ2hsaWdodFNlcnZpY2UuZ2V0SGlnaGxpZ2h0cyhkYXRhLCB0aGlzLmxhc3RMb2FkZWREYXRhKSk7XG4gICAgdGhpcy5sYXN0TG9hZGVkRGF0YSA9IHRoaXMuZmF2b3JpdGVzSGlnaGxpZ2h0U2VydmljZS5nZXRMYXN0TG9hZGVkRGF0YShkYXRhKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy53YXRjaGxpc3RTdGF0ZS5jaGFuZ2VIaWdobGlnaHRzKHt9KTtcbiAgICB9LCA1MDApO1xuXG4gICAgdGhpcy53YXRjaGxpc3RTdGF0ZS5jaGFuZ2VTdG9ja0RhdGEoXy5maW5kKGRhdGEsIFsnc3ltYm9sJywgdGhpcy5zdG9ja10pIHx8IHt9KTtcbiAgICBpZiAodGhpcy5mYXZvcml0ZXNEYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy51cGRhdGVOb3RpZmljYXRpb24oXG4gICAgICAgIE5vdGlmaWNhdGlvblR5cGVFbnVtLk5vdGlmaWNhdGlvbixcbiAgICAgICAgJ1lvdXIgZmF2b3JpdGVzIGlzIGVtcHR5IScsXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uOiAnYWRkJyxcbiAgICAgICAgICB0ZXh0OiAnQWRkIHN5bWJvbCcsXG4gICAgICAgICAgYWN0aW9uOiBGYXZvcml0ZU5vdGlmaWNhdGlvbkFjdGlvbnMuQWRkXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXJ0UmVmcmVzaCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hhbmdlU3RvY2soc3RvY2s6c3RyaW5nKSB7XG4gICAgdGhpcy5zdG9jayA9IHN0b2NrO1xuICAgIHRoaXMud2F0Y2hsaXN0U3RhdGUuY2hhbmdlU3RvY2tEYXRhKF8uZmluZCh0aGlzLmRhdGEsIFsnc3ltYm9sJywgc3RvY2tdKSB8fCB7fSk7XG4gIH1cblxuICBwcml2YXRlIGNhbmNlbFRpbWVvdXQoKSB7XG4gICAgaWYgKHRoaXMucmVmcmVzaFRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlZnJlc2hUaW1lb3V0KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0YXJ0UmVmcmVzaCgpIHtcbiAgICB0aGlzLmNhbmNlbFRpbWVvdXQoKTtcbiAgICB0aGlzLnJlZnJlc2hUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmZhdm9yaXRlc0FwaVNlcnZpY2UuZGlzYWJsZUxvYWRlciA9IHRydWU7XG4gICAgICB0aGlzLmZhdm9yaXRlc0FwaVNlcnZpY2UucmVsb2FkKCk7XG4gICAgfSwgMTAwMDApO1xuICB9XG59XG5cbmVudW0gUGlsbEVudW0ge1xuICBjaGFuZ2UsXG4gIHBlcmNlbnRhZ2Vcbn1cblxuZXhwb3J0IGNsYXNzIEZhdm9yaXRlTm90aWZpY2F0aW9uQWN0aW9ucyB7XG4gIHN0YXRpYyBBZGQgPSAnYWRkJztcbn1cbiJdfQ==
