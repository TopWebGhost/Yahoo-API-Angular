"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var immutable_1 = require("immutable");
var SidebarTypeEnum;
(function (SidebarTypeEnum) {
    SidebarTypeEnum[SidebarTypeEnum["List"] = 0] = "List";
    SidebarTypeEnum[SidebarTypeEnum["Edit"] = 1] = "Edit";
    SidebarTypeEnum[SidebarTypeEnum["Add"] = 2] = "Add";
})(SidebarTypeEnum = exports.SidebarTypeEnum || (exports.SidebarTypeEnum = {}));
exports.SidebarInitialState = immutable_1.Record({
    type: SidebarTypeEnum.List
});
var SidebarStateKeys = (function () {
    function SidebarStateKeys() {
    }
    return SidebarStateKeys;
}());
SidebarStateKeys.Type = 'type';
exports.SidebarStateKeys = SidebarStateKeys;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3Qvc2lkZWJhci9zdGF0ZS9zaWRlYmFyLnN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQXdDO0FBRXhDLElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtJQUN6QixxREFBSSxDQUFBO0lBQ0oscURBQUksQ0FBQTtJQUNKLG1EQUFHLENBQUE7QUFDTCxDQUFDLEVBSlcsZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUFJMUI7QUFNWSxRQUFBLG1CQUFtQixHQUFHLGtCQUFNLENBQUM7SUFDeEMsSUFBSSxFQUFFLGVBQWUsQ0FBQyxJQUFJO0NBQzNCLENBQUMsQ0FBQztBQUVIO0lBQUE7SUFFQSxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUZBLEFBRUM7QUFEUSxxQkFBSSxHQUFHLE1BQU0sQ0FBQztBQURWLDRDQUFnQiIsImZpbGUiOiJhcHAvd2F0Y2hsaXN0L3NpZGViYXIvc3RhdGUvc2lkZWJhci5zdGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcCwgUmVjb3JkIH0gZnJvbSAnaW1tdXRhYmxlJztcblxuZXhwb3J0IGVudW0gU2lkZWJhclR5cGVFbnVtIHtcbiAgTGlzdCxcbiAgRWRpdCxcbiAgQWRkXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2lkZWJhclN0YXRlSW50ZXJmYWNlIGV4dGVuZHMgTWFwPHN0cmluZyxhbnk+IHtcbiAgdHlwZT86U2lkZWJhclR5cGVFbnVtO1xufVxuXG5leHBvcnQgY29uc3QgU2lkZWJhckluaXRpYWxTdGF0ZSA9IFJlY29yZCh7XG4gIHR5cGU6IFNpZGViYXJUeXBlRW51bS5MaXN0XG59KTtcblxuZXhwb3J0IGNsYXNzIFNpZGViYXJTdGF0ZUtleXMge1xuICBzdGF0aWMgVHlwZSA9ICd0eXBlJztcbn1cbiJdfQ==
