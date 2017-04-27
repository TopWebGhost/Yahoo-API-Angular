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
var ChartApiService = (function (_super) {
    __extends(ChartApiService, _super);
    function ChartApiService(http, chartState) {
        var _this = _super.call(this, http, chartState) || this;
        _this.http = http;
        _this.chartState = chartState;
        _this.params = {};
        return _this;
    }
    ChartApiService.prototype.load = function (stock, range, interval, config) {
        var _this = this;
        if (config === void 0) { config = index_1.Config; }
        this.params = { stock: stock, range: range, interval: interval };
        this.toggleLoader(true);
        var url = config.paths.charts.replace('$stock', stock);
        url = url.replace('$range', range);
        url = url.replace('$interval', interval);
        if (config.env === 'PROD') {
            this.post(config.paths.proxy, 'url=' + encodeURIComponent(url))
                .subscribe(function (data) { return _this.complete(_this.transform(data)); }, function () { return _this.failed(); });
        }
        else {
            this.get(url)
                .subscribe(function (data) { return _this.complete(_this.transform(data)); }, function () { return _this.failed(); });
        }
    };
    ChartApiService.prototype.reload = function () {
        this.load(this.params.stock, this.params.range, this.params.interval);
    };
    ChartApiService.prototype.transform = function (rawData) {
        var data = [];
        var chartData = _.get(rawData, 'chart.result[0]', {});
        if (chartData) {
            var items_1 = {
                close: _.get(chartData, 'indicators.quote[0].close', []),
                high: _.get(chartData, 'indicators.quote[0].high', []),
                low: _.get(chartData, 'indicators.quote[0].low', []),
                open: _.get(chartData, 'indicators.quote[0].open', []),
                volume: _.get(chartData, 'indicators.quote[0].volume', []),
                dates: chartData.timestamp || []
            };
            var close_1;
            items_1.dates.forEach(function (value, index) {
                close_1 = _.get(items_1, 'close[' + index + ']', null);
                if (close_1) {
                    data.push({
                        timestamp: value,
                        date: new Date(value * 1000),
                        close: close_1,
                        high: _.get(items_1, 'high[' + index + ']', null),
                        low: _.get(items_1, 'low[' + index + ']', null),
                        open: _.get(items_1, 'open[' + index + ']', null),
                        volume: _.get(items_1, 'volume[' + index + ']', null),
                    });
                }
            });
        }
        return data;
    };
    return ChartApiService;
}(index_1.CoreApiResponseService));
ChartApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        index_2.ChartStateService])
], ChartApiService);
exports.ChartApiService = ChartApiService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3QvY29udGVudC9jaGFydC9jaGFydC1hcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXFDO0FBQ3JDLDZDQUk2QjtBQUM3Qix1Q0FHdUI7QUFLdkIsSUFBYSxlQUFlO0lBQVMsbUNBQXNCO0lBR3pELHlCQUFtQixJQUFTLEVBQ1IsVUFBNEI7UUFEaEQsWUFFRSxrQkFBTSxJQUFJLEVBQUUsVUFBVSxDQUFDLFNBQ3hCO1FBSGtCLFVBQUksR0FBSixJQUFJLENBQUs7UUFDUixnQkFBVSxHQUFWLFVBQVUsQ0FBa0I7UUFIeEMsWUFBTSxHQUFPLEVBQUUsQ0FBQzs7SUFLeEIsQ0FBQztJQUVELDhCQUFJLEdBQUosVUFBSyxLQUFZLEVBQUUsS0FBWSxFQUFFLFFBQWUsRUFBRSxNQUErQjtRQUFqRixpQkFxQkM7UUFyQmlELHVCQUFBLEVBQUEsdUJBQStCO1FBQy9FLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFeEIsSUFBSSxHQUFHLEdBQVUsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5RCxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbkMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRXpDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxL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L0MsTUFBTSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBSyxFQUFFLFNBQVMsR0FBRyxLQUFLLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQztxQkFDcEQsQ0FBQyxDQUFDO2dCQUNMLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FuRUEsQUFtRUMsQ0FuRW9DLDhCQUFzQixHQW1FMUQ7QUFuRVksZUFBZTtJQUQzQixpQkFBVSxFQUFFO3FDQUlhLFdBQUk7UUFDRyx5QkFBaUI7R0FKckMsZUFBZSxDQW1FM0I7QUFuRVksMENBQWUiLCJmaWxlIjoiYXBwL3dhdGNobGlzdC9jb250ZW50L2NoYXJ0L2NoYXJ0LWFwaS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHtcbiAgQ29uZmlnLFxuICBDb25maWdJbnRlcmZhY2UsXG4gIENvcmVBcGlSZXNwb25zZVNlcnZpY2Vcbn0gZnJvbSAnLi4vLi4vLi4vY29yZS9pbmRleCc7XG5pbXBvcnQge1xuICBDaGFydFN0YXRlU2VydmljZSxcbiAgQ2hhcnREYXRhSW50ZXJmYWNlXG59IGZyb20gJy4vc3RhdGUvaW5kZXgnO1xuXG5kZWNsYXJlIGxldCBfOmFueTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENoYXJ0QXBpU2VydmljZSBleHRlbmRzIENvcmVBcGlSZXNwb25zZVNlcnZpY2Uge1xuICBwcml2YXRlIHBhcmFtczphbnkgPSB7fTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDpIdHRwLFxuICAgICAgICAgICAgICBwcml2YXRlIGNoYXJ0U3RhdGU6Q2hhcnRTdGF0ZVNlcnZpY2UpIHtcbiAgICBzdXBlcihodHRwLCBjaGFydFN0YXRlKTtcbiAgfVxuXG4gIGxvYWQoc3RvY2s6c3RyaW5nLCByYW5nZTpzdHJpbmcsIGludGVydmFsOnN0cmluZywgY29uZmlnOkNvbmZpZ0ludGVyZmFjZSA9IENvbmZpZykge1xuICAgIHRoaXMucGFyYW1zID0ge3N0b2NrOiBzdG9jaywgcmFuZ2U6IHJhbmdlLCBpbnRlcnZhbDogaW50ZXJ2YWx9O1xuICAgIHRoaXMudG9nZ2xlTG9hZGVyKHRydWUpO1xuXG4gICAgbGV0IHVybDpzdHJpbmcgPSBjb25maWcucGF0aHMuY2hhcnRzLnJlcGxhY2UoJyRzdG9jaycsIHN0b2NrKTtcbiAgICB1cmwgPSB1cmwucmVwbGFjZSgnJHJhbmdlJywgcmFuZ2UpO1xuICAgIHVybCA9IHVybC5yZXBsYWNlKCckaW50ZXJ2YWwnLCBpbnRlcnZhbCk7XG5cbiAgICBpZiAoY29uZmlnLmVudiA9PT0gJ1BST0QnKSB7XG4gICAgICB0aGlzLnBvc3QoY29uZmlnLnBhdGhzLnByb3h5LCAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQodXJsKSlcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICBkYXRhID0+IHRoaXMuY29tcGxldGUodGhpcy50cmFuc2Zvcm0oZGF0YSkpLFxuICAgICAgICAgICgpID0+IHRoaXMuZmFpbGVkKClcbiAgICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nZXQodXJsKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIGRhdGEgPT4gdGhpcy5jb21wbGV0ZSh0aGlzLnRyYW5zZm9ybShkYXRhKSksXG4gICAgICAgICAgKCkgPT4gdGhpcy5mYWlsZWQoKVxuICAgICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpIHtcbiAgICB0aGlzLmxvYWQodGhpcy5wYXJhbXMuc3RvY2ssIHRoaXMucGFyYW1zLnJhbmdlLCB0aGlzLnBhcmFtcy5pbnRlcnZhbCk7XG4gIH1cblxuICBwcml2YXRlIHRyYW5zZm9ybShyYXdEYXRhOmFueSk6Q2hhcnREYXRhSW50ZXJmYWNlW10ge1xuICAgIGxldCBkYXRhOkNoYXJ0RGF0YUludGVyZmFjZVtdID0gW107XG5cbiAgICBsZXQgY2hhcnREYXRhOmFueSA9IF8uZ2V0KHJhd0RhdGEsICdjaGFydC5yZXN1bHRbMF0nLCB7fSk7XG4gICAgaWYgKGNoYXJ0RGF0YSkge1xuICAgICAgbGV0IGl0ZW1zOmFueSA9IHtcbiAgICAgICAgY2xvc2U6IF8uZ2V0KGNoYXJ0RGF0YSwgJ2luZGljYXRvcnMucXVvdGVbMF0uY2xvc2UnLCBbXSksXG4gICAgICAgIGhpZ2g6IF8uZ2V0KGNoYXJ0RGF0YSwgJ2luZGljYXRvcnMucXVvdGVbMF0uaGlnaCcsIFtdKSxcbiAgICAgICAgbG93OiBfLmdldChjaGFydERhdGEsICdpbmRpY2F0b3JzLnF1b3RlWzBdLmxvdycsIFtdKSxcbiAgICAgICAgb3BlbjogXy5nZXQoY2hhcnREYXRhLCAnaW5kaWNhdG9ycy5xdW90ZVswXS5vcGVuJywgW10pLFxuICAgICAgICB2b2x1bWU6IF8uZ2V0KGNoYXJ0RGF0YSwgJ2luZGljYXRvcnMucXVvdGVbMF0udm9sdW1lJywgW10pLFxuICAgICAgICBkYXRlczogY2hhcnREYXRhLnRpbWVzdGFtcCB8fCBbXVxuICAgICAgfTtcbiAgICAgIGxldCBjbG9zZTpudW1iZXI7XG4gICAgICBpdGVtcy5kYXRlcy5mb3JFYWNoKCh2YWx1ZTpudW1iZXIsIGluZGV4Om51bWJlcikgPT4ge1xuICAgICAgICBjbG9zZSA9IF8uZ2V0KGl0ZW1zLCAnY2xvc2VbJyArIGluZGV4ICsgJ10nLCBudWxsKTtcbiAgICAgICAgaWYgKGNsb3NlKSB7XG4gICAgICAgICAgZGF0YS5wdXNoKHtcbiAgICAgICAgICAgIHRpbWVzdGFtcDogdmFsdWUsXG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSh2YWx1ZSAqIDEwMDApLFxuICAgICAgICAgICAgY2xvc2U6IGNsb3NlLFxuICAgICAgICAgICAgaGlnaDogXy5nZXQoaXRlbXMsICdoaWdoWycgKyBpbmRleCArICddJywgbnVsbCksXG4gICAgICAgICAgICBsb3c6IF8uZ2V0KGl0ZW1zLCAnbG93WycgKyBpbmRleCArICddJywgbnVsbCksXG4gICAgICAgICAgICBvcGVuOiBfLmdldChpdGVtcywgJ29wZW5bJyArIGluZGV4ICsgJ10nLCBudWxsKSxcbiAgICAgICAgICAgIHZvbHVtZTogXy5nZXQoaXRlbXMsICd2b2x1bWVbJyArIGluZGV4ICsgJ10nLCBudWxsKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbn1cbiJdfQ==
