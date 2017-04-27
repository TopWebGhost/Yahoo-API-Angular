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
var InfoApiService = (function (_super) {
    __extends(InfoApiService, _super);
    function InfoApiService(http, infoState) {
        var _this = _super.call(this, http, infoState) || this;
        _this.http = http;
        _this.infoState = infoState;
        return _this;
    }
    InfoApiService.prototype.load = function (stock) {
        var _this = this;
        this.stock = stock;
        this.toggleLoader(true);
        this.get(index_1.Config.paths.info.replace('$stock', encodeURIComponent(stock)))
            .subscribe(function (data) { return _this.complete(_this.transform(data)); }, function () { return _this.failed(); });
    };
    InfoApiService.prototype.reload = function () {
        this.load(this.stock);
    };
    InfoApiService.prototype.transform = function (rawData) {
        var data = [];
        var info = _.get(rawData, 'query.results.quote');
        if (info) {
            info.Volume = index_1.numberUnitFormat(info.Volume, 2);
            info.AverageDailyVolume = index_1.numberUnitFormat(info.AverageDailyVolume, 2);
            data.push(info);
        }
        return data;
    };
    return InfoApiService;
}(index_1.CoreApiResponseService));
InfoApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        index_2.InfoStateService])
], InfoApiService);
exports.InfoApiService = InfoApiService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3QvY29udGVudC9pbmZvL2luZm8tYXBpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUFxQztBQUNyQyw2Q0FJNkI7QUFDN0IsdUNBR3VCO0FBSXZCLElBQWEsY0FBYztJQUFTLGtDQUFzQjtJQUd4RCx3QkFBbUIsSUFBUyxFQUNSLFNBQTBCO1FBRDlDLFlBRUUsa0JBQU0sSUFBSSxFQUFFLFNBQVMsQ0FBQyxTQUN2QjtRQUhrQixVQUFJLEdBQUosSUFBSSxDQUFLO1FBQ1IsZUFBUyxHQUFULFNBQVMsQ0FBaUI7O0lBRTlDLENBQUM7SUFFRCw2QkFBSSxHQUFKLFVBQUssS0FBWTtRQUFqQixpQkFRQztRQVBDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDckUsU0FBUyxDQUNSLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQW5DLENBQW1DLEVBQzNDLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxFQUFFLEVBQWIsQ0FBYSxDQUNwQixDQUFDO0lBQ04sQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRU8sa0NBQVMsR0FBakIsVUFBa0IsT0FBVztRQUMzQixJQUFJLElBQUksR0FBdUIsRUFBRSxDQUFDO1FBQ2xDLElBQUksSUFBSSxHQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDckQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsd0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsd0JBQWdCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQWpDQSxBQWlDQyxDQWpDbUMsOEJBQXNCLEdBaUN6RDtBQWpDWSxjQUFjO0lBRDFCLGlCQUFVLEVBQUU7cUNBSWEsV0FBSTtRQUNFLHdCQUFnQjtHQUpuQyxjQUFjLENBaUMxQjtBQWpDWSx3Q0FBYyIsImZpbGUiOiJhcHAvd2F0Y2hsaXN0L2NvbnRlbnQvaW5mby9pbmZvLWFwaS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHtcbiAgQ29uZmlnLFxuICBDb3JlQXBpUmVzcG9uc2VTZXJ2aWNlLFxuICBudW1iZXJVbml0Rm9ybWF0XG59IGZyb20gJy4uLy4uLy4uL2NvcmUvaW5kZXgnO1xuaW1wb3J0IHtcbiAgSW5mb1N0YXRlU2VydmljZSxcbiAgSW5mb0RhdGFJbnRlcmZhY2Vcbn0gZnJvbSAnLi9zdGF0ZS9pbmRleCc7XG5kZWNsYXJlIGxldCBfOmFueTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluZm9BcGlTZXJ2aWNlIGV4dGVuZHMgQ29yZUFwaVJlc3BvbnNlU2VydmljZSB7XG4gIHByaXZhdGUgc3RvY2s6c3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOkh0dHAsXG4gICAgICAgICAgICAgIHByaXZhdGUgaW5mb1N0YXRlOkluZm9TdGF0ZVNlcnZpY2UpIHtcbiAgICBzdXBlcihodHRwLCBpbmZvU3RhdGUpO1xuICB9XG5cbiAgbG9hZChzdG9jazpzdHJpbmcpIHtcbiAgICB0aGlzLnN0b2NrID0gc3RvY2s7XG4gICAgdGhpcy50b2dnbGVMb2FkZXIodHJ1ZSk7XG4gICAgdGhpcy5nZXQoQ29uZmlnLnBhdGhzLmluZm8ucmVwbGFjZSgnJHN0b2NrJywgZW5jb2RlVVJJQ29tcG9uZW50KHN0b2NrKSkpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBkYXRhID0+IHRoaXMuY29tcGxldGUodGhpcy50cmFuc2Zvcm0oZGF0YSkpLFxuICAgICAgICAoKSA9PiB0aGlzLmZhaWxlZCgpXG4gICAgICApO1xuICB9XG5cbiAgcmVsb2FkKCkge1xuICAgIHRoaXMubG9hZCh0aGlzLnN0b2NrKTtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNmb3JtKHJhd0RhdGE6YW55KTpJbmZvRGF0YUludGVyZmFjZVtdIHtcbiAgICBsZXQgZGF0YTpJbmZvRGF0YUludGVyZmFjZVtdID0gW107XG4gICAgbGV0IGluZm86YW55ID0gXy5nZXQocmF3RGF0YSwgJ3F1ZXJ5LnJlc3VsdHMucXVvdGUnKTtcbiAgICBpZiAoaW5mbykge1xuICAgICAgaW5mby5Wb2x1bWUgPSBudW1iZXJVbml0Rm9ybWF0KGluZm8uVm9sdW1lLCAyKTtcbiAgICAgIGluZm8uQXZlcmFnZURhaWx5Vm9sdW1lID0gbnVtYmVyVW5pdEZvcm1hdChpbmZvLkF2ZXJhZ2VEYWlseVZvbHVtZSwgMik7XG4gICAgICBkYXRhLnB1c2goaW5mbyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbn1cbiJdfQ==
