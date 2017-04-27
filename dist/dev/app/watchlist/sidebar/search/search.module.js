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
var shared_module_1 = require("../../../shared/shared.module");
var search_actions_1 = require("./state/search.actions");
var SearchModule = (function () {
    function SearchModule() {
    }
    return SearchModule;
}());
SearchModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule,
            shared_module_1.SharedModule
        ],
        declarations: [
            index_1.SearchComponent
        ],
        exports: [
            index_1.SearchComponent
        ],
        providers: [
            index_1.SearchStateService,
            search_actions_1.SearchActions,
            index_1.SearchApiService
        ]
    })
], SearchModule);
exports.SearchModule = SearchModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3Qvc2lkZWJhci9zZWFyY2gvc2VhcmNoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MsaUNBSWlCO0FBQ2pCLCtEQUE2RDtBQUM3RCx5REFBdUQ7QUFtQnZELElBQWEsWUFBWTtJQUF6QjtJQUNBLENBQUM7SUFBRCxtQkFBQztBQUFELENBREEsQUFDQyxJQUFBO0FBRFksWUFBWTtJQWpCeEIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AscUJBQVk7WUFDWiw0QkFBWTtTQUNiO1FBQ0QsWUFBWSxFQUFFO1lBQ1osdUJBQWU7U0FDaEI7UUFDRCxPQUFPLEVBQUU7WUFDUCx1QkFBZTtTQUNoQjtRQUNELFNBQVMsRUFBRTtZQUNULDBCQUFrQjtZQUNsQiw4QkFBYTtZQUNiLHdCQUFnQjtTQUNqQjtLQUNGLENBQUM7R0FDVyxZQUFZLENBQ3hCO0FBRFksb0NBQVkiLCJmaWxlIjoiYXBwL3dhdGNobGlzdC9zaWRlYmFyL3NlYXJjaC9zZWFyY2gubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBTZWFyY2hDb21wb25lbnQsXG4gIFNlYXJjaFN0YXRlU2VydmljZSxcbiAgU2VhcmNoQXBpU2VydmljZVxufSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IFNlYXJjaEFjdGlvbnMgfSBmcm9tICcuL3N0YXRlL3NlYXJjaC5hY3Rpb25zJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFJvdXRlck1vZHVsZSxcbiAgICBTaGFyZWRNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU2VhcmNoQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTZWFyY2hDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgU2VhcmNoU3RhdGVTZXJ2aWNlLFxuICAgIFNlYXJjaEFjdGlvbnMsXG4gICAgU2VhcmNoQXBpU2VydmljZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaE1vZHVsZSB7XG59XG4iXX0=
