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
exports.SearchInitialState = immutable_1.Record({
    data: [],
    loader: false,
    error: null
});
var SearchStateKeys = (function (_super) {
    __extends(SearchStateKeys, _super);
    function SearchStateKeys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SearchStateKeys;
}(index_1.CoreApiStateKeys));
exports.SearchStateKeys = SearchStateKeys;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3Qvc2lkZWJhci9zZWFyY2gvc3RhdGUvc2VhcmNoLnN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFtQztBQUNuQyxnREFHZ0M7QUFLbkIsUUFBQSxrQkFBa0IsR0FBRyxrQkFBTSxDQUFDO0lBQ3ZDLElBQUksRUFBRSxFQUFFO0lBQ1IsTUFBTSxFQUFFLEtBQUs7SUFDYixLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUMsQ0FBQztBQUVIO0lBQXFDLG1DQUFnQjtJQUFyRDs7SUFDQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQURBLEFBQ0MsQ0FEb0Msd0JBQWdCLEdBQ3BEO0FBRFksMENBQWUiLCJmaWxlIjoiYXBwL3dhdGNobGlzdC9zaWRlYmFyL3NlYXJjaC9zdGF0ZS9zZWFyY2guc3RhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWNvcmQgfSBmcm9tICdpbW11dGFibGUnO1xuaW1wb3J0IHtcbiAgQ29yZUFwaVN0YXRlSW50ZXJmYWNlLFxuICBDb3JlQXBpU3RhdGVLZXlzXG59IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvaW5kZXgnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaFN0YXRlSW50ZXJmYWNlIGV4dGVuZHMgQ29yZUFwaVN0YXRlSW50ZXJmYWNlIHtcbn1cblxuZXhwb3J0IGNvbnN0IFNlYXJjaEluaXRpYWxTdGF0ZSA9IFJlY29yZCh7XG4gIGRhdGE6IFtdLFxuICBsb2FkZXI6IGZhbHNlLFxuICBlcnJvcjogbnVsbFxufSk7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hTdGF0ZUtleXMgZXh0ZW5kcyBDb3JlQXBpU3RhdGVLZXlzIHtcbn1cbiJdfQ==
