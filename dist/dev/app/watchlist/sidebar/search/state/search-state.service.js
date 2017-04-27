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
var store_1 = require("@ngrx/store");
var index_1 = require("../../../../core/index");
var index_2 = require("./index");
var SearchStateService = (function (_super) {
    __extends(SearchStateService, _super);
    function SearchStateService(store$, actions) {
        var _this = _super.call(this, store$, 'search', actions) || this;
        _this.store$ = store$;
        _this.actions = actions;
        return _this;
    }
    return SearchStateService;
}(index_1.CoreApiStateService));
SearchStateService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store,
        index_2.SearchActions])
], SearchStateService);
exports.SearchStateService = SearchStateService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3Qvc2lkZWJhci9zZWFyY2gvc3RhdGUvc2VhcmNoLXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLHFDQUFvQztBQUNwQyxnREFBNkQ7QUFDN0QsaUNBQXdDO0FBR3hDLElBQWEsa0JBQWtCO0lBQVMsc0NBQW1CO0lBQ3pELDRCQUFtQixNQUFpQixFQUNqQixPQUFzQjtRQUR6QyxZQUVFLGtCQUFNLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLFNBQ2pDO1FBSGtCLFlBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsYUFBTyxHQUFQLE9BQU8sQ0FBZTs7SUFFekMsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FMQSxBQUtDLENBTHVDLDJCQUFtQixHQUsxRDtBQUxZLGtCQUFrQjtJQUQ5QixpQkFBVSxFQUFFO3FDQUVlLGFBQUs7UUFDSCxxQkFBYTtHQUY5QixrQkFBa0IsQ0FLOUI7QUFMWSxnREFBa0IiLCJmaWxlIjoiYXBwL3dhdGNobGlzdC9zaWRlYmFyL3NlYXJjaC9zdGF0ZS9zZWFyY2gtc3RhdGUuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ29yZUFwaVN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvaW5kZXgnO1xuaW1wb3J0IHsgU2VhcmNoQWN0aW9ucyB9IGZyb20gJy4vaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VhcmNoU3RhdGVTZXJ2aWNlIGV4dGVuZHMgQ29yZUFwaVN0YXRlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzdG9yZSQ6U3RvcmU8YW55PixcbiAgICAgICAgICAgICAgcHVibGljIGFjdGlvbnM6IFNlYXJjaEFjdGlvbnMpIHtcbiAgICBzdXBlcihzdG9yZSQsICdzZWFyY2gnLCBhY3Rpb25zKTtcbiAgfVxufVxuIl19
