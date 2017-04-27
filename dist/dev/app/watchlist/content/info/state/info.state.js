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
exports.InfoInitialState = immutable_1.Record({
    data: [],
    loader: false,
    error: null
});
var InfoStateKeys = (function (_super) {
    __extends(InfoStateKeys, _super);
    function InfoStateKeys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InfoStateKeys;
}(index_1.CoreApiStateKeys));
exports.InfoStateKeys = InfoStateKeys;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3QvY29udGVudC9pbmZvL3N0YXRlL2luZm8uc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQW1DO0FBQ25DLGdEQUdnQztBQUtuQixRQUFBLGdCQUFnQixHQUFHLGtCQUFNLENBQUM7SUFDckMsSUFBSSxFQUFFLEVBQUU7SUFDUixNQUFNLEVBQUUsS0FBSztJQUNiLEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQyxDQUFDO0FBRUg7SUFBbUMsaUNBQWdCO0lBQW5EOztJQUNBLENBQUM7SUFBRCxvQkFBQztBQUFELENBREEsQUFDQyxDQURrQyx3QkFBZ0IsR0FDbEQ7QUFEWSxzQ0FBYSIsImZpbGUiOiJhcHAvd2F0Y2hsaXN0L2NvbnRlbnQvaW5mby9zdGF0ZS9pbmZvLnN0YXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVjb3JkIH0gZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCB7XG4gIENvcmVBcGlTdGF0ZUludGVyZmFjZSxcbiAgQ29yZUFwaVN0YXRlS2V5c1xufSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2luZGV4JztcblxuZXhwb3J0IGludGVyZmFjZSBJbmZvU3RhdGVJbnRlcmZhY2UgZXh0ZW5kcyBDb3JlQXBpU3RhdGVJbnRlcmZhY2Uge1xufVxuXG5leHBvcnQgY29uc3QgSW5mb0luaXRpYWxTdGF0ZSA9IFJlY29yZCh7XG4gIGRhdGE6IFtdLFxuICBsb2FkZXI6IGZhbHNlLFxuICBlcnJvcjogbnVsbFxufSk7XG5cbmV4cG9ydCBjbGFzcyBJbmZvU3RhdGVLZXlzIGV4dGVuZHMgQ29yZUFwaVN0YXRlS2V5cyB7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5mb0RhdGFJbnRlcmZhY2Uge1xuICBQcmV2aW91c0Nsb3NlPzpudW1iZXI7XG4gIERheXNMb3c/Om51bWJlcjtcbiAgWWVhckxvdz86bnVtYmVyO1xuICBNYXJrZXRDYXBpdGFsaXphdGlvbj86c3RyaW5nO1xuICBPbmV5clRhcmdldFByaWNlPzpudW1iZXI7XG4gIEVhcm5pbmdzU2hhcmU/OnN0cmluZztcbiAgT3Blbj86bnVtYmVyO1xuICBEYXlzSGlnaD86bnVtYmVyO1xuICBZZWFySGlnaD86bnVtYmVyO1xuICBWb2x1bWU/OnN0cmluZztcbiAgQXZlcmFnZURhaWx5Vm9sdW1lPzpzdHJpbmc7XG4gIERpdmlkZW5kU2hhcmU/OnN0cmluZztcbiAgTGFzdFRyYWRlUHJpY2VPbmx5PzpudW1iZXI7XG59XG4iXX0=
