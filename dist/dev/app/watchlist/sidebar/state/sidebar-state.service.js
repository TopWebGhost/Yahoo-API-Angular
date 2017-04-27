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
var index_1 = require("../../../core/index");
var index_2 = require("./index");
require("rxjs/add/operator/let");
var SidebarStateService = (function (_super) {
    __extends(SidebarStateService, _super);
    function SidebarStateService(store$, actions) {
        var _this = _super.call(this, store$) || this;
        _this.store$ = store$;
        _this.actions = actions;
        _this.type$ = store$.let(_this.getState('sidebar', index_2.SidebarStateKeys.Type));
        return _this;
    }
    SidebarStateService.prototype.changeType = function (type) {
        this.store$.dispatch(this.actions.changeType(type));
    };
    return SidebarStateService;
}(index_1.CoreStateService));
SidebarStateService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store,
        index_2.SidebarActions])
], SidebarStateService);
exports.SidebarStateService = SidebarStateService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3Qvc2lkZWJhci9zdGF0ZS9zaWRlYmFyLXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLHFDQUFvQztBQUVwQyw2Q0FBdUQ7QUFDdkQsaUNBSWlCO0FBQ2pCLGlDQUErQjtBQUcvQixJQUFhLG1CQUFtQjtJQUFTLHVDQUFnQjtJQUd2RCw2QkFBbUIsTUFBaUIsRUFDakIsT0FBdUI7UUFEMUMsWUFFRSxrQkFBTSxNQUFNLENBQUMsU0FFZDtRQUprQixZQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLGFBQU8sR0FBUCxPQUFPLENBQWdCO1FBRXhDLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSx3QkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOztJQUMzRSxDQUFDO0lBRUQsd0NBQVUsR0FBVixVQUFXLElBQW9CO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FaQSxBQVlDLENBWndDLHdCQUFnQixHQVl4RDtBQVpZLG1CQUFtQjtJQUQvQixpQkFBVSxFQUFFO3FDQUllLGFBQUs7UUFDSCxzQkFBYztHQUovQixtQkFBbUIsQ0FZL0I7QUFaWSxrREFBbUIiLCJmaWxlIjoiYXBwL3dhdGNobGlzdC9zaWRlYmFyL3N0YXRlL3NpZGViYXItc3RhdGUuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBDb3JlU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9pbmRleCc7XG5pbXBvcnQge1xuICBTaWRlYmFyVHlwZUVudW0sXG4gIFNpZGViYXJBY3Rpb25zLFxuICBTaWRlYmFyU3RhdGVLZXlzXG59IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9sZXQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2lkZWJhclN0YXRlU2VydmljZSBleHRlbmRzIENvcmVTdGF0ZVNlcnZpY2Uge1xuICB0eXBlJDpPYnNlcnZhYmxlPFNpZGViYXJUeXBlRW51bT47XG5cbiAgY29uc3RydWN0b3IocHVibGljIHN0b3JlJDpTdG9yZTxhbnk+LFxuICAgICAgICAgICAgICBwdWJsaWMgYWN0aW9uczogU2lkZWJhckFjdGlvbnMpIHtcbiAgICBzdXBlcihzdG9yZSQpO1xuICAgIHRoaXMudHlwZSQgPSBzdG9yZSQubGV0KHRoaXMuZ2V0U3RhdGUoJ3NpZGViYXInLCBTaWRlYmFyU3RhdGVLZXlzLlR5cGUpKTtcbiAgfVxuXG4gIGNoYW5nZVR5cGUodHlwZTpTaWRlYmFyVHlwZUVudW0pIHtcbiAgICB0aGlzLnN0b3JlJC5kaXNwYXRjaCh0aGlzLmFjdGlvbnMuY2hhbmdlVHlwZSh0eXBlKSk7XG4gIH1cbn1cbiJdfQ==
