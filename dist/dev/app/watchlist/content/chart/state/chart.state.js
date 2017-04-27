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
Object.defineProperty(exports, "__esModule", { value: true });
var immutable_1 = require("immutable");
var index_1 = require("../../../../core/index");
var ChartStateKeys = (function (_super) {
    __extends(ChartStateKeys, _super);
    function ChartStateKeys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChartStateKeys;
}(index_1.CoreApiStateKeys));
ChartStateKeys.Point = 'point';
ChartStateKeys.Range = 'range';
exports.ChartStateKeys = ChartStateKeys;
exports.ChartInitialState = immutable_1.Record({
    point: {},
    range: index_1.localStorageAdapter.getItem(ChartStateKeys.Range, index_1.Types.String) || '3mo',
    data: [],
    loader: false,
    error: null
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3QvY29udGVudC9jaGFydC9zdGF0ZS9jaGFydC5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBbUM7QUFDbkMsZ0RBS2dDO0FBaUJoQztJQUFvQyxrQ0FBZ0I7SUFBcEQ7O0lBR0EsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FIQSxBQUdDLENBSG1DLHdCQUFnQjtBQUMzQyxvQkFBSyxHQUFHLE9BQU8sQ0FBQztBQUNoQixvQkFBSyxHQUFHLE9BQU8sQ0FBQztBQUZaLHdDQUFjO0FBS2QsUUFBQSxpQkFBaUIsR0FBRyxrQkFBTSxDQUFDO0lBQ3RDLEtBQUssRUFBRSxFQUFFO0lBQ1QsS0FBSyxFQUFFLDJCQUFtQixDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLGFBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLO0lBQy9FLElBQUksRUFBRSxFQUFFO0lBQ1IsTUFBTSxFQUFFLEtBQUs7SUFDYixLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAvd2F0Y2hsaXN0L2NvbnRlbnQvY2hhcnQvc3RhdGUvY2hhcnQuc3RhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWNvcmQgfSBmcm9tICdpbW11dGFibGUnO1xuaW1wb3J0IHtcbiAgQ29yZUFwaVN0YXRlSW50ZXJmYWNlLFxuICBDb3JlQXBpU3RhdGVLZXlzLFxuICBsb2NhbFN0b3JhZ2VBZGFwdGVyLFxuICBUeXBlc1xufSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2luZGV4JztcblxuZXhwb3J0IGludGVyZmFjZSBDaGFydERhdGFJbnRlcmZhY2Uge1xuICB0aW1lc3RhbXA/Om51bWJlcjtcbiAgZGF0ZT86RGF0ZTtcbiAgY2xvc2U/Om51bWJlcjtcbiAgaGlnaD86bnVtYmVyO1xuICBsb3c/Om51bWJlcjtcbiAgb3Blbj86bnVtYmVyO1xuICB2b2x1bWU/Om51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFydFN0YXRlSW50ZXJmYWNlIGV4dGVuZHMgQ29yZUFwaVN0YXRlSW50ZXJmYWNlIHtcbiAgcG9pbnQ/OkNoYXJ0RGF0YUludGVyZmFjZTtcbiAgcmFuZ2U/OnN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIENoYXJ0U3RhdGVLZXlzIGV4dGVuZHMgQ29yZUFwaVN0YXRlS2V5cyB7XG4gIHN0YXRpYyBQb2ludCA9ICdwb2ludCc7XG4gIHN0YXRpYyBSYW5nZSA9ICdyYW5nZSc7XG59XG5cbmV4cG9ydCBjb25zdCBDaGFydEluaXRpYWxTdGF0ZSA9IFJlY29yZCh7XG4gIHBvaW50OiB7fSxcbiAgcmFuZ2U6IGxvY2FsU3RvcmFnZUFkYXB0ZXIuZ2V0SXRlbShDaGFydFN0YXRlS2V5cy5SYW5nZSwgVHlwZXMuU3RyaW5nKSB8fCAnM21vJyxcbiAgZGF0YTogW10sXG4gIGxvYWRlcjogZmFsc2UsXG4gIGVycm9yOiBudWxsXG59KTtcbiJdfQ==
