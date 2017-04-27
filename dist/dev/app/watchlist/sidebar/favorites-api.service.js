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
var index_1 = require("../../core/index");
var index_2 = require("./favorites/state/index");
var FavoritesApiService = (function (_super) {
    __extends(FavoritesApiService, _super);
    function FavoritesApiService(http, favoritesState) {
        var _this = _super.call(this, http, favoritesState) || this;
        _this.http = http;
        _this.favoritesState = favoritesState;
        _this.stocks = [];
        return _this;
    }
    FavoritesApiService.prototype.load = function (stocks) {
        var _this = this;
        this.stocks = stocks;
        this.toggleLoader(true);
        this.get(index_1.Config.paths.stocks.replace('$stocks', encodeURIComponent('"' + stocks.join('","') + '"')))
            .subscribe(function (data) { return _this.complete(_this.transform(data)); }, function () { return _this.failed(); });
    };
    FavoritesApiService.prototype.reload = function () {
        this.load(this.stocks);
    };
    FavoritesApiService.prototype.transform = function (data) {
        var _this = this;
        var stocks = _.get(data, 'query.results.quote', []);
        if (!_.isArray(stocks)) {
            stocks = [stocks];
        }
        return stocks.map(function (quote) {
            var change = Number(quote.Change) || 0.00;
            return {
                symbol: quote.symbol,
                name: quote.Name,
                price: Number(quote.LastTradePriceOnly),
                priceDisplay: Number(quote.LastTradePriceOnly).toFixed(2),
                change: _this.getPlusSign(change) + change.toFixed(2),
                percentage: _this.calculateChangePercent(change, quote.LastTradePriceOnly)
            };
        });
    };
    FavoritesApiService.prototype.calculateChangePercent = function (change, price) {
        return this.getPlusSign(change) + (change / (Number(price) - change) * 100).toFixed(2) + '%';
    };
    FavoritesApiService.prototype.getPlusSign = function (change) {
        return (change > 0) ? '+' : '';
    };
    return FavoritesApiService;
}(index_1.CoreApiResponseService));
FavoritesApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        index_2.FavoritesStateService])
], FavoritesApiService);
exports.FavoritesApiService = FavoritesApiService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3Qvc2lkZWJhci9mYXZvcml0ZXMtYXBpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUFxQztBQUNyQywwQ0FHMEI7QUFDMUIsaURBQWdFO0FBSWhFLElBQWEsbUJBQW1CO0lBQVMsdUNBQXNCO0lBRzdELDZCQUFtQixJQUFTLEVBQ1IsY0FBb0M7UUFEeEQsWUFFRSxrQkFBTSxJQUFJLEVBQUUsY0FBYyxDQUFDLFNBQzVCO1FBSGtCLFVBQUksR0FBSixJQUFJLENBQUs7UUFDUixvQkFBYyxHQUFkLGNBQWMsQ0FBc0I7UUFIaEQsWUFBTSxHQUFZLEVBQUUsQ0FBQzs7SUFLN0IsQ0FBQztJQUVELGtDQUFJLEdBQUosVUFBSyxNQUFlO1FBQXBCLGlCQVFDO1FBUEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLGNBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNqRyxTQUFTLENBQ1IsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBbkMsQ0FBbUMsRUFDM0MsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLEVBQUUsRUFBYixDQUFhLENBQ3BCLENBQUM7SUFDTixDQUFDO0lBRUQsb0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFTyx1Q0FBUyxHQUFqQixVQUFrQixJQUFRO1FBQTFCLGlCQWlCQztRQWhCQyxJQUFJLE1BQU0sR0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxxQkFBcUIsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4RCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLENBQUM7UUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQVM7WUFDMUIsSUFBSSxNQUFNLEdBQVUsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUM7WUFDakQsTUFBTSxDQUFDO2dCQUNMLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtnQkFDcEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO2dCQUNoQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztnQkFDdkMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUN6RCxNQUFNLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDcEQsVUFBVSxFQUFFLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDO2FBQzFFLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxvREFBc0IsR0FBOUIsVUFBK0IsTUFBYSxFQUFFLEtBQVk7UUFDeEQsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUMvRixDQUFDO0lBRU8seUNBQVcsR0FBbkIsVUFBb0IsTUFBYTtRQUMvQixNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQWhEQSxBQWdEQyxDQWhEd0MsOEJBQXNCLEdBZ0Q5RDtBQWhEWSxtQkFBbUI7SUFEL0IsaUJBQVUsRUFBRTtxQ0FJYSxXQUFJO1FBQ08sNkJBQXFCO0dBSjdDLG1CQUFtQixDQWdEL0I7QUFoRFksa0RBQW1CIiwiZmlsZSI6ImFwcC93YXRjaGxpc3Qvc2lkZWJhci9mYXZvcml0ZXMtYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQge1xuICBDb25maWcsXG4gIENvcmVBcGlSZXNwb25zZVNlcnZpY2Vcbn0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XG5pbXBvcnQgeyBGYXZvcml0ZXNTdGF0ZVNlcnZpY2UgfSBmcm9tICcuL2Zhdm9yaXRlcy9zdGF0ZS9pbmRleCc7XG5kZWNsYXJlIGxldCBfOmFueTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhdm9yaXRlc0FwaVNlcnZpY2UgZXh0ZW5kcyBDb3JlQXBpUmVzcG9uc2VTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzdG9ja3M6c3RyaW5nW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDpIdHRwLFxuICAgICAgICAgICAgICBwcml2YXRlIGZhdm9yaXRlc1N0YXRlOkZhdm9yaXRlc1N0YXRlU2VydmljZSkge1xuICAgIHN1cGVyKGh0dHAsIGZhdm9yaXRlc1N0YXRlKTtcbiAgfVxuXG4gIGxvYWQoc3RvY2tzOnN0cmluZ1tdKSB7XG4gICAgdGhpcy5zdG9ja3MgPSBzdG9ja3M7XG4gICAgdGhpcy50b2dnbGVMb2FkZXIodHJ1ZSk7XG4gICAgdGhpcy5nZXQoQ29uZmlnLnBhdGhzLnN0b2Nrcy5yZXBsYWNlKCckc3RvY2tzJywgZW5jb2RlVVJJQ29tcG9uZW50KCdcIicgKyBzdG9ja3Muam9pbignXCIsXCInKSArICdcIicpKSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIGRhdGEgPT4gdGhpcy5jb21wbGV0ZSh0aGlzLnRyYW5zZm9ybShkYXRhKSksXG4gICAgICAgICgpID0+IHRoaXMuZmFpbGVkKClcbiAgICAgICk7XG4gIH1cblxuICByZWxvYWQoKSB7XG4gICAgdGhpcy5sb2FkKHRoaXMuc3RvY2tzKTtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNmb3JtKGRhdGE6YW55KSB7XG4gICAgbGV0IHN0b2NrczphbnkgPSBfLmdldChkYXRhLCAncXVlcnkucmVzdWx0cy5xdW90ZScsIFtdKTtcbiAgICBpZiAoIV8uaXNBcnJheShzdG9ja3MpKSB7XG4gICAgICBzdG9ja3MgPSBbc3RvY2tzXTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RvY2tzLm1hcCgocXVvdGU6YW55KSA9PiB7XG4gICAgICBsZXQgY2hhbmdlOm51bWJlciA9IE51bWJlcihxdW90ZS5DaGFuZ2UpIHx8IDAuMDA7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzeW1ib2w6IHF1b3RlLnN5bWJvbCxcbiAgICAgICAgbmFtZTogcXVvdGUuTmFtZSxcbiAgICAgICAgcHJpY2U6IE51bWJlcihxdW90ZS5MYXN0VHJhZGVQcmljZU9ubHkpLFxuICAgICAgICBwcmljZURpc3BsYXk6IE51bWJlcihxdW90ZS5MYXN0VHJhZGVQcmljZU9ubHkpLnRvRml4ZWQoMiksXG4gICAgICAgIGNoYW5nZTogdGhpcy5nZXRQbHVzU2lnbihjaGFuZ2UpICsgY2hhbmdlLnRvRml4ZWQoMiksXG4gICAgICAgIHBlcmNlbnRhZ2U6IHRoaXMuY2FsY3VsYXRlQ2hhbmdlUGVyY2VudChjaGFuZ2UsIHF1b3RlLkxhc3RUcmFkZVByaWNlT25seSlcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZUNoYW5nZVBlcmNlbnQoY2hhbmdlOm51bWJlciwgcHJpY2U6c3RyaW5nKTpzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmdldFBsdXNTaWduKGNoYW5nZSkgKyAoY2hhbmdlIC8gKE51bWJlcihwcmljZSkgLSBjaGFuZ2UpICogMTAwKS50b0ZpeGVkKDIpICsgJyUnO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQbHVzU2lnbihjaGFuZ2U6bnVtYmVyKTpzdHJpbmcge1xuICAgIHJldHVybiAoY2hhbmdlID4gMCkgPyAnKycgOiAnJztcbiAgfVxufVxuIl19
