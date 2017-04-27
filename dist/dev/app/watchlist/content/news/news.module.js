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
var news_actions_1 = require("./state/news.actions");
var NewsModule = (function () {
    function NewsModule() {
    }
    return NewsModule;
}());
NewsModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule
        ],
        declarations: [
            index_1.NewsComponent
        ],
        exports: [
            index_1.NewsComponent
        ],
        providers: [
            index_1.NewsApiService,
            index_1.NewsStateService,
            news_actions_1.NewsActions
        ]
    })
], NewsModule);
exports.NewsModule = NewsModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3QvY29udGVudC9uZXdzL25ld3MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLGlDQUlpQjtBQUNqQiwrREFBNkQ7QUFDN0QscURBQW1EO0FBa0JuRCxJQUFhLFVBQVU7SUFBdkI7SUFDQSxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLFVBQVU7SUFoQnRCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLDRCQUFZO1NBQ2I7UUFDRCxZQUFZLEVBQUU7WUFDWixxQkFBYTtTQUNkO1FBQ0QsT0FBTyxFQUFFO1lBQ1AscUJBQWE7U0FDZDtRQUNELFNBQVMsRUFBRTtZQUNULHNCQUFjO1lBQ2Qsd0JBQWdCO1lBQ2hCLDBCQUFXO1NBQ1o7S0FDRixDQUFDO0dBQ1csVUFBVSxDQUN0QjtBQURZLGdDQUFVIiwiZmlsZSI6ImFwcC93YXRjaGxpc3QvY29udGVudC9uZXdzL25ld3MubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE5ld3NDb21wb25lbnQsXG4gIE5ld3NBcGlTZXJ2aWNlLFxuICBOZXdzU3RhdGVTZXJ2aWNlXG59IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgTmV3c0FjdGlvbnMgfSBmcm9tICcuL3N0YXRlL25ld3MuYWN0aW9ucyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTaGFyZWRNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmV3c0NvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTmV3c0NvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBOZXdzQXBpU2VydmljZSxcbiAgICBOZXdzU3RhdGVTZXJ2aWNlLFxuICAgIE5ld3NBY3Rpb25zXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmV3c01vZHVsZSB7XG59XG4iXX0=
