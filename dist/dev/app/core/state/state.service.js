"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
require("rxjs/add/operator/map");
require("rxjs/add/operator/distinctUntilChanged");
var CoreStateService = (function () {
    function CoreStateService(store$) {
        this.store$ = store$;
    }
    CoreStateService.prototype.getState = function (stateName, key) {
        return function (state$) { return state$
            .map(function (state) { return state[stateName][key]; })
            .distinctUntilChanged(); };
    };
    return CoreStateService;
}());
CoreStateService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store])
], CoreStateService);
exports.CoreStateService = CoreStateService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL3N0YXRlL3N0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MscUNBQW9DO0FBQ3BDLGlDQUErQjtBQUMvQixrREFBZ0Q7QUFHaEQsSUFBYSxnQkFBZ0I7SUFDM0IsMEJBQXNCLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFDdkMsQ0FBQztJQUVTLG1DQUFRLEdBQWxCLFVBQW1CLFNBQWdCLEVBQUUsR0FBVTtRQUM3QyxNQUFNLENBQUMsVUFBQyxNQUFVLElBQUssT0FBQSxNQUFNO2FBQzFCLEdBQUcsQ0FBQyxVQUFDLEtBQVMsSUFBSyxPQUFBLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBckIsQ0FBcUIsQ0FBQzthQUN6QyxvQkFBb0IsRUFBRSxFQUZGLENBRUUsQ0FBQztJQUM1QixDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLGdCQUFnQjtJQUQ1QixpQkFBVSxFQUFFO3FDQUVrQixhQUFLO0dBRHZCLGdCQUFnQixDQVM1QjtBQVRZLDRDQUFnQiIsImZpbGUiOiJhcHAvY29yZS9zdGF0ZS9zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2Rpc3RpbmN0VW50aWxDaGFuZ2VkJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvcmVTdGF0ZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmUkOlN0b3JlPGFueT4pIHtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTdGF0ZShzdGF0ZU5hbWU6c3RyaW5nLCBrZXk6c3RyaW5nKTphbnkge1xuICAgIHJldHVybiAoc3RhdGUkOmFueSkgPT4gc3RhdGUkXG4gICAgICAubWFwKChzdGF0ZTphbnkpID0+IHN0YXRlW3N0YXRlTmFtZV1ba2V5XSlcbiAgICAgIC5kaXN0aW5jdFVudGlsQ2hhbmdlZCgpO1xuICB9XG59XG4iXX0=
