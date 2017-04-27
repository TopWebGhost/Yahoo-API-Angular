"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("./index");
var shared_module_1 = require("../../../shared/shared.module");
var chart_actions_1 = require("./state/chart.actions");
var ChartModule = (function () {
    function ChartModule() {
    }
    return ChartModule;
}());
ChartModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule
        ],
        declarations: [
            index_1.ChartComponent,
            index_1.D3fcComponent,
            index_1.LegendComponent
        ],
        exports: [
            index_1.ChartComponent
        ],
        providers: [
            index_1.ChartApiService,
            index_1.ChartStateService,
            chart_actions_1.ChartActions
        ]
    })
], ChartModule);
exports.ChartModule = ChartModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3QvY29udGVudC9jaGFydC9jaGFydC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsaUNBTWlCO0FBQ2pCLCtEQUE2RDtBQUM3RCx1REFBcUQ7QUFvQnJELElBQWEsV0FBVztJQUF4QjtJQUNBLENBQUM7SUFBRCxrQkFBQztBQUFELENBREEsQUFDQyxJQUFBO0FBRFksV0FBVztJQWxCdkIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsNEJBQVk7U0FDYjtRQUNELFlBQVksRUFBRTtZQUNaLHNCQUFjO1lBQ2QscUJBQWE7WUFDYix1QkFBZTtTQUNoQjtRQUNELE9BQU8sRUFBRTtZQUNQLHNCQUFjO1NBQ2Y7UUFDRCxTQUFTLEVBQUU7WUFDVCx1QkFBZTtZQUNmLHlCQUFpQjtZQUNqQiw0QkFBWTtTQUNiO0tBQ0YsQ0FBQztHQUNXLFdBQVcsQ0FDdkI7QUFEWSxrQ0FBVyIsImZpbGUiOiJhcHAvd2F0Y2hsaXN0L2NvbnRlbnQvY2hhcnQvY2hhcnQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENoYXJ0Q29tcG9uZW50LFxuICBDaGFydEFwaVNlcnZpY2UsXG4gIENoYXJ0U3RhdGVTZXJ2aWNlLFxuICBEM2ZjQ29tcG9uZW50LFxuICBMZWdlbmRDb21wb25lbnRcbn0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGFydEFjdGlvbnMgfSBmcm9tICcuL3N0YXRlL2NoYXJ0LmFjdGlvbnMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU2hhcmVkTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENoYXJ0Q29tcG9uZW50LFxuICAgIEQzZmNDb21wb25lbnQsXG4gICAgTGVnZW5kQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDaGFydENvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBDaGFydEFwaVNlcnZpY2UsXG4gICAgQ2hhcnRTdGF0ZVNlcnZpY2UsXG4gICAgQ2hhcnRBY3Rpb25zXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRNb2R1bGUge1xufVxuIl19
