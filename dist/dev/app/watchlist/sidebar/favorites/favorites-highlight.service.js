"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FavoritesHighlightService = (function () {
    function FavoritesHighlightService() {
    }
    FavoritesHighlightService.prototype.getHighlights = function (stocks, lastLoadedData) {
        var _this = this;
        var data = {};
        stocks.forEach(function (stock) {
            data[stock.symbol] = {
                price: _this.getHighlight(stock.price, _.get(lastLoadedData, stock.symbol + '.price'))
            };
        });
        return data;
    };
    FavoritesHighlightService.prototype.getLastLoadedData = function (stocks) {
        var data = {};
        stocks.forEach(function (stock) {
            data[stock.symbol] = {
                price: stock.price
            };
        });
        return data;
    };
    FavoritesHighlightService.prototype.getHighlight = function (value, prevValue) {
        var highlight;
        if (prevValue !== null && prevValue !== undefined && value !== prevValue) {
            highlight = (value > prevValue) ? 'mdl-color--green-A100' : 'mdl-color--red-100';
        }
        return highlight;
    };
    return FavoritesHighlightService;
}());
exports.FavoritesHighlightService = FavoritesHighlightService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3Qvc2lkZWJhci9mYXZvcml0ZXMvZmF2b3JpdGVzLWhpZ2hsaWdodC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0E7SUFBQTtJQWtDQSxDQUFDO0lBakNDLGlEQUFhLEdBQWIsVUFBYyxNQUEyQixFQUFFLGNBQWtCO1FBQTdELGlCQVVDO1FBVEMsSUFBSSxJQUFJLEdBQU8sRUFBRSxDQUFDO1FBRWxCLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUF3QjtZQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHO2dCQUNuQixLQUFLLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUM7YUFDdEYsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxxREFBaUIsR0FBakIsVUFBa0IsTUFBMkI7UUFDM0MsSUFBSSxJQUFJLEdBQU8sRUFBRSxDQUFDO1FBRWxCLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUF3QjtZQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHO2dCQUNuQixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7YUFDbkIsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTyxnREFBWSxHQUFwQixVQUFxQixLQUFZLEVBQUUsU0FBZ0I7UUFDakQsSUFBSSxTQUFnQixDQUFDO1FBRXJCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsS0FBSyxJQUFJLElBQUksU0FBUyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN6RSxTQUFTLEdBQUcsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEdBQUcsdUJBQXVCLEdBQUcsb0JBQW9CLENBQUM7UUFDbkYsQ0FBQztRQUVELE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUNILGdDQUFDO0FBQUQsQ0FsQ0EsQUFrQ0MsSUFBQTtBQWxDWSw4REFBeUIiLCJmaWxlIjoiYXBwL3dhdGNobGlzdC9zaWRlYmFyL2Zhdm9yaXRlcy9mYXZvcml0ZXMtaGlnaGxpZ2h0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9ja0RhdGFJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi9zdGF0ZS93YXRjaGxpc3Quc3RhdGUnO1xuZGVjbGFyZSBsZXQgXzphbnk7XG5cbmV4cG9ydCBjbGFzcyBGYXZvcml0ZXNIaWdobGlnaHRTZXJ2aWNlIHtcbiAgZ2V0SGlnaGxpZ2h0cyhzdG9ja3M6U3RvY2tEYXRhSW50ZXJmYWNlW10sIGxhc3RMb2FkZWREYXRhOmFueSk6YW55IHtcbiAgICBsZXQgZGF0YTphbnkgPSB7fTtcblxuICAgIHN0b2Nrcy5mb3JFYWNoKChzdG9jazpTdG9ja0RhdGFJbnRlcmZhY2UpID0+IHtcbiAgICAgIGRhdGFbc3RvY2suc3ltYm9sXSA9IHtcbiAgICAgICAgcHJpY2U6IHRoaXMuZ2V0SGlnaGxpZ2h0KHN0b2NrLnByaWNlLCBfLmdldChsYXN0TG9hZGVkRGF0YSwgc3RvY2suc3ltYm9sICsgJy5wcmljZScpKVxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgZ2V0TGFzdExvYWRlZERhdGEoc3RvY2tzOlN0b2NrRGF0YUludGVyZmFjZVtdKTphbnkge1xuICAgIGxldCBkYXRhOmFueSA9IHt9O1xuXG4gICAgc3RvY2tzLmZvckVhY2goKHN0b2NrOlN0b2NrRGF0YUludGVyZmFjZSkgPT4ge1xuICAgICAgZGF0YVtzdG9jay5zeW1ib2xdID0ge1xuICAgICAgICBwcmljZTogc3RvY2sucHJpY2VcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SGlnaGxpZ2h0KHZhbHVlOm51bWJlciwgcHJldlZhbHVlOm51bWJlcik6c3RyaW5nIHtcbiAgICBsZXQgaGlnaGxpZ2h0OnN0cmluZztcblxuICAgIGlmIChwcmV2VmFsdWUgIT09IG51bGwgJiYgcHJldlZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IHByZXZWYWx1ZSkge1xuICAgICAgaGlnaGxpZ2h0ID0gKHZhbHVlID4gcHJldlZhbHVlKSA/ICdtZGwtY29sb3ItLWdyZWVuLUExMDAnIDogJ21kbC1jb2xvci0tcmVkLTEwMCc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhpZ2hsaWdodDtcbiAgfVxufVxuIl19
