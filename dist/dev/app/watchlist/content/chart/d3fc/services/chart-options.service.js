"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ChartOptionsService = (function () {
    function ChartOptionsService() {
        this.options = {
            yTicks: 8,
            xTicks: 4,
            yAxisWidth: 55,
            yAxisLeftMargin: -3,
            xAxisHeight: 20,
            calloutLeftMargin: 8,
            calloutHeight: 16,
            dateFormat: d3.time.format('%b%e \'%y'),
            dayFormat: d3.time.format('%a %I:%M%p'),
            timeFormat: d3.time.format('%I:%M%p'),
            priceFormat: d3.format('.2f'),
            volumeFormat: function (value) {
                var prefix = d3.formatPrefix(value);
                return prefix.scale(value).toFixed(2) + prefix.symbol;
            }
        };
        this.options.calloutWidth = this.options.yAxisWidth - this.options.calloutLeftMargin;
        this.options.calloutPathData = this.getCalloutPathData(this.options.calloutWidth, this.options.calloutHeight);
    }
    ChartOptionsService.prototype.getDateFormat = function (range) {
        if (range === '1d') {
            return this.options.timeFormat;
        }
        else if (range === '5d') {
            return this.options.dayFormat;
        }
        else {
            return this.options.dateFormat;
        }
    };
    ChartOptionsService.prototype.getCalloutPathData = function (width, height) {
        var height2 = height / 2;
        return [
            [0, 0],
            [height2, -height2],
            [width, -height2],
            [width, height2],
            [height2, height2],
            [0, 0]
        ];
    };
    return ChartOptionsService;
}());
exports.ChartOptionsService = ChartOptionsService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3QvY29udGVudC9jaGFydC9kM2ZjL3NlcnZpY2VzL2NoYXJ0LW9wdGlvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBO0lBR0U7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsTUFBTSxFQUFFLENBQUM7WUFDVCxNQUFNLEVBQUUsQ0FBQztZQUNULFVBQVUsRUFBRSxFQUFFO1lBQ2QsZUFBZSxFQUFFLENBQUMsQ0FBQztZQUNuQixXQUFXLEVBQUUsRUFBRTtZQUNmLGlCQUFpQixFQUFFLENBQUM7WUFDcEIsYUFBYSxFQUFFLEVBQUU7WUFDakIsVUFBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztZQUN2QyxTQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1lBQ3ZDLFVBQVUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDckMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQzdCLFlBQVksRUFBRSxVQUFVLEtBQVk7Z0JBQ2xDLElBQUksTUFBTSxHQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ3hELENBQUM7U0FDRixDQUFDO1FBRUYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUNyRixJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoSCxDQUFDO0lBRUQsMkNBQWEsR0FBYixVQUFjLEtBQVk7UUFDeEIsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBQ2pDLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ2hDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUNqQyxDQUFDO0lBQ0gsQ0FBQztJQUVPLGdEQUFrQixHQUExQixVQUEyQixLQUFZLEVBQUUsTUFBYTtRQUNwRCxJQUFJLE9BQU8sR0FBVSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sQ0FBQztZQUNMLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNOLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ25CLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ2pCLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQztZQUNoQixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7WUFDbEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ1AsQ0FBQztJQUNKLENBQUM7SUFDSCwwQkFBQztBQUFELENBL0NBLEFBK0NDLElBQUE7QUEvQ1ksa0RBQW1CIiwiZmlsZSI6ImFwcC93YXRjaGxpc3QvY29udGVudC9jaGFydC9kM2ZjL3NlcnZpY2VzL2NoYXJ0LW9wdGlvbnMuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgbGV0IGQzOmFueTtcbmV4cG9ydCBjbGFzcyBDaGFydE9wdGlvbnNTZXJ2aWNlIHtcbiAgb3B0aW9uczphbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgeVRpY2tzOiA4LFxuICAgICAgeFRpY2tzOiA0LFxuICAgICAgeUF4aXNXaWR0aDogNTUsXG4gICAgICB5QXhpc0xlZnRNYXJnaW46IC0zLFxuICAgICAgeEF4aXNIZWlnaHQ6IDIwLFxuICAgICAgY2FsbG91dExlZnRNYXJnaW46IDgsXG4gICAgICBjYWxsb3V0SGVpZ2h0OiAxNixcbiAgICAgIGRhdGVGb3JtYXQ6IGQzLnRpbWUuZm9ybWF0KCclYiVlIFxcJyV5JyksXG4gICAgICBkYXlGb3JtYXQ6IGQzLnRpbWUuZm9ybWF0KCclYSAlSTolTSVwJyksXG4gICAgICB0aW1lRm9ybWF0OiBkMy50aW1lLmZvcm1hdCgnJUk6JU0lcCcpLFxuICAgICAgcHJpY2VGb3JtYXQ6IGQzLmZvcm1hdCgnLjJmJyksXG4gICAgICB2b2x1bWVGb3JtYXQ6IGZ1bmN0aW9uICh2YWx1ZTpudW1iZXIpIHtcbiAgICAgICAgbGV0IHByZWZpeDphbnkgPSBkMy5mb3JtYXRQcmVmaXgodmFsdWUpO1xuICAgICAgICByZXR1cm4gcHJlZml4LnNjYWxlKHZhbHVlKS50b0ZpeGVkKDIpICsgcHJlZml4LnN5bWJvbDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zLmNhbGxvdXRXaWR0aCA9IHRoaXMub3B0aW9ucy55QXhpc1dpZHRoIC0gdGhpcy5vcHRpb25zLmNhbGxvdXRMZWZ0TWFyZ2luO1xuICAgIHRoaXMub3B0aW9ucy5jYWxsb3V0UGF0aERhdGEgPSB0aGlzLmdldENhbGxvdXRQYXRoRGF0YSh0aGlzLm9wdGlvbnMuY2FsbG91dFdpZHRoLCB0aGlzLm9wdGlvbnMuY2FsbG91dEhlaWdodCk7XG4gIH1cblxuICBnZXREYXRlRm9ybWF0KHJhbmdlOnN0cmluZykge1xuICAgIGlmIChyYW5nZSA9PT0gJzFkJykge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy50aW1lRm9ybWF0O1xuICAgIH0gZWxzZSBpZiAocmFuZ2UgPT09ICc1ZCcpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZGF5Rm9ybWF0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRhdGVGb3JtYXQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDYWxsb3V0UGF0aERhdGEod2lkdGg6bnVtYmVyLCBoZWlnaHQ6bnVtYmVyKTphbnlbXSB7XG4gICAgbGV0IGhlaWdodDI6bnVtYmVyID0gaGVpZ2h0IC8gMjtcbiAgICByZXR1cm4gW1xuICAgICAgWzAsIDBdLFxuICAgICAgW2hlaWdodDIsIC1oZWlnaHQyXSxcbiAgICAgIFt3aWR0aCwgLWhlaWdodDJdLFxuICAgICAgW3dpZHRoLCBoZWlnaHQyXSxcbiAgICAgIFtoZWlnaHQyLCBoZWlnaHQyXSxcbiAgICAgIFswLCAwXVxuICAgIF07XG4gIH1cbn1cbiJdfQ==
