"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_module_1 = require("../../../shared/shared.module");
var index_1 = require("./index");
var info_actions_1 = require("./state/info.actions");
var InfoModule = (function () {
    function InfoModule() {
    }
    return InfoModule;
}());
InfoModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule
        ],
        declarations: [
            index_1.InfoComponent,
            index_1.RangeComponent
        ],
        exports: [
            index_1.InfoComponent
        ],
        providers: [
            index_1.InfoApiService,
            index_1.InfoService,
            index_1.InfoStateService,
            info_actions_1.InfoActions
        ]
    })
], InfoModule);
exports.InfoModule = InfoModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3QvY29udGVudC9pbmZvL2luZm8ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLCtEQUE2RDtBQUM3RCxpQ0FNaUI7QUFDakIscURBQW1EO0FBb0JuRCxJQUFhLFVBQVU7SUFBdkI7SUFDQSxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLFVBQVU7SUFsQnRCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLDRCQUFZO1NBQ2I7UUFDRCxZQUFZLEVBQUU7WUFDWixxQkFBYTtZQUNiLHNCQUFjO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDUCxxQkFBYTtTQUNkO1FBQ0QsU0FBUyxFQUFFO1lBQ1Qsc0JBQWM7WUFDZCxtQkFBVztZQUNYLHdCQUFnQjtZQUNoQiwwQkFBVztTQUNaO0tBQ0YsQ0FBQztHQUNXLFVBQVUsQ0FDdEI7QUFEWSxnQ0FBVSIsImZpbGUiOiJhcHAvd2F0Y2hsaXN0L2NvbnRlbnQvaW5mby9pbmZvLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQge1xuICBJbmZvQ29tcG9uZW50LFxuICBJbmZvQXBpU2VydmljZSxcbiAgSW5mb1NlcnZpY2UsXG4gIEluZm9TdGF0ZVNlcnZpY2UsXG4gIFJhbmdlQ29tcG9uZW50XG59IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgSW5mb0FjdGlvbnMgfSBmcm9tICcuL3N0YXRlL2luZm8uYWN0aW9ucyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTaGFyZWRNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgSW5mb0NvbXBvbmVudCxcbiAgICBSYW5nZUNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgSW5mb0NvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBJbmZvQXBpU2VydmljZSxcbiAgICBJbmZvU2VydmljZSxcbiAgICBJbmZvU3RhdGVTZXJ2aWNlLFxuICAgIEluZm9BY3Rpb25zXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSW5mb01vZHVsZSB7XG59XG4iXX0=
