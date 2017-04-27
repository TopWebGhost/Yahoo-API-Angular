"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var angular2_mdl_1 = require("angular2-mdl");
var index_1 = require("./index");
var NotificationModule = (function () {
    function NotificationModule() {
    }
    return NotificationModule;
}());
NotificationModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            angular2_mdl_1.MdlModule
        ],
        declarations: [
            index_1.NotificationComponent
        ],
        exports: [
            index_1.NotificationComponent
        ]
    })
], NotificationModule);
exports.NotificationModule = NotificationModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsMENBQStDO0FBQy9DLDZDQUF5QztBQUN6QyxpQ0FBZ0Q7QUFjaEQsSUFBYSxrQkFBa0I7SUFBL0I7SUFDQSxDQUFDO0lBQUQseUJBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLGtCQUFrQjtJQVo5QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxxQkFBWTtZQUNaLHdCQUFTO1NBQ1Y7UUFDRCxZQUFZLEVBQUU7WUFDWiw2QkFBcUI7U0FDdEI7UUFDRCxPQUFPLEVBQUU7WUFDUCw2QkFBcUI7U0FDdEI7S0FDRixDQUFDO0dBQ1csa0JBQWtCLENBQzlCO0FBRFksZ0RBQWtCIiwiZmlsZSI6ImFwcC9zaGFyZWQvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1kbE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLW1kbCc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2luZGV4JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNZGxNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTm90aWZpY2F0aW9uQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOb3RpZmljYXRpb25Db21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25Nb2R1bGUge1xufVxuIl19
