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
var chart_api_service_1 = require("./chart-api.service");
var index_1 = require("./state/index");
var watchlist_state_service_1 = require("../../state/watchlist-state.service");
var index_2 = require("../../../shared/index");
var app_state_service_1 = require("../../../state/app-state.service");
var index_3 = require("../../../core/index");
var ChartComponent = (function (_super) {
    __extends(ChartComponent, _super);
    function ChartComponent(watchlistState, chartState, chartApiService, appState) {
        var _this = _super.call(this, chartState, chartApiService) || this;
        _this.watchlistState = watchlistState;
        _this.chartState = chartState;
        _this.chartApiService = chartApiService;
        _this.appState = appState;
        _this.stockData = {};
        _this.ranges = index_3.Config.chartRanges;
        _this.favorites = [];
        _this.subscriptions.push(watchlistState.stockData$.subscribe(function (stockData) { return _this.stockData = stockData; }));
        _this.subscriptions.push(watchlistState.stock$.subscribe(function (stock) { return _this.updateStock(stock); }));
        _this.subscriptions.push(watchlistState.favorites$.subscribe(function (favorites) { return _this.updateFavorites(favorites); }));
        _this.subscriptions.push(chartState.range$.subscribe(function (range) { return _this.updateRange(range); }));
        _this.subscriptions.push(chartState.data$.subscribe(function (data) { return _this.validateChartData(data); }));
        return _this;
    }
    ChartComponent.prototype.tabChanged = function (index) {
        if (this.ranges[index]) {
            this.chartState.changeRange(this.ranges[index].id);
        }
    };
    ChartComponent.prototype.toggleFavorite = function (favorite) {
        if (favorite) {
            this.watchlistState.addFavorite(this.stock);
        }
        else {
            this.watchlistState.deleteFavorites([this.stock]);
        }
    };
    ChartComponent.prototype.updateFavorites = function (favorites) {
        this.favorites = favorites;
        this.favorite = this.favorites.indexOf(this.stock) !== -1;
    };
    ChartComponent.prototype.updateStock = function (stock) {
        this.stock = stock;
        this.favorite = this.favorites.indexOf(this.stock) !== -1;
        if (stock) {
            this.loadChartData();
        }
        else {
            this.updateNotification(index_2.NotificationTypeEnum.Notification, index_3.Config.notifications.noStock);
        }
    };
    ChartComponent.prototype.updateRange = function (range) {
        var _this = this;
        index_3.localStorageAdapter.setItem(index_1.ChartStateKeys.Range, range);
        var rangeIndex = _.findIndex(this.ranges, ['id', range]);
        if (rangeIndex === -1) {
            rangeIndex = 0;
        }
        setTimeout(function () {
            _this.rangeIndex = rangeIndex;
            _this.range = _this.ranges[rangeIndex];
            _this.loadChartData();
        }, 0);
    };
    ChartComponent.prototype.loadChartData = function () {
        if (this.stock && this.range) {
            this.chartApiService.load(this.stock, this.range.id, this.range.interval);
        }
    };
    ChartComponent.prototype.validateChartData = function (data) {
        if (data.length === 0) {
            if (this.stock) {
                this.updateNotification(index_2.NotificationTypeEnum.Notification, index_3.Config.notifications.noData);
            }
            else {
                this.updateNotification(index_2.NotificationTypeEnum.Notification, index_3.Config.notifications.noStock);
            }
        }
        this.appState.changePreloader(false);
    };
    return ChartComponent;
}(index_3.CoreApiNotification));
ChartComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'mp-chart',
        templateUrl: 'chart.component.html',
        styleUrls: ['chart.component.css'],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [watchlist_state_service_1.WatchlistStateService,
        index_1.ChartStateService,
        chart_api_service_1.ChartApiService,
        app_state_service_1.AppStateService])
], ChartComponent);
exports.ChartComponent = ChartComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3QvY29udGVudC9jaGFydC9jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBR3VCO0FBQ3ZCLHlEQUFzRDtBQUN0RCx1Q0FJdUI7QUFDdkIsK0VBQTRFO0FBQzVFLCtDQUE2RDtBQUM3RCxzRUFBbUU7QUFDbkUsNkNBSzZCO0FBWTdCLElBQWEsY0FBYztJQUFTLGtDQUFtQjtJQVNyRCx3QkFBbUIsY0FBb0MsRUFDbkMsVUFBNEIsRUFDNUIsZUFBK0IsRUFDL0IsUUFBd0I7UUFINUMsWUFJRSxrQkFBTSxVQUFVLEVBQUUsZUFBZSxDQUFDLFNBcUJuQztRQXpCa0Isb0JBQWMsR0FBZCxjQUFjLENBQXNCO1FBQ25DLGdCQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUM1QixxQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0IsY0FBUSxHQUFSLFFBQVEsQ0FBZ0I7UUFYNUMsZUFBUyxHQUFzQixFQUFFLENBQUM7UUFFbEMsWUFBTSxHQUEwQixjQUFNLENBQUMsV0FBVyxDQUFDO1FBRzNDLGVBQVMsR0FBWSxFQUFFLENBQUM7UUFTOUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQ3pELFVBQUEsU0FBUyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLEVBQTFCLENBQTBCLENBQ3hDLENBQUMsQ0FBQztRQUVILEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUNyRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXZCLENBQXVCLENBQ2pDLENBQUMsQ0FBQztRQUVILEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUN6RCxVQUFBLFNBQVMsSUFBSSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLEVBQS9CLENBQStCLENBQzdDLENBQUMsQ0FBQztRQUVILEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUNqRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXZCLENBQXVCLENBQ2pDLENBQUMsQ0FBQztRQUVILEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUNoRCxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBNUIsQ0FBNEIsQ0FDckMsQ0FBQyxDQUFDOztJQUNMLENBQUM7SUFFRCxtQ0FBVSxHQUFWLFVBQVcsS0FBWTtRQUNyQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELENBQUM7SUFDSCxDQUFDO0lBRUQsdUNBQWMsR0FBZCxVQUFlLFFBQWdCO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDYixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNwRCxDQUFDO0lBQ0gsQ0FBQztJQUVPLHdDQUFlLEdBQXZCLFVBQXdCLFNBQWtCO1FBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFTyxvQ0FBVyxHQUFuQixVQUFvQixLQUFZO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDVixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLGtCQUFrQixDQUFDLDRCQUFvQixDQUFDLFlBQVksRUFBRSxjQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNGLENBQUM7SUFDSCxDQUFDO0lBRU8sb0NBQVcsR0FBbkIsVUFBb0IsS0FBWTtRQUFoQyxpQkFZQztRQVhDLDJCQUFtQixDQUFDLE9BQU8sQ0FBQyxzQkFBYyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN6RCxJQUFJLFVBQVUsR0FBVSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNoRSxFQUFFLENBQUMsQ0FBQyxVQUFVLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDakIsQ0FBQztRQUVELFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzdCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNyQyxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUVPLHNDQUFhLEdBQXJCO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUUsQ0FBQztJQUNILENBQUM7SUFFTywwQ0FBaUIsR0FBekIsVUFBMEIsSUFBeUI7UUFDakQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyw0QkFBb0IsQ0FBQyxZQUFZLEVBQUUsY0FBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxRixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLGtCQUFrQixDQUFDLDRCQUFvQixDQUFDLFlBQVksRUFBRSxjQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNGLENBQUM7UUFDSCxDQUFDO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FoR0EsQUFnR0MsQ0FoR21DLDJCQUFtQixHQWdHdEQ7QUFoR1ksY0FBYztJQVIxQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7UUFDbEMsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7S0FDdEMsQ0FBQztxQ0FXa0MsK0NBQXFCO1FBQ3hCLHlCQUFpQjtRQUNaLG1DQUFlO1FBQ3RCLG1DQUFlO0dBWmpDLGNBQWMsQ0FnRzFCO0FBaEdZLHdDQUFjIiwiZmlsZSI6ImFwcC93YXRjaGxpc3QvY29udGVudC9jaGFydC9jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnRBcGlTZXJ2aWNlIH0gZnJvbSAnLi9jaGFydC1hcGkuc2VydmljZSc7XG5pbXBvcnQge1xuICBDaGFydFN0YXRlU2VydmljZSxcbiAgQ2hhcnRTdGF0ZUtleXMsXG4gIENoYXJ0RGF0YUludGVyZmFjZVxufSBmcm9tICcuL3N0YXRlL2luZGV4JztcbmltcG9ydCB7IFdhdGNobGlzdFN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3N0YXRlL3dhdGNobGlzdC1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblR5cGVFbnVtIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7IEFwcFN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL2FwcC1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIENvbmZpZyxcbiAgQ2hhcnRSYW5nZXNJbnRlcmZhY2UsXG4gIENvcmVBcGlOb3RpZmljYXRpb24sXG4gIGxvY2FsU3RvcmFnZUFkYXB0ZXJcbn0gZnJvbSAnLi4vLi4vLi4vY29yZS9pbmRleCc7XG5pbXBvcnQgeyBTdG9ja0RhdGFJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi9zdGF0ZS93YXRjaGxpc3Quc3RhdGUnO1xuZGVjbGFyZSBsZXQgXzphbnk7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ21wLWNoYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICdjaGFydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjaGFydC5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5cbmV4cG9ydCBjbGFzcyBDaGFydENvbXBvbmVudCBleHRlbmRzIENvcmVBcGlOb3RpZmljYXRpb24ge1xuICBzdG9ja0RhdGE6U3RvY2tEYXRhSW50ZXJmYWNlID0ge307XG4gIHN0b2NrOnN0cmluZztcbiAgcmFuZ2VzOkNoYXJ0UmFuZ2VzSW50ZXJmYWNlW10gPSBDb25maWcuY2hhcnRSYW5nZXM7XG4gIHJhbmdlSW5kZXg6bnVtYmVyO1xuICBmYXZvcml0ZTpib29sZWFuO1xuICBwcml2YXRlIGZhdm9yaXRlczpzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIHJhbmdlOkNoYXJ0UmFuZ2VzSW50ZXJmYWNlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB3YXRjaGxpc3RTdGF0ZTpXYXRjaGxpc3RTdGF0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgY2hhcnRTdGF0ZTpDaGFydFN0YXRlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjaGFydEFwaVNlcnZpY2U6Q2hhcnRBcGlTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGFwcFN0YXRlOkFwcFN0YXRlU2VydmljZSkge1xuICAgIHN1cGVyKGNoYXJ0U3RhdGUsIGNoYXJ0QXBpU2VydmljZSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh3YXRjaGxpc3RTdGF0ZS5zdG9ja0RhdGEkLnN1YnNjcmliZShcbiAgICAgIHN0b2NrRGF0YSA9PiB0aGlzLnN0b2NrRGF0YSA9IHN0b2NrRGF0YVxuICAgICkpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2god2F0Y2hsaXN0U3RhdGUuc3RvY2skLnN1YnNjcmliZShcbiAgICAgIHN0b2NrID0+IHRoaXMudXBkYXRlU3RvY2soc3RvY2spXG4gICAgKSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh3YXRjaGxpc3RTdGF0ZS5mYXZvcml0ZXMkLnN1YnNjcmliZShcbiAgICAgIGZhdm9yaXRlcyA9PiB0aGlzLnVwZGF0ZUZhdm9yaXRlcyhmYXZvcml0ZXMpXG4gICAgKSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChjaGFydFN0YXRlLnJhbmdlJC5zdWJzY3JpYmUoXG4gICAgICByYW5nZSA9PiB0aGlzLnVwZGF0ZVJhbmdlKHJhbmdlKVxuICAgICkpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goY2hhcnRTdGF0ZS5kYXRhJC5zdWJzY3JpYmUoXG4gICAgICBkYXRhID0+IHRoaXMudmFsaWRhdGVDaGFydERhdGEoZGF0YSlcbiAgICApKTtcbiAgfVxuXG4gIHRhYkNoYW5nZWQoaW5kZXg6bnVtYmVyKSB7XG4gICAgaWYgKHRoaXMucmFuZ2VzW2luZGV4XSkge1xuICAgICAgdGhpcy5jaGFydFN0YXRlLmNoYW5nZVJhbmdlKHRoaXMucmFuZ2VzW2luZGV4XS5pZCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlRmF2b3JpdGUoZmF2b3JpdGU6Ym9vbGVhbikge1xuICAgIGlmIChmYXZvcml0ZSkge1xuICAgICAgdGhpcy53YXRjaGxpc3RTdGF0ZS5hZGRGYXZvcml0ZSh0aGlzLnN0b2NrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53YXRjaGxpc3RTdGF0ZS5kZWxldGVGYXZvcml0ZXMoW3RoaXMuc3RvY2tdKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUZhdm9yaXRlcyhmYXZvcml0ZXM6c3RyaW5nW10pIHtcbiAgICB0aGlzLmZhdm9yaXRlcyA9IGZhdm9yaXRlcztcbiAgICB0aGlzLmZhdm9yaXRlID0gdGhpcy5mYXZvcml0ZXMuaW5kZXhPZih0aGlzLnN0b2NrKSAhPT0gLTE7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVN0b2NrKHN0b2NrOnN0cmluZykge1xuICAgIHRoaXMuc3RvY2sgPSBzdG9jaztcbiAgICB0aGlzLmZhdm9yaXRlID0gdGhpcy5mYXZvcml0ZXMuaW5kZXhPZih0aGlzLnN0b2NrKSAhPT0gLTE7XG4gICAgaWYgKHN0b2NrKSB7XG4gICAgICB0aGlzLmxvYWRDaGFydERhdGEoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cGRhdGVOb3RpZmljYXRpb24oTm90aWZpY2F0aW9uVHlwZUVudW0uTm90aWZpY2F0aW9uLCBDb25maWcubm90aWZpY2F0aW9ucy5ub1N0b2NrKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVJhbmdlKHJhbmdlOnN0cmluZykge1xuICAgIGxvY2FsU3RvcmFnZUFkYXB0ZXIuc2V0SXRlbShDaGFydFN0YXRlS2V5cy5SYW5nZSwgcmFuZ2UpO1xuICAgIGxldCByYW5nZUluZGV4Om51bWJlciA9IF8uZmluZEluZGV4KHRoaXMucmFuZ2VzLCBbJ2lkJywgcmFuZ2VdKTtcbiAgICBpZiAocmFuZ2VJbmRleCA9PT0gLTEpIHtcbiAgICAgIHJhbmdlSW5kZXggPSAwO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5yYW5nZUluZGV4ID0gcmFuZ2VJbmRleDtcbiAgICAgIHRoaXMucmFuZ2UgPSB0aGlzLnJhbmdlc1tyYW5nZUluZGV4XTtcbiAgICAgIHRoaXMubG9hZENoYXJ0RGF0YSgpO1xuICAgIH0sIDApO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkQ2hhcnREYXRhKCkge1xuICAgIGlmICh0aGlzLnN0b2NrICYmIHRoaXMucmFuZ2UpIHtcbiAgICAgIHRoaXMuY2hhcnRBcGlTZXJ2aWNlLmxvYWQodGhpcy5zdG9jaywgdGhpcy5yYW5nZS5pZCwgdGhpcy5yYW5nZS5pbnRlcnZhbCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB2YWxpZGF0ZUNoYXJ0RGF0YShkYXRhOkNoYXJ0RGF0YUludGVyZmFjZVtdKSB7XG4gICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAodGhpcy5zdG9jaykge1xuICAgICAgICB0aGlzLnVwZGF0ZU5vdGlmaWNhdGlvbihOb3RpZmljYXRpb25UeXBlRW51bS5Ob3RpZmljYXRpb24sIENvbmZpZy5ub3RpZmljYXRpb25zLm5vRGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnVwZGF0ZU5vdGlmaWNhdGlvbihOb3RpZmljYXRpb25UeXBlRW51bS5Ob3RpZmljYXRpb24sIENvbmZpZy5ub3RpZmljYXRpb25zLm5vU3RvY2spO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYXBwU3RhdGUuY2hhbmdlUHJlbG9hZGVyKGZhbHNlKTtcbiAgfVxufVxuIl19
