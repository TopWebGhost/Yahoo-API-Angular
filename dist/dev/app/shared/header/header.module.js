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
var search_box_module_1 = require("../search-box/search-box.module");
var index_1 = require("./index");
var header_state_service_1 = require("./state/header-state.service");
var header_actions_1 = require("./state/header.actions");
var HeaderModule = (function () {
    function HeaderModule() {
    }
    return HeaderModule;
}());
HeaderModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            angular2_mdl_1.MdlModule,
            search_box_module_1.SearchBoxModule
        ],
        declarations: [
            index_1.HeaderComponent
        ],
        exports: [
            index_1.HeaderComponent
        ],
        providers: [
            header_state_service_1.HeaderStateService,
            header_actions_1.HeaderActions
        ]
    })
], HeaderModule);
exports.HeaderModule = HeaderModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsMENBQStDO0FBQy9DLDZDQUF5QztBQUN6QyxxRUFBa0U7QUFDbEUsaUNBQTBDO0FBQzFDLHFFQUFrRTtBQUNsRSx5REFBdUQ7QUFtQnZELElBQWEsWUFBWTtJQUF6QjtJQUNBLENBQUM7SUFBRCxtQkFBQztBQUFELENBREEsQUFDQyxJQUFBO0FBRFksWUFBWTtJQWpCeEIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AscUJBQVk7WUFDWix3QkFBUztZQUNULG1DQUFlO1NBQ2hCO1FBQ0QsWUFBWSxFQUFFO1lBQ1osdUJBQWU7U0FDaEI7UUFDRCxPQUFPLEVBQUU7WUFDUCx1QkFBZTtTQUNoQjtRQUNELFNBQVMsRUFBRTtZQUNULHlDQUFrQjtZQUNsQiw4QkFBYTtTQUNkO0tBQ0YsQ0FBQztHQUNXLFlBQVksQ0FDeEI7QUFEWSxvQ0FBWSIsImZpbGUiOiJhcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNZGxNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi1tZGwnO1xuaW1wb3J0IHsgU2VhcmNoQm94TW9kdWxlIH0gZnJvbSAnLi4vc2VhcmNoLWJveC9zZWFyY2gtYm94Lm1vZHVsZSc7XG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IEhlYWRlclN0YXRlU2VydmljZSB9IGZyb20gJy4vc3RhdGUvaGVhZGVyLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSGVhZGVyQWN0aW9ucyB9IGZyb20gJy4vc3RhdGUvaGVhZGVyLmFjdGlvbnMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1kbE1vZHVsZSxcbiAgICBTZWFyY2hCb3hNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgSGVhZGVyQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBIZWFkZXJDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgSGVhZGVyU3RhdGVTZXJ2aWNlLFxuICAgIEhlYWRlckFjdGlvbnNcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJNb2R1bGUge1xufVxuIl19
