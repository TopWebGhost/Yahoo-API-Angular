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
var http_1 = require("@angular/http");
var loader_service_1 = require("./loader.service");
var index_1 = require("../state/index");
var CoreApiResponseService = (function (_super) {
    __extends(CoreApiResponseService, _super);
    function CoreApiResponseService(http, state) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.state = state;
        _this.errorCount = 0;
        return _this;
    }
    CoreApiResponseService.prototype.toggleLoader = function (loader) {
        if (!this.disableLoader) {
            this.state.fetchLoader(loader);
        }
    };
    CoreApiResponseService.prototype.complete = function (data) {
        this.disableLoader = false;
        if (data.length > 0) {
            this.errorCount = 0;
            this.toggleLoader(false);
            this.state.fetchFulfilled(data);
        }
        else {
            this.failed('Yahoo\'s API didn\'t return any data.');
        }
    };
    CoreApiResponseService.prototype.failed = function (error) {
        if (error === void 0) { error = null; }
        if (!this.disableLoader) {
            this.errorCount++;
            if (!error) {
                error = 'Yahoo\'s API was unable to load.';
                if (this.errorCount > 3) {
                    error = 'Yahoo\'s API failed multiple times.  Please wait a minute before trying again.';
                }
            }
            this.state.fetchError({
                value: error,
                date: String(Date.now()),
                count: this.errorCount
            });
        }
    };
    return CoreApiResponseService;
}(loader_service_1.LoaderService));
CoreApiResponseService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        index_1.CoreApiStateService])
], CoreApiResponseService);
exports.CoreApiResponseService = CoreApiResponseService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL3NlcnZpY2VzL2FwaS1yZXNwb25zZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBcUM7QUFDckMsbURBQWlEO0FBQ2pELHdDQUd3QjtBQUd4QixJQUFhLHNCQUFzQjtJQUFTLDBDQUFhO0lBSXZELGdDQUFzQixJQUFTLEVBQ1QsS0FBeUI7UUFEL0MsWUFFRSxrQkFBTSxJQUFJLENBQUMsU0FDWjtRQUhxQixVQUFJLEdBQUosSUFBSSxDQUFLO1FBQ1QsV0FBSyxHQUFMLEtBQUssQ0FBb0I7UUFIL0MsZ0JBQVUsR0FBVSxDQUFDLENBQUM7O0lBS3RCLENBQUM7SUFFRCw2Q0FBWSxHQUFaLFVBQWEsTUFBYztRQUN6QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLENBQUM7SUFDSCxDQUFDO0lBRUQseUNBQVEsR0FBUixVQUFTLElBQVU7UUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7SUFDSCxDQUFDO0lBRUQsdUNBQU0sR0FBTixVQUFPLEtBQW1CO1FBQW5CLHNCQUFBLEVBQUEsWUFBbUI7UUFDeEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFFbEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNYLEtBQUssR0FBRyxrQ0FBa0MsQ0FBQztnQkFDM0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN4QixLQUFLLEdBQUcsZ0ZBQWdGLENBQUM7Z0JBQzNGLENBQUM7WUFDSCxDQUFDO1lBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQWlCO2dCQUNwQyxLQUFLLEVBQUUsS0FBSztnQkFDWixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDeEIsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVO2FBQ3ZCLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQTVDQSxBQTRDQyxDQTVDMkMsOEJBQWEsR0E0Q3hEO0FBNUNZLHNCQUFzQjtJQURsQyxpQkFBVSxFQUFFO3FDQUtnQixXQUFJO1FBQ0gsMkJBQW1CO0dBTHBDLHNCQUFzQixDQTRDbEM7QUE1Q1ksd0RBQXNCIiwiZmlsZSI6ImFwcC9jb3JlL3NlcnZpY2VzL2FwaS1yZXNwb25zZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgTG9hZGVyU2VydmljZSB9IGZyb20gJy4vbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgQ29yZUFwaVN0YXRlU2VydmljZSxcbiAgRXJyb3JJbnRlcmZhY2Vcbn0gZnJvbSAnLi4vc3RhdGUvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29yZUFwaVJlc3BvbnNlU2VydmljZSBleHRlbmRzIExvYWRlclNlcnZpY2Uge1xuICBkaXNhYmxlTG9hZGVyOmJvb2xlYW47XG4gIGVycm9yQ291bnQ6bnVtYmVyID0gMDtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaHR0cDpIdHRwLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgc3RhdGU6Q29yZUFwaVN0YXRlU2VydmljZSkge1xuICAgIHN1cGVyKGh0dHApO1xuICB9XG5cbiAgdG9nZ2xlTG9hZGVyKGxvYWRlcjpib29sZWFuKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVMb2FkZXIpIHtcbiAgICAgIHRoaXMuc3RhdGUuZmV0Y2hMb2FkZXIobG9hZGVyKTtcbiAgICB9XG4gIH1cblxuICBjb21wbGV0ZShkYXRhOmFueVtdKSB7XG4gICAgdGhpcy5kaXNhYmxlTG9hZGVyID0gZmFsc2U7XG4gICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5lcnJvckNvdW50ID0gMDtcbiAgICAgIHRoaXMudG9nZ2xlTG9hZGVyKGZhbHNlKTtcbiAgICAgIHRoaXMuc3RhdGUuZmV0Y2hGdWxmaWxsZWQoZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmFpbGVkKCdZYWhvb1xcJ3MgQVBJIGRpZG5cXCd0IHJldHVybiBhbnkgZGF0YS4nKTtcbiAgICB9XG4gIH1cblxuICBmYWlsZWQoZXJyb3I6c3RyaW5nID0gbnVsbCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlTG9hZGVyKSB7XG4gICAgICB0aGlzLmVycm9yQ291bnQrKztcblxuICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICBlcnJvciA9ICdZYWhvb1xcJ3MgQVBJIHdhcyB1bmFibGUgdG8gbG9hZC4nO1xuICAgICAgICBpZiAodGhpcy5lcnJvckNvdW50ID4gMykge1xuICAgICAgICAgIGVycm9yID0gJ1lhaG9vXFwncyBBUEkgZmFpbGVkIG11bHRpcGxlIHRpbWVzLiAgUGxlYXNlIHdhaXQgYSBtaW51dGUgYmVmb3JlIHRyeWluZyBhZ2Fpbi4nO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RhdGUuZmV0Y2hFcnJvcig8RXJyb3JJbnRlcmZhY2U+e1xuICAgICAgICB2YWx1ZTogZXJyb3IsXG4gICAgICAgIGRhdGU6IFN0cmluZyhEYXRlLm5vdygpKSxcbiAgICAgICAgY291bnQ6IHRoaXMuZXJyb3JDb3VudFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=
