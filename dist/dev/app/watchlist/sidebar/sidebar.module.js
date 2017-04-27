"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("./index");
var shared_module_1 = require("../../shared/shared.module");
var search_module_1 = require("./search/search.module");
var edit_module_1 = require("./edit/edit.module");
var favorites_module_1 = require("./favorites/favorites.module");
var SidebarModule = (function () {
    function SidebarModule() {
    }
    return SidebarModule;
}());
SidebarModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule,
            shared_module_1.SharedModule,
            search_module_1.SearchModule,
            edit_module_1.EditModule,
            favorites_module_1.FavoritesModule
        ],
        declarations: [
            index_1.SidebarComponent
        ],
        exports: [
            index_1.SidebarComponent
        ],
        providers: [
            index_1.SidebarStateService,
            index_1.SidebarActions,
            index_1.FavoritesStateService,
            index_1.FavoritesActions,
            index_1.FavoritesApiService
        ]
    })
], SidebarModule);
exports.SidebarModule = SidebarModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3Qvc2lkZWJhci9zaWRlYmFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MsaUNBU2lCO0FBQ2pCLDREQUEwRDtBQUMxRCx3REFBc0Q7QUFDdEQsa0RBQWdEO0FBQ2hELGlFQUErRDtBQXdCL0QsSUFBYSxhQUFhO0lBQTFCO0lBQ0EsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSxhQUFhO0lBdEJ6QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxxQkFBWTtZQUNaLDRCQUFZO1lBQ1osNEJBQVk7WUFDWix3QkFBVTtZQUNWLGtDQUFlO1NBQ2hCO1FBQ0QsWUFBWSxFQUFFO1lBQ1osd0JBQWdCO1NBQ2pCO1FBQ0QsT0FBTyxFQUFFO1lBQ1Asd0JBQWdCO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsMkJBQW1CO1lBQ25CLHNCQUFjO1lBQ2QsNkJBQXFCO1lBQ3JCLHdCQUFnQjtZQUNoQiwyQkFBbUI7U0FDcEI7S0FDRixDQUFDO0dBQ1csYUFBYSxDQUN6QjtBQURZLHNDQUFhIiwiZmlsZSI6ImFwcC93YXRjaGxpc3Qvc2lkZWJhci9zaWRlYmFyLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgU2lkZWJhckNvbXBvbmVudCxcbiAgRWRpdENvbXBvbmVudCxcbiAgRmF2b3JpdGVzQ29tcG9uZW50LFxuICBTaWRlYmFyU3RhdGVTZXJ2aWNlLFxuICBTaWRlYmFyQWN0aW9ucyxcbiAgRmF2b3JpdGVzU3RhdGVTZXJ2aWNlLFxuICBGYXZvcml0ZXNBY3Rpb25zLFxuICBGYXZvcml0ZXNBcGlTZXJ2aWNlXG59IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgU2VhcmNoTW9kdWxlIH0gZnJvbSAnLi9zZWFyY2gvc2VhcmNoLm1vZHVsZSc7XG5pbXBvcnQgeyBFZGl0TW9kdWxlIH0gZnJvbSAnLi9lZGl0L2VkaXQubW9kdWxlJztcbmltcG9ydCB7IEZhdm9yaXRlc01vZHVsZSB9IGZyb20gJy4vZmF2b3JpdGVzL2Zhdm9yaXRlcy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIFNoYXJlZE1vZHVsZSxcbiAgICBTZWFyY2hNb2R1bGUsXG4gICAgRWRpdE1vZHVsZSxcbiAgICBGYXZvcml0ZXNNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU2lkZWJhckNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgU2lkZWJhckNvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBTaWRlYmFyU3RhdGVTZXJ2aWNlLFxuICAgIFNpZGViYXJBY3Rpb25zLFxuICAgIEZhdm9yaXRlc1N0YXRlU2VydmljZSxcbiAgICBGYXZvcml0ZXNBY3Rpb25zLFxuICAgIEZhdm9yaXRlc0FwaVNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyTW9kdWxlIHtcbn1cbiJdfQ==
