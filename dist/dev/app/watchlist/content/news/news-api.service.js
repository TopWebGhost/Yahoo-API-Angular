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
var http_1 = require("@angular/http");
var index_1 = require("../../../core/index");
var index_2 = require("./state/index");
var NewsApiService = (function (_super) {
    __extends(NewsApiService, _super);
    function NewsApiService(http, newsState) {
        var _this = _super.call(this, http, newsState) || this;
        _this.http = http;
        _this.newsState = newsState;
        return _this;
    }
    NewsApiService.prototype.load = function (stock, config) {
        var _this = this;
        if (config === void 0) { config = index_1.Config; }
        this.stock = stock;
        this.toggleLoader(true);
        var url = config.paths.news.replace('$stock', encodeURIComponent(stock));
        if (config.env === 'PROD') {
            this.post(config.paths.proxy, 'url=' + encodeURIComponent(url))
                .subscribe(function (data) { return _this.complete(_this.transform(data)); }, function () { return _this.failed(); });
        }
        else {
            this.get(url)
                .subscribe(function (data) { return _this.complete(_this.transform(data)); }, function () { return _this.failed(); });
        }
    };
    NewsApiService.prototype.reload = function () {
        this.load(this.stock);
    };
    NewsApiService.prototype.transform = function (data) {
        var _this = this;
        var news = _.get(data, 'Content.result', []);
        return news.map(function (item) {
            return {
                source: item.provider_name,
                date: _this.convertDate(item.provider_publish_time),
                title: item.title,
                url: item.url,
                image: item.thumbnail
            };
        });
    };
    NewsApiService.prototype.convertDate = function (date) {
        return moment(date * 1000).format('ddd, MMM Do YYYY h:mm A');
    };
    return NewsApiService;
}(index_1.CoreApiResponseService));
NewsApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        index_2.NewsStateService])
], NewsApiService);
exports.NewsApiService = NewsApiService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3QvY29udGVudC9uZXdzL25ld3MtYXBpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUFxQztBQUNyQyw2Q0FJNkI7QUFDN0IsdUNBR3VCO0FBS3ZCLElBQWEsY0FBYztJQUFTLGtDQUFzQjtJQUd4RCx3QkFBbUIsSUFBUyxFQUNSLFNBQTBCO1FBRDlDLFlBRUUsa0JBQU0sSUFBSSxFQUFFLFNBQVMsQ0FBQyxTQUN2QjtRQUhrQixVQUFJLEdBQUosSUFBSSxDQUFLO1FBQ1IsZUFBUyxHQUFULFNBQVMsQ0FBaUI7O0lBRTlDLENBQUM7SUFFRCw2QkFBSSxHQUFKLFVBQUssS0FBWSxFQUFFLE1BQStCO1FBQWxELGlCQWlCQztRQWpCa0IsdUJBQUEsRUFBQSx1QkFBK0I7UUFDaEQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLEdBQUcsR0FBVSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDaEYsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxHQUFHLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUM1RCxTQUFTLENBQ1IsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBbkMsQ0FBbUMsRUFDM0MsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLEVBQUUsRUFBYixDQUFhLENBQ3BCLENBQUM7UUFDTixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztpQkFDVixTQUFTLENBQ1IsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBbkMsQ0FBbUMsRUFDM0MsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLEVBQUUsRUFBYixDQUFhLENBQ3BCLENBQUM7UUFDTixDQUFDO0lBQ0gsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRU8sa0NBQVMsR0FBakIsVUFBa0IsSUFBUTtRQUExQixpQkFXQztRQVZDLElBQUksSUFBSSxHQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBUTtZQUN2QixNQUFNLENBQUM7Z0JBQ0wsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhO2dCQUMxQixJQUFJLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7Z0JBQ2xELEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDakIsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO2dCQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUzthQUN0QixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sb0NBQVcsR0FBbkIsVUFBb0IsSUFBVztRQUM3QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQS9DQSxBQStDQyxDQS9DbUMsOEJBQXNCLEdBK0N6RDtBQS9DWSxjQUFjO0lBRDFCLGlCQUFVLEVBQUU7cUNBSWEsV0FBSTtRQUNFLHdCQUFnQjtHQUpuQyxjQUFjLENBK0MxQjtBQS9DWSx3Q0FBYyIsImZpbGUiOiJhcHAvd2F0Y2hsaXN0L2NvbnRlbnQvbmV3cy9uZXdzLWFwaS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHtcbiAgQ29uZmlnLFxuICBDb25maWdJbnRlcmZhY2UsXG4gIENvcmVBcGlSZXNwb25zZVNlcnZpY2Vcbn0gZnJvbSAnLi4vLi4vLi4vY29yZS9pbmRleCc7XG5pbXBvcnQge1xuICBOZXdzU3RhdGVTZXJ2aWNlLFxuICBOZXdzRGF0YUludGVyZmFjZVxufSBmcm9tICcuL3N0YXRlL2luZGV4JztcbmRlY2xhcmUgbGV0IG1vbWVudDphbnk7XG5kZWNsYXJlIGxldCBfOmFueTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5ld3NBcGlTZXJ2aWNlIGV4dGVuZHMgQ29yZUFwaVJlc3BvbnNlU2VydmljZSB7XG4gIHByaXZhdGUgc3RvY2s6c3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOkh0dHAsXG4gICAgICAgICAgICAgIHByaXZhdGUgbmV3c1N0YXRlOk5ld3NTdGF0ZVNlcnZpY2UpIHtcbiAgICBzdXBlcihodHRwLCBuZXdzU3RhdGUpO1xuICB9XG5cbiAgbG9hZChzdG9jazpzdHJpbmcsIGNvbmZpZzpDb25maWdJbnRlcmZhY2UgPSBDb25maWcpIHtcbiAgICB0aGlzLnN0b2NrID0gc3RvY2s7XG4gICAgdGhpcy50b2dnbGVMb2FkZXIodHJ1ZSk7XG4gICAgbGV0IHVybDpzdHJpbmcgPSBjb25maWcucGF0aHMubmV3cy5yZXBsYWNlKCckc3RvY2snLCBlbmNvZGVVUklDb21wb25lbnQoc3RvY2spKTtcbiAgICBpZiAoY29uZmlnLmVudiA9PT0gJ1BST0QnKSB7XG4gICAgICB0aGlzLnBvc3QoY29uZmlnLnBhdGhzLnByb3h5LCAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQodXJsKSlcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICBkYXRhID0+IHRoaXMuY29tcGxldGUodGhpcy50cmFuc2Zvcm0oZGF0YSkpLFxuICAgICAgICAgICgpID0+IHRoaXMuZmFpbGVkKClcbiAgICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nZXQodXJsKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIGRhdGEgPT4gdGhpcy5jb21wbGV0ZSh0aGlzLnRyYW5zZm9ybShkYXRhKSksXG4gICAgICAgICAgKCkgPT4gdGhpcy5mYWlsZWQoKVxuICAgICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpIHtcbiAgICB0aGlzLmxvYWQodGhpcy5zdG9jayk7XG4gIH1cblxuICBwcml2YXRlIHRyYW5zZm9ybShkYXRhOmFueSk6TmV3c0RhdGFJbnRlcmZhY2VbXSB7XG4gICAgbGV0IG5ld3M6YW55W10gPSBfLmdldChkYXRhLCAnQ29udGVudC5yZXN1bHQnLCBbXSk7XG4gICAgcmV0dXJuIG5ld3MubWFwKChpdGVtOmFueSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc291cmNlOiBpdGVtLnByb3ZpZGVyX25hbWUsXG4gICAgICAgIGRhdGU6IHRoaXMuY29udmVydERhdGUoaXRlbS5wcm92aWRlcl9wdWJsaXNoX3RpbWUpLFxuICAgICAgICB0aXRsZTogaXRlbS50aXRsZSxcbiAgICAgICAgdXJsOiBpdGVtLnVybCxcbiAgICAgICAgaW1hZ2U6IGl0ZW0udGh1bWJuYWlsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0RGF0ZShkYXRlOm51bWJlcik6c3RyaW5nIHtcbiAgICByZXR1cm4gbW9tZW50KGRhdGUgKiAxMDAwKS5mb3JtYXQoJ2RkZCwgTU1NIERvIFlZWVkgaDptbSBBJyk7XG4gIH1cbn1cbiJdfQ==
