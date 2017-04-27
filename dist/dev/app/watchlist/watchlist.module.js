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
var shared_module_1 = require("../shared/shared.module");
var index_1 = require("./index");
var content_module_1 = require("./content/content.module");
var sidebar_module_1 = require("./sidebar/sidebar.module");
var watchlist_state_service_1 = require("./state/watchlist-state.service");
var watchlist_actions_1 = require("./state/watchlist.actions");
var WatchlistModule = (function () {
    function WatchlistModule() {
    }
    return WatchlistModule;
}());
WatchlistModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(index_1.WatchlistRoutes),
            shared_module_1.SharedModule,
            content_module_1.ContentModule,
            sidebar_module_1.SidebarModule
        ],
        declarations: [
            index_1.WatchlistComponent
        ],
        providers: [
            watchlist_state_service_1.WatchlistStateService,
            watchlist_actions_1.WatchlistActions
        ]
    })
], WatchlistModule);
exports.WatchlistModule = WatchlistModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3Qvd2F0Y2hsaXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MseURBQXVEO0FBQ3ZELGlDQUdpQjtBQUVqQiwyREFBeUQ7QUFDekQsMkRBQXlEO0FBQ3pELDJFQUF3RTtBQUN4RSwrREFBNkQ7QUFpQjdELElBQWEsZUFBZTtJQUE1QjtJQUNBLENBQUM7SUFBRCxzQkFBQztBQUFELENBREEsQUFDQyxJQUFBO0FBRFksZUFBZTtJQWYzQixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxxQkFBWSxDQUFDLFFBQVEsQ0FBQyx1QkFBZSxDQUFDO1lBQ3RDLDRCQUFZO1lBQ1osOEJBQWE7WUFDYiw4QkFBYTtTQUNkO1FBQ0QsWUFBWSxFQUFFO1lBQ1osMEJBQWtCO1NBQ25CO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsK0NBQXFCO1lBQ3JCLG9DQUFnQjtTQUNqQjtLQUNGLENBQUM7R0FDVyxlQUFlLENBQzNCO0FBRFksMENBQWUiLCJmaWxlIjoiYXBwL3dhdGNobGlzdC93YXRjaGxpc3QubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQge1xuICBXYXRjaGxpc3RDb21wb25lbnQsXG4gIFdhdGNobGlzdFJvdXRlc1xufSBmcm9tICcuL2luZGV4JztcblxuaW1wb3J0IHsgQ29udGVudE1vZHVsZSB9IGZyb20gJy4vY29udGVudC9jb250ZW50Lm1vZHVsZSc7XG5pbXBvcnQgeyBTaWRlYmFyTW9kdWxlIH0gZnJvbSAnLi9zaWRlYmFyL3NpZGViYXIubW9kdWxlJztcbmltcG9ydCB7IFdhdGNobGlzdFN0YXRlU2VydmljZSB9IGZyb20gJy4vc3RhdGUvd2F0Y2hsaXN0LXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgV2F0Y2hsaXN0QWN0aW9ucyB9IGZyb20gJy4vc3RhdGUvd2F0Y2hsaXN0LmFjdGlvbnMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFdhdGNobGlzdFJvdXRlcyksXG4gICAgU2hhcmVkTW9kdWxlLFxuICAgIENvbnRlbnRNb2R1bGUsXG4gICAgU2lkZWJhck1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBXYXRjaGxpc3RDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgV2F0Y2hsaXN0U3RhdGVTZXJ2aWNlLFxuICAgIFdhdGNobGlzdEFjdGlvbnNcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBXYXRjaGxpc3RNb2R1bGUge1xufVxuIl19
