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
var FavoritesModule = (function () {
    function FavoritesModule() {
    }
    return FavoritesModule;
}());
FavoritesModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule
        ],
        declarations: [
            index_1.FavoritesComponent
        ],
        exports: [
            index_1.FavoritesComponent
        ],
        providers: [
            index_1.FavoritesHighlightService
        ]
    })
], FavoritesModule);
exports.FavoritesModule = FavoritesModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRjaGxpc3Qvc2lkZWJhci9mYXZvcml0ZXMvZmF2b3JpdGVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QyxpQ0FHaUI7QUFDakIsK0RBQTZEO0FBZ0I3RCxJQUFhLGVBQWU7SUFBNUI7SUFDQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLGVBQWU7SUFkM0IsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsNEJBQVk7U0FDYjtRQUNELFlBQVksRUFBRTtZQUNaLDBCQUFrQjtTQUNuQjtRQUNELE9BQU8sRUFBRTtZQUNQLDBCQUFrQjtTQUNuQjtRQUNELFNBQVMsRUFBRTtZQUNULGlDQUF5QjtTQUMxQjtLQUNGLENBQUM7R0FDVyxlQUFlLENBQzNCO0FBRFksMENBQWUiLCJmaWxlIjoiYXBwL3dhdGNobGlzdC9zaWRlYmFyL2Zhdm9yaXRlcy9mYXZvcml0ZXMubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEZhdm9yaXRlc0NvbXBvbmVudCxcbiAgRmF2b3JpdGVzSGlnaGxpZ2h0U2VydmljZVxufSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFNoYXJlZE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBGYXZvcml0ZXNDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEZhdm9yaXRlc0NvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBGYXZvcml0ZXNIaWdobGlnaHRTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRmF2b3JpdGVzTW9kdWxlIHtcbn1cbiJdfQ==
