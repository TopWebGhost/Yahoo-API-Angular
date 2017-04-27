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
var ChartTooltipsService = (function () {
    function ChartTooltipsService(chartOptionsService) {
        this.chartOptionsService = chartOptionsService;
    }
    ChartTooltipsService.prototype.getLastClose = function () {
        var _this = this;
        return fc.annotation.line()
            .value(function (d) {
            return d.close;
        })
            .label(function (d) {
            return _this.chartOptionsService.options.priceFormat(d.close);
        })
            .decorate(function (sel) {
            _this.addYTooltip(sel);
            sel.enter().classed('close', true);
            sel.attr('transform', function (d) {
                var transform;
                if (d3.select('.line')) {
                    var y = d3.select('.line').attr('d').match(/[^,]*$/)[0];
                    if (y) {
                        transform = 'translate(0, ' + y + ')';
                    }
                }
                if (transform) {
                    return transform;
                }
                else {
                    return this.getAttribute('transform');
                }
            });
        });
    };
    ChartTooltipsService.prototype.addYTooltip = function (sel) {
        sel.enter()
            .select('.right-handle')
            .classed('callout', true)
            .insert('path', ':first-child')
            .attr('transform', 'translate(' + this.chartOptionsService.options.calloutLeftMargin + ', 0)')
            .attr('d', d3.svg.area()(this.chartOptionsService.options.calloutPathData));
        sel.select('text')
            .attr('transform', 'translate(' + (this.chartOptionsService.options.yAxisWidth - 2) + ', '
            + (this.chartOptionsService.options.calloutHeight / 4) + ')')
            .attr('x', 0)
            .attr('y', 0);
    };
    ChartTooltipsService.prototype.addXTooltip = function (sel) {
        var _this = this;
        sel.enter()
            .select('.top-handle')
            .select('text')
            .remove();
        sel.select('.bottom-handle')
            .attr('transform', function (d) {
            var x = this.parentNode.getAttribute('transform').match(/translate\((.*),/).pop();
            if (x < 30) {
                return 'translate(30, 0)';
            }
            else {
                return 'translate(0, 0)';
            }
        });
        var container = sel.enter()
            .select('.bottom-handle');
        container.classed('callout', true)
            .append('rect')
            .attr('transform', 'translate(-30, 0)')
            .attr('width', 60)
            .attr('height', this.chartOptionsService.options.xAxisHeight);
        container.append('text')
            .attr('y', this.chartOptionsService.options.xAxisHeight / 2)
            .text(function (d) {
            return _this.chartOptionsService.options.dateFormat(d.x);
        });
        container = null;
    };
    return ChartTooltipsService;
}());
ChartTooltipsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [chart_options_service_1.ChartOptionsService])
], ChartTooltipsService);
exports.ChartTooltipsService = ChartTooltipsService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3QvY29udGVudC9jaGFydC9kM2ZjL3NlcnZpY2VzL2NoYXJ0LXRvb2x0aXBzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MsaUVBQThEO0FBSTlELElBQWEsb0JBQW9CO0lBQy9CLDhCQUFvQixtQkFBdUM7UUFBdkMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtJQUMzRCxDQUFDO0lBRUQsMkNBQVksR0FBWjtRQUFBLGlCQTRCQztRQTNCQyxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUU7YUFDeEIsS0FBSyxDQUFDLFVBQUMsQ0FBSztZQUNYLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLENBQUs7WUFDWCxNQUFNLENBQUMsS0FBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9ELENBQUMsQ0FBQzthQUNELFFBQVEsQ0FBQyxVQUFDLEdBQU87WUFDaEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QixHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUVuQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUs7Z0JBQ25DLElBQUksU0FBZ0IsQ0FBQztnQkFDckIsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxHQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztv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SSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7YUFDM0QsSUFBSSxDQUFDLFVBQUMsQ0FBSztZQUNWLE1BQU0sQ0FBQyxLQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsQ0FBQyxDQUFDLENBQUM7UUFFTCxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDSCwyQkFBQztBQUFELENBbkZBLEFBbUZDLElBQUE7QUFuRlksb0JBQW9CO0lBRGhDLGlCQUFVLEVBQUU7cUNBRTZCLDJDQUFtQjtHQURoRCxvQkFBb0IsQ0FtRmhDO0FBbkZZLG9EQUFvQiIsImZpbGUiOiJhcHAvd2F0Y2hsaXN0L2NvbnRlbnQvY2hhcnQvZDNmYy9zZXJ2aWNlcy9jaGFydC10b29sdGlwcy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnRPcHRpb25zU2VydmljZSB9IGZyb20gJy4vY2hhcnQtb3B0aW9ucy5zZXJ2aWNlJztcbmRlY2xhcmUgbGV0IGZjOmFueTtcbmRlY2xhcmUgbGV0IGQzOmFueTtcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDaGFydFRvb2x0aXBzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhcnRPcHRpb25zU2VydmljZTpDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gIH1cblxuICBnZXRMYXN0Q2xvc2UoKTphbnkge1xuICAgIHJldHVybiBmYy5hbm5vdGF0aW9uLmxpbmUoKVxuICAgICAgLnZhbHVlKChkOmFueSkgPT4ge1xuICAgICAgICByZXR1cm4gZC5jbG9zZTtcbiAgICAgIH0pXG4gICAgICAubGFiZWwoKGQ6YW55KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYXJ0T3B0aW9uc1NlcnZpY2Uub3B0aW9ucy5wcmljZUZvcm1hdChkLmNsb3NlKTtcbiAgICAgIH0pXG4gICAgICAuZGVjb3JhdGUoKHNlbDphbnkpID0+IHtcbiAgICAgICAgdGhpcy5hZGRZVG9vbHRpcChzZWwpO1xuICAgICAgICBzZWwuZW50ZXIoKS5jbGFzc2VkKCdjbG9zZScsIHRydWUpO1xuXG4gICAgICAgIHNlbC5hdHRyKCd0cmFuc2Zvcm0nLCBmdW5jdGlvbiAoZDphbnkpIHtcbiAgICAgICAgICBsZXQgdHJhbnNmb3JtOnN0cmluZztcbiAgICAgICAgICBpZiAoZDMuc2VsZWN0KCcubGluZScpKSB7XG4gICAgICAgICAgICBsZXQgeTpzdHJpbmcgPSBkMy5zZWxlY3QoJy5saW5lJykuYXR0cignZCcpLm1hdGNoKC9bXixdKiQvKVswXTtcbiAgICAgICAgICAgIGlmICh5KSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoMCwgJyArIHkgKyAnKSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRyYW5zZm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zZm9ybTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBhZGRZVG9vbHRpcChzZWw6YW55KSB7XG4gICAgc2VsLmVudGVyKClcbiAgICAgIC5zZWxlY3QoJy5yaWdodC1oYW5kbGUnKVxuICAgICAgLmNsYXNzZWQoJ2NhbGxvdXQnLCB0cnVlKVxuICAgICAgLmluc2VydCgncGF0aCcsICc6Zmlyc3QtY2hpbGQnKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIHRoaXMuY2hhcnRPcHRpb25zU2VydmljZS5vcHRpb25zLmNhbGxvdXRMZWZ0TWFyZ2luICsgJywgMCknKVxuICAgICAgLmF0dHIoJ2QnLCBkMy5zdmcuYXJlYSgpKHRoaXMuY2hhcnRPcHRpb25zU2VydmljZS5vcHRpb25zLmNhbGxvdXRQYXRoRGF0YSkpO1xuXG4gICAgc2VsLnNlbGVjdCgndGV4dCcpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJyxcbiAgICAgICAgJ3RyYW5zbGF0ZSgnICsgKHRoaXMuY2hhcnRPcHRpb25zU2VydmljZS5vcHRpb25zLnlBeGlzV2lkdGggLSAyKSArICcsICdcbiAgICAgICAgKyAodGhpcy5jaGFydE9wdGlvbnNTZXJ2aWNlLm9wdGlvbnMuY2FsbG91dEhlaWdodCAvIDQpICsgJyknKVxuICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgLmF0dHIoJ3knLCAwKTtcbiAgfVxuXG4gIGFkZFhUb29sdGlwKHNlbDphbnkpIHtcbiAgICBzZWwuZW50ZXIoKVxuICAgICAgLnNlbGVjdCgnLnRvcC1oYW5kbGUnKVxuICAgICAgLnNlbGVjdCgndGV4dCcpXG4gICAgICAucmVtb3ZlKCk7XG5cbiAgICBzZWwuc2VsZWN0KCcuYm90dG9tLWhhbmRsZScpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24gKGQ6YW55KSB7XG4gICAgICAgIGxldCB4Om51bWJlciA9IHRoaXMucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScpLm1hdGNoKC90cmFuc2xhdGVcXCgoLiopLC8pLnBvcCgpO1xuICAgICAgICBpZiAoeCA8IDMwKSB7XG4gICAgICAgICAgcmV0dXJuICd0cmFuc2xhdGUoMzAsIDApJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gJ3RyYW5zbGF0ZSgwLCAwKSc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgbGV0IGNvbnRhaW5lcjphbnkgPSBzZWwuZW50ZXIoKVxuICAgICAgLnNlbGVjdCgnLmJvdHRvbS1oYW5kbGUnKTtcblxuICAgIGNvbnRhaW5lci5jbGFzc2VkKCdjYWxsb3V0JywgdHJ1ZSlcbiAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoLTMwLCAwKScpXG4gICAgICAuYXR0cignd2lkdGgnLCA2MClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCB0aGlzLmNoYXJ0T3B0aW9uc1NlcnZpY2Uub3B0aW9ucy54QXhpc0hlaWdodCk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCd5JywgdGhpcy5jaGFydE9wdGlvbnNTZXJ2aWNlLm9wdGlvbnMueEF4aXNIZWlnaHQgLyAyKVxuICAgICAgLnRleHQoKGQ6YW55KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYXJ0T3B0aW9uc1NlcnZpY2Uub3B0aW9ucy5kYXRlRm9ybWF0KGQueCk7XG4gICAgICB9KTtcblxuICAgIGNvbnRhaW5lciA9IG51bGw7XG4gIH1cbn1cbiJdfQ==
