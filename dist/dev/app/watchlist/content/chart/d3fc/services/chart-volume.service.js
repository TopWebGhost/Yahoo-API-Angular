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
var chart_options_service_1 = require("./chart-options.service");
var ChartVolumeService = (function () {
    function ChartVolumeService(chartOptionsService) {
        this.chartOptionsService = chartOptionsService;
    }
    ChartVolumeService.prototype.init = function (data, container) {
        this.volumeContainer = container.selectAll('g.volume').data([data]);
        this.volumeContainer.enter()
            .append('g')
            .attr({
            'class': 'volume',
        })
            .layout({
            position: 'absolute',
            top: 100,
            bottom: this.chartOptionsService.options.xAxisHeight,
            right: this.chartOptionsService.options.yAxisWidth,
            left: 0
        });
        fc.layout();
        container.layout();
    };
    ChartVolumeService.prototype.render = function (data, xScale) {
        var volumeScale = d3.scale.linear()
            .domain([0, d3.max(data, function (d) {
                return Number(d.volume);
            })])
            .range([this.volumeContainer.layout('height'), 0]);
        var volume = fc.series.bar()
            .xScale(xScale)
            .yScale(volumeScale)
            .yValue(function (d) {
            return d.volume;
        })
            .decorate(function (sel) {
            sel.select('path')
                .attr('class', function (d) {
                return d.close <= d.open ? 'mp-svg-red' : 'mp-svg-green';
            });
        });
        this.volumeContainer
            .datum(data)
            .call(volume);
    };
    return ChartVolumeService;
}());
ChartVolumeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [chart_options_service_1.ChartOptionsService])
], ChartVolumeService);
exports.ChartVolumeService = ChartVolumeService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3QvY29udGVudC9jaGFydC9kM2ZjL3NlcnZpY2VzL2NoYXJ0LXZvbHVtZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLGlFQUE4RDtBQUk5RCxJQUFhLGtCQUFrQjtJQUc3Qiw0QkFBb0IsbUJBQXVDO1FBQXZDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBb0I7SUFDM0QsQ0FBQztJQUVELGlDQUFJLEdBQUosVUFBSyxJQUFRLEVBQUUsU0FBYTtRQUMxQixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRTthQUN6QixNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ1gsSUFBSSxDQUFDO1lBQ0osT0FBTyxFQUFFLFFBQVE7U0FDbEIsQ0FBQzthQUNELE1BQU0sQ0FBQztZQUNOLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLEdBQUcsRUFBRSxHQUFHO1lBQ1IsTUFBTSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNwRCxLQUFLLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxVQUFVO1lBQ2xELElBQUksRUFBRSxDQUFDO1NBQ1IsQ0FBQyxDQUFDO1FBRUwsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ1osU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxtQ0FBTSxHQUFOLFVBQU8sSUFBUSxFQUFFLE1BQWE7UUFDNUIsSUFBSSxXQUFXLEdBQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7YUFDcEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFVBQUMsQ0FBSztnQkFDN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUIsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNILEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFckQsSUFBSSxNQUFNLEdBQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUU7YUFDN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUNkLE1BQU0sQ0FBQyxXQUFXLENBQUM7YUFDbkIsTUFBTSxDQUFDLFVBQUMsQ0FBSztZQUNaLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ2xCLENBQUMsQ0FBQzthQUNELFFBQVEsQ0FBQyxVQUFDLEdBQU87WUFDaEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7aUJBQ2YsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFDLENBQUs7Z0JBQ25CLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsWUFBWSxHQUFHLGNBQWMsQ0FBQztZQUMzRCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBRUwsSUFBSSxDQUFDLGVBQWU7YUFDakIsS0FBSyxDQUFDLElBQUksQ0FBQzthQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQWpEQSxBQWlEQyxJQUFBO0FBakRZLGtCQUFrQjtJQUQ5QixpQkFBVSxFQUFFO3FDQUk2QiwyQ0FBbUI7R0FIaEQsa0JBQWtCLENBaUQ5QjtBQWpEWSxnREFBa0IiLCJmaWxlIjoiYXBwL3dhdGNobGlzdC9jb250ZW50L2NoYXJ0L2QzZmMvc2VydmljZXMvY2hhcnQtdm9sdW1lLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydE9wdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi9jaGFydC1vcHRpb25zLnNlcnZpY2UnO1xuZGVjbGFyZSBsZXQgZmM6YW55O1xuZGVjbGFyZSBsZXQgZDM6YW55O1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENoYXJ0Vm9sdW1lU2VydmljZSB7XG4gIHByaXZhdGUgdm9sdW1lQ29udGFpbmVyOmFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYXJ0T3B0aW9uc1NlcnZpY2U6Q2hhcnRPcHRpb25zU2VydmljZSkge1xuICB9XG5cbiAgaW5pdChkYXRhOmFueSwgY29udGFpbmVyOmFueSkge1xuICAgIHRoaXMudm9sdW1lQ29udGFpbmVyID0gY29udGFpbmVyLnNlbGVjdEFsbCgnZy52b2x1bWUnKS5kYXRhKFtkYXRhXSk7XG4gICAgdGhpcy52b2x1bWVDb250YWluZXIuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cih7XG4gICAgICAgICdjbGFzcyc6ICd2b2x1bWUnLFxuICAgICAgfSlcbiAgICAgIC5sYXlvdXQoe1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAxMDAsXG4gICAgICAgIGJvdHRvbTogdGhpcy5jaGFydE9wdGlvbnNTZXJ2aWNlLm9wdGlvbnMueEF4aXNIZWlnaHQsXG4gICAgICAgIHJpZ2h0OiB0aGlzLmNoYXJ0T3B0aW9uc1NlcnZpY2Uub3B0aW9ucy55QXhpc1dpZHRoLFxuICAgICAgICBsZWZ0OiAwXG4gICAgICB9KTtcblxuICAgIGZjLmxheW91dCgpO1xuICAgIGNvbnRhaW5lci5sYXlvdXQoKTtcbiAgfVxuXG4gIHJlbmRlcihkYXRhOmFueSwgeFNjYWxlOm51bWJlcikge1xuICAgIGxldCB2b2x1bWVTY2FsZTphbnkgPSBkMy5zY2FsZS5saW5lYXIoKVxuICAgICAgLmRvbWFpbihbMCwgZDMubWF4KGRhdGEsIChkOmFueSkgPT4ge1xuICAgICAgICByZXR1cm4gTnVtYmVyKGQudm9sdW1lKTtcbiAgICAgIH0pXSlcbiAgICAgIC5yYW5nZShbdGhpcy52b2x1bWVDb250YWluZXIubGF5b3V0KCdoZWlnaHQnKSwgMF0pO1xuXG4gICAgbGV0IHZvbHVtZTphbnkgPSBmYy5zZXJpZXMuYmFyKClcbiAgICAgIC54U2NhbGUoeFNjYWxlKVxuICAgICAgLnlTY2FsZSh2b2x1bWVTY2FsZSlcbiAgICAgIC55VmFsdWUoKGQ6YW55KSA9PiB7XG4gICAgICAgIHJldHVybiBkLnZvbHVtZTtcbiAgICAgIH0pXG4gICAgICAuZGVjb3JhdGUoKHNlbDphbnkpID0+IHtcbiAgICAgICAgc2VsLnNlbGVjdCgncGF0aCcpXG4gICAgICAgICAgLmF0dHIoJ2NsYXNzJywgKGQ6YW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZC5jbG9zZSA8PSBkLm9wZW4gPyAnbXAtc3ZnLXJlZCcgOiAnbXAtc3ZnLWdyZWVuJztcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy52b2x1bWVDb250YWluZXJcbiAgICAgIC5kYXR1bShkYXRhKVxuICAgICAgLmNhbGwodm9sdW1lKTtcbiAgfVxufVxuIl19
