"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SidebarActions = (function () {
    function SidebarActions() {
    }
    SidebarActions.prototype.changeType = function (type) {
        return {
            type: SidebarActions.CHANGE_TYPE,
            payload: type
        };
    };
    return SidebarActions;
}());
SidebarActions.CHANGE_TYPE = 'WATCHLIST:SIDEBAR:CHANGE_TYPE';
exports.SidebarActions = SidebarActions;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3Qvc2lkZWJhci9zdGF0ZS9zaWRlYmFyLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQTtJQUFBO0lBU0EsQ0FBQztJQU5DLG1DQUFVLEdBQVYsVUFBVyxJQUFvQjtRQUM3QixNQUFNLENBQUM7WUFDTCxJQUFJLEVBQUUsY0FBYyxDQUFDLFdBQVc7WUFDaEMsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDO0lBQ0osQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FUQSxBQVNDO0FBUlEsMEJBQVcsR0FBRywrQkFBK0IsQ0FBQztBQUQxQyx3Q0FBYyIsImZpbGUiOiJhcHAvd2F0Y2hsaXN0L3NpZGViYXIvc3RhdGUvc2lkZWJhci5hY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgU2lkZWJhclR5cGVFbnVtIH0gZnJvbSAnLi9zaWRlYmFyLnN0YXRlJztcblxuZXhwb3J0IGNsYXNzIFNpZGViYXJBY3Rpb25zIHtcbiAgc3RhdGljIENIQU5HRV9UWVBFID0gJ1dBVENITElTVDpTSURFQkFSOkNIQU5HRV9UWVBFJztcblxuICBjaGFuZ2VUeXBlKHR5cGU6U2lkZWJhclR5cGVFbnVtKTpBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBTaWRlYmFyQWN0aW9ucy5DSEFOR0VfVFlQRSxcbiAgICAgIHBheWxvYWQ6IHR5cGVcbiAgICB9O1xuICB9XG59XG4iXX0=
