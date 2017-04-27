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
var chart_volume_service_1 = require("./services/chart-volume.service");
var chart_crosshair_service_1 = require("./services/chart-crosshair.service");
var chart_tooltips_service_1 = require("./services/chart-tooltips.service");
var chart_options_service_1 = require("./services/chart-options.service");
var index_1 = require("../state/index");
var index_2 = require("../../../../core/index");
var D3fcComponent = (function (_super) {
    __extends(D3fcComponent, _super);
    function D3fcComponent(chartState, chartOptionsService, chartCrosshairService, chartTooltipsService, chartVolumeService) {
        var _this = _super.call(this) || this;
        _this.chartState = chartState;
        _this.chartOptionsService = chartOptionsService;
        _this.chartCrosshairService = chartCrosshairService;
        _this.chartTooltipsService = chartTooltipsService;
        _this.chartVolumeService = chartVolumeService;
        _this.smallView = false;
        _this.windowWidth = window.innerWidth;
        _this.subscriptions.push(chartState.range$.subscribe(function (range) { return _this.range = range; }));
        d3.selection.prototype.moveToFront = function () {
            return this.each(function () {
                this.parentNode.appendChild(this);
            });
        };
        _this.updateSettings();
        return _this;
    }
    D3fcComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.subscriptions.push(this.chartState.data$.subscribe(function (data) { return _this.init(data); }));
    };
    D3fcComponent.prototype.onResize = function (event) {
        this.resize(event.currentTarget.innerWidth);
    };
    D3fcComponent.prototype.onOrientationChange = function (event) {
        this.resize(event.currentTarget.innerWidth);
    };
    D3fcComponent.prototype.resize = function (windowWidth) {
        this.windowWidth = windowWidth;
        if (this.data) {
            this.redraw(this.data, this.container, this.chart);
        }
    };
    D3fcComponent.prototype.init = function (data) {
        if (data && data.length > 0) {
            this.data = data;
            this.container = d3.select(this.svg.nativeElement);
            this.chartVolumeService.init(data, this.container);
            this.render(data);
            this.redraw(data, this.container, this.chart);
        }
    };
    D3fcComponent.prototype.render = function (data) {
        this.chart = this.getChart(data);
        var area = this.getArea(this.chart.yDomain()[0]);
        var line = this.getLine();
        var gridlines = this.getGridLines();
        var crosshair = this.chartCrosshairService.getCrosshair(data, line);
        var lastClose = this.chartTooltipsService.getLastClose();
        var items = [gridlines, area, line];
        if (!this.smallView) {
            items.push(lastClose, crosshair);
        }
        this.chart.plotArea(fc.series.multi()
            .series(items)
            .mapping(function (series) {
            switch (series) {
                case lastClose:
                    return [data[data.length - 1]];
                case crosshair:
                    return data.crosshair;
                default:
                    return data;
            }
        }));
    };
    D3fcComponent.prototype.redraw = function (data, container, chart) {
        var render = this.updateSettings();
        if (render) {
            this.render(data);
        }
        container
            .datum(data)
            .call(chart);
        this.chartVolumeService.render(data, chart.xScale());
        this.chartState.changePoint(data[data.length - 1]);
        this.applyPostRenderChanges();
    };
    D3fcComponent.prototype.updateSettings = function () {
        var render = false;
        if (this.windowWidth < 420) {
            if (!this.smallView) {
                this.smallView = true;
                this.chartOptionsService.options.yAxisWidth = 0;
                this.chartOptionsService.options.yAxisLeftMargin = 3;
                this.chartOptionsService.options.xTicks = 3;
                this.chartOptionsService.options.yTicks = 3;
                render = true;
            }
        }
        else if (this.smallView) {
            this.smallView = false;
            this.chartOptionsService.options.yAxisWidth = 55;
            this.chartOptionsService.options.yAxisLeftMargin = -3;
            this.chartOptionsService.options.xTicks = 4;
            this.chartOptionsService.options.yTicks = 8;
            render = true;
        }
        return render;
    };
    D3fcComponent.prototype.applyPostRenderChanges = function () {
        d3.selectAll('.y-axis text')
            .style('text-anchor', 'end')
            .attr('transform', 'translate(' + this.chartOptionsService.options.yAxisLeftMargin + ', -8)');
        d3.selectAll('.x-axis text')
            .attr('dy', undefined)
            .style({ 'text-anchor': 'start', 'dominant-baseline': 'central' })
            .attr('transform', 'translate(3, -' + (this.chartOptionsService.options.xAxisHeight / 2 + 3) + ' )');
        if (!this.smallView) {
            d3.select('.plot-area').moveToFront();
        }
    };
    D3fcComponent.prototype.getChart = function (data) {
        return fc.chart.linearTimeSeries()
            .xDomain(fc.util.extent(data, 'date'))
            .yDomain(fc.util.extent(data, ['open', 'close']))
            .xTickFormat(this.chartOptionsService.getDateFormat(this.range))
            .yTickFormat(this.chartOptionsService.options.priceFormat)
            .yTicks(this.chartOptionsService.options.yTicks)
            .yNice(this.chartOptionsService.options.yTicks)
            .yOrient('right')
            .yTickSize(this.chartOptionsService.options.yAxisWidth, 0)
            .xTickSize(this.chartOptionsService.options.xAxisHeight)
            .xTicks(this.chartOptionsService.options.xTicks);
    };
    D3fcComponent.prototype.getArea = function (y0Value) {
        return fc.series.area()
            .y0Value(y0Value)
            .yValue(function (d) {
            return d.open;
        });
    };
    D3fcComponent.prototype.getLine = function () {
        return fc.series.line()
            .yValue(function (d) {
            return d.open;
        });
    };
    D3fcComponent.prototype.getGridLines = function () {
        return fc.annotation.gridline()
            .yTicks(this.chartOptionsService.options.yTicks)
            .xTicks(this.chartOptionsService.options.xTicks);
    };
    return D3fcComponent;
}(index_2.Subscriptions));
__decorate([
    core_1.ViewChild('svg'),
    __metadata("design:type", core_1.ElementRef)
], D3fcComponent.prototype, "svg", void 0);
__decorate([
    core_1.HostListener('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], D3fcComponent.prototype, "onResize", null);
__decorate([
    core_1.HostListener('window:orientationchange', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], D3fcComponent.prototype, "onOrientationChange", null);
D3fcComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'mp-d3fc',
        templateUrl: 'd3fc.component.html',
        styleUrls: ['d3fc.component.css'],
        encapsulation: core_1.ViewEncapsulation.None,
        providers: [
            chart_crosshair_service_1.ChartCrosshairService,
            chart_options_service_1.ChartOptionsService,
            chart_tooltips_service_1.ChartTooltipsService,
            chart_volume_service_1.ChartVolumeService
        ]
    }),
    __metadata("design:paramtypes", [index_1.ChartStateService,
        chart_options_service_1.ChartOptionsService,
        chart_crosshair_service_1.ChartCrosshairService,
        chart_tooltips_service_1.ChartTooltipsService,
        chart_volume_service_1.ChartVolumeService])
], D3fcComponent);
exports.D3fcComponent = D3fcComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3QvY29udGVudC9jaGFydC9kM2ZjL2QzZmMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQU91QjtBQUN2Qix3RUFBcUU7QUFDckUsOEVBQTJFO0FBQzNFLDRFQUF5RTtBQUN6RSwwRUFBdUU7QUFDdkUsd0NBR3dCO0FBQ3hCLGdEQUF1RDtBQW1CdkQsSUFBYSxhQUFhO0lBQVMsaUNBQWE7SUFTOUMsdUJBQW1CLFVBQTRCLEVBQzNCLG1CQUF1QyxFQUN2QyxxQkFBMkMsRUFDM0Msb0JBQXlDLEVBQ3pDLGtCQUFxQztRQUp6RCxZQUtFLGlCQUFPLFNBYVI7UUFsQmtCLGdCQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUMzQix5QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO1FBQ3ZDLDJCQUFxQixHQUFyQixxQkFBcUIsQ0FBc0I7UUFDM0MsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtRQUN6Qyx3QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBWHpELGVBQVMsR0FBVyxLQUFLLENBQUM7UUFLbEIsaUJBQVcsR0FBVSxNQUFNLENBQUMsVUFBVSxDQUFDO1FBUzdDLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUNqRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFsQixDQUFrQixDQUM1QixDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUc7WUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7UUFFRixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7O0lBQ3hCLENB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QyxDQUFDOzs7O3dEQUdwRDtBQTNDVSxhQUFhO0lBZHpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtRQUNsQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztRQUNqQyxhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtRQUNyQyxTQUFTLEVBQUU7WUFDVCwrQ0FBcUI7WUFDckIsMkNBQW1CO1lBQ25CLDZDQUFvQjtZQUNwQix5Q0FBa0I7U0FDbkI7S0FDRixDQUFDO3FDQVc4Qix5QkFBaUI7UUFDUCwyQ0FBbUI7UUFDakIsK0NBQXFCO1FBQ3RCLDZDQUFvQjtRQUN0Qix5Q0FBa0I7R0FiOUMsYUFBYSxDQWdMekI7QUFoTFksc0NBQWEiLCJmaWxlIjoiYXBwL3dhdGNobGlzdC9jb250ZW50L2NoYXJ0L2QzZmMvZDNmYy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBWaWV3Q2hpbGQsXG4gIEhvc3RMaXN0ZW5lcixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0Vm9sdW1lU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY2hhcnQtdm9sdW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2hhcnRDcm9zc2hhaXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jaGFydC1jcm9zc2hhaXIuc2VydmljZSc7XG5pbXBvcnQgeyBDaGFydFRvb2x0aXBzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY2hhcnQtdG9vbHRpcHMuc2VydmljZSc7XG5pbXBvcnQgeyBDaGFydE9wdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jaGFydC1vcHRpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgQ2hhcnRTdGF0ZVNlcnZpY2UsXG4gIENoYXJ0RGF0YUludGVyZmFjZVxufSBmcm9tICcuLi9zdGF0ZS9pbmRleCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb25zIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9pbmRleCc7XG5cbmRlY2xhcmUgbGV0IGZjOmFueTtcbmRlY2xhcmUgbGV0IGQzOmFueTtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbXAtZDNmYycsXG4gIHRlbXBsYXRlVXJsOiAnZDNmYy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkM2ZjLmNvbXBvbmVudC5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ2hhcnRDcm9zc2hhaXJTZXJ2aWNlLFxuICAgIENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gICAgQ2hhcnRUb29sdGlwc1NlcnZpY2UsXG4gICAgQ2hhcnRWb2x1bWVTZXJ2aWNlXG4gIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBEM2ZjQ29tcG9uZW50IGV4dGVuZHMgU3Vic2NyaXB0aW9ucyBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKCdzdmcnKSBzdmc6RWxlbWVudFJlZjtcbiAgc21hbGxWaWV3OmJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBkYXRhOkNoYXJ0RGF0YUludGVyZmFjZVtdO1xuICBwcml2YXRlIGNvbnRhaW5lcjphbnk7XG4gIHByaXZhdGUgY2hhcnQ6YW55O1xuICBwcml2YXRlIHJhbmdlOnN0cmluZztcbiAgcHJpdmF0ZSB3aW5kb3dXaWR0aDpudW1iZXIgPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2hhcnRTdGF0ZTpDaGFydFN0YXRlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjaGFydE9wdGlvbnNTZXJ2aWNlOkNoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgY2hhcnRDcm9zc2hhaXJTZXJ2aWNlOkNoYXJ0Q3Jvc3NoYWlyU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjaGFydFRvb2x0aXBzU2VydmljZTpDaGFydFRvb2x0aXBzU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjaGFydFZvbHVtZVNlcnZpY2U6Q2hhcnRWb2x1bWVTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKGNoYXJ0U3RhdGUucmFuZ2UkLnN1YnNjcmliZShcbiAgICAgIHJhbmdlID0+IHRoaXMucmFuZ2UgPSByYW5nZVxuICAgICkpO1xuXG4gICAgZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5tb3ZlVG9Gcm9udCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGhpcyk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVTZXR0aW5ncygpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMuY2hhcnRTdGF0ZS5kYXRhJC5zdWJzY3JpYmUoXG4gICAgICBkYXRhID0+IHRoaXMuaW5pdChkYXRhKVxuICAgICkpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXG4gIG9uUmVzaXplKGV2ZW50OmFueSkge1xuICAgIHRoaXMucmVzaXplKGV2ZW50LmN1cnJlbnRUYXJnZXQuaW5uZXJXaWR0aCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6b3JpZW50YXRpb25jaGFuZ2UnLCBbJyRldmVudCddKVxuICBvbk9yaWVudGF0aW9uQ2hhbmdlKGV2ZW50OmFueSkge1xuICAgIHRoaXMucmVzaXplKGV2ZW50LmN1cnJlbnRUYXJnZXQuaW5uZXJXaWR0aCk7XG4gIH1cblxuICBwcml2YXRlIHJlc2l6ZSh3aW5kb3dXaWR0aDpudW1iZXIpIHtcbiAgICB0aGlzLndpbmRvd1dpZHRoID0gd2luZG93V2lkdGg7XG4gICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgdGhpcy5yZWRyYXcodGhpcy5kYXRhLCB0aGlzLmNvbnRhaW5lciwgdGhpcy5jaGFydCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbml0KGRhdGE6Q2hhcnREYXRhSW50ZXJmYWNlW10pIHtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGQzLnNlbGVjdCh0aGlzLnN2Zy5uYXRpdmVFbGVtZW50KTtcbiAgICAgIHRoaXMuY2hhcnRWb2x1bWVTZXJ2aWNlLmluaXQoZGF0YSwgdGhpcy5jb250YWluZXIpO1xuICAgICAgdGhpcy5yZW5kZXIoZGF0YSk7XG4gICAgICB0aGlzLnJlZHJhdyhkYXRhLCB0aGlzLmNvbnRhaW5lciwgdGhpcy5jaGFydCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXIoZGF0YTphbnkpIHtcbiAgICB0aGlzLmNoYXJ0ID0gdGhpcy5nZXRDaGFydChkYXRhKTtcbiAgICBsZXQgYXJlYTphbnkgPSB0aGlzLmdldEFyZWEodGhpcy5jaGFydC55RG9tYWluKClbMF0pO1xuICAgIGxldCBsaW5lOmFueSA9IHRoaXMuZ2V0TGluZSgpO1xuICAgIGxldCBncmlkbGluZXM6YW55ID0gdGhpcy5nZXRHcmlkTGluZXMoKTtcbiAgICBsZXQgY3Jvc3NoYWlyOmFueSA9IHRoaXMuY2hhcnRDcm9zc2hhaXJTZXJ2aWNlLmdldENyb3NzaGFpcihkYXRhLCBsaW5lKTtcbiAgICBsZXQgbGFzdENsb3NlOmFueSA9IHRoaXMuY2hhcnRUb29sdGlwc1NlcnZpY2UuZ2V0TGFzdENsb3NlKCk7XG5cbiAgICB2YXIgaXRlbXM6YW55W10gPSBbZ3JpZGxpbmVzLCBhcmVhLCBsaW5lXTtcbiAgICBpZiAoIXRoaXMuc21hbGxWaWV3KSB7XG4gICAgICBpdGVtcy5wdXNoKGxhc3RDbG9zZSwgY3Jvc3NoYWlyKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYXJ0LnBsb3RBcmVhKGZjLnNlcmllcy5tdWx0aSgpXG4gICAgICAuc2VyaWVzKGl0ZW1zKVxuICAgICAgLm1hcHBpbmcoKHNlcmllczphbnkpID0+IHtcbiAgICAgICAgc3dpdGNoIChzZXJpZXMpIHtcbiAgICAgICAgICBjYXNlIGxhc3RDbG9zZTpcbiAgICAgICAgICAgIHJldHVybiBbZGF0YVtkYXRhLmxlbmd0aCAtIDFdXTtcbiAgICAgICAgICBjYXNlIGNyb3NzaGFpcjpcbiAgICAgICAgICAgIHJldHVybiBkYXRhLmNyb3NzaGFpcjtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVkcmF3KGRhdGE6Q2hhcnREYXRhSW50ZXJmYWNlW10sIGNvbnRhaW5lcjphbnksIGNoYXJ0OmFueSkge1xuICAgIGxldCByZW5kZXI6Ym9vbGVhbiA9IHRoaXMudXBkYXRlU2V0dGluZ3MoKTtcbiAgICBpZiAocmVuZGVyKSB7XG4gICAgICB0aGlzLnJlbmRlcihkYXRhKTtcbiAgICB9XG5cbiAgICBjb250YWluZXJcbiAgICAgIC5kYXR1bShkYXRhKVxuICAgICAgLmNhbGwoY2hhcnQpO1xuXG4gICAgdGhpcy5jaGFydFZvbHVtZVNlcnZpY2UucmVuZGVyKGRhdGEsIGNoYXJ0LnhTY2FsZSgpKTtcbiAgICB0aGlzLmNoYXJ0U3RhdGUuY2hhbmdlUG9pbnQoZGF0YVtkYXRhLmxlbmd0aCAtIDFdKTtcbiAgICB0aGlzLmFwcGx5UG9zdFJlbmRlckNoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU2V0dGluZ3MoKSB7XG4gICAgbGV0IHJlbmRlcjpib29sZWFuID0gZmFsc2U7XG4gICAgaWYgKHRoaXMud2luZG93V2lkdGggPCA0MjApIHtcbiAgICAgIGlmICghdGhpcy5zbWFsbFZpZXcpIHtcbiAgICAgICAgdGhpcy5zbWFsbFZpZXcgPSB0cnVlO1xuICAgICAgICB0aGlzLmNoYXJ0T3B0aW9uc1NlcnZpY2Uub3B0aW9ucy55QXhpc1dpZHRoID0gMDtcbiAgICAgICAgdGhpcy5jaGFydE9wdGlvbnNTZXJ2aWNlLm9wdGlvbnMueUF4aXNMZWZ0TWFyZ2luID0gMztcbiAgICAgICAgdGhpcy5jaGFydE9wdGlvbnNTZXJ2aWNlLm9wdGlvbnMueFRpY2tzID0gMztcbiAgICAgICAgdGhpcy5jaGFydE9wdGlvbnNTZXJ2aWNlLm9wdGlvbnMueVRpY2tzID0gMztcbiAgICAgICAgcmVuZGVyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuc21hbGxWaWV3KSB7XG4gICAgICB0aGlzLnNtYWxsVmlldyA9IGZhbHNlO1xuICAgICAgdGhpcy5jaGFydE9wdGlvbnNTZXJ2aWNlLm9wdGlvbnMueUF4aXNXaWR0aCA9IDU1O1xuICAgICAgdGhpcy5jaGFydE9wdGlvbnNTZXJ2aWNlLm9wdGlvbnMueUF4aXNMZWZ0TWFyZ2luID0gLTM7XG4gICAgICB0aGlzLmNoYXJ0T3B0aW9uc1NlcnZpY2Uub3B0aW9ucy54VGlja3MgPSA0O1xuICAgICAgdGhpcy5jaGFydE9wdGlvbnNTZXJ2aWNlLm9wdGlvbnMueVRpY2tzID0gODtcbiAgICAgIHJlbmRlciA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbmRlcjtcbiAgfVxuXG4gIHByaXZhdGUgYXBwbHlQb3N0UmVuZGVyQ2hhbmdlcygpIHtcbiAgICBkMy5zZWxlY3RBbGwoJy55LWF4aXMgdGV4dCcpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgdGhpcy5jaGFydE9wdGlvbnNTZXJ2aWNlLm9wdGlvbnMueUF4aXNMZWZ0TWFyZ2luICsgJywgLTgpJyk7XG5cbiAgICBkMy5zZWxlY3RBbGwoJy54LWF4aXMgdGV4dCcpXG4gICAgICAuYXR0cignZHknLCB1bmRlZmluZWQpXG4gICAgICAuc3R5bGUoeyd0ZXh0LWFuY2hvcic6ICdzdGFydCcsICdkb21pbmFudC1iYXNlbGluZSc6ICdjZW50cmFsJ30pXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgzLCAtJyArICh0aGlzLmNoYXJ0T3B0aW9uc1NlcnZpY2Uub3B0aW9ucy54QXhpc0hlaWdodCAvIDIgKyAzKSArICcgKScpO1xuXG4gICAgaWYgKCF0aGlzLnNtYWxsVmlldykge1xuICAgICAgZDMuc2VsZWN0KCcucGxvdC1hcmVhJykubW92ZVRvRnJvbnQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldENoYXJ0KGRhdGE6Q2hhcnREYXRhSW50ZXJmYWNlW10pOmFueSB7XG4gICAgcmV0dXJuIGZjLmNoYXJ0LmxpbmVhclRpbWVTZXJpZXMoKVxuICAgICAgLnhEb21haW4oZmMudXRpbC5leHRlbnQoZGF0YSwgJ2RhdGUnKSlcbiAgICAgIC55RG9tYWluKGZjLnV0aWwuZXh0ZW50KGRhdGEsIFsnb3BlbicsICdjbG9zZSddKSlcbiAgICAgIC54VGlja0Zvcm1hdCh0aGlzLmNoYXJ0T3B0aW9uc1NlcnZpY2UuZ2V0RGF0ZUZvcm1hdCh0aGlzLnJhbmdlKSlcbiAgICAgIC55VGlja0Zvcm1hdCh0aGlzLmNoYXJ0T3B0aW9uc1NlcnZpY2Uub3B0aW9ucy5wcmljZUZvcm1hdClcbiAgICAgIC55VGlja3ModGhpcy5jaGFydE9wdGlvbnNTZXJ2aWNlLm9wdGlvbnMueVRpY2tzKVxuICAgICAgLnlOaWNlKHRoaXMuY2hhcnRPcHRpb25zU2VydmljZS5vcHRpb25zLnlUaWNrcylcbiAgICAgIC55T3JpZW50KCdyaWdodCcpXG4gICAgICAueVRpY2tTaXplKHRoaXMuY2hhcnRPcHRpb25zU2VydmljZS5vcHRpb25zLnlBeGlzV2lkdGgsIDApXG4gICAgICAueFRpY2tTaXplKHRoaXMuY2hhcnRPcHRpb25zU2VydmljZS5vcHRpb25zLnhBeGlzSGVpZ2h0KVxuICAgICAgLnhUaWNrcyh0aGlzLmNoYXJ0T3B0aW9uc1NlcnZpY2Uub3B0aW9ucy54VGlja3MpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRBcmVhKHkwVmFsdWU6bnVtYmVyKTphbnkge1xuICAgIHJldHVybiBmYy5zZXJpZXMuYXJlYSgpXG4gICAgICAueTBWYWx1ZSh5MFZhbHVlKVxuICAgICAgLnlWYWx1ZSgoZDphbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIGQub3BlbjtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRMaW5lKCk6YW55IHtcbiAgICByZXR1cm4gZmMuc2VyaWVzLmxpbmUoKVxuICAgICAgLnlWYWx1ZSgoZDphbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIGQub3BlbjtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRHcmlkTGluZXMoKTphbnkge1xuICAgIHJldHVybiBmYy5hbm5vdGF0aW9uLmdyaWRsaW5lKClcbiAgICAgIC55VGlja3ModGhpcy5jaGFydE9wdGlvbnNTZXJ2aWNlLm9wdGlvbnMueVRpY2tzKVxuICAgICAgLnhUaWNrcyh0aGlzLmNoYXJ0T3B0aW9uc1NlcnZpY2Uub3B0aW9ucy54VGlja3MpO1xuICB9XG59XG4iXX0=
