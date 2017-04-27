"use strict";
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
var chart_tooltips_service_1 = require("./chart-tooltips.service");
var chart_options_service_1 = require("./chart-options.service");
var index_1 = require("../../state/index");
var ChartCrosshairService = (function () {
    function ChartCrosshairService(chartTooltipsService, chartOptionsService, chartState) {
        this.chartTooltipsService = chartTooltipsService;
        this.chartOptionsService = chartOptionsService;
        this.chartState = chartState;
    }
    ChartCrosshairService.prototype.getCrosshair = function (data, line) {
        var _this = this;
        data.crosshair = [];
        return fc.tool.crosshair()
            .snap(fc.util.seriesPointSnapXOnly(line, data))
            .xLabel(function (d) {
            return _this.chartOptionsService.options.dateFormat(d.datum.date);
        })
            .yLabel(function (d) {
            return _this.chartOptionsService.options.priceFormat(d.datum.close);
        })
            .decorate(function (sel) {
            _this.updateElements(sel);
            _this.chartTooltipsService.addYTooltip(sel);
            _this.chartTooltipsService.addXTooltip(sel);
        })
            .on('trackingmove', function (crosshairData) {
            if (crosshairData[0]) {
                _this.chartState.changePoint(crosshairData[0].datum);
            }
        })
            .on('trackingend', function () {
            _this.chartState.changePoint(data[data.length - 1]);
        });
    };
    ChartCrosshairService.prototype.updateElements = function (sel) {
        if (sel[0].length !== 0) {
            sel.select('circle')
                .attr('transform', sel.select('.trackball').attr('transform'));
        }
        sel.enter().select('circle')
            .attr('r', 3);
        sel.select('.trackball')
            .attr('transform', 'translate(0,0)');
    };
    return ChartCrosshairService;
}());
ChartCrosshairService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [chart_tooltips_service_1.ChartTooltipsService,
        chart_options_service_1.ChartOptionsService,
        index_1.ChartStateService])
], ChartCrosshairService);
exports.ChartCrosshairService = ChartCrosshairService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3QvY29udGVudC9jaGFydC9kM2ZjL3NlcnZpY2VzL2NoYXJ0LWNyb3NzaGFpci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLG1FQUFnRTtBQUNoRSxpRUFBOEQ7QUFDOUQsMkNBQXNEO0FBS3RELElBQWEscUJBQXFCO0lBQ2hDLCtCQUFvQixvQkFBeUMsRUFDekMsbUJBQXVDLEVBQ3ZDLFVBQTRCO1FBRjVCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7UUFDekMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQUN2QyxlQUFVLEdBQVYsVUFBVSxDQUFrQjtJQUNoRCxDQUFDO0lBRUQsNENBQVksR0FBWixVQUFhLElBQVEsRUFBRSxJQUFRO1FBQS9CLGlCQXVCQztRQXRCQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7YUFDdkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzlDLE1BQU0sQ0FBQyxVQUFDLENBQUs7WUFDWixNQUFNLENBQUMsS0FBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRSxDQUFDLENBQUM7YUFDRCxNQUFNLENBQUMsVUFBQyxDQUFLO1lBQ1osTUFBTSxDQUFDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckUsQ0FBQyxDQUFDO2FBQ0QsUUFBUSxDQUFDLFVBQUMsR0FBTztZQUNoQixLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0MsS0FBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUM7YUFDRCxFQUFFLENBQUMsY0FBYyxFQUFFLFVBQUMsYUFBaUI7WUFDcEMsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RELENBQUM7UUFDSCxDQUFDLENBQUM7YUFDRCxFQUFFLENBQUMsYUFBYSxFQUFFO1lBQ2pCLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sOENBQWMsR0FBdEIsVUFBdUIsR0FBTztRQUM1QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7aUJBQ2pCLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNuRSxDQUFDO1FBQ0QsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7YUFDekIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVoQixHQUFHLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQzthQUNyQixJQUFJLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0ExQ0EsQUEwQ0MsSUFBQTtBQTFDWSxxQkFBcUI7SUFEakMsaUJBQVUsRUFBRTtxQ0FFOEIsNkNBQW9CO1FBQ3JCLDJDQUFtQjtRQUM1Qix5QkFBaUI7R0FIckMscUJBQXFCLENBMENqQztBQTFDWSxzREFBcUIiLCJmaWxlIjoiYXBwL3dhdGNobGlzdC9jb250ZW50L2NoYXJ0L2QzZmMvc2VydmljZXMvY2hhcnQtY3Jvc3NoYWlyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydFRvb2x0aXBzU2VydmljZSB9IGZyb20gJy4vY2hhcnQtdG9vbHRpcHMuc2VydmljZSc7XG5pbXBvcnQgeyBDaGFydE9wdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi9jaGFydC1vcHRpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2hhcnRTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zdGF0ZS9pbmRleCc7XG5kZWNsYXJlIGxldCBmYzphbnk7XG5kZWNsYXJlIGxldCBkMzphbnk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDaGFydENyb3NzaGFpclNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYXJ0VG9vbHRpcHNTZXJ2aWNlOkNoYXJ0VG9vbHRpcHNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGNoYXJ0T3B0aW9uc1NlcnZpY2U6Q2hhcnRPcHRpb25zU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjaGFydFN0YXRlOkNoYXJ0U3RhdGVTZXJ2aWNlKSB7XG4gIH1cblxuICBnZXRDcm9zc2hhaXIoZGF0YTphbnksIGxpbmU6YW55KTphbnkge1xuICAgIGRhdGEuY3Jvc3NoYWlyID0gW107XG4gICAgcmV0dXJuIGZjLnRvb2wuY3Jvc3NoYWlyKClcbiAgICAgIC5zbmFwKGZjLnV0aWwuc2VyaWVzUG9pbnRTbmFwWE9ubHkobGluZSwgZGF0YSkpXG4gICAgICAueExhYmVsKChkOmFueSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFydE9wdGlvbnNTZXJ2aWNlLm9wdGlvbnMuZGF0ZUZvcm1hdChkLmRhdHVtLmRhdGUpO1xuICAgICAgfSlcbiAgICAgIC55TGFiZWwoKGQ6YW55KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYXJ0T3B0aW9uc1NlcnZpY2Uub3B0aW9ucy5wcmljZUZvcm1hdChkLmRhdHVtLmNsb3NlKTtcbiAgICAgIH0pXG4gICAgICAuZGVjb3JhdGUoKHNlbDphbnkpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVFbGVtZW50cyhzZWwpO1xuICAgICAgICB0aGlzLmNoYXJ0VG9vbHRpcHNTZXJ2aWNlLmFkZFlUb29sdGlwKHNlbCk7XG4gICAgICAgIHRoaXMuY2hhcnRUb29sdGlwc1NlcnZpY2UuYWRkWFRvb2x0aXAoc2VsKTtcbiAgICAgIH0pXG4gICAgICAub24oJ3RyYWNraW5nbW92ZScsIChjcm9zc2hhaXJEYXRhOmFueSkgPT4ge1xuICAgICAgICBpZiAoY3Jvc3NoYWlyRGF0YVswXSkge1xuICAgICAgICAgIHRoaXMuY2hhcnRTdGF0ZS5jaGFuZ2VQb2ludChjcm9zc2hhaXJEYXRhWzBdLmRhdHVtKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5vbigndHJhY2tpbmdlbmQnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2hhcnRTdGF0ZS5jaGFuZ2VQb2ludChkYXRhW2RhdGEubGVuZ3RoIC0gMV0pO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUVsZW1lbnRzKHNlbDphbnkpIHtcbiAgICBpZiAoc2VsWzBdLmxlbmd0aCAhPT0gMCkge1xuICAgICAgc2VsLnNlbGVjdCgnY2lyY2xlJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIHNlbC5zZWxlY3QoJy50cmFja2JhbGwnKS5hdHRyKCd0cmFuc2Zvcm0nKSk7XG4gICAgfVxuICAgIHNlbC5lbnRlcigpLnNlbGVjdCgnY2lyY2xlJylcbiAgICAgIC5hdHRyKCdyJywgMyk7XG5cbiAgICBzZWwuc2VsZWN0KCcudHJhY2tiYWxsJylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsMCknKTtcbiAgfVxufVxuIl19
