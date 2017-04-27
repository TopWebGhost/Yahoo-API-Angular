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
var index_1 = require("../../../core/index");
var index_2 = require("../state/index");
var search_api_service_1 = require("./search-api.service");
var search_state_service_1 = require("./state/search-state.service");
var favorites_state_service_1 = require("../favorites/state/favorites-state.service");
var watchlist_state_service_1 = require("../../state/watchlist-state.service");
var header_state_service_1 = require("../../../shared/header/state/header-state.service");
var index_3 = require("../../../shared/index");
var SearchComponent = (function (_super) {
    __extends(SearchComponent, _super);
    function SearchComponent(searchState, sidebarState, favoritesState, watchlistState, searchApiService, headerState, router) {
        var _this = _super.call(this, searchState, searchApiService) || this;
        _this.searchState = searchState;
        _this.sidebarState = sidebarState;
        _this.favoritesState = favoritesState;
        _this.watchlistState = watchlistState;
        _this.searchApiService = searchApiService;
        _this.headerState = headerState;
        _this.router = router;
        _this.stocks = [];
        _this.subscriptions.push(searchState.data$.subscribe(function (data) { return _this.updateStocks(data); }));
        _this.subscriptions.push(favoritesState.order$.subscribe(function (order) { return _this.order = order; }));
        _this.subscriptions.push(headerState.search$.subscribe(function (search) { return _this.updateSearch(search); }));
        _this.updateStocks([]);
        return _this;
    }
    SearchComponent.prototype.add = function (stock) {
        this.order.unshift(stock.symbol);
        this.favoritesState.changeOrder(this.order);
        this.watchlistState.addFavorite(stock.symbol);
        this.sidebarState.changeType(index_2.SidebarTypeEnum.List);
        this.router.navigate(['/watchlist', stock.symbol]);
    };
    SearchComponent.prototype.updateSearch = function (value) {
        this.search = value;
        if (value) {
            this.searchApiService.load(value);
        }
        else {
            this.updateStocks([]);
        }
    };
    SearchComponent.prototype.updateStocks = function (data) {
        if (data.length === 0) {
            if (this.search) {
                this.updateNotification(index_3.NotificationTypeEnum.Notification, index_1.Config.notifications.noData);
            }
            else {
                this.updateNotification(index_3.NotificationTypeEnum.Notification, index_1.Config.notifications.search);
            }
        }
        this.stocks = data;
    };
    return SearchComponent;
}(index_1.CoreApiNotification));
SearchComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'mp-search',
        templateUrl: 'search.component.html',
        styleUrls: ['search.component.css']
    }),
    __metadata("design:paramtypes", [search_state_service_1.SearchStateService,
        index_2.SidebarStateService,
        favorites_state_service_1.FavoritesStateService,
        watchlist_state_service_1.WatchlistStateService,
        search_api_service_1.SearchApiService,
        header_state_service_1.HeaderStateService,
        router_1.Router])
], SearchComponent);
exports.SearchComponent = SearchComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3Qvc2lkZWJhci9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBQ3pDLDZDQUc2QjtBQUM3Qix3Q0FBc0U7QUFDdEUsMkRBQXdEO0FBQ3hELHFFQUFrRTtBQUNsRSxzRkFBbUY7QUFDbkYsK0VBQTRFO0FBRTVFLDBGQUF1RjtBQUN2RiwrQ0FBNkQ7QUFTN0QsSUFBYSxlQUFlO0lBQVMsbUNBQW1CO0lBT3RELHlCQUFvQixXQUE4QixFQUM5QixZQUFnQyxFQUNoQyxjQUFvQyxFQUNwQyxjQUFvQyxFQUNwQyxnQkFBaUMsRUFDakMsV0FBOEIsRUFDOUIsTUFBYTtRQU5qQyxZQU9FLGtCQUFNLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxTQWVyQztRQXRCbUIsaUJBQVcsR0FBWCxXQUFXLENBQW1CO1FBQzlCLGtCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUNoQyxvQkFBYyxHQUFkLGNBQWMsQ0FBc0I7UUFDcEMsb0JBQWMsR0FBZCxjQUFjLENBQXNCO1FBQ3BDLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDakMsaUJBQVcsR0FBWCxXQUFXLENBQW1CO1FBQzlCLFlBQU0sR0FBTixNQUFNLENBQU87UUFaakMsWUFBTSxHQUF3QixFQUFFLENBQUM7UUFlL0IsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQ2pELFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBdkIsQ0FBdUIsQ0FDaEMsQ0FBQyxDQUFDO1FBRUgsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQ3JELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQWxCLENBQWtCLENBQzVCLENBQUMsQ0FBQztRQUVILEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUNuRCxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQXpCLENBQXlCLENBQ3BDLENBQUMsQ0FBQztRQUVILEtBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7O0lBQ3hCLENBQUM7SUFFRCw2QkFBRyxHQUFILFVBQUksS0FBd0I7UUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsdUJBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU8sc0NBQVksR0FBcEIsVUFBcUIsS0FBWTtRQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hCLENBQUM7SUFDSCxDQUFDO0lBRU8sc0NBQVksR0FBcEIsVUFBcUIsSUFBeUI7UUFDNUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixJQUFJLENBQUMsa0JBQWtCLENBQUMsNEJBQW9CLENBQUMsWUFBWSxFQUFFLGNBQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUYsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyw0QkFBb0IsQ0FBQyxZQUFZLEVBQUUsY0FBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxRixDQUFDO1FBQ0gsQ0FBQztRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFDSCxzQkFBQztBQUFELENBM0RBLEFBMkRDLENBM0RvQywyQkFBbUIsR0EyRHZEO0FBM0RZLGVBQWU7SUFQM0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUUsdUJBQXVCO1FBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO0tBQ3BDLENBQUM7cUNBU2dDLHlDQUFrQjtRQUNqQiwyQkFBbUI7UUFDakIsK0NBQXFCO1FBQ3JCLCtDQUFxQjtRQUNuQixxQ0FBZ0I7UUFDckIseUNBQWtCO1FBQ3ZCLGVBQU07R0FidEIsZUFBZSxDQTJEM0I7QUEzRFksMENBQWUiLCJmaWxlIjoiYXBwL3dhdGNobGlzdC9zaWRlYmFyL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQ29uZmlnLFxuICBDb3JlQXBpTm90aWZpY2F0aW9uXG59IGZyb20gJy4uLy4uLy4uL2NvcmUvaW5kZXgnO1xuaW1wb3J0IHsgU2lkZWJhclN0YXRlU2VydmljZSwgU2lkZWJhclR5cGVFbnVtIH0gZnJvbSAnLi4vc3RhdGUvaW5kZXgnO1xuaW1wb3J0IHsgU2VhcmNoQXBpU2VydmljZSB9IGZyb20gJy4vc2VhcmNoLWFwaS5zZXJ2aWNlJztcbmltcG9ydCB7IFNlYXJjaFN0YXRlU2VydmljZSB9IGZyb20gJy4vc3RhdGUvc2VhcmNoLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmF2b3JpdGVzU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vZmF2b3JpdGVzL3N0YXRlL2Zhdm9yaXRlcy1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IFdhdGNobGlzdFN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3N0YXRlL3dhdGNobGlzdC1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IFN0b2NrRGF0YUludGVyZmFjZSB9IGZyb20gJy4uLy4uL3N0YXRlL3dhdGNobGlzdC5zdGF0ZSc7XG5pbXBvcnQgeyBIZWFkZXJTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaGVhZGVyL3N0YXRlL2hlYWRlci1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblR5cGVFbnVtIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbXAtc2VhcmNoJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWFyY2guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2VhcmNoLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBleHRlbmRzIENvcmVBcGlOb3RpZmljYXRpb24ge1xuICBzdG9ja3M6U3RvY2tEYXRhSW50ZXJmYWNlW10gPSBbXTtcbiAgbm90aWZpY2F0aW9uOnN0cmluZztcbiAgbm90aWZpY2F0aW9uVHlwZTpOb3RpZmljYXRpb25UeXBlRW51bTtcbiAgcHJpdmF0ZSBzZWFyY2g6c3RyaW5nO1xuICBwcml2YXRlIG9yZGVyOnN0cmluZ1tdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VhcmNoU3RhdGU6U2VhcmNoU3RhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHNpZGViYXJTdGF0ZTpTaWRlYmFyU3RhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGZhdm9yaXRlc1N0YXRlOkZhdm9yaXRlc1N0YXRlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSB3YXRjaGxpc3RTdGF0ZTpXYXRjaGxpc3RTdGF0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgc2VhcmNoQXBpU2VydmljZTpTZWFyY2hBcGlTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGhlYWRlclN0YXRlOkhlYWRlclN0YXRlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6Um91dGVyKSB7XG4gICAgc3VwZXIoc2VhcmNoU3RhdGUsIHNlYXJjaEFwaVNlcnZpY2UpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goc2VhcmNoU3RhdGUuZGF0YSQuc3Vic2NyaWJlKFxuICAgICAgZGF0YSA9PiB0aGlzLnVwZGF0ZVN0b2NrcyhkYXRhKVxuICAgICkpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goZmF2b3JpdGVzU3RhdGUub3JkZXIkLnN1YnNjcmliZShcbiAgICAgIG9yZGVyID0+IHRoaXMub3JkZXIgPSBvcmRlclxuICAgICkpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goaGVhZGVyU3RhdGUuc2VhcmNoJC5zdWJzY3JpYmUoXG4gICAgICBzZWFyY2ggPT4gdGhpcy51cGRhdGVTZWFyY2goc2VhcmNoKVxuICAgICkpO1xuXG4gICAgdGhpcy51cGRhdGVTdG9ja3MoW10pO1xuICB9XG5cbiAgYWRkKHN0b2NrOlN0b2NrRGF0YUludGVyZmFjZSkge1xuICAgIHRoaXMub3JkZXIudW5zaGlmdChzdG9jay5zeW1ib2wpO1xuICAgIHRoaXMuZmF2b3JpdGVzU3RhdGUuY2hhbmdlT3JkZXIodGhpcy5vcmRlcik7XG4gICAgdGhpcy53YXRjaGxpc3RTdGF0ZS5hZGRGYXZvcml0ZShzdG9jay5zeW1ib2wpO1xuICAgIHRoaXMuc2lkZWJhclN0YXRlLmNoYW5nZVR5cGUoU2lkZWJhclR5cGVFbnVtLkxpc3QpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3dhdGNobGlzdCcsIHN0b2NrLnN5bWJvbF0pO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTZWFyY2godmFsdWU6c3RyaW5nKSB7XG4gICAgdGhpcy5zZWFyY2ggPSB2YWx1ZTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuc2VhcmNoQXBpU2VydmljZS5sb2FkKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cGRhdGVTdG9ja3MoW10pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU3RvY2tzKGRhdGE6U3RvY2tEYXRhSW50ZXJmYWNlW10pIHtcbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIGlmICh0aGlzLnNlYXJjaCkge1xuICAgICAgICB0aGlzLnVwZGF0ZU5vdGlmaWNhdGlvbihOb3RpZmljYXRpb25UeXBlRW51bS5Ob3RpZmljYXRpb24sIENvbmZpZy5ub3RpZmljYXRpb25zLm5vRGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnVwZGF0ZU5vdGlmaWNhdGlvbihOb3RpZmljYXRpb25UeXBlRW51bS5Ob3RpZmljYXRpb24sIENvbmZpZy5ub3RpZmljYXRpb25zLnNlYXJjaCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zdG9ja3MgPSBkYXRhO1xuICB9XG59XG4iXX0=
