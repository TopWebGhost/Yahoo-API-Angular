"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var store_1 = require("@ngrx/store");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
var index_1 = require("./watchlist/index");
var index_2 = require("./watchlist/sidebar/index");
var index_3 = require("./state/index");
var index_4 = require("./shared/header/index");
var app_state_service_1 = require("./state/app-state.service");
var header_state_service_1 = require("./shared/header/state/header-state.service");
var shared_module_1 = require("./shared/shared.module");
var header_module_1 = require("./shared/header/header.module");
var watchlist_module_1 = require("./watchlist/watchlist.module");
var app_actions_1 = require("./state/app.actions");
var header_actions_1 = require("./shared/header/state/header.actions");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(app_routes_1.appRoutes, { useHash: true }),
            store_1.StoreModule.provideStore({
                app: index_3.appReducer,
                header: index_4.headerReducer,
                watchlist: index_1.watchlistReducer,
                favorites: index_2.favoritesReducer,
                sidebar: index_2.sidebarReducer,
                search: index_2.searchReducer,
                chart: index_1.chartReducer,
                news: index_1.newsReducer,
                info: index_1.infoReducer
            }),
            shared_module_1.SharedModule,
            header_module_1.HeaderModule,
            watchlist_module_1.WatchlistModule
        ],
        declarations: [app_component_1.AppComponent],
        providers: [
            app_state_service_1.AppStateService,
            app_actions_1.AppActions,
            header_state_service_1.HeaderStateService,
            header_actions_1.HeaderActions,
            {
                provide: common_1.APP_BASE_HREF,
                useValue: '/'
            }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDhEQUEwRDtBQUMxRCwwQ0FBZ0Q7QUFDaEQsMENBQStDO0FBQy9DLHNDQUEyQztBQUMzQyxxQ0FBMEM7QUFDMUMsaURBQStDO0FBQy9DLDJDQUF5QztBQUV6QywyQ0FLMkI7QUFHM0IsbURBSW1DO0FBRW5DLHVDQUEyQztBQUMzQywrQ0FBc0Q7QUFDdEQsK0RBQTREO0FBQzVELG1GQUFnRjtBQUVoRix3REFBc0Q7QUFDdEQsK0RBQTZEO0FBQzdELGlFQUErRDtBQUMvRCxtREFBaUQ7QUFDakQsdUVBQXFFO0FBb0NyRSxJQUFhLFNBQVM7SUFBdEI7SUFDQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLFNBQVM7SUFsQ3JCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLGdDQUFhO1lBQ2IsaUJBQVU7WUFDVixxQkFBWSxDQUFDLE9BQU8sQ0FBQyxzQkFBUyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBQyxDQUFDO1lBQ2hELG1CQUFXLENBQUMsWUFBWSxDQUFDO2dCQUN2QixHQUFHLEVBQUUsa0JBQVU7Z0JBQ2YsTUFBTSxFQUFFLHFCQUFhO2dCQUNyQixTQUFTLEVBQUUsd0JBQWdCO2dCQUMzQixTQUFTLEVBQUUsd0JBQWdCO2dCQUMzQixPQUFPLEVBQUUsc0JBQWM7Z0JBQ3ZCLE1BQU0sRUFBRSxxQkFBYTtnQkFDckIsS0FBSyxFQUFFLG9CQUFZO2dCQUNuQixJQUFJLEVBQUUsbUJBQVc7Z0JBQ2pCLElBQUksRUFBRSxtQkFBVzthQUNsQixDQUFDO1lBQ0YsNEJBQVk7WUFDWiw0QkFBWTtZQUNaLGtDQUFlO1NBQ2hCO1FBQ0QsWUFBWSxFQUFFLENBQUMsNEJBQVksQ0FBQztRQUM1QixTQUFTLEVBQUU7WUFDVCxtQ0FBZTtZQUNmLHdCQUFVO1lBQ1YseUNBQWtCO1lBQ2xCLDhCQUFhO1lBQ2I7Z0JBQ0UsT0FBTyxFQUFFLHNCQUFhO2dCQUN0QixRQUFRLEVBQUUsaUJBQWlCO2FBQzVCO1NBQ0Y7UUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO0tBQzFCLENBQUM7R0FFVyxTQUFTLENBQ3JCO0FBRFksOEJBQVMiLCJmaWxlIjoiYXBwL2FwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQVBQX0JBU0VfSFJFRiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgYXBwUm91dGVzIH0gZnJvbSAnLi9hcHAucm91dGVzJztcblxuaW1wb3J0IHtcbiAgd2F0Y2hsaXN0UmVkdWNlcixcbiAgY2hhcnRSZWR1Y2VyLFxuICBuZXdzUmVkdWNlcixcbiAgaW5mb1JlZHVjZXJcbn0gZnJvbSAnLi93YXRjaGxpc3QvaW5kZXgnO1xuXG5cbmltcG9ydCB7XG4gIGZhdm9yaXRlc1JlZHVjZXIsXG4gIHNlYXJjaFJlZHVjZXIsXG4gIHNpZGViYXJSZWR1Y2VyXG59IGZyb20gJy4vd2F0Y2hsaXN0L3NpZGViYXIvaW5kZXgnO1xuXG5pbXBvcnQgeyBhcHBSZWR1Y2VyIH0gZnJvbSAnLi9zdGF0ZS9pbmRleCc7XG5pbXBvcnQgeyBoZWFkZXJSZWR1Y2VyIH0gZnJvbSAnLi9zaGFyZWQvaGVhZGVyL2luZGV4JztcbmltcG9ydCB7IEFwcFN0YXRlU2VydmljZSB9IGZyb20gJy4vc3RhdGUvYXBwLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSGVhZGVyU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvaGVhZGVyL3N0YXRlL2hlYWRlci1zdGF0ZS5zZXJ2aWNlJztcblxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBIZWFkZXJNb2R1bGUgfSBmcm9tICcuL3NoYXJlZC9oZWFkZXIvaGVhZGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBXYXRjaGxpc3RNb2R1bGUgfSBmcm9tICcuL3dhdGNobGlzdC93YXRjaGxpc3QubW9kdWxlJztcbmltcG9ydCB7IEFwcEFjdGlvbnMgfSBmcm9tICcuL3N0YXRlL2FwcC5hY3Rpb25zJztcbmltcG9ydCB7IEhlYWRlckFjdGlvbnMgfSBmcm9tICcuL3NoYXJlZC9oZWFkZXIvc3RhdGUvaGVhZGVyLmFjdGlvbnMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBIdHRwTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JSb290KGFwcFJvdXRlcywge3VzZUhhc2g6IHRydWV9KSxcbiAgICBTdG9yZU1vZHVsZS5wcm92aWRlU3RvcmUoe1xuICAgICAgYXBwOiBhcHBSZWR1Y2VyLFxuICAgICAgaGVhZGVyOiBoZWFkZXJSZWR1Y2VyLFxuICAgICAgd2F0Y2hsaXN0OiB3YXRjaGxpc3RSZWR1Y2VyLFxuICAgICAgZmF2b3JpdGVzOiBmYXZvcml0ZXNSZWR1Y2VyLFxuICAgICAgc2lkZWJhcjogc2lkZWJhclJlZHVjZXIsXG4gICAgICBzZWFyY2g6IHNlYXJjaFJlZHVjZXIsXG4gICAgICBjaGFydDogY2hhcnRSZWR1Y2VyLFxuICAgICAgbmV3czogbmV3c1JlZHVjZXIsXG4gICAgICBpbmZvOiBpbmZvUmVkdWNlclxuICAgIH0pLFxuICAgIFNoYXJlZE1vZHVsZSxcbiAgICBIZWFkZXJNb2R1bGUsXG4gICAgV2F0Y2hsaXN0TW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0FwcENvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEFwcFN0YXRlU2VydmljZSxcbiAgICBBcHBBY3Rpb25zLFxuICAgIEhlYWRlclN0YXRlU2VydmljZSxcbiAgICBIZWFkZXJBY3Rpb25zLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFQUF9CQVNFX0hSRUYsXG4gICAgICB1c2VWYWx1ZTogJzwlPSBBUFBfQkFTRSAlPidcbiAgICB9XG4gIF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xufVxuIl19
