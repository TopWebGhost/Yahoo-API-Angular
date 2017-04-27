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
var info_api_service_1 = require("./info-api.service");
var index_1 = require("./state/index");
var info_service_1 = require("./info.service");
var watchlist_state_service_1 = require("../../state/watchlist-state.service");
var index_2 = require("../../../shared/index");
var index_3 = require("../../../core/index");
var InfoComponent = (function (_super) {
    __extends(InfoComponent, _super);
    function InfoComponent(infoState, watchlistState, infoApiService, infoService) {
        var _this = _super.call(this, infoState, infoApiService) || this;
        _this.infoState = infoState;
        _this.watchlistState = watchlistState;
        _this.infoApiService = infoApiService;
        _this.infoService = infoService;
        _this.data = {};
        _this.leftColumn = [
            { text: 'Prev Close', id: 'PreviousClose' },
            { text: 'Low', id: 'DaysLow' },
            { text: '52wk Low', id: 'YearLow' },
            { text: 'Mkt Cap', id: 'MarketCapitalization' },
            { text: '1Y Target', id: 'OneyrTargetPrice' },
            { text: 'EPS', id: 'EarningsShare' }
        ];
        _this.rightColumn = [
            { text: 'Open', id: 'Open' },
            { text: 'High', id: 'DaysHigh' },
            { text: '52wk High', id: 'YearHigh' },
            { text: 'Volume', id: 'Volume' },
            { text: 'Avg Vol (3m)', id: 'AverageDailyVolume' },
            { text: 'Dividend', id: 'DividendShare' }
        ];
        _this.dayOptions = {};
        _this.yearOptions = {};
        _this.subscriptions.push(watchlistState.stock$.subscribe(function (stock) { return _this.updateStock(stock); }));
        _this.subscriptions.push(watchlistState.stockData$.subscribe(function (stockData) { return _this.updateStockData(stockData); }));
        _this.subscriptions.push(infoState.data$.subscribe(function (info) { return _this.updateInfo(info[0]); }));
        _this.updateInfo();
        return _this;
    }
    InfoComponent.prototype.reload = function () {
        this.infoApiService.reload();
    };
    InfoComponent.prototype.updateStock = function (stock) {
        this.stock = stock;
        if (stock) {
            this.loadedInfo = false;
            this.infoApiService.load(stock);
        }
    };
    InfoComponent.prototype.updateStockData = function (stockData) {
        this.price = stockData.price;
        if (this.loadedInfo) {
            this.updateData();
        }
    };
    InfoComponent.prototype.updateInfo = function (data) {
        if (data === void 0) { data = null; }
        if (!data) {
            if (this.stock) {
                this.updateNotification(index_2.NotificationTypeEnum.Notification, index_3.Config.notifications.noData);
            }
            else {
                this.updateNotification(index_2.NotificationTypeEnum.Notification, index_3.Config.notifications.noStock);
            }
        }
        else {
            this.data = data;
            this.updateData();
            this.loadedInfo = true;
        }
    };
    InfoComponent.prototype.updateData = function () {
        if (this.price === null || this.price === undefined) {
            this.price = this.data.LastTradePriceOnly;
        }
        this.data = this.infoService.getDataWithUpdatedPrice(this.data, this.price);
        this.dayOptions = this.infoService.getDayOptions(this.data, this.price);
        this.yearOptions = this.infoService.getDayOptions(this.data, this.price);
        this.yearOptions = this.infoService.getYearOptions(this.data, this.price);
    };
    return InfoComponent;
}(index_3.CoreApiNotification));
InfoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'mp-info',
        templateUrl: 'info.component.html',
        styleUrls: ['info.component.css']
    }),
    __metadata("design:paramtypes", [index_1.InfoStateService,
        watchlist_state_service_1.WatchlistStateService,
        info_api_service_1.InfoApiService,
        info_service_1.InfoService])
], InfoComponent);
exports.InfoComponent = InfoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3QvY29udGVudC9pbmZvL2luZm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUd1QjtBQUN2Qix1REFBb0Q7QUFDcEQsdUNBR3VCO0FBQ3ZCLCtDQUE2QztBQUU3QywrRUFBNEU7QUFFNUUsK0NBQTZEO0FBQzdELDZDQUc2QjtBQVM3QixJQUFhLGFBQWE7SUFBUyxpQ0FBbUI7SUF3QnBELHVCQUFvQixTQUEwQixFQUMxQixjQUFvQyxFQUNwQyxjQUE2QixFQUM3QixXQUF1QjtRQUgzQyxZQUlFLGtCQUFNLFNBQVMsRUFBRSxjQUFjLENBQUMsU0FjakM7UUFsQm1CLGVBQVMsR0FBVCxTQUFTLENBQWlCO1FBQzFCLG9CQUFjLEdBQWQsY0FBYyxDQUFzQjtRQUNwQyxvQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixpQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQTFCM0MsVUFBSSxHQUFxQixFQUFFLENBQUM7UUFDNUIsZ0JBQVUsR0FBdUI7WUFDL0IsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxlQUFlLEVBQUM7WUFDekMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUM7WUFDNUIsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUM7WUFDakMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxzQkFBc0IsRUFBQztZQUM3QyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLGtCQUFrQixFQUFDO1lBQzNDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFDO1NBQ25DLENBQUM7UUFDRixpQkFBVyxHQUF1QjtZQUNoQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBQztZQUMxQixFQUFDLElBQUksRUFBRSxN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QUksQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDNUMsQ0FBQztRQUVELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQXZGQSxBQXVGQyxDQXZGa0MsMkJBQW1CLEdBdUZyRDtBQXZGWSxhQUFhO0lBUHpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtRQUNsQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztLQUNsQyxDQUFDO3FDQTBCOEIsd0JBQWdCO1FBQ1gsK0NBQXFCO1FBQ3JCLGlDQUFjO1FBQ2pCLDBCQUFXO0dBM0JoQyxhQUFhLENBdUZ6QjtBQXZGWSxzQ0FBYSIsImZpbGUiOiJhcHAvd2F0Y2hsaXN0L2NvbnRlbnQvaW5mby9pbmZvLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5mb0FwaVNlcnZpY2UgfSBmcm9tICcuL2luZm8tYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgSW5mb1N0YXRlU2VydmljZSxcbiAgSW5mb0RhdGFJbnRlcmZhY2Vcbn0gZnJvbSAnLi9zdGF0ZS9pbmRleCc7XG5pbXBvcnQgeyBJbmZvU2VydmljZSB9IGZyb20gJy4vaW5mby5zZXJ2aWNlJztcbmltcG9ydCB7IFJhbmdlT3B0aW9uc0ludGVyZmFjZSB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgV2F0Y2hsaXN0U3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc3RhdGUvd2F0Y2hsaXN0LXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RvY2tEYXRhSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vc3RhdGUvd2F0Y2hsaXN0LnN0YXRlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblR5cGVFbnVtIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7XG4gIENvcmVBcGlOb3RpZmljYXRpb24sXG4gIENvbmZpZ1xufSBmcm9tICcuLi8uLi8uLi9jb3JlL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbXAtaW5mbycsXG4gIHRlbXBsYXRlVXJsOiAnaW5mby5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydpbmZvLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEluZm9Db21wb25lbnQgZXh0ZW5kcyBDb3JlQXBpTm90aWZpY2F0aW9uIHtcbiAgZGF0YTpJbmZvRGF0YUludGVyZmFjZSA9IHt9O1xuICBsZWZ0Q29sdW1uOkluZm9MaXN0SW50ZXJmYWNlW10gPSBbXG4gICAge3RleHQ6ICdQcmV2IENsb3NlJywgaWQ6ICdQcmV2aW91c0Nsb3NlJ30sXG4gICAge3RleHQ6ICdMb3cnLCBpZDogJ0RheXNMb3cnfSxcbiAgICB7dGV4dDogJzUyd2sgTG93JywgaWQ6ICdZZWFyTG93J30sXG4gICAge3RleHQ6ICdNa3QgQ2FwJywgaWQ6ICdNYXJrZXRDYXBpdGFsaXphdGlvbid9LFxuICAgIHt0ZXh0OiAnMVkgVGFyZ2V0JywgaWQ6ICdPbmV5clRhcmdldFByaWNlJ30sXG4gICAge3RleHQ6ICdFUFMnLCBpZDogJ0Vhcm5pbmdzU2hhcmUnfVxuICBdO1xuICByaWdodENvbHVtbjpJbmZvTGlzdEludGVyZmFjZVtdID0gW1xuICAgIHt0ZXh0OiAnT3BlbicsIGlkOiAnT3Blbid9LFxuICAgIHt0ZXh0OiAnSGlnaCcsIGlkOiAnRGF5c0hpZ2gnfSxcbiAgICB7dGV4dDogJzUyd2sgSGlnaCcsIGlkOiAnWWVhckhpZ2gnfSxcbiAgICB7dGV4dDogJ1ZvbHVtZScsIGlkOiAnVm9sdW1lJ30sXG4gICAge3RleHQ6ICdBdmcgVm9sICgzbSknLCBpZDogJ0F2ZXJhZ2VEYWlseVZvbHVtZSd9LFxuICAgIHt0ZXh0OiAnRGl2aWRlbmQnLCBpZDogJ0RpdmlkZW5kU2hhcmUnfVxuICBdO1xuICBkYXlPcHRpb25zOlJhbmdlT3B0aW9uc0ludGVyZmFjZSA9IHt9O1xuICB5ZWFyT3B0aW9uczpSYW5nZU9wdGlvbnNJbnRlcmZhY2UgPSB7fTtcbiAgcHJpdmF0ZSBzdG9jazpzdHJpbmc7XG4gIHByaXZhdGUgbG9hZGVkSW5mbzpib29sZWFuO1xuICBwcml2YXRlIHByaWNlOm51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluZm9TdGF0ZTpJbmZvU3RhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHdhdGNobGlzdFN0YXRlOldhdGNobGlzdFN0YXRlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBpbmZvQXBpU2VydmljZTpJbmZvQXBpU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBpbmZvU2VydmljZTpJbmZvU2VydmljZSkge1xuICAgIHN1cGVyKGluZm9TdGF0ZSwgaW5mb0FwaVNlcnZpY2UpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHdhdGNobGlzdFN0YXRlLnN0b2NrJC5zdWJzY3JpYmUoXG4gICAgICBzdG9jayA9PiB0aGlzLnVwZGF0ZVN0b2NrKHN0b2NrKVxuICAgICkpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2god2F0Y2hsaXN0U3RhdGUuc3RvY2tEYXRhJC5zdWJzY3JpYmUoXG4gICAgICBzdG9ja0RhdGEgPT4gdGhpcy51cGRhdGVTdG9ja0RhdGEoc3RvY2tEYXRhKVxuICAgICkpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goaW5mb1N0YXRlLmRhdGEkLnN1YnNjcmliZShcbiAgICAgIGluZm8gPT4gdGhpcy51cGRhdGVJbmZvKGluZm9bMF0pXG4gICAgKSk7XG5cbiAgICB0aGlzLnVwZGF0ZUluZm8oKTtcbiAgfVxuXG4gIHJlbG9hZCgpIHtcbiAgICB0aGlzLmluZm9BcGlTZXJ2aWNlLnJlbG9hZCgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTdG9jayhzdG9jazpzdHJpbmcpIHtcbiAgICB0aGlzLnN0b2NrID0gc3RvY2s7XG4gICAgaWYgKHN0b2NrKSB7XG4gICAgICB0aGlzLmxvYWRlZEluZm8gPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5mb0FwaVNlcnZpY2UubG9hZChzdG9jayk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTdG9ja0RhdGEoc3RvY2tEYXRhOlN0b2NrRGF0YUludGVyZmFjZSkge1xuICAgIHRoaXMucHJpY2UgPSBzdG9ja0RhdGEucHJpY2U7XG4gICAgaWYgKHRoaXMubG9hZGVkSW5mbykge1xuICAgICAgdGhpcy51cGRhdGVEYXRhKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVJbmZvKGRhdGE6SW5mb0RhdGFJbnRlcmZhY2UgPSBudWxsKSB7XG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICBpZiAodGhpcy5zdG9jaykge1xuICAgICAgICB0aGlzLnVwZGF0ZU5vdGlmaWNhdGlvbihOb3RpZmljYXRpb25UeXBlRW51bS5Ob3RpZmljYXRpb24sIENvbmZpZy5ub3RpZmljYXRpb25zLm5vRGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnVwZGF0ZU5vdGlmaWNhdGlvbihOb3RpZmljYXRpb25UeXBlRW51bS5Ob3RpZmljYXRpb24sIENvbmZpZy5ub3RpZmljYXRpb25zLm5vU3RvY2spO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgdGhpcy51cGRhdGVEYXRhKCk7XG4gICAgICB0aGlzLmxvYWRlZEluZm8gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlRGF0YSgpIHtcbiAgICBpZiAodGhpcy5wcmljZSA9PT0gbnVsbCB8fCB0aGlzLnByaWNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMucHJpY2UgPSB0aGlzLmRhdGEuTGFzdFRyYWRlUHJpY2VPbmx5O1xuICAgIH1cblxuICAgIHRoaXMuZGF0YSA9IHRoaXMuaW5mb1NlcnZpY2UuZ2V0RGF0YVdpdGhVcGRhdGVkUHJpY2UodGhpcy5kYXRhLCB0aGlzLnByaWNlKTtcbiAgICB0aGlzLmRheU9wdGlvbnMgPSB0aGlzLmluZm9TZXJ2aWNlLmdldERheU9wdGlvbnModGhpcy5kYXRhLCB0aGlzLnByaWNlKTtcbiAgICB0aGlzLnllYXJPcHRpb25zID0gdGhpcy5pbmZvU2VydmljZS5nZXREYXlPcHRpb25zKHRoaXMuZGF0YSwgdGhpcy5wcmljZSk7XG4gICAgdGhpcy55ZWFyT3B0aW9ucyA9IHRoaXMuaW5mb1NlcnZpY2UuZ2V0WWVhck9wdGlvbnModGhpcy5kYXRhLCB0aGlzLnByaWNlKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5mb0xpc3RJbnRlcmZhY2Uge1xuICBpZD86c3RyaW5nO1xuICB0ZXh0PzpzdHJpbmc7XG59XG4iXX0=
