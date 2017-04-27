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
var FavoritesStateKeys = (function (_super) {
    __extends(FavoritesStateKeys, _super);
    function FavoritesStateKeys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FavoritesStateKeys;
}(index_1.CoreApiStateKeys));
FavoritesStateKeys.Order = 'order';
exports.FavoritesStateKeys = FavoritesStateKeys;
exports.FavoritesInitialState = immutable_1.Record({
    order: index_1.localStorageAdapter.getItem(FavoritesStateKeys.Order, index_1.Types.Array) || [],
    data: [],
    loader: false,
    error: null
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3Qvc2lkZWJhci9mYXZvcml0ZXMvc3RhdGUvZmF2b3JpdGVzLnN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFtQztBQUNuQyxnREFLZ0M7QUFNaEM7SUFBd0Msc0NBQWdCO0lBQXhEOztJQUVBLENBQUM7SUFBRCx5QkFBQztBQUFELENBRkEsQUFFQyxDQUZ1Qyx3QkFBZ0I7QUFDL0Msd0JBQUssR0FBRyxPQUFPLENBQUM7QUFEWixnREFBa0I7QUFJbEIsUUFBQSxxQkFBcUIsR0FBRyxrQkFBTSxDQUFDO0lBQzFDLEtBQUssRUFBRSwyQkFBbUIsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLGFBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO0lBQy9FLElBQUksRUFBRSxFQUFFO0lBQ1IsTUFBTSxFQUFFLEtBQUs7SUFDYixLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAvd2F0Y2hsaXN0L3NpZGViYXIvZmF2b3JpdGVzL3N0YXRlL2Zhdm9yaXRlcy5zdGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlY29yZCB9IGZyb20gJ2ltbXV0YWJsZSc7XG5pbXBvcnQge1xuICBDb3JlQXBpU3RhdGVJbnRlcmZhY2UsXG4gIENvcmVBcGlTdGF0ZUtleXMsXG4gIGxvY2FsU3RvcmFnZUFkYXB0ZXIsXG4gIFR5cGVzXG59IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvaW5kZXgnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZhdm9yaXRlc1N0YXRlSW50ZXJmYWNlIGV4dGVuZHMgQ29yZUFwaVN0YXRlSW50ZXJmYWNlIHtcbiAgb3JkZXI/OnN0cmluZ1tdO1xufVxuXG5leHBvcnQgY2xhc3MgRmF2b3JpdGVzU3RhdGVLZXlzIGV4dGVuZHMgQ29yZUFwaVN0YXRlS2V5cyB7XG4gIHN0YXRpYyBPcmRlciA9ICdvcmRlcic7XG59XG5cbmV4cG9ydCBjb25zdCBGYXZvcml0ZXNJbml0aWFsU3RhdGUgPSBSZWNvcmQoe1xuICBvcmRlcjogbG9jYWxTdG9yYWdlQWRhcHRlci5nZXRJdGVtKEZhdm9yaXRlc1N0YXRlS2V5cy5PcmRlciwgVHlwZXMuQXJyYXkpIHx8IFtdLFxuICBkYXRhOiBbXSxcbiAgbG9hZGVyOiBmYWxzZSxcbiAgZXJyb3I6IG51bGxcbn0pO1xuIl19
