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
var chart_options_service_1 = require("../services/chart-options.service");
var index_1 = require("../../state/index");
var index_2 = require("../../../../../core/index");
var LegendComponent = (function (_super) {
    __extends(LegendComponent, _super);
    function LegendComponent(chartOptionsService, chartState) {
        var _this = _super.call(this) || this;
        _this.chartOptionsService = chartOptionsService;
        _this.chartState = chartState;
        _this.items = [];
        _this.subscriptions.push(_this.chartState.point$
            .subscribe(function (data) { return _this.updateItems(data); }));
        return _this;
    }
    LegendComponent.prototype.updateItems = function (data) {
        if (data) {
            this.items = [
                { label: 'Open', value: this.chartOptionsService.options.priceFormat(data.open) },
                { label: 'Close', value: this.chartOptionsService.options.priceFormat(data.close) },
                { label: 'Low', value: this.chartOptionsService.options.priceFormat(data.low) },
                { label: 'High', value: this.chartOptionsService.options.priceFormat(data.high) },
                { label: 'Vol', value: this.chartOptionsService.options.volumeFormat(data.volume) }
            ];
        }
        else {
            this.items = [];
        }
    };
    return LegendComponent;
}(index_2.Subscriptions));
LegendComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'mp-legend',
        templateUrl: 'legend.component.html',
        styleUrls: ['legend.component.css']
    }),
    __metadata("design:paramtypes", [chart_options_service_1.ChartOptionsService,
        index_1.ChartStateService])
], LegendComponent);
exports.LegendComponent = LegendComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3QvY29udGVudC9jaGFydC9kM2ZjL2xlZ2VuZC9sZWdlbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUMxQywyRUFBd0U7QUFDeEUsMkNBRzJCO0FBQzNCLG1EQUEwRDtBQVMxRCxJQUFhLGVBQWU7SUFBUyxtQ0FBYTtJQUdoRCx5QkFBb0IsbUJBQXVDLEVBQ3ZDLFVBQTRCO1FBRGhELFlBRUUsaUJBQU8sU0FLUjtRQVBtQix5QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO1FBQ3ZDLGdCQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUhoRCxXQUFLLEdBQXFCLEVBQUUsQ0FBQztRQUszQixLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU07YUFDM0MsU0FBUyxDQUNSLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBdEIsQ0FBc0IsQ0FDL0IsQ0FBQyxDQUFDOztJQUNQLENBQUM7SUFFTyxxQ0FBVyxHQUFuQixVQUFvQixJQUF1QjtRQUN6QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1QsSUFBSSxDQUFDLEtBQUssR0FBRztnQkFDWCxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQztnQkFDL0UsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUM7Z0JBQ2pGLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDO2dCQUM3RSxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQztnQkFDL0UsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUM7YUFDbEYsQ0FBQztRQUNKLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLENBQUM7SUFDSCxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQXpCQSxBQXlCQyxDQXpCb0MscUJBQWEsR0F5QmpEO0FBekJZLGVBQWU7SUFQM0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUUsdUJBQXVCO1FBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO0tBQ3BDLENBQUM7cUNBS3dDLDJDQUFtQjtRQUM1Qix5QkFBaUI7R0FKckMsZUFBZSxDQXlCM0I7QUF6QlksMENBQWUiLCJmaWxlIjoiYXBwL3dhdGNobGlzdC9jb250ZW50L2NoYXJ0L2QzZmMvbGVnZW5kL2xlZ2VuZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0T3B0aW9uc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jaGFydC1vcHRpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgQ2hhcnRTdGF0ZVNlcnZpY2UsXG4gIENoYXJ0RGF0YUludGVyZmFjZVxufSBmcm9tICcuLi8uLi9zdGF0ZS9pbmRleCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb25zIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ21wLWxlZ2VuZCcsXG4gIHRlbXBsYXRlVXJsOiAnbGVnZW5kLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2xlZ2VuZC5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBMZWdlbmRDb21wb25lbnQgZXh0ZW5kcyBTdWJzY3JpcHRpb25zIHtcbiAgaXRlbXM6TGVnZW5kSW50ZXJmYWNlW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYXJ0T3B0aW9uc1NlcnZpY2U6Q2hhcnRPcHRpb25zU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjaGFydFN0YXRlOkNoYXJ0U3RhdGVTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLmNoYXJ0U3RhdGUucG9pbnQkXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBkYXRhID0+IHRoaXMudXBkYXRlSXRlbXMoZGF0YSlcbiAgICAgICkpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVJdGVtcyhkYXRhOkNoYXJ0RGF0YUludGVyZmFjZSkge1xuICAgIGlmIChkYXRhKSB7XG4gICAgICB0aGlzLml0ZW1zID0gW1xuICAgICAgICB7bGFiZWw6ICdPcGVuJywgdmFsdWU6IHRoaXMuY2hhcnRPcHRpb25zU2VydmljZS5vcHRpb25zLnByaWNlRm9ybWF0KGRhdGEub3Blbil9LFxuICAgICAgICB7bGFiZWw6ICdDbG9zZScsIHZhbHVlOiB0aGlzLmNoYXJ0T3B0aW9uc1NlcnZpY2Uub3B0aW9ucy5wcmljZUZvcm1hdChkYXRhLmNsb3NlKX0sXG4gICAgICAgIHtsYWJlbDogJ0xvdycsIHZhbHVlOiB0aGlzLmNoYXJ0T3B0aW9uc1NlcnZpY2Uub3B0aW9ucy5wcmljZUZvcm1hdChkYXRhLmxvdyl9LFxuICAgICAgICB7bGFiZWw6ICdIaWdoJywgdmFsdWU6IHRoaXMuY2hhcnRPcHRpb25zU2VydmljZS5vcHRpb25zLnByaWNlRm9ybWF0KGRhdGEuaGlnaCl9LFxuICAgICAgICB7bGFiZWw6ICdWb2wnLCB2YWx1ZTogdGhpcy5jaGFydE9wdGlvbnNTZXJ2aWNlLm9wdGlvbnMudm9sdW1lRm9ybWF0KGRhdGEudm9sdW1lKX1cbiAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMZWdlbmRJbnRlcmZhY2Uge1xuICBsYWJlbD86c3RyaW5nO1xuICB2YWx1ZT86c3RyaW5nO1xufVxuIl19
