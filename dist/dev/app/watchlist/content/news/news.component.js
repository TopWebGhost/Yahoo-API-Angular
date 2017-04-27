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
var news_api_service_1 = require("./news-api.service");
var index_1 = require("./state/index");
var watchlist_state_service_1 = require("../../state/watchlist-state.service");
var index_2 = require("../../../shared/index");
var index_3 = require("../../../core/index");
var NewsComponent = (function (_super) {
    __extends(NewsComponent, _super);
    function NewsComponent(newsState, watchlistState, newsApiService) {
        var _this = _super.call(this, newsState, newsApiService) || this;
        _this.newsState = newsState;
        _this.watchlistState = watchlistState;
        _this.newsApiService = newsApiService;
        _this.news = [];
        _this.subscriptions.push(watchlistState.stock$.subscribe(function (stock) { return _this.updateStock(stock); }));
        _this.subscriptions.push(newsState.data$.subscribe(function (news) { return _this.updateNews(news); }));
        _this.updateNews([]);
        return _this;
    }
    NewsComponent.prototype.reload = function () {
        this.newsApiService.reload();
    };
    NewsComponent.prototype.updateStock = function (stock) {
        this.stock = stock;
        if (stock) {
            this.newsApiService.load(stock);
        }
    };
    NewsComponent.prototype.updateNews = function (data) {
        if (data.length === 0) {
            if (this.stock) {
                this.updateNotification(index_2.NotificationTypeEnum.Notification, index_3.Config.notifications.noData);
            }
            else {
                this.updateNotification(index_2.NotificationTypeEnum.Notification, index_3.Config.notifications.noStock);
            }
        }
        this.news = data;
    };
    return NewsComponent;
}(index_3.CoreApiNotification));
NewsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'mp-news',
        templateUrl: 'news.component.html',
        styleUrls: ['news.component.css']
    }),
    __metadata("design:paramtypes", [index_1.NewsStateService,
        watchlist_state_service_1.WatchlistStateService,
        news_api_service_1.NewsApiService])
], NewsComponent);
exports.NewsComponent = NewsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3QvY29udGVudC9uZXdzL25ld3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUMxQyx1REFBb0Q7QUFDcEQsdUNBR3VCO0FBQ3ZCLCtFQUE0RTtBQUM1RSwrQ0FBNkQ7QUFDN0QsNkNBRzZCO0FBUzdCLElBQWEsYUFBYTtJQUFTLGlDQUFtQjtJQUlwRCx1QkFBb0IsU0FBMEIsRUFDMUIsY0FBb0MsRUFDcEMsY0FBNkI7UUFGakQsWUFHRSxrQkFBTSxTQUFTLEVBQUUsY0FBYyxDQUFDLFNBV2pDO1FBZG1CLGVBQVMsR0FBVCxTQUFTLENBQWlCO1FBQzFCLG9CQUFjLEdBQWQsY0FBYyxDQUFzQjtRQUNwQyxvQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUxqRCxVQUFJLEdBQXVCLEVBQUUsQ0FBQztRQVE1QixLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FDckQsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUF2QixDQUF1QixDQUNqQyxDQUFDLENBQUM7UUFFSCxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FDL0MsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFyQixDQUFxQixDQUM5QixDQUFDLENBQUM7UUFFSCxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDOztJQUN0QixDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVPLG1DQUFXLEdBQW5CLFVBQW9CLEtBQVk7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNWLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLENBQUM7SUFDSCxDQUFDO0lBRU8sa0NBQVUsR0FBbEIsVUFBbUIsSUFBd0I7UUFDekMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyw0QkFBb0IsQ0FBQyxZQUFZLEVBQUUsY0FBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxRixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLGtCQUFrQixDQUFDLDRCQUFvQixDQUFDLFlBQVksRUFBRSxjQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNGLENBQUM7UUFDSCxDQUFDO1FBRUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0ExQ0EsQUEwQ0MsQ0ExQ2tDLDJCQUFtQixHQTBDckQ7QUExQ1ksYUFBYTtJQVB6QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSxxQkFBcUI7UUFDbEMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7S0FDbEMsQ0FBQztxQ0FNOEIsd0JBQWdCO1FBQ1gsK0NBQXFCO1FBQ3JCLGlDQUFjO0dBTnRDLGFBQWEsQ0EwQ3pCO0FBMUNZLHNDQUFhIiwiZmlsZSI6ImFwcC93YXRjaGxpc3QvY29udGVudC9uZXdzL25ld3MuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZXdzQXBpU2VydmljZSB9IGZyb20gJy4vbmV3cy1hcGkuc2VydmljZSc7XG5pbXBvcnQge1xuICBOZXdzU3RhdGVTZXJ2aWNlLFxuICBOZXdzRGF0YUludGVyZmFjZVxufSBmcm9tICcuL3N0YXRlL2luZGV4JztcbmltcG9ydCB7IFdhdGNobGlzdFN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3N0YXRlL3dhdGNobGlzdC1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblR5cGVFbnVtIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7XG4gIENvcmVBcGlOb3RpZmljYXRpb24sXG4gIENvbmZpZ1xufSBmcm9tICcuLi8uLi8uLi9jb3JlL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbXAtbmV3cycsXG4gIHRlbXBsYXRlVXJsOiAnbmV3cy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyduZXdzLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIE5ld3NDb21wb25lbnQgZXh0ZW5kcyBDb3JlQXBpTm90aWZpY2F0aW9uIHtcbiAgbmV3czpOZXdzRGF0YUludGVyZmFjZVtdID0gW107XG4gIHByaXZhdGUgc3RvY2s6c3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmV3c1N0YXRlOk5ld3NTdGF0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgd2F0Y2hsaXN0U3RhdGU6V2F0Y2hsaXN0U3RhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIG5ld3NBcGlTZXJ2aWNlOk5ld3NBcGlTZXJ2aWNlKSB7XG4gICAgc3VwZXIobmV3c1N0YXRlLCBuZXdzQXBpU2VydmljZSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh3YXRjaGxpc3RTdGF0ZS5zdG9jayQuc3Vic2NyaWJlKFxuICAgICAgc3RvY2sgPT4gdGhpcy51cGRhdGVTdG9jayhzdG9jaylcbiAgICApKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKG5ld3NTdGF0ZS5kYXRhJC5zdWJzY3JpYmUoXG4gICAgICBuZXdzID0+IHRoaXMudXBkYXRlTmV3cyhuZXdzKVxuICAgICkpO1xuXG4gICAgdGhpcy51cGRhdGVOZXdzKFtdKTtcbiAgfVxuXG4gIHJlbG9hZCgpIHtcbiAgICB0aGlzLm5ld3NBcGlTZXJ2aWNlLnJlbG9hZCgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTdG9jayhzdG9jazpzdHJpbmcpIHtcbiAgICB0aGlzLnN0b2NrID0gc3RvY2s7XG4gICAgaWYgKHN0b2NrKSB7XG4gICAgICB0aGlzLm5ld3NBcGlTZXJ2aWNlLmxvYWQoc3RvY2spO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlTmV3cyhkYXRhOk5ld3NEYXRhSW50ZXJmYWNlW10pIHtcbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIGlmICh0aGlzLnN0b2NrKSB7XG4gICAgICAgIHRoaXMudXBkYXRlTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvblR5cGVFbnVtLk5vdGlmaWNhdGlvbiwgQ29uZmlnLm5vdGlmaWNhdGlvbnMubm9EYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudXBkYXRlTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvblR5cGVFbnVtLk5vdGlmaWNhdGlvbiwgQ29uZmlnLm5vdGlmaWNhdGlvbnMubm9TdG9jayk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5uZXdzID0gZGF0YTtcbiAgfVxufVxuIl19
