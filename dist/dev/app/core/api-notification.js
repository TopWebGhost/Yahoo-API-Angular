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
var index_1 = require("../shared/index");
var subscriptions_1 = require("./subscriptions");
var CoreApiNotification = (function (_super) {
    __extends(CoreApiNotification, _super);
    function CoreApiNotification(state, apiService) {
        var _this = _super.call(this) || this;
        _this.state = state;
        _this.apiService = apiService;
        _this.subscriptions.push(state.loader$.subscribe(function (loader) { return _this.updateNotification(loader ? index_1.NotificationTypeEnum.Loader : index_1.NotificationTypeEnum.None); }));
        _this.subscriptions.push(state.error$.subscribe(function (error) { return _this.updateNotification(error ? index_1.NotificationTypeEnum.Error : index_1.NotificationTypeEnum.None, error); }));
        return _this;
    }
    CoreApiNotification.prototype.notificationAction = function (type) {
        if (type === NotificationActions.Reload) {
            this.apiService.reload();
        }
    };
    CoreApiNotification.prototype.updateNotification = function (type, value, button) {
        if (value === void 0) { value = null; }
        if (button === void 0) { button = null; }
        this.notificationType = type;
        if (type === index_1.NotificationTypeEnum.Error) {
            this.notification = value.value;
            this.button = {
                icon: 'refresh',
                text: 'Try Again',
                action: NotificationActions.Reload
            };
        }
        else {
            this.button = button;
            this.notification = value;
        }
    };
    return CoreApiNotification;
}(subscriptions_1.Subscriptions));
exports.CoreApiNotification = CoreApiNotification;
var NotificationActions = (function () {
    function NotificationActions() {
    }
    return NotificationActions;
}());
NotificationActions.Reload = 'reload';
exports.NotificationActions = NotificationActions;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL2FwaS1ub3RpZmljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEseUNBR3lCO0FBQ3pCLGlEQUFnRDtBQUdoRDtJQUF5Qyx1Q0FBYTtJQUtwRCw2QkFBb0IsS0FBeUIsRUFDekIsVUFBYztRQURsQyxZQUVFLGlCQUFPLFNBUVI7UUFWbUIsV0FBSyxHQUFMLEtBQUssQ0FBb0I7UUFDekIsZ0JBQVUsR0FBVixVQUFVLENBQUk7UUFFaEMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQzdDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sR0FBRyw0QkFBb0IsQ0FBQyxNQUFNLEdBQUcsNEJBQW9CLENBQUMsSUFBSSxDQUFDLEVBQXpGLENBQXlGLENBQ3BHLENBQUMsQ0FBQztRQUVILEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUM1QyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEdBQUcsNEJBQW9CLENBQUMsS0FBSyxHQUFHLDRCQUFvQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBOUYsQ0FBOEYsQ0FDeEcsQ0FBQyxDQUFDOztJQUNMLENBQUM7SUFFRCxnREFBa0IsR0FBbEIsVUFBbUIsSUFBVztRQUM1QixFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNCLENBQUM7SUFDSCxDQUFDO0lBRUQsZ0RBQWtCLEdBQWxCLFVBQW1CLElBQXlCLEVBQUUsS0FBZ0IsRUFBRSxNQUF5QztRQUEzRCxzQkFBQSxFQUFBLFlBQWdCO1FBQUUsdUJBQUEsRUFBQSxhQUF5QztRQUN2RyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyw0QkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHO2dCQUNaLElBQUksRUFBRSxTQUFTO2dCQUNmLElBQUksRUFBRSxXQUFXO2dCQUNqQixNQUFNLEVBQUUsbUJBQW1CLENBQUMsTUFBTTthQUNuQyxDQUFDO1FBQ0osQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQztJQUNILENBQUM7SUFDSCwwQkFBQztBQUFELENBckNBLEFBcUNDLENBckN3Qyw2QkFBYSxHQXFDckQ7QUFyQ1ksa0RBQW1CO0FBdUNoQztJQUFBO0lBRUEsQ0FBQztJQUFELDBCQUFDO0FBQUQsQ0FGQSxBQUVDO0FBRFEsMEJBQU0sR0FBRyxRQUFRLENBQUM7QUFEZCxrREFBbUIiLCJmaWxlIjoiYXBwL2NvcmUvYXBpLW5vdGlmaWNhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE5vdGlmaWNhdGlvblR5cGVFbnVtLFxuICBOb3RpZmljYXRpb25CdXR0b25JbnRlcmZhY2Vcbn0gZnJvbSAnLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbnMgfSBmcm9tICcuL3N1YnNjcmlwdGlvbnMnO1xuaW1wb3J0IHsgQ29yZUFwaVN0YXRlU2VydmljZSB9IGZyb20gJy4vc3RhdGUvYXBpLXN0YXRlLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgQ29yZUFwaU5vdGlmaWNhdGlvbiBleHRlbmRzIFN1YnNjcmlwdGlvbnMge1xuICBub3RpZmljYXRpb246c3RyaW5nO1xuICBub3RpZmljYXRpb25UeXBlOk5vdGlmaWNhdGlvblR5cGVFbnVtO1xuICBidXR0b246Tm90aWZpY2F0aW9uQnV0dG9uSW50ZXJmYWNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RhdGU6Q29yZUFwaVN0YXRlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhcGlTZXJ2aWNlOmFueSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goc3RhdGUubG9hZGVyJC5zdWJzY3JpYmUoXG4gICAgICBsb2FkZXIgPT4gdGhpcy51cGRhdGVOb3RpZmljYXRpb24obG9hZGVyID8gTm90aWZpY2F0aW9uVHlwZUVudW0uTG9hZGVyIDogTm90aWZpY2F0aW9uVHlwZUVudW0uTm9uZSlcbiAgICApKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHN0YXRlLmVycm9yJC5zdWJzY3JpYmUoXG4gICAgICBlcnJvciA9PiB0aGlzLnVwZGF0ZU5vdGlmaWNhdGlvbihlcnJvciA/IE5vdGlmaWNhdGlvblR5cGVFbnVtLkVycm9yIDogTm90aWZpY2F0aW9uVHlwZUVudW0uTm9uZSwgZXJyb3IpXG4gICAgKSk7XG4gIH1cblxuICBub3RpZmljYXRpb25BY3Rpb24odHlwZTpzdHJpbmcpIHtcbiAgICBpZiAodHlwZSA9PT0gTm90aWZpY2F0aW9uQWN0aW9ucy5SZWxvYWQpIHtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5yZWxvYWQoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVOb3RpZmljYXRpb24odHlwZTpOb3RpZmljYXRpb25UeXBlRW51bSwgdmFsdWU6YW55ID0gbnVsbCwgYnV0dG9uOk5vdGlmaWNhdGlvbkJ1dHRvbkludGVyZmFjZSA9IG51bGwpIHtcbiAgICB0aGlzLm5vdGlmaWNhdGlvblR5cGUgPSB0eXBlO1xuICAgIGlmICh0eXBlID09PSBOb3RpZmljYXRpb25UeXBlRW51bS5FcnJvcikge1xuICAgICAgdGhpcy5ub3RpZmljYXRpb24gPSB2YWx1ZS52YWx1ZTtcbiAgICAgIHRoaXMuYnV0dG9uID0ge1xuICAgICAgICBpY29uOiAncmVmcmVzaCcsXG4gICAgICAgIHRleHQ6ICdUcnkgQWdhaW4nLFxuICAgICAgICBhY3Rpb246IE5vdGlmaWNhdGlvbkFjdGlvbnMuUmVsb2FkXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJ1dHRvbiA9IGJ1dHRvbjtcbiAgICAgIHRoaXMubm90aWZpY2F0aW9uID0gdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25BY3Rpb25zIHtcbiAgc3RhdGljIFJlbG9hZCA9ICdyZWxvYWQnO1xufVxuIl19
