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
var notification_module_1 = require("./notification/notification.module");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            angular2_mdl_1.MdlModule,
            common_1.CommonModule,
            notification_module_1.NotificationModule
        ],
        exports: [
            angular2_mdl_1.MdlModule,
            common_1.CommonModule,
            notification_module_1.NotificationModule
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MsNkNBQXlDO0FBQ3pDLDBFQUF3RTtBQWV4RSxJQUFhLFlBQVk7SUFBekI7SUFDQSxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLFlBQVk7SUFieEIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1Asd0JBQVM7WUFDVCxxQkFBWTtZQUNaLHdDQUFrQjtTQUNuQjtRQUNELE9BQU8sRUFBRTtZQUNQLHdCQUFTO1lBQ1QscUJBQVk7WUFDWix3Q0FBa0I7U0FDbkI7S0FDRixDQUFDO0dBRVcsWUFBWSxDQUN4QjtBQURZLG9DQUFZIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWRsTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItbWRsJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbk1vZHVsZSB9IGZyb20gJy4vbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWRsTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBOb3RpZmljYXRpb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE1kbE1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTm90aWZpY2F0aW9uTW9kdWxlXG4gIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge1xufVxuIl19
