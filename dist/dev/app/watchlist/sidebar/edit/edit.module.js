"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng2_dragula_1 = require("ng2-dragula");
var index_1 = require("./index");
var shared_module_1 = require("../../../shared/shared.module");
var EditModule = (function () {
    function EditModule() {
    }
    return EditModule;
}());
EditModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            ng2_dragula_1.DragulaModule
        ],
        declarations: [
            index_1.EditComponent
        ],
        exports: [
            index_1.EditComponent
        ],
        providers: [
            index_1.EditService
        ]
    })
], EditModule);
exports.EditModule = EditModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3Qvc2lkZWJhci9lZGl0L2VkaXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDJDQUE0QztBQUM1QyxpQ0FHaUI7QUFDakIsK0RBQTZEO0FBaUI3RCxJQUFhLFVBQVU7SUFBdkI7SUFDQSxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLFVBQVU7SUFmdEIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsNEJBQVk7WUFDWiwyQkFBYTtTQUNkO1FBQ0QsWUFBWSxFQUFFO1lBQ1oscUJBQWE7U0FDZDtRQUNELE9BQU8sRUFBRTtZQUNQLHFCQUFhO1NBQ2Q7UUFDRCxTQUFTLEVBQUU7WUFDVCxtQkFBVztTQUNaO0tBQ0YsQ0FBQztHQUNXLFVBQVUsQ0FDdEI7QUFEWSxnQ0FBVSIsImZpbGUiOiJhcHAvd2F0Y2hsaXN0L3NpZGViYXIvZWRpdC9lZGl0Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEcmFndWxhTW9kdWxlIH0gZnJvbSAnbmcyLWRyYWd1bGEnO1xuaW1wb3J0IHtcbiAgRWRpdENvbXBvbmVudCxcbiAgRWRpdFNlcnZpY2Vcbn0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgRHJhZ3VsYU1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBFZGl0Q29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBFZGl0Q29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEVkaXRTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRWRpdE1vZHVsZSB7XG59XG4iXX0=
